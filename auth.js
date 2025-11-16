
function signupUser() 
{
    const name = document.getElementById("signupName").value;
    const username = document.getElementById("signupUsername").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !username || !phone || !password) 
    {
        alert("⚠ Please fill all fields!");
        return;
    }

    const user = { name, username, phone, password };
    localStorage.setItem("userData", JSON.stringify(user));

    alert("✅ Sign Up Successful! Please Login now.");
    closePopupsignup();
    openPopup();
}
function loginUser() {
    const u = document.getElementById("loginUsername").value;
    const p = document.getElementById("loginPassword").value;

    const stored = JSON.parse(localStorage.getItem("userData"));

    if (!stored) {
        alert("No account found! Sign up first.");
        return;
    }

    if (stored.username === u && stored.password === p) {
        alert("✅ Login Successful!");

        localStorage.setItem("isLoggedIn", "true");

        closePopup();

        // REFRESH PAGE AFTER LOGIN
        setTimeout(() => location.reload(), 300);
    } else {
        alert("❌ Wrong username or password!");
    }
}

// LOGOUT FUNCTION
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");

    alert("Logged out successfully!");

    // REFRESH PAGE
    setTimeout(() => location.reload(), 300);
}

function openPopup() 
{
    clearForm();
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupsignup").style.display = "none";
}

function closePopup()
{
    clearForm();
    document.getElementById("popup").style.display = "none";
}
        
function openPopupsignup() 
{
    clearForm();
    document.getElementById("popupsignup").style.display = "block";       
    document.getElementById("popup").style.display = "none";   
}
        
function closePopupsignup() 
{      
    clearForm(); 
    document.getElementById("popupsignup").style.display = "none";
    document.getElementById("popup").style.display = "none";          
}


function clearForm() {
  document.getElementById("signupName").value="";
document.getElementById("signupUsername").value="";
 document.getElementById("signupPhone").value="";
 document.getElementById("signupPassword").value="";
 document.getElementById("loginUsername").value="";
document.getElementById("loginPassword").value="";
document.getElementById("enteredOtp").value="";
}


let generatedOTP = "";

// -------- GENERATE OTP ---------
function generateOTP() {
    const name = document.getElementById("signupName").value;
    const username = document.getElementById("signupUsername").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !username || !phone || !password) {
        alert("Please fill all fields first!");
        return;
    }

    // Generate 4-digit OTP
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

    alert("Your OTP is: " + generatedOTP);

    // Open OTP popup
    document.getElementById("otpPopup").style.display = "block";
    document.getElementById("popupsignup").style.display = "none";
}

// -------- VERIFY OTP ----------
function verifyOtp() {
    const entered = document.getElementById("enteredOtp").value;

    if (entered === generatedOTP) {
        document.getElementById("otpPopup").style.display = "none";
        document.getElementById("successPopup").style.display = "block";

        // Save user data
        const user = {
            name: document.getElementById("signupName").value,
            username: document.getElementById("signupUsername").value,
            phone: document.getElementById("signupPhone").value,
            password: document.getElementById("signupPassword").value
        };

        localStorage.setItem("userData", JSON.stringify(user));

    } else {
        alert("Incorrect OTP! Try again.");
    }
}

function closeOtpPopup() {
    document.getElementById("otpPopup").style.display = "none";
}

function openPopupFromSuccess() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("popup").style.display = "block";
}

function updateNavbar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("userData"));

    if (isLoggedIn === "true" && user) {
        // Hide login, show profile
        document.getElementById("navLogin").style.display = "none";
        document.getElementById("navProfile").style.display = "inline-block";
        document.getElementById("profileName").textContent = user.name;

        // Show name on hover
        const profile = document.getElementById("navProfile");
        const nameBox = document.getElementById("profileName");

        profile.onmouseenter = () => nameBox.style.display = "block";
        profile.onmouseleave = () => nameBox.style.display = "none";

    } else {
        // Not logged in
        document.getElementById("navLogin").style.display = "inline-block";
        document.getElementById("navProfile").style.display = "none";
    }
}


window.onload = function () {
    const user = JSON.parse(localStorage.getItem("userData"));
    const isLogged = localStorage.getItem("isLoggedIn");

    if (user && isLogged === "true") {
        showProfile(user);
    } else {
        showLoginButton();
    }
};

// SHOW LOGIN BUTTON
function showLoginButton() {
    document.getElementById("loginNav").style.display = "block";
    document.getElementById("profileNav").style.display = "none";
}

// SHOW PROFILE ICON
function showProfile(user) {
    document.getElementById("loginNav").style.display = "none";
    document.getElementById("profileNav").style.display = "block";

    document.getElementById("profilename").innerText = "Name: " + user.name;
    document.getElementById("profileusername").innerText = "User: " + user.username;
}

