const NavButtons = ({ currentIndex, total, onNext, onPrev }) => {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === total - 1 || total === 0;

  return (
    <div className="flex justify-center items-center gap-4 mt-4">

      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className={`w-28 py-2 rounded text-white
          ${
            isPrevDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
      >
        Previous
      </button>

      <span className="text-gray-700">
        {total > 0
          ? `Showing ${currentIndex + 1} of ${total}`
          : "No URLs loaded"}
      </span>

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`w-28 py-2 rounded text-white
          ${
            isNextDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
      >
        Next
      </button>

    </div>
  );
};

export default NavButtons;