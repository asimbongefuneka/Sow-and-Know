// script.js

function setMessage(form, msg, type = "error") {
    const messageEl = form.parentElement.querySelector(".form-message");
    messageEl.textContent = msg;
    messageEl.className = "form-message " + type;
}

// SIGN UP
const signUpForm = document.querySelector("#sign form");
if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = signUpForm.querySelector("#username").value.trim();
        const email = signUpForm.querySelector("#email").value.trim();
        const password = signUpForm.querySelector("#password").value.trim();

        if (password.length < 6) {
            setMessage(signUpForm, "Password must be at least 6 characters.");
            return;
        }
        if (password.length > 100) {
            setMessage(signUpForm, "Password cannot exceed 100 characters.");
            return;
        }

        setMessage(signUpForm, `Welcome, ${username}!`, "success");
        setTimeout(() => window.location.href = "index.html", 1000);
    });
}

// LOGIN
const loginForm = document.querySelector("#log form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.querySelector("#username").value.trim();
        const password = loginForm.querySelector("#password").value.trim();

        if (!username || !password) {
            setMessage(loginForm, "Please enter both username and password.");
            return;
        }

        setMessage(loginForm, `Welcome back, ${username}!`, "success");
        setTimeout(() => window.location.href = "index.html", 1000);
    });
}

// FEEDBACK
const feedbackForm = document.querySelector("#feedback form");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = feedbackForm.querySelector("#name").value.trim();
        const email = feedbackForm.querySelector("#email").value.trim();
        const message = feedbackForm.querySelector("textarea").value.trim();

        const wordCount = message.split(/\s+/).filter(Boolean).length;
        if (wordCount > 100) {
            setMessage(feedbackForm, "Feedback must be under 100 words.");
            return;
        }

        setMessage(feedbackForm, "Thank you for your feedback!", "success");
        setTimeout(() => window.location.href = "response.html", 1000);
    });
}