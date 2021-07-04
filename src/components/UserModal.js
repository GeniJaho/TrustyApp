
const UserModal = () => {
    return (
        <Modal>
            <h1 className='modal-h1'>Edit {patchTitle}</h1>
            <input value={patchInputValue} onChange={text => setPatchInputValue(text)} placeholder={placeholder} className='modal-input' type="text" /><br />
            <button className='modal-close' onClick={() => setModal(false)}>Schließen</button>
            <button className='modal-save' onClick={() => patchFunction()}>Änderungen speichern</button>
        </Modal>
    );
};

export default UserModal;
