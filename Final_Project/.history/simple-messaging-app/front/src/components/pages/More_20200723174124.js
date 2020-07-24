import React from "react";
import "jquery";
import "react-bootstrap";
import "react-modal";
import { Modal, Button } from "bootstrap";

const Moreinfo = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = ()=> setShow(true);

    return (
    <div id='modal'>
  
  
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

$document.ready(function () {
  $"modal".modal();
});

export default Moreinfo;
