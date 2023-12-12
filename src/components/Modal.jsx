import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="float-right text-lg font-bold"
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
