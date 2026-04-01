
import { useEffect } from "react";

const NavButtons = ({ currentIndex, total, onNext, onPrev }) => {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === total - 1 || total === 0;

  //keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft" && !isPrevDisabled) {
        onPrev();
      }
      if (e.key === "ArrowRight" && !isNextDisabled) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentIndex, total]);

  return (
    <div className="flex justify-center items-center gap-6 mt-6">

      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className={`w-32 py-2 rounded-lg font-medium transition duration-200
          ${
            isPrevDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60"
              : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          }
        `}
      >
        ⬅ Previous
      </button>

      <span className="text-gray-700 font-medium">
        {total > 0
          ? `Showing ${currentIndex + 1} of ${total}`
          : "No URLs loaded"}
      </span>

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`w-32 py-2 rounded-lg font-medium transition duration-200
          ${
            isNextDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-60"
              : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          }
        `}
      >
        Next ➡
      </button>

    </div>
  );
};

export default NavButtons;