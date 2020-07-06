import Form from './Form'

<button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#Employee1"
>
  More Info
</button>

<div className="modal" id="Employee1">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Employee Info</h4>
        <button type="button" className="close" data-dismiss="modal">
          &times;
        </button>
      </div>

        <Form />
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-dismiss="modal"
        >
         Close
        </button>
      </div>
    </div>
  </div>
</div>