/*eslint no-use-before-define: 0*/
import React, { useState } from "react";
import axios from "axios";
// import Layout from "../atoms/Layout";
import SearchResults from "../organisms/SearchResults";
import Book from "../atoms/Book";

const getBooks = async (keywords: string): Promise<Book[]> => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keywords}`;
  const {
    data: { items },
  } = await axios.get(url);
  console.log(items);
  return items;
};

const BookSearch = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const books: Book[] = await getBooks(keywords);
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
      <SearchResults boo={books} />
    </div>
  );
};

export default BookSearch;
