import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import useBookSearch from "./customHooks/useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPage(1);
  }



  const [loading, books, hasMore, error] = useBookSearch(query, page);

  const ref = useRef();
  const lastBookElementRef = useCallback(node=>{
       if(loading) return
       if(ref.current) ref.current.disconnect()
       ref.current = new IntersectionObserver(entries=>{
         if(entries[0].isIntersecting && hasMore){
           setPage(prev=>prev+1);
         }
       })
       if(node) ref.current.observe(node)
  },[loading,hasMore]);


  return (
    <>
      <input type="text" onChange={handleSearch} value={query}></input>
      {books.map((book, id) => {
        if (books.length === id+1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book}</div>;
        }
      })}

      <div>{loading && "...loading"}</div>
      <div>{error && "...Error"}</div>
    </>
  );
}

export default App;
