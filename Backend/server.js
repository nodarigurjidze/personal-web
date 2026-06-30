// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// მოდულების გააქტიურება
app.use(cors());
app.use(express.json()); // იმისთვის, რომ სერვერმა წაიკითხოს React-იდან გამოგზავნილი ტექსტები

// სატესტო ლინკი, ბრაუზერში რომ შევამოწმოთ
app.get('/api/health', (req, res) => {
  res.json({ status: "ბექენდ სერვერი მუშაობს იდეალურად!" });
});

// საკონტაქტო ფორმის ლინკი (აქ შემოვა React-ის მესიჯები)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log("ახალი შეტყობინება საიტიდან:", { name, email, message });
  
  // აქ დავაბრუნებთ წარმატების პასუხს
  res.status(200).json({ success: true, message: "მესიჯი მიღებულია!" });
});

app.listen(PORT, () => {
  console.log(`სერვერი ჩაირთო პორტზე: ${PORT}`);
});