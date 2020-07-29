import React, { Component } from "react";

class Upload extends Component {
  selectafile = (file) => {
    console.log(file);
  };
  render() {
    return (
      <div id='Up' className='cm'>
        <h2 id='Up'>Upload Something</h2>
        {/* This should allow you to upload files for your contacts to view like a status, like with bbm */}
        <input type='file' onChange={this.selectafile} />
      </div>
    );
  }
}

export default Upload;
