import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import _ from 'underscore';

import registerServiceWorker from './registerServiceWorker';

var booksData = [
    {
        name: 'Mark Twain', 
        imageUrl: 'images/authors/marktwain.jpg',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining','IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
  ];
  
  var selectGame = function () {
    var books = _.shuffle(this.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, [])).slice(0,4);

    var answer = books[_.random(books.length-1)];

    return {
        books: books,
        author: _.find(this, function (author) {
            return author.books.some(function (title) {
                return title === answer;
            });
        }),
        checkAnswer: function (title) {
            return this.author.books.some(function (t) {
                return t === title;
            });
        }
    };
};

booksData.selectGame = selectGame;
ReactDOM.render(<App books={ booksData } />, document.getElementById('root'));
registerServiceWorker();
