import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose, product }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="modal-content">
            <div className="modal-content1">
            <img src={product.img} alt="Image" />
            </div>
            <div>
                <p>{product.para}</p>
          <h2>{product.heading}</h2>
          <p>${product.price}.00</p>
          <button onClick={onClose}>Close</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Modal;