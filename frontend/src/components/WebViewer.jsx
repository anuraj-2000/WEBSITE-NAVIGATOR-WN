
const WebViewer = ({ url }) => {
  if (!url) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No URLs loaded
      </p>
    );
  }

  return (
    <>
      <p className="text-sm text-gray-500 text-center p-2">
        If the site doesn’t load, click "Open in new tab"
      </p>

      <div className="mt-4 border rounded overflow-hidden h-[500px] flex flex-col">

        <div className="p-2 text-center bg-gray-100 border-b">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Open in new tab
          </a>
        </div>

        <iframe
          src={url}
          title="website"
          className="w-full h-full"
        />

      </div>
    </>
  );
};

export default WebViewer;