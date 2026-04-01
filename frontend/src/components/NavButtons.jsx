// const NavButtons = ({ currentIndex, total, onNext, onPrev }) => {
//   const isPrevDisabled = currentIndex === 0;
//   const isNextDisabled = currentIndex === total - 1 || total === 0;

//   return (
//     <div className="flex justify-center items-center gap-4 mt-4">

//       <button
//         onClick={onPrev}
//         disabled={isPrevDisabled}
//         className={`px-4 py-2 rounded 
//           ${isPrevDisabled 
//             ? "bg-gray-400 cursor-not-allowed" 
//             : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"}
//         `}
//       >
//         Previous
//       </button>

//       <span>
//         {total > 0
//           ? `Showing ${currentIndex + 1} of ${total}`
//           : "No URLs loaded"}
//       </span>

//       <button
//         onClick={onNext}
//         disabled={isNextDisabled}
//         className={`px-4 py-2 rounded 
//           ${isNextDisabled 
//             ? "bg-gray-400 cursor-not-allowed" 
//             : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"}
//         `}
//       >
//         Next
//       </button>

//     </div>
//   );
// };

// export default NavButtons;

const NavButtons = ({ currentIndex, total, onNext, onPrev }) => {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === total - 1 || total === 0;

  return (
    <div className="flex justify-center items-center gap-6 mt-6">

      {/* Previous Button */}
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
        Previous
      </button>

      {/* Counter */}
      <span className="text-gray-700 font-medium">
        {total > 0
          ? `Showing ${currentIndex + 1} of ${total}`
          : "No URLs loaded"}
      </span>

      {/* Next Button */}
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
        Next
      </button>

    </div>
  );
};

export default NavButtons;
