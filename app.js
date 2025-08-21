const signup = () => {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;



    if (name == '' || age == '' || email == '' || password == '') {
        alert('Please fill page');
        return
    }


    let obj = JSON.parse(window.localStorage.getItem('data')) || [];


    let isFound = false;

    for (let i = 0; i < obj.length; i++) {


        if (obj[i].email === email && obj[i].password === password) {

            alert('This Email Account is already exists!');

            isFound = true;
            return;
        }


    }

    if (!isFound) {

        alert('Account created successfuly');
        window.location.href = 'signup.html';

    }


    obj.push({
        name,
        age,
        email,
        password,
    });


    window.localStorage.setItem('data', JSON.stringify(obj));

};


const signin = () => {

    let signin_email = document.getElementById('signin_email').value;
    let signin_password = document.getElementById('signin_password').value;


    if (signin_email == '' && signin_password == '') {

        alert('Please enter value')
        return;
    }


    var getdata = window.localStorage.getItem('data');
    getdata = JSON.parse(getdata);


    let isFound = false;


    for (let i = 0; i < getdata.length; i++) {


        if (getdata[i].email === signin_email && getdata[i].password === signin_password) {

            alert('Successfuly');
            window.localStorage.setItem('currentUser' , JSON.stringify({validUser: getdata[i]}))
            isFound = true;
            window.location.href = 'home.html';
            break;
        }

    }

    if (isFound === false) {

        alert("Incorrect Email or Password");
        return;
    }


};


    
function viewBlogs() {
  
    let user = window.localStorage.getItem('currentUser');
    user = JSON.parse(user);
    console.log(user);
    

    let home_haed = document.getElementById('home_haed');
    let home_age = document.getElementById('home_age');
    let home_email = document.getElementById('home_email');
    let home_password = document.getElementById('home_password');
    let profile = document.getElementById('profile');
    
    profile.innerHTML = user.validUser.name[0];
    home_haed.innerHTML = user.validUser.name;
    home_age.innerHTML = user.validUser.age;
    home_email.innerHTML = user.validUser.email;
    home_password.innerHTML = user.validUser.password;
}

    
function Details() {
  
    let user = window.localStorage.getItem('currentUser');
    user = JSON.parse(user);
    console.log(user);
    
    
    let profile_name = document.getElementById('profile_name');
    let home_age = document.getElementById('home_age');
    let home_email = document.getElementById('home_email');
    let home_password = document.getElementById('home_password');

    let home_age_2 = document.getElementById('home_age_2');
    let home_email_2 = document.getElementById('home_email_2');
    let home_password_2 = document.getElementById('home_password_2');

    
    profile_name.innerHTML = user.validUser.name;
    home_age.innerHTML = user.validUser.age;
    home_email.innerHTML = user.validUser.email;
    home_password.innerHTML = user.validUser.password;
    
    home_age_2.innerHTML = user.validUser.age;
    home_email_2.innerHTML = user.validUser.email;
    home_password_2.innerHTML = user.validUser.password;

}   



function sider() {

    let sider = document.getElementById('sider');
    let main = document.getElementById('main');

    sider.style.display = 'none';
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.justifyContent = 'space-between';
}

function close_sider() {

    let sider = document.getElementById('sider');
    let main = document.getElementById('main');

    sider.style.display = 'block';
    
    main.style.display = 'none';
    main.style.flexDirection = 'column';
    main.style.justifyContent = 'space-between';
}

function submit(){

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let description = document.getElementById('description').value;

    if(title === '' || author === '' || description === ''){

        alert('Please fill page');
        return;
    };


    let blog_obj = {

        title, 
        author, 
        description
    };

    window.localStorage.setItem('blog' , JSON.stringify(blog_obj));
    
    console.log(blog_obj);
    
    for(let i = 0; i < blog_obj.length; i++){

        if(blog_obj[i].title && blog_obj[i].author  && blog_obj[i].description){
            
            window.localStorage.setItem('current_blog' , JSON.stringify({validValue : blog_obj[i]}));
        }
    }
    
    window.location.href = 'home.html'
}

function blog_value(){

    let user_value = window.localStorage.getItem('current_blog');
    user_value = JSON.parse(user_value)
    console.log(user_value);
    
}


function create_blog() {

    window.location.href = 'create_blog.html';
}


function back_home() {

    window.location.href = 'home.html';
}


function check_profile() {

    window.location.href = 'profile.html';
}


function logout() {

    window.location.href = 'index.html';
}

function nav_signin() {

    window.location.href = 'signup.html';
}

function nav_signup() {

    window.location.href = 'index.html';
}

function nav_logout() {

    window.location.href = 'index.html';
}

function form(event) {

    event.preventDefault();
}

