import React, { useEffect } from "react";

import "./modalStyles.css";

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="modal">{message}</div>;
};

export default Modal;
