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
    <div className="max-w-xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-2xl border">

      <h2 className="text-lg font-semibold mb-4 text-center">
        Upload Excel / CSV File
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">


        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full sm:w-auto text-sm border border-gray-300 rounded-lg p-2 cursor-pointer file:bg-blue-600 file:text-white file:border-0 file:px-3 file:py-1 file:rounded file:cursor-pointer hover:file:bg-blue-700"
        />

       
        <button
          onClick={handleUpload}
          disabled={!file}
          className={`w-full sm:w-auto px-5 py-2 rounded-lg font-medium transition 
            ${
              file
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
        >
          Upload
        </button>
      </div>

      
      {file && (
        <p className="text-sm text-gray-600 mt-3 text-center">
          Selected: <span className="font-medium">{file.name}</span>
        </p>
      )}
    </div>
  );
};

export default FileUpload;

