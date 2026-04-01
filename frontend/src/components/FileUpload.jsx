import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/upload",
      formData
    );

    onUpload(res.data.urls);
  };

  return (
    <div className="flex gap-2 mb-4 justify-center items-center">

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded"
      />

      <button
        onClick={handleUpload}
        disabled={!file}
        className={`px-4 py-2 rounded text-white
          ${
            file
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
      >
        Upload
      </button>

    </div>
  );
};

export default FileUpload;