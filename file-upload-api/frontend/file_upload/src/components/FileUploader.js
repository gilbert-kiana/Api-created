import React, { useRef } from "react";

const FileUploader = ({ onFileSelectError, onfileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 1) {
      onFileSelectError({ error: "File Size Cannot exceed more than 1mb" });
    } else onfileSelectSuccess(file);
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
