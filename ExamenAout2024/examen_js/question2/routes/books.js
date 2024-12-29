const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      res.send(books.map(book => ({
        id: book._id,
        title: book.title,
        author: book.author,
        state: book.state,
        comments: book.comments.map(comment => ({
          id: comment._id,
          username: comment.username,
          comment: comment.comment,
        })),
      })));
    } catch (error) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });

  router.post('/:id/comment', async (req, res) => {
    const { id } = req.params;
    const { username, comment } = req.body;
  
    console.log('Received request to add comment:', { id, username, comment });
  
    if (comment.length <= 5) {
      console.log('Comment is too short');
      return res.status(400).send({ error: 'Comment must be more than 5 characters' });
    }
  
    if (username.length <= 3) {
      console.log('Username is too short');
      return res.status(400).send({ error: 'Username must be more than 3 characters' });
    }
  
    try {
      const book = await Book.findById(id);
      if (!book) {
        console.log('Book not found');
        return res.status(404).send({ error: 'Book not found' });
      }
  
      const existingComment = book.comments.find(c => c.username === username);
      if (existingComment) {
        console.log('User has already commented on this book');
        return res.status(400).send({ error: 'User has already commented on this book' });
      }
  
      book.comments.push({ username, comment });
      await book.save();
  
      console.log('Comment added successfully');
      res.status(201).send({ id: book._id, username, comment });
    } catch (error) {
      console.error('Internal server error:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router;