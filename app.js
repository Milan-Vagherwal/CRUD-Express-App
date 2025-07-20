const express = require('express');
const app = express();
const morgan = require('morgan');
const dbConnection = require('./config/db')
const userModel = require('./models/user')
app.set("view engine", 'ejs');
// let a =0
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

// app.use((req, res, next) =>{
    
//     console.log("this is middleware")
//     console.log(++a)
//     return next()
// })

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.send("hello this is contact page");
});
app.get('/help', (req, res) => {
    res.send("hello this is help page");
});
app.get('/about', (req, res) => {
    res.send("hello this is about sadkek java page");
});
app.post('/get-form-data', (req,res) => {
    console.log(req.body)
    res.send('data recieved')
})
app.get('/register', (req,res) => {
    res.render('register')
})
app.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    });
    res.send(newUser)
})
app.get("/get-user", (req, res) =>{
    userModel.findOne({
        username:'hic'
    }).then((users) =>{
        console.log(users)
        res.send(users)
    })
})
app.get('/update-user-pass', async (req, res) => {
    await userModel.findOneAndUpdate(
        {email: "na@mo-di"},
        {username: "Bhaisab"}
    )
    res.send("user updated")

})
app.get('/delete-user', async (req, res) => {
    await userModel.findOneAndDelete({
        username: 'modi'
    })
    res.send("user Deleted")
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});