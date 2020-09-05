const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const auth = require('./routes/api/auth');

const app = express();

//Connect Database
connectDB();

app.get('/', (req, res, next) => res.send('API running'));

//Define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
