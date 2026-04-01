// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white p-4 text-xl font-bold text-center">
//       Website Navigator
//     </nav>
//   );
// };

// export default Navbar;




const Navbar = () => {
  return (
    <nav className="bg-violet-700 shadow-md border-b px-6 py-3 flex items-center justify-between">

   
      <h1 className="text-xl font-semibold text-white flex items-center gap-2">
        🌐 <span>Website Navigator</span>
      </h1>

    
      <div className="text-sm text-white hidden sm:block">
        Upload & Browse URLs
      </div>

    </nav>
  );
};

export default Navbar;