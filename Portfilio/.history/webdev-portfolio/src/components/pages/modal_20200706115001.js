import Form from "./Form";

const Modal = () => {
  return (
    <div className='modal' id='#modal'>
      <div className='modal-header'>
        <h4 className='modal-title'>Send an email</h4>
        <button className='close'></button>
      </div>
      <div>
        <Form />
      </div>
      <div className='footer'>
        <button className='btn btn-danger'>Close</button>
      </div>
    </div>
  );
};

export default Modal;
