<input id="clickMe" type="button" value="clickme" onclick="doFunction();"></input>



const fname = prompt("First name");
const lname = prompt("Last name");
const uid = prompt("User ID? 8-12 chars, >0 uppercase, >0 lowercase, >0 num");
let validid;
const birthday = prompt("")

function checkUserID(userID) {
    if ( properLength(userID) && hasUpperCase(userID) && hasLowerCase(userID) && hasNumber(userID) )
    return true;
} 

function properLength(userID) {
    if (8 <= userID.length <= 12) {
        return true;
    }
}

function hasUpperCase(userID) {
    for (let i = 0; i < userID.length; i++) {
        if (userID.charAt(i) === userID.toUpperCase().charAt(i)) {
            return true;
        }
    }
}

function hasLowerCase(userID) {
    for (let i = 0; i < userID.length; i++) {
        if (userID.charAt(i) === userID.toLowerCase().charAt(i)) {
            return true;
        }
    }
}

function hasNumber(userID) {
    for (let i = 0; i < userID.length; i++) {
        if (userID.charAt(i) == Number.parseInt(userID.charAt(i))) {
            return true;
    }
}
}   

if (fname.length === 0) {
    alert("invalid fname");
}

if (lname.length === 0) {
    alert("invalid lname");
}

if (checkUserID(uid) !== true) {
    alert("invalid user ID");
}

if (birthday.length === 0) {
    alert("invalid birthday");
}