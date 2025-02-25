const ArticleTitle = ({ title }) => {
    return (
      <div className="flex items-center justify-center my-6">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <h2 className="mx-4 text-2xl font-bold text-red-700">{title}</h2>
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>
    );
  };
  
  export default ArticleTitle;
  