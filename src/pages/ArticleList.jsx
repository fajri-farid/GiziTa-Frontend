import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/Artikel";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/articles");
        if (response.data.success) {
          setArticles(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch articles.");
        }
      } catch (err) {
        setError("Error fetching articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div className="p-4 text-white">Loading articles...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 p-4 text-white">
        Artikel Terbaru
      </h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
