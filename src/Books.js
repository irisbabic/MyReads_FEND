import React from 'react'
import './App.css'

/**
 * @description Creates books
 * @param props - props that were send from Shelves (parent component)
 */
function Books(props) {
    return <div className="book">
        <div className="book-top">
            <div className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: props.book.imageLinks ? `url("${props.book.imageLinks.thumbnail}")` : "/icons/default-image.jpg"
                }}/>
                <div className="book-shelf-changer">
                    <select onChange={event => props.statusChanger(props.book, event.target.value)} value={props.book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
        </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
    </div>
}

export default Books
