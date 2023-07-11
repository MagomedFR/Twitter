const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
app.use(require('./routes/comments.route'))
app.use(require('./routes/users.route'))
app.use(require('./routes/posts.route'))

mongoose.connect("mongodb+srv://into:5678aklm@cluster0.u3moagz.mongodb.net/twitter42").then(() => console.log('успешно'))
.catch(() => console.log('ошибка'))

app.listen(port, () => {
    console.log(`сервер http://localhost${port}`);
})