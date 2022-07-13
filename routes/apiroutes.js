const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));  
});


router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const newNote = req.body; 
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
          console.error(err); 
      } else {
          const parsedData = JSON.parse(data);  
          parsedData.push(newNote); 
          fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
          err
            ? console.error(err)
            : console.info('Success!'));
          res.json(parsedData);    
      }
  })
})


module.exports = router;