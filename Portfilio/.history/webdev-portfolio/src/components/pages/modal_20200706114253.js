import Form from './Form'

<button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#Employee1"
>
  More Info
</button>

<div class="modal" id="Employee1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Employee Info</h4>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>

        <Form />
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-danger"
          data-dismiss="modal"
        >
         Close
        </button>
      </div>
    </div>
  </div>
</div>