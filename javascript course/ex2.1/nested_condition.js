let isLoggedIn = "true";
let user = "admin";
if (isLoggedIn === "true"){
    if (user === "admin"){
        console.log("UserMessage: Grant Full Access");
    }else{
        console.log("UserMessage: Grant No Access");
    }
}else{
    console.log("Please log in to access the system")
}