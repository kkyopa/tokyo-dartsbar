import React from "react";
import Book from "../atoms/Book";

const server = "http://localhost:8000/users";

const SearchResults = ({ books }: { books: Book[] }) =>
  books.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>出版社</th>
          <th>出版年</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book: Book) => (
          <tr key={book.id}>
            <td>{book.volumeInfo.title}</td>
            <td className="publisher">{book.volumeInfo.publisher}</td>
            <td className="publishedDate">{book.volumeInfo.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="empty-state" />
  );

export default SearchResults;
