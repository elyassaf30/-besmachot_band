const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const DATA_PATH = path.join(__dirname, 'data.json');
const ADMIN_PASSWORD = 'matanya123';

// קבלת JSON
app.get('/data', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'בעיה בקריאת הנתונים' });
    try {
      res.json(JSON.parse(data));
    } catch (e) {
      res.status(500).json({ error: 'פורמט נתונים שגוי' });
    }
  });
});

// הוספת תאריך תפוס
app.post('/add-booked-date', (req, res) => {
  const { date, password } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  fs.readFile(DATA_PATH, 'utf8', (err, fileData) => {
    if (err) return res.status(500).json({ error: 'בעיה בקריאת הנתונים' });
    let data;
    try {
      data = JSON.parse(fileData);
    } catch (e) {
      return res.status(500).json({ error: 'פורמט נתונים שגוי' });
    }
    if (!data.bookedDates.includes(date)) {
      data.bookedDates.push(date);
      fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), (err) => {
        if (err) return res.status(500).json({ error: 'בעיה בשמירת הנתונים' });
        res.json({ success: true, bookedDates: data.bookedDates });
      });
    } else {
      res.json({ success: false, message: 'התאריך כבר קיים' });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
