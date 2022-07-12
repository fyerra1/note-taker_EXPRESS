const router = require('express').Router();
const path = require('path');
const fs = require('fs');


router.get('/notes', (req, res) => {
  // fs.readFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  // console.info(`${req.method} request received to get notes`);
  // res.sendFile(path.join(__dirname, '../db/db.json'));  

  // res.status(200).json('../db/db.jsons');
});


// router.post('/notes', (req, res) => {
//   const { title, text } = req.body
// // console.log(req.body);
// // res.status(201).send('created user');
//   if (title && text) {
//     const newNote = {
//       title,
//       text,
//     };
//     fs.readFile('../db/db.json', newNote, 'UTF-8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {const parsedData = JSON.parse(data);
//               parsedData.push(newNote);
//         fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
//         err ? console.error(err)
//         : console.info('Note posted'))
//         res.json(parsedData);
//       }
//     })

//   }
// })

module.exports = router;

// fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
// err ? console.error(err) : console.info(`\nData written to ${destination}`)
// );

// tips.get('/', (req, res) => {
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
// });

// fb.post('/', (req, res) => {
//   // Destructuring assignment for the items in req.body
//   const { email, feedbackType, feedback } = req.body;

//   // If all the required properties are present
//   if (email && feedbackType && feedback) {
//     // Variable for the object we will save
//     const newFeedback = {
//       email,
//       feedbackType,
//       feedback,
//       feedback_id: uuidv4(),
//     };

//     readAndAppend(newFeedback, './db/feedback.json');

//     const response = {
//       status: 'success',
//       body: newFeedback,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting feedback');
//   }
// });

// const readAndAppend = (content, file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(content);
//       writeToFile(file, parsedData);
//     }
//   });
// };
