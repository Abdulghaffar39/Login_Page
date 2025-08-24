const signup = () => {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;



    if (name == '' || age == '' || email == '' || password == '') {
        alert('Please fill page');
        return
    }

    if (email.indexOf('@gmail.com') === -1) {
        alert('Please enter correct Gmail address!');
        return;
    }

    let obj = JSON.parse(window.localStorage.getItem('data')) || [];



    let isFound = false;

    for (let i = 0; i < obj.length; i++) {


        if (obj[i].email === email) {

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
            window.localStorage.setItem('currentUser', JSON.stringify({ validUser: getdata[i] }))
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

    let user = JSON.parse(localStorage.getItem('currentUser'));
    let profile = document.getElementById('profile');
    profile.innerHTML = user.validUser.name[0];


    let blog = JSON.parse(localStorage.getItem('User value')) || [];

    let Container_small_box = document.getElementById('Container_small_box');
    Container_small_box.innerHTML = '';

    for (let i = 0; i < blog.length; i++) {

        if (blog[i].email === user.validUser.email) {

            Container_small_box.innerHTML += `<div class="small_box" id="small_box">


            
            <div class="parent_1">

                <img src="./Assets/img/39daa6e9a23d95e8fcd89ac5d84fc67a.jpg" alt="image">


                <div class="child" id="child_1">

                    <h1>Title</h1>
                    <p id="title_value">${blog[i].title}</p>

                </div>

                <div class="child" id="child_2">

                    <h1>Author</h1>
                    <p id="author_value">${blog[i].author}</p>

                </div>

                <div class="child_3" id="child_3">

                    <h1>Description</h1>
                    <p id="description_value">${blog[i].description}</p>

                </div>

            </div>

            <div class="parent_2" id="parent_2">

                <div onclick="delete_blog(${i})">

                    <div><i class="fa-solid fa-x"></i></div>
                    <div>
                        <p>Delete</p>
                    </div>

                </div>

                <div onclick="edit_blog(${i})">

                    <div><i class="fas fa-edit"></i></div>
                    <div>
                        <p>Edit</p>
                    </div>

                </div>


            </div>

        </div>`;
        }
    }
}


function delete_blog(index) {

    let blog = JSON.parse(localStorage.getItem('User value')) || [];

    blog.splice(index, 1);

    localStorage.setItem('User value', JSON.stringify(blog));

    viewBlogs();
}


function edit_blog(index) {

    let blog = JSON.parse(window.localStorage.getItem('User value')) || [];

    let oldtitle = blog[index].title;
    let oldauthor = blog[index].author;
    let olddesc = blog[index].description;

    let newtitle = prompt('Edit your Title');
    if (newtitle === null) return;
    let newauthor = prompt('Edit your Author name');
    if (newauthor === null) return;
    let newdesc = prompt('Edit your Description');
    if (newdesc === null) return;


    blog[index].title = newtitle;
    blog[index].author = newauthor;
    blog[index].description = newdesc;


    window.localStorage.setItem('User value', JSON.stringify(blog));

    viewBlogs()
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


function submit() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let description = document.getElementById('description').value;

    if (title === '' || author === '' || description === '') {
        alert('Please enter value');
        return;
    }

    let blog_obj = JSON.parse(localStorage.getItem('User value')) || [];

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    blog_obj.push({
        title: title,
        author: author,
        description: description,
        email: currentUser.validUser.email
    });

    localStorage.setItem('User value', JSON.stringify(blog_obj));
    window.location.href = 'home.html';
}



// =====================================================================================================

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
// =====================================================================================================

