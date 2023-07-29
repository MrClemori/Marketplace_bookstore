import booksService from "./booksService.js"

class booksController {
    async create(req, res){
        try {
            const book = await booksService.create(req.body)
            res.json(book)
        } catch (error) { res.status(500).json(error) }
    }

    async getAll(req, res){
        try {
            const books = await booksService.getAll()
            return res.json(books)
        } catch (error) { res.status(500).json(error) }
    }

    async getOne(req, res){
        try {
            const book = await booksService.getOne(req.params.id)
            return res.json(book)
        } catch (error) { res.status(500).json(error) }
    }

    async update(req, res){
        try {
            const updatedBook = await booksService.update(req.body)
            return res.json(updatedBook)
        } catch (error) { res.status(500).json(error) }
    }

    async delete(req, res){
        try {
            const book = await booksService.delete(req.params.id)
            return res.json(book)
        } catch (error) { res.status(500).json(error) }
    }
}

export default new booksController()