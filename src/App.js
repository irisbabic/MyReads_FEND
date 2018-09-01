import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from "./Shelves";
import Search from "./Search";

/**
 * @class App
 * @classdesc Main program logic
 */
class App extends React.Component {
    state = {
      books:[]
    };

    /**
     * @description Upon completition of component mounting shelves refresh
     */
    componentDidMount() {
            this.refreshShelves();
        }

    /**
     * @description Changing shelf if reading status is changed
     * @param book - book on which update method was called
     * @param shelf - change shelf
     */
    statusChanger = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(response => this.refreshShelves())
            .catch(response => console.error('An error with placing book on a shelf occured', response));
    };

    /**
     * @description Refreshing all books
     */
    refreshShelves() {
        return BooksAPI.getAll()
            .then(books => this.setState({books: books}))
            .catch(response => console.error("An error occure while getting books", response));
    };

    /**
     * @description Render the app, routes are set to dynamically change content based on URL
     */
    render() {
        return(
            <BrowserRouter>
            <div className="app">
                <Route exact path="/" render={() =>
                <Shelves books={this.state.books} statusChanger={this.statusChanger}/>}/>
                <Route path="/search" render={() =>
                    <Search books={this.state.books} statusChanger={this.statusChanger}/>
                }/>
            </div>
            </BrowserRouter>)


    }
}

export default App
