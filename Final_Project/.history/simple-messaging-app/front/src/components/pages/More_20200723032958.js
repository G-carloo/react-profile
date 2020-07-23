import React from "react";
import modal from "react-modal";

const Moreinfo = () => {
  return (
    <div id='modal'>
      <modal.dialog>
        <modal.header closeButton>
          <modal.title>Modal title</modal.title>
        </modal.header>

        <modal.body>
          <p>Modal body text goes here.</p>
        </modal.body>

        <modal.footer>
          <button variant='secondary'>Close</button>
          <button variant='primary'>Save changes</button>
        </modal.footer>
      </modal.dialog>
    </div>
  );
};
export default Moreinfo;
