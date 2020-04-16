const express = require('express');
// const mysql = require('mysql')
// const knexfile = require('../knex/knexfile')
const router = express.Router();
// const knex = require('knex')
const options = {
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'mydb'
  }
}

const knex = require('knex')(options);
// const queries = require('../models/queries');

router.get('/', (req,res) => {
  knex.from('demo').select("*")
  .then((results) => {
    console.log(results)
      res.json(results)
  })
})



router.get('/get', (req, res, next) => {
     
  knex.select().table('books')
  .then((results) => {
    console.log(results)
      res.json(results)
  })
  
    })



// function isValidId(req, res, next) {
//   if(!isNaN(req.params.id)) return next();
//   next(new Error('Invalid ID'));
// }

// function validSticker(users) {
//   const hasTitle = typeof users.title == 'string' && sticker.title.trim() != '';
//   const hasURL = typeof users.url == 'string' && sticker.url.trim() != '';
//   const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
//   const hasRating = !isNaN(sticker.rating);
//   return hasTitle && hasDescription && hasURL && hasRating;
// }

// router.get('/', (req, res) => {
//   queries.getAll().then(users => {
//     res.json(users);
//   });
// });

// router.get('/:id', isValidId, (req, res, next) => {
//   queries.getOne(req.params.id).then(sticker => {
//     if(sticker) {
//       res.json(sticker);
//     } else {
//       next();
//     }
//   });
// });

// router.post('/', (req, res, next) => {
//   if(validSticker(req.body)) {
//     queries.create(req.body).then(stickers => {
//       res.json(stickers[0]);
//     });
//   } else {
//     next(new Error('Invalid sticker'));
//   }
// });

// router.put('/:id', isValidId, (req, res, next) => {
//   if(validSticker(req.body)) {
//     queries.update(req.params.id, req.body).then(stickers => {
//       res.json(stickers[0]);
//     });
//   } else {
//     next(new Error('Invalid sticker'));
//   }
// });

// router.delete('/:id', isValidId, (req, res) => {
//   queries.delete(req.params.id).then(() => {
//     res.json({
//       deleted: true
//     });
//   });
// });

module.exports = router;