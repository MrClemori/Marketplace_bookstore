import { Router } from "express"
import booksController from './books/booksController.js'

const router = new Router()

router.post('/books', booksController.create)
router.get('/books', booksController.getAll)
router.get('/books/:id', booksController.getOne)
router.put('/books', booksController.update)
router.delete('/books/:id', booksController.delete)

export default router