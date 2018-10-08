let express = require('express');
let cors = require('cors');
let app = express();
let fs = require('fs');
// let sql = require('seqelize');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

let data;
app.get('/logIn', function (req, res) {
    res.end(JSON.stringify('wefergertert'));
});
app.post('/createUser', function (req, res) {
    console.log(req.body);
    data = req.body;
    if (data.adminRoot === "") {
        data.adminroot = false
    }
    let User  = {
        userName : data.userName,
        password : data.password,
        adminRoot : data.adminRoot
    };
    fs.writeFile('./data/UsersList/users.txt', ";" + JSON.stringify(User), {flag : 'a'}, (err) =>{
        console.log(err);
    });
    res.end(JSON.stringify("User Added!!!"))
});
app.post('/logIn', function (req, res) {
    let userLoggedIn = req.body;
    console.log(req.body);
    fs.readFile('./data/UsersList/users.txt', (err, data) =>{
        let users = data.toString();
        let userList = [] = users.split(';');
        console.log(userList);
        let success = false;
        userList.forEach((item)=>{
            let parsedUser = JSON.parse(item);
            console.log(userLoggedIn.userName === parsedUser.userName && userLoggedIn.password === parsedUser.password);
            console.log(parsedUser);
            if (userLoggedIn.userName === parsedUser.userName & userLoggedIn.password === parsedUser.password){
                    success = true;
                    res.end(JSON.stringify({
                        adminRoot : parsedUser.adminRoot,
                        autorization : true
                    }))
            }
        })
        if  (success === false){
            res.end(JSON.stringify('Incorrect Username or Password'));
        }
    });

});
app.get('/content',function (req, res) {
    let projects = [];
    fs.readFile('./data/Content/projects.txt',(err, data) => {
        projects = data.toString().split(';');
        // projects.forEach((el) =>{
        //     console.log(JSON.parse(el));
        //
        // });
        res.end(JSON.stringify(projects))
    });
});

app.listen(3000, function () {
    console.log('listening');
});