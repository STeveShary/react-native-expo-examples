// Register API Key here for more requests & APIs: https://newsapi.org
const API_KEY = "f6871a3c3ac24ee085853c78bcb5e6b1";

export const getNews = async (page = 1, pageSize = 20) => {
  const sources = "bbc-news,cbc-news,nbc-news,mtv-news";
  const categories = "technology";
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=${sources}=&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
  );
  const jsonData = await response.json();
  return jsonData.articles || [];
};
