const WebViewer = ({ url }) => {
  if (!url) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg">
        🚫
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 bg-white shadow-lg rounded-2xl border overflow-hidden">

      
      <div className="bg-yellow-50 text-yellow-700 text-sm text-center p-2 border-b">
        If the site doesn’t load, click "Open in new tab"
      </div>

      
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
        <p className="text-sm text-gray-600 truncate max-w-[70%]">
          {url}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          Open in New tab ↗
        </a>
      </div>

      {/* Iframe Container */}
      <div className="h-[500px]">
        <iframe
          src={url}
          title="website"
          className="w-full h-full"
        />
      </div>

    </div>
  );
};

export default WebViewer;

