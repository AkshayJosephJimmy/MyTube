// pages/SearchResults.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const { search } = useLocation(); // e.g., ?q=react
  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function fetchResults() {
      const res = await fetch(`http://localhost:5050/api/search?query=${query}`);
      const data = await res.json();
      setResults(data);
    }

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search results for "{query}"</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map((video) => (
          <div key={video._id} className="border p-2 rounded shadow">
            <img src={video.thumbnailUrl} alt={video.title} className="w-full mb-2" />
            <h3 className="font-semibold">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}