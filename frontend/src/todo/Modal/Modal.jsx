import React from 'react'
import '../Todo.css'
import NoteArea from '../NoteArea/NoteArea'

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onclick={onClose}>


            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <NoteArea />
            </div>

        </div>
    )
}

export default Modal
