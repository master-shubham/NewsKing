import React, { useEffect, useRef, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import NewsHeading from "./NewsHeading";
import SkeletonCard from "./SkeletonCard";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(props.catagory);
  const controllerRef = useRef(null);
  // 🔥 Fetch News
 const updateNews = async () => {
  try {
    // ❌ cancel previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // ✅ create new controller
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${selectedCategory}&q=${searchQuery}&apiKey=${import.meta.env.VITE_APIKEY}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url, {
      signal: controller.signal,
    });

    let parseData = await data.json();

    setArticles(parseData.articles || []);
    setTotalResults(parseData.totalResults || 0);

    setLoading(false);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request cancelled 🔥");
    } else {
      console.error("API Error:", error);
      setLoading(false);
    }
  }
};

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setPage(1);
      updateNews();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setSelectedCategory(props.catagory);
  }, []); // only first render
  // 🔥 Infinite Scroll
const fetchMoreData = async () => {
  if (loading) return;

  setLoading(true);

  setTimeout(async () => {
    const nextPage = page + 1;

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${selectedCategory}&q=${searchQuery}&apiKey=${import.meta.env.VITE_APIKEY}&page=${nextPage}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();

    setPage(nextPage);
    setArticles((prev) => prev.concat(parseData.articles || []));
    setTotalResults(parseData.totalResults || 0);

    setLoading(false);
  }, 500); // small delay
};

  return (
    <div className="max-w-7xl mx-auto px-6 pt-5">
      {/* Navbar Center */}

      <NewsHeading />

      {/* 🔥 Heading + Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Top{" "}
          <span className="text-blue-400 capitalize">{selectedCategory}</span>{" "}
          News
        </h1>

        {/* Controls */}
        <div className="flex gap-3 w-full md:w-auto">
          {/* Search */}
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Dropdown */}
          <Dropdown
            selectedCategory={selectedCategory}
            setArticles={setArticles}
            setSelectedCategory={setSelectedCategory}
            setPage={setPage}
          />
        </div>
      </div>

      {/* Infinite Scroll */}
      {loading && articles.length === 0 ? (
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : (
      <InfiniteScroll
        dataLength={articles?.length || 0}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        }
      >
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((element, index) => (
            <NewsItem
              key={`${element.url}-${index}`}
              title={element.title || ""}
              description={element.description || ""}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          ))}
        </div>
      </InfiniteScroll>
)}
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 6,
  catagory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catagory: PropTypes.string,
};

export default News;
