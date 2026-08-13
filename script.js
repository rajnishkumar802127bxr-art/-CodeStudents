/* =====================================
   SIGNUP
===================================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;
        }


        /*
         * DEMO ONLY
         *
         * This stores the account in browser localStorage.
         * It is NOT a real production authentication system.
         */

        const user = {

            name: name,

            email: email,

            password: password

        };


        localStorage.setItem(
            "codeStudentsUser",
            JSON.stringify(user)
        );


        alert(
            "Account created successfully! Please login."
        );


        // Open another page

        window.location.href = "login.html";

    });

}


/* =====================================
   LOGIN
===================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        const savedUser =
            localStorage.getItem("codeStudentsUser");


        if (!savedUser) {

            alert(
                "No account found. Please create an account first."
            );

            window.location.href = "index.html";

            return;
        }


        const user = JSON.parse(savedUser);


        if (
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            alert(
                "Login successful! Welcome " + user.name + " 🎉"
            );


            // Open HOME page

            window.location.href = "home.html";

        } else {

            alert(
                "Incorrect email or password."
            );

        }

    });

}


/* =====================================
   PROTECT HOME / TOPICS PAGES
===================================== */

const currentPage =
    window.location.pathname.split("/").pop();


if (
    currentPage === "home.html" ||
    currentPage === "topics.html"
) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");


    if (isLoggedIn !== "true") {

        alert(
            "Please login first."
        );

        window.location.href = "login.html";

    }

}


/* =====================================
   LOGOUT
===================================== */

function logout() {

    localStorage.removeItem("isLoggedIn");

    alert("You have been logged out.");

    window.location.href = "login.html";

}