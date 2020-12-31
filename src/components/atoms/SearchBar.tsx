import React from "react";
import Bar from "../atoms/Bar";

const SearchResults = ({ books }: { books: Bar[] }) =>
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
            <td>{book.title}</td>
            <td className="publisher">{book.title}</td>
            <td className="publishedDate">{book.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="empty-state" />
  );
