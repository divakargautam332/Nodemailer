const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const sendEmail = require('./sendEmail');
const cors = require('cors');
dotenv.config();

const verifyOtp = [];
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('server is running on port 3000');
});

app.get('/sendEmail', (req, res) => {
    res.render('email');
});

app.post('/sendEmail', async (req, res) => {
    const { email } = req.body;
    const Otp = Math.floor(Math.random() * 900000 + 100000);
    verifyOtp.push(Otp);
    console.log(email);
    const subject = "Email Verification";
    const message = `Your Otp for email verification is ${Otp}`;
    await sendEmail(email, subject, message);
    console.log('email send successfully');
    res.json({ success: true, message: "Email send to the user", Otp });
});

app.post('/verifyOtp', (req, res) => {
    const { otp } = req.body;
    if (!otp) {
        return res.json({ success: false, message: "please enter your opt" });
    }
    if (otp != verifyOtp[verifyOtp.length - 1]) {
        return res.json({ success: false, message: "wrong otp" });
    }
    res.json({ success: true, message: "Otp is verify" });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});