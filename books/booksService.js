import * as cases from "./cases.js"

class booksService {
    // create book (Title:string, Author:string, Price:number, Genre:[strings], Pages:number, Description:string)
    async create(book){
        cases.createBook(book)
    }

    async getAll(){
        cases.getAllBooks(function(exists){
            console.log(exists)
            return exists
        })
    }

    async getOne(id){
        cases.getOneBook(id, function(exists){
            console.log(exists)
            return exists
        })
    }

    async update(book){
        let res = cases.updateBook(book)
        console.log(book)
    }

    async delete(id){
        cases.deleteBook(id)
    }
}

export default new booksService()