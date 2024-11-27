import React from "react";
import articlesData from "../MockedData/articlesData";
import Artikel from "../components/Artikel";

const ArticleList = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 p-4 text-white">
        Artikel Terbaru
      </h1>
      <div className="space-y-4">
        {articlesData.map((article) => (
          <Artikel key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
