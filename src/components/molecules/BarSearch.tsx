/*eslint no-use-before-define: 0*/
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../atoms/SearchBar";
import Bar from "../atoms/Bar";

const getBooks = async (keywords: string): Promise<Bar[]> => {
  const url = `http://localhost:8000/users?q=${keywords}`;
  const {
    data: { items },
  } = await axios.get(url);
  console.log(items);
  return items;
};

const BarSearch = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [books, setBooks] = useState<Bar[]>([]);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const books: Bar[] = await getBooks(keywords);
          setBooks(books);
        }}
      >
        <input
          type="text"
          name="searchInput"
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <SearchBar books={books} />
    </div>
  );
};

export default BarSearch;
