import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'

/**
 * @description Logic for creating a shelf
 * @param props - props that were send from App (parent component)
 */
function Shelves(props) {
    const shelfNames = [['Currently Reading', 'currentlyReading'], ['Want to Read', 'wantToRead'], ['Read', 'read']];

    /**
     * @description Returns shelves to hold books
     */
    return <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {shelfNames.map(name => <div className="bookshelf" key={name[0]}>
                    <h2 className="bookshelf-title">{name[0]}</h2>
                    <div className="bookshelf-books">
                        {console.log(name)}
                        <ol className="books-grid">
                            {props.books.map(book => (
                                (name[1] === book.shelf) &&
                                    (<li key={book.id}>
                                <Books book={book} statusChanger={props.statusChanger}/>
                                </li>)

                            ))}
                        </ol>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            )}
        </div>
    </div>
}

Shelves.propTypes = {
    books: PropTypes.array
};

export default Shelves
