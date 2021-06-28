import React from 'react';
import Modal from 'react-modal';

const UserModal = () => {
    return (
        <Modal>
            <h1 className='modal-h1'>Edit {patchTitle}</h1>
            <input value={patchInputValue} onChange={text => setPatchInputValue(text)} placeholder={placeholder} className='modal-input' type="text" /><br />
            <button className='modal-close' onClick={() => setModal(false)}>Close</button>
            <button className='modal-save' onClick={() => patchFunction()}>Save Changes</button>
        </Modal>
    );
};

export default UserModal;