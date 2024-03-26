export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        console.log(book);
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};
