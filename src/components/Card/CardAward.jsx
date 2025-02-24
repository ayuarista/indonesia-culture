const CardAward = () => {
    return (
      <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg mx-16">
        <img
          src="https://images.unsplash.com/photo-1739382121445-19b3460a9e7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Award"
          className="w-full h-96 object-cover rounded-tl-4xl"
        />
        
        <div className="absolute top-0 left-0 bg-white text-red-700 font-bold text-sm px-3 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg">
          January 8, 2025
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-700 via-black/10 to-transparent p-5 flex items-end">
          <p className="text-white font-semibold text-[15px]/6 text-justify border-l-2 p-3 border-white">
            The First Person to Translate the Deuterocanonical Books and Part of
            the New Testament into Macapat
          </p>
        </div>
      </div>
    );
  };
  
  export default CardAward;
  