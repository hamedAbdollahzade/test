import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // می‌توانید استایل‌های خود را در اینجا بنویسید

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // گره DOM برای پرتال
  );
};

export default Modal;
