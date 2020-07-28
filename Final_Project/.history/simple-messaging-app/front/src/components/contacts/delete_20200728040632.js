import React from "react";

const onDelete = () => {};

const Delete = () => {
  return (
    <div id='edit,delete'>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Delete;
