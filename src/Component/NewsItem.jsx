import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={
            imgUrl ||
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
          }
          alt="news"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
          }}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Source Badge */}
      <span className="absolute top-3 right-3 bg-blue-500 text-xs px-3 py-1 rounded-full text-white shadow">
        {source}
      </span>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>

        <p className="text-sm text-gray-300 mb-3 line-clamp-3">{description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
          <span>{author || "Unknown"}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Button */}
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
