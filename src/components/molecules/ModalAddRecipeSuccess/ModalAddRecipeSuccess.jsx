// ModalAddRecipeSuccess.js
import React from "react";
import Modal from "react-modal";
import ButtonHome from "../../atoms/ButtonHome/ButtonHome";

// Make sure to set your app element for screen readers
Modal.setAppElement("#root");

const customStyles = {
    content: {
        width: "300px", // Set the width to your desired size
        height: "200px", // Set the height to your desired size
        top: "40%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#333",
        color: "#fff",
        zIndex: 9999,
    },
    overlay: {
        backgroundColor: "rgb(255,255,255, 0.4)",
        zIndex: 9999,
    },
};

const ModalAddRecipeSuccess = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Recipe Added Successfully"
            style={customStyles}
        >
            <h2>Recipe Added Successfully</h2>
            <p style={{ textAlign: "center" }}>Your recipe has been added!</p>
            <ButtonHome />
        </Modal>
    );
};

export default ModalAddRecipeSuccess;
