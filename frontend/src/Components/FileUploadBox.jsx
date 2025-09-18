import React, { useState } from "react";
import './FileUpload.css';


export default function FileUploadBox() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      alert(`You dropped ${files.length} file(s).`);
      // 👉 handle file upload here
    }
  };

  const handleBrowse = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        alert(`You selected ${files.length} file(s).`);
        // 👉 handle file upload here
      }
    };
    input.click();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleBrowse}
      className={`upload-box ${isDragging ? "dragging" : ""}`}
     
    >
      <p>
        Drag & drop your file here or <span>browse</span>
      </p>

      
    </div>
  );
}
