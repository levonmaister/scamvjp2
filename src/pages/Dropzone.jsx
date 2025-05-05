import { useState } from 'react';
import React from 'react';
import dropIcon from './cloud-computing.png';
import './dropbox.css';

const MyDropzone = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files;
    console.log(file);
  };

  return (
    <div className="dropzone-container">
      <label className="dropzone">
        <img className="dropzone-icon" src={dropIcon} alt="Upload Icon" />
        <p><strong>Valitse kuva</strong> tai dräggää se tänne.</p>
        <input
          type="file"
          className="file-input"
          onChange={handleFileUpload}
        />
      </label>
    </div>
  );
};

export default MyDropzone;
