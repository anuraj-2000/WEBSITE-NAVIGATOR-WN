
import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://website-navigator-wn.onrender.com/upload",
        formData,
        {
          timeout: 15000,
        }
      );

  
      if (!res.data.urls || res.data.urls.length === 0) {
        alert("No URLs found in the file");
        return;
      }

      onUpload(res.data.urls);
      setFile(null);

    } catch (err) {
      console.error(err);


      if (err.code === "ECONNABORTED") {
        alert("Server is taking too long. Please try again.");
      } else {
        alert("Upload failed. Please try again.");
      }
    } finally {
      setLoading(false); 
    }
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
          disabled={!file || loading}
          className={`cursor-pointer w-full sm:w-auto px-5 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition 
            ${
              file && !loading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Uploading..." : "Upload"}
        </button>

      </div>

      {loading && (
        <p className="text-center text-sm text-gray-500 mt-3">
          This may take a few seconds
        </p>
      )}

    </div>
  );
};

export default FileUpload;