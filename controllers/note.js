const Note = require('../models/note');

exports.getAllNotes = (req, res, next) => {
  Note.find()
    .then(result => res.json(result))
    .catch(error => res.json(error));
};

exports.getNote = (req, res, next) => {
  Note.findById(req.params.id)
    .then(result => {
      if (result) return res.json(result);

      res.status(404).json({ message: 'Note not found.' });
    })
    .catch(error => res.json(error));
};

exports.createNote = (req, res, next) => {
  const { title, content, date, done } = req.body;

  const note = new Note({
    title,
    content,
    date,
    done
  });

  note
    .save()
    .then(result => res.status(201).json(result))
    .catch(error => res.status(500).json(error));
};

exports.updateNote = (req, res, next) => {
  const options = {
    upsert: true,
    setDefaultsOnInsert: true
  };

  Note.findByIdAndUpdate(req.params.id, req.body, options)
    .then(result => {
      if (result) return res.json(result);

      res.status(201).json(req.body);
    })
    .catch(error => res.status(500).json(error));
};

exports.deleteNote = (req, res, next) => {
  Note.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: 'Note deleted.' });
  });
};
