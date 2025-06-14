
let emails = [];
let passwords = [];

for(let i = 1; i < 6; i++){
    
    let get_Emails = prompt(`Enter Your ${i} Email`)
    let get_Passwords = prompt(`Enter Your ${i} Email Password`)

    emails.push(get_Emails)
    passwords.push(get_Passwords)
    
    console.log(emails);
    console.log(passwords);
};


let find_Email = prompt('Check Your Email');
let find_Password = prompt('Check Your Password');

let isfound = false

for(let j = 0; j < emails.length; j++){
    
    if(find_Email === emails[j] && find_Password === passwords[j]){
        document.write(`Successfuly Work`);
        isfound = true
        
    };
    

};


if(isfound === false){
    document.write(`Please Enter Current Email or Password`)
}




