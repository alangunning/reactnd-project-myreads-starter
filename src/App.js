import React from "react";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.dir(books);
      this.setState({ books });
    });
  }

  updateBook(book, shelf) {
   // book.shelf = shelf;
    BooksAPI.update(book, shelf);
    this.setState(state => ({
      //books: [state.books, book],
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf);
              }}
              books={this.state.books}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf);
                history.push("/");
              }}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
