import { connection } from "../src/db.js"

export const createBook = (book) => {
    connection.query('INSERT INTO books SET ?', book, function(error){
        if(error) throw error
    })
}

export const getAllBooks = (callback) => {
    connection.query("SELECT * FROM books WHERE 1", function(error, results) {
        if(error) throw error
        if(results.length > 0){
            return callback(results)
        } else {
            return callback(false)
        }
    })
}

export const getOneBook = (id, callback) => {
    if(!id) throw new Error('Not fiend id')
    connection.query("SELECT * FROM books WHERE id = " + id, function(error, results){
        if(error) throw error
        if(results.length > 0){
            return callback(results)
        } else {
            return callback(false)
        }
    })
}

export const updateBook = (book) => {
    if(!book.id) throw new Error('Not fiend id')
    connection.query("UPDATE books SET ? WHERE id = ?", [book, book.id], function(error, results){
        if(error) throw error
        if(results) return book
    })
}

export const deleteBook = (id) => {
    connection.query("DELETE FROM books WHERE id = " + id, function(error){
        if(error) throw error
    })
}