import Form from "./Form";

const Modal = () => {
  return (
    <div className='modal' id='Employee1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Employee Info</h4>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
            ></button>
          </div>

          <Form />
          <div className='footer'>
            <button
              type='button'
              className='btn btn-danger'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
