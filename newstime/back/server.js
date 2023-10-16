const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());

app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const data = {
    email
  };

  const jsonData = JSON.stringify(data);

  fs.appendFile('emails.json', jsonData + '\n', (err) => {
    if (err) throw err;
    console.log('Email saved to emails.json');
    res.status(200).json({ message: 'Email subscribed successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
