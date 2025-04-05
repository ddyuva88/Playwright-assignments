//Normal Function Declaration

function userProfile(name){

console.log(`Hello ${name}`);
}

userProfile("Dinesh");

//Arrow Function    

const double= num => console.log(num*2);
double(5);

//anonymous function
setTimeout(function(){
    console.log("Message delayed by 2 seconds")
},2000);

