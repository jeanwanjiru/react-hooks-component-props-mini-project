import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticlesList from "./ArticleList";
import Article from "./Article";
function App() {
  return (
    <>
      <Header />
      <About />
      <Article />
      <ArticlesList />
    </>
  );
}

export default App;
