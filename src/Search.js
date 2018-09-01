import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Books from "./Books"
import * as BooksAPI from "./BooksAPI";

/**
 * @class Search
 * @classdesc Logic for search books in books DB
 */
class Search extends React.Component {
    state = {
        query: '',
        books: []
    };

    /**
     * @description Updates query as user changes it
     * @param event - onChange event
     */
    updateQuery = (event) => {
        this.setState({query: event.target.value});
        return BooksAPI.search(event.target.value)
            .then(books => (!books || books.error) ? this.setState({books:[]}) : this.setState({books:books}));
    };


    /**
     * @description Renders input field and search results on a search page
     */
    render() {
        this.state.books.map(searchedBook => {
            searchedBook.shelf = 'none';
            this.props.books.map((book) => {
                book.id === searchedBook.id ? searchedBook.shelf=book.shelf : ''}
            )});

        return <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.updateQuery.bind(this)} placeholder="Search by title or author" value={this.state.query}/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books && this.state.books.map(book => (
                        <li key={book.id}>
                            <Books book={book} statusChanger={this.props.statusChanger}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    }
}

export default Search
