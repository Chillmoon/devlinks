import { useContext, useState } from "react";

import { ProfileContext } from "../../../contex/ProfileContex";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import Modal from "../../../components/Modal";

import "./profileDetailsFormStyles.css";

const ProfileDetailsForm = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const isValidSize = selectedFile.size <= 1024 * 1024;
      const isValidType = ["image/png", "image/jpeg", "image/bmp"].includes(
        selectedFile.type
      );

      if (!isValidSize || !isValidType) {
        setErrorMessage(
          "Image must be below 1024x1024px. Use PNG, JPG or BMP format."
        );
        setModalVisible(true);
        setProfile((prevProfile) => ({ ...prevProfile, profilePicture: "" }));
      } else {
        setErrorMessage("");
        const imageUrl = URL.createObjectURL(selectedFile);
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: imageUrl,
        }));
      }
    }
  };

  const handleClick = () => {
    document.getElementById("upload-image-input").click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    // No action taken on save only modal shows
    e.preventDefault();
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 3000);
  };

  return (
    <form className="page-block-container">
      <h2 className="title">Profile Details</h2>
      <p className="description">
        Add your details to create a personal touch to your profile
      </p>
      <div className="container">
        <div className="profile-section">
          <div className="profile-wrapper">
            <label className="profile-label">Profile picture</label>
            <div className="upload-section">
              <div className="upload-container">
                {profile.profilePicture && (
                  <div
                    className="background-layer"
                    style={{
                      backgroundImage: `url(${profile.profilePicture})`,
                    }}
                  />
                )}
                <input
                  id="upload-image-input"
                  name="upload-image"
                  type="file"
                  className="file-input"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <div className="upload-label-wrapper" onClick={handleClick}>
                  <img
                    src="/icons/image-icon.png"
                    alt="Change"
                    className="upload-label-icon"
                  />
                  <span className="upload-label">
                    {profile.profilePicture ? "Change image" : "Upload image"}
                  </span>
                </div>
              </div>
              <p className="file-input-description">
                Image must be below 1024x1024px. <br />
                Use PNG, JPG or BMP format.
              </p>
            </div>
          </div>
        </div>
        <div className="profile-section">
          <div className="input-wrapper">
            <div className="profile-label">First name*</div>
            <CustomInput
              name="firstName"
              value={profile.firstName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <div className="profile-label">Last name*</div>
            <CustomInput
              name="lastName"
              value={profile.lastName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <div className="profile-label">Email</div>
            <CustomInput
              name="email"
              value={profile.email || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
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
          message={
            errorMessage || (
              <>
                <img
                  src="/icons/save-icon.png"
                  alt="save"
                  className="save-icon"
                />
                Your changes have been successfully saved!
              </>
            )
          }
          onClose={() => setModalVisible(false)}
        />
      )}
    </form>
  );
};

export default ProfileDetailsForm;
