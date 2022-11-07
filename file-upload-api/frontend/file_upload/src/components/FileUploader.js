import React, { useRef } from "react";

const FileUploader = ({ onFileSelectError, onFileSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024) {
      onFileSelectError({ error: "File Size Cannot exceed more than 1mb" });
    } else onFileSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
      ></button>
    </div>
  );
};

export default FileUploader;
