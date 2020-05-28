const express = require('express');
const router = express.Router();

const noteModel = require('../controllers/note');

router.get('/', noteModel.getAllNotes);
router.get('/:id', noteModel.getNote);
router.post('/', noteModel.createNote);
router.put('/:id', noteModel.updateNote);
router.delete('/:id', noteModel.deleteNote);

module.exports = router;
