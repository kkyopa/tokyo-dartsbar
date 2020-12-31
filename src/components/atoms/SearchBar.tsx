import React from "react";
import Bar from "../atoms/Bar";

const SearchBar = ({ books }: { books: Bar[] }) =>
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
        {books.map((book: Bar) => (
          <tr key={book.id}>
            <td>{book.status.title}</td>
            <td>{book.status.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div />
  );

export default SearchBar;
