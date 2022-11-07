import React, { useState } from "react";
import FileUploader from "./FileUploader";

const Forminput = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("file", selectedFile);

    console.log(...formData);
  };

  return (
    <div>
      <form className="mainform">
        <title>Upload File</title>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <FileUploader
          onfileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
        <button type="submit" onClick={submitForm}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default Forminput;
