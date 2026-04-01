const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b px-6 py-3 flex items-center justify-between">

  
      <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        🌐 <span>Website Navigator</span>
      </h1>

  
      <div className="text-sm text-gray-500 hidden sm:block">
        Upload & Browse URLs
      </div>

    </nav>
  );
};

export default Navbar;