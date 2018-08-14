import React from 'react';
import Modal from "react-modal";

const OptionModal = (props) => {
    return(
        <Modal
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
        isOpen={!!(props.selectedOption)} contentLabel="Selected Option!">
            <h3 className="modal__title">Chuck Norris would do:</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            
            <button className="button" onClick={props.handleCloseModal}>Okay</button>
        </Modal>
    )
}

export default OptionModal