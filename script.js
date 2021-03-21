//https://stackoverflow.com/questions/16746288/javascript-login-cookies
const loginDetails = [
    {
        id: "28927452898267136",
        username: "anwar",
        password: "arize",
    },
];

let eventRunning = false;

const element = document.getElementById("form");
    element.addEventListener("submit", event => {
        event.preventDefault();
    });

function loginUser(user, pass) {
    if (eventRunning) return;
    eventRunning = true
    user = user.toLowerCase();

    const inputFields = document.getElementById("form");
    inputFields.children[1].innerHTML = "<div class=\"loading\"><span></span><span></span><span></span></div>"
    inputFields.children[1].children[0].classList.add("loading")
    inputFields.children[0].children[0].classList.remove("errorStyle")
    inputFields.children[0].children[1].classList.remove("errorStyle")

    if (!user) {
        inputFields.children[0].children[0].classList.add("errorStyle");
        inputFields.children[0].children[0].children[1].textContent = " - This field is required";
    }
    else {
        inputFields.children[0].children[0].classList.remove("errorStyle");
        inputFields.children[0].children[0].children[1].textContent = "";
    };
    if (!pass) {
        inputFields.children[0].children[1].classList.add("errorStyle");
        inputFields.children[0].children[1].children[1].textContent = " - This field is required";
    }
    else {
        inputFields.children[0].children[1].classList.remove("errorStyle");
        inputFields.children[0].children[1].children[1].textContent = "";
    };

    if (!user || !pass) {
        setTimeout(() => {
            inputFields.children[1].textContent = "Login"
        }, 400)
        return eventRunning = false
    };

    let found;
    loginDetails.forEach(account => {
        if (account.username === user && account.password === pass) return found = true;
        else return;
    });

    if (!found) {
        inputFields.children[0].children[0].classList.add("errorStyle")
        inputFields.children[0].children[1].classList.add("errorStyle")
        inputFields.children[0].children[1].children[1].textContent = " - Login or password is invalid";
        inputFields.children[0].children[0].children[1].textContent = " - Login or password is invalid";
        setTimeout(() => {
            inputFields.children[1].textContent = "Login"
        }, 400)
        return eventRunning = false
    }
    else {
        setTimeout(async () => {
            window.location.href = "file:///C:/Users/FiercePC/Desktop/Html/main.html";
            return false;
        }, 1500);
        eventRunning = true
    };
};

function defaultAccount() {
    if (eventRunning) return;
    eventRunning = true
    const inputFields = document.getElementById("form");

    inputFields.children[0].children[0].classList.remove("errorStyle")
    inputFields.children[0].children[1].classList.remove("errorStyle")
    inputFields.children[0].children[1].children[1].textContent = "";
    inputFields.children[0].children[0].children[1].textContent = "";

    inputFields.children[0].children[0].children[2].value = "anonymous";
    inputFields.children[0].children[1].children[2].value = "anonymous";
    
    setTimeout(() => {
        inputFields.children[1].innerHTML = "<div class=\"loading\"><span></span><span></span><span></span></div>";
    }, 100);

    setTimeout(() => {
        window.location.href = "file:///C:/Users/FiercePC/Desktop/Html/main.html";
    }, 1500);
};

function storeData(data) {
    if (typeof(Storage) !== "undefined") {
        
    } else {
        console.log("Oopss! It seems Session Storage is not compatible here!")
    };
};