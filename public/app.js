// const axios = 'axios/dist/browser/axios.cjs';


async function signup() {

    try {


        let userName = document.getElementById('name').value;
        let userAge = document.getElementById('age').value;
        let userEmail = document.getElementById('email').value;
        let userPassword = document.getElementById('password').value;


        if (!userName || !userAge || !userEmail || !userPassword) {

            alert('Please fill in all fields!');
            return;
        }

        if (userEmail.indexOf('@gmail.com') === -1) {

            alert('Invalid Email!');
            return;
        }


        const res = await axios.post('http://localhost:3000/api/signup', {
            headers: {
                'Authorization': `Bearer ${token}`, // For Bearer token authentication
                'Content-Type': 'application/json' // Or 'application/x-www-form-urlencoded', etc.

            }
        },

            {

                userName,
                userAge,
                userEmail,
                userPassword
            })


        const data = res.data;
        console.log(res);


        if (data.status === 200) {

            alert(data.message);
            window.location.href = 'signup.html';

        } else if (data.status === 505) {

            alert('Uaser already exists ' + data.message);

        } else {

            alert('Please fill correctly ' + data.message);
        }

    } catch (err) {
        console.error(err);
        alert('Server or network error, please try again later.');
    }
}

// function localStorage(){


//     // if (userName == '' || userAge == '' || userEmail == '' || userPassword == '') {
//     //     alert('Please fill page');
//     //     return
//     // }

//     // if (userEmail.indexOf('@gmail.com') === -1) {
//     //     alert('Please enter correct Gmail address!');
//     //     return;
//     // }

//     // let obj = JSON.parse(window.localStorage.getItem('data')) || [];



//     // let isFound = false;

//     // for (let i = 0; i < obj.length; i++) {


//     //     if (obj[i].userEmail === userEmail) {

//     //         alert('This Email Account is already exists!');

//     //         isFound = true;
//     //         return;
//     //     }


//     // }

//     // if (!isFound) {

//     //     alert('Account created successfuly');

//     // }


//     // obj.push({
//     //     userName,
//     //     userAge,
//     //     userEmail,
//     //     userPassword,
//     // });


//     // window.localStorage.setItem('data', JSON.stringify(obj));


// }

async function login() {

    try {


        let loginEmail = document.getElementById('signin_email').value;
        let loginPass = document.getElementById('signin_password').value;

        if (!loginEmail || !loginPass) {
            alert('Please enter both email and password!');
            return;
        }

        if (loginEmail.indexOf('@gmail.com') === -1) {

            alert('Invalid Email!');
            return;
        }



        const res = await axios.post('http://localhost:3000/api/login',
            {

                userEmail: loginEmail,
                userPassword: loginPass
            }
        )

        console.log(userPassword, "line num 153");

        const data = res.data;
        console.log(data);

        if (data.status === 200) {
            alert(data.message);
            window.location.href = 'home.html';
        }
        else if (data.status === 401) {
            alert('Incorrect password!');
        }
        else if (data.status === 404) {
            alert('Email not found!');
        }
        else {
            alert(data.message);
        }

    } catch (err) {

        console.error(err);
        alert('⚠️ Server error or connection issue.');
    }
}


async function submit() {

    try {


        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let description = document.getElementById('description').value;

        if (title === '' || author === '' || description === '') {
            alert('Please enter all value');
            return;
        };

        await axios.post('http://localhost:3000/api/postBlog', {

            title,
            author,
            description
        });


        alert('Blog added successfully!');
        window.location.href = 'home.html';
        console.log(title);

        // if (data.status === 200) {

        //     alert(data.message);
        //     // window.location.href = "home.html";
        // }

        // let blog_obj = JSON.parse(localStorage.getItem('User value')) || [];

        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        // blog_obj.push({
        //     title: title,
        //     author: author,
        //     description: description,
        //     email: currentUser.validUser.email
        // });

        // localStorage.setItem('User value', JSON.stringify(blog_obj));

    }
    catch (err) {

        alert('Failed to add blog.');
    }
}


// if (signin_email == '' && signin_password == '') {

//     alert('Please enter value')
//     return;
// }


// var getdata = window.localStorage.getItem('data');
// getdata = JSON.parse(getdata);


// let isFound = false;


// for (let i = 0; i < getdata.length; i++) {


// if (isFound === false) {

//     alert("Incorrect Email or Password");
//     return;
// }


// };


