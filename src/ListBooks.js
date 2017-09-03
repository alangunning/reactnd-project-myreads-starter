import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  filterBookShelf(shelf) {
    console.dir(this.props.books);
    return this.props.books.filter(book => book.shelf === shelf);
  }

  render() {
    const { onUpdateBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title={"Currently Reading"}
              books={this.filterBookShelf("currentlyReading")}
              onUpdateBook={onUpdateBook}
            />
            <BookShelf
              title={"Want to read"}
              books={this.filterBookShelf("wantToRead")}
              onUpdateBook={onUpdateBook}
            />
            <BookShelf
              title={"Read"}
              books={this.filterBookShelf("read")}
              onUpdateBook={onUpdateBook}
            />
          </div>
        </div>
        <Link className="open-search" to="/search">
          Search
        </Link>
      </div>
    );
  }
}

export default ListBooks;
