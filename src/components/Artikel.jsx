import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.link_artikel}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex items-center p-6 border rounded-lg shadow-sm bg-white mx-auto">
        <div className="w-50 mr-6 flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <img
              src={article.icon}
              alt={article.category}
              className="w-5 h-5 rounded-full"
            />
            <p>
              in <span className="font-semibold">{article.category}</span> by{" "}
              {article.author}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {article.title}
            </h3>
            <p className="text-md text-gray-600">{article.description}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-6">
              <div>{article.month}</div>
              <div className="flex items-center space-x-1">
                <img
                  src="src/assets/Artikel/views.svg"
                  alt="Views"
                  className="w-4 h-4"
                />
                <span>{article.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <img
                  src="src/assets/Artikel/komen.svg"
                  alt="Likes"
                  className="w-4 h-4"
                />
                <span>{article.likes}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="src/assets/Artikel/simpan.svg"
                alt="Save"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
              <img
                src="src/assets/Artikel/menu.svg"
                alt="Menu"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