async function viewBlogs() {


    try {


        let profile = document.getElementById('profile');
        const response = await axios.get('http://localhost:3000/api/data');
        const user = response.data.userData || [];
        console.log(user);



        if (user) {

            for (let j = 0; j < user.length; j++) {

                profile.innerHTML = user[j].userName[0];


            }

        }


        let Container_small_box = document.getElementById('Container_small_box');

        // profile = userData.username;

        const res = await axios.get('http://localhost:3000/api/getBlog');
        const blogs = res.data.blogs || [];


        Container_small_box.innerHTML = '';

        // if (!blogs.object) {
        //     Container_small_box.innerHTML = "<p>No blogs found.</p>";
        //     return;
        // }

        console.log(blogs);

        if (blogs) {

            for (let i = 0; i < blogs.length; i++) {

                Container_small_box.innerHTML += `<div class="small_box" id="small_box">
    
            <div class="parent_1">
            
            <div class="child" id="child_1">
            
                <h1>Title</h1>
                    <p id="title_value">${blogs[i].title}</p>

                </div>

                <div class="child" id="child_2">

                    <h1>Author</h1>
                    <p id="author_value">${blogs[i].author}</p>

                    </div>
                    
                    <div class="child_3" id="child_3">
                    
                    <h1>Description</h1>
                    <p id="description_value">${blogs[i].description}</p>

                </div>

            </div>

            <div class="parent_2" id="parent_2">

                <div onclick="delete_blog('')">

                <div><i class="fa-solid fa-x"></i></div>
                <div>
                <p>Delete</p>
                    </div>

                    </div>

                <div onclick="edit_blog('')">

                    <div><i class="fas fa-edit"></i></div>
                    <div>
                        <p>Edit</p>
                    </div>

                </div>


            </div>

        </div>`;
            }

        }


    } catch (err) {

        console.error(err);
        alert('Error fetching blogs. Please try again later.');
    }

}

function delete_blog(index) {

    let blog = JSON.parse(localStorage.getItem('User value')) || [];

    blog.splice(index, 1);

    localStorage.setItem('User value', JSON.stringify(blog));

    viewBlogs();
}


async function edit_blog() {

    try {

        // let blog = JSON.parse(window.localStorage.getItem('User value')) || [];

        // const res = await axios.get('http://localhost:3000/api/blog');
        const blogs = res.data;


        const blog_past = blogs[index]; // ek specific blog
        if (!blog_past) {
            alert('Blog not found');
            return;
        }

        const newtitle = prompt('Edit your Title', blog_past.title);
        if (newtitle === null) return;

        const newauthor = prompt('Edit your Author name', blog_past.author);
        if (newauthor === null) return;

        const newdesc = prompt('Edit your Description', blog_past.description);
        if (newdesc === null) return;

        // await axios.put(`http://localhost:3000/api/blog/${blog_past._id}`, {
        //     title: newtitle,
        //     author: newauthor,
        //     description: newdesc,
        // });

        alert('Blog updated successfully!');
        viewBlogs();

        // let oldtitle = blog[index].title;
        // let oldauthor = blog[index].author;
        // let olddesc = blog[index].description;

        // let newtitle = prompt('Edit your Title');
        // if (newtitle === null) return;
        // let newauthor = prompt('Edit your Author name');
        // if (newauthor === null) return;
        // let newdesc = prompt('Edit your Description');
        // if (newdesc === null) return;


        // blog[index].title = newtitle;
        // blog[index].author = newauthor;
        // blog[index].description = newdesc;


        // window.localStorage.setItem('User value', JSON.stringify(blog));

        // viewBlogs()
    } catch (err) {
        console.error(err);
        alert('Error updating blog.');
    }
}



async function Details() {

    // let user = window.localStorage.getItem('currentUser');
    // user = JSON.parse(user);
    // console.log(user);


    let profile_name = document.getElementById('profile_name');
    let home_age = document.getElementById('home_age');
    let home_email = document.getElementById('home_email');
    let home_password = document.getElementById('home_password');

    let home_age_2 = document.getElementById('home_age_2');
    let home_email_2 = document.getElementById('home_email_2');
    let home_password_2 = document.getElementById('home_password_2');


    const res = await axios.get('http://localhost:3000/api/data');
    const user = res.data.userData || [];

    if (user) {

        for (let i = 0; i < user.length; i++) {


            profile_name.innerHTML = user[i].userName;
            home_age.innerHTML = user[i].userAge;
            home_email.innerHTML = user[i].userEmail;
            home_password.innerHTML = user[i].userPassword;

            home_age_2.innerHTML = user[i].age;
            home_email_2.innerHTML = user[i].email;
            home_password_2.innerHTML = user[i].password;

        }


        if (data.status === 200) {

            alert(data.message);
            // window.location.href = 'signup.html';

        }
    }


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

