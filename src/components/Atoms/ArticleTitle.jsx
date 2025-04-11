const ArticleTitle = ({ title }) => {
    return (
      <div className="flex items-center justify-center my-6">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <h2 className="mx-4 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent">{title}</h2>
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>
    );
  };
  
  export default ArticleTitle;
  