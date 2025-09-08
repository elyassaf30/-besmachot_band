const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // אם ה־HTML נמצא בתיקיית public

// סיסמת מנהל (למשל)
const ADMIN_PASSWORD = 'matanya123';

// קבלת JSON
app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  res.json(data);
});

// הוספת תאריך תפוס
app.post('/add-booked-date', (req, res) => {
  const { date, password } = req.body;

  if (password !== ADMIN_PASSWORD) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  if (!data.bookedDates.includes(date)) {
    data.bookedDates.push(date);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    return res.json({ success: true, bookedDates: data.bookedDates });
  }
  res.json({ success: false, message: 'התאריך כבר קיים' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
