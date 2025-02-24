const CardAward = () => {
    return (
      <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg">
        {/* Gambar */}
        <img
          src="https://images.unsplash.com/photo-1739382121445-19b3460a9e7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Award"
          className="w-full h-auto"
        />
        
        {/* Tanggal */}
        <div className="absolute top-4 left-4 bg-white text-red-700 font-bold px-3 py-1 rounded-lg shadow">
          January 8, 2025
        </div>
  
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end">
          <p className="text-white font-semibold text-lg">
            The First Person to Translate the Deuterocanonical Books and Part of
            the New Testament into Macapat
          </p>
        </div>
      </div>
    );
  };
  
  export default CardAward;
  