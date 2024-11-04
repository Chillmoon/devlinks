import React, { useContext, useState } from "react";

import { ProfileContext } from "../../../contex/ProfileContex";

import CustomButton from "../../../components/CustomButton";
import LinkCard from "../../../components/LinkCard";
import Modal from "../../../components/Modal";

import "./customizeLinksBlockStyles.css";

const platforms = [
  "YouTube",
  "GitHub",
  "LinkedIn",
  "Facebook",
  "StackOverflow",
];

const CustomizeLinksBlock = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDragStart = (index) => setDraggedIndex(index);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (index) => {
    if (draggedIndex === null) return;
    const newLinks = [...profile.links];
    const [draggedItem] = newLinks.splice(draggedIndex, 1);
    newLinks.splice(index, 0, draggedItem);
    setProfile((prevProfile) => ({ ...prevProfile, links: newLinks }));
    setDraggedIndex(null);
  };

  const updateItem = (index, key, value) => {
    const updatedLinks = profile.links.map((item, i) =>
      i === index ? { ...item, [key]: value } : item
    );
    setProfile((prevProfile) => ({ ...prevProfile, links: updatedLinks }));
  };

  const getNextAvailablePlatform = () => {
    const usedPlatforms = new Set(profile.links.map((link) => link.platform));
    for (const platform of platforms) {
      if (!usedPlatforms.has(platform)) {
        return platform;
      }
    }
    return null;
  };

  const handleAddItem = () => {
    if (profile.links.length < 5) {
      const nextPlatform = getNextAvailablePlatform();
      if (nextPlatform) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          links: [...prevProfile.links, { platform: nextPlatform, url: "" }],
        }));
      }
    }
  };

  const handleRemoveItem = (index) => {
    const updatedLinks = profile.links.filter((_, i) => i !== index);
    setProfile((prevProfile) => ({ ...prevProfile, links: updatedLinks }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 3000);
  };

  return (
    <div className="page-block-container">
      <h2 className="title">Customize your links</h2>
      <p className="description">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      {profile.links.length < 5 && (
        <CustomButton
          onClick={handleAddItem}
          text="+ Add new link"
          variant="button-outlined"
          style={{ width: "100%" }}
        />
      )}

      <ul className="list-wrapper">
        {profile.links.map((item, index) => (
          <LinkCard
            key={index}
            index={index}
            item={item}
            platforms={platforms}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onPlatformChange={(index, value) =>
              updateItem(index, "platform", value)
            }
            onLinkChange={(index, value) => updateItem(index, "url", value)}
            onRemove={handleRemoveItem}
          />
        ))}
      </ul>
      <div className="page-footer">
        <hr className="separator" />
        <CustomButton
          variant="button-filled"
          text="Save"
          onClick={handleSave}
        />
      </div>
      {isModalVisible && (
        <Modal
          message="Your changes have been successfully saved!"
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default CustomizeLinksBlock;
