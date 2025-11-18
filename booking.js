
window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    openPopupsignup();
  }
});
document.addEventListener("DOMContentLoaded", () => {
    let name = localStorage.getItem("trainname");
    let num = localStorage.getItem("trainnum");
    let coach = localStorage.getItem("coach");
    let coachp = localStorage.getItem("coachprice");
    let tdate = localStorage.getItem("date");

    document.getElementById("trainname").innerText = name;
    document.getElementById("trainnum").innerText = "Train NO : " + num;
    document.getElementById("coachh").innerText = "Coach : " + coach;
    document.getElementById("coachp").innerText = "Price: ₹ " + coachp;
    document.getElementById("tdate").innerText = "DATE: " + tdate;
});

    


let passengerCount = 0;

function addPassenger() {
    passengerCount++;

    const container = document.getElementById("passengerContainer");
    const div = document.createElement("div");
    div.classList.add("passenger-details"); 
    div.id = `passenger-${passengerCount}`;

    div.innerHTML = `
        <h3>Passenger ${passengerCount}</h3>
        Name : <input type="text" id="name-${passengerCount}" placeholder="Enter Name" required style="width:300px; border-radius:20px; border:1px solid #1a4d8f;text-align:center;color:#1a4d8f;"><br>
        Age : <input type="number" id="age-${passengerCount}" placeholder="Enter Age" required style="width:100px; border-radius:20px; border:1px solid #1a4d8f;text-align:center;color:#1a4d8f;"><br>
        <p> Choose your Berth :  
        <select id="berth-${passengerCount}" name="berth" style="color:rgb(84, 144, 213);;width: 200px; height:25px;border-radius:20px; border:1px solid #1a4d8f;text-align:center;" >
            <option selected disabled>Select Berth</option>
            <option value="Upper">Upper</option>
            <option value="Lower">Lower</option>
            <option value="Middle">Middle</option>
            <option value="SideUpper">SideUpper</option>
            <option value="SideLower">SideLower</option>
        </select><br><br></p>
        <p> Gender:  
            <select id="gender-${passengerCount}" name="gender"style="color:rgb(84, 144, 213);;width: 200px; height:25px;border-radius:20px; border:1px solid #1a4d8f;text-align:center;"  >
                <option  selected disabled >Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select><br><br></p>
    
        <button class="btn btn-success btn-small" onclick="savePassenger(${passengerCount})">Save</button>
    `;

    container.appendChild(div);
}

function savePassenger(id) {
    const name = document.getElementById(`name-${id}`).value;
    const age = document.getElementById(`age-${id}`).value;
    const berth = document.getElementById(`berth-${id}`).value;
    const gender = document.getElementById(`gender-${id}`).value;

    if (!name || !age||!berth||!gender) {
        alert("Please fill all details before saving!");
        return;
    }

    let passengers = JSON.parse(localStorage.getItem("passengers")) || [];
    let existingPassengerIndex = passengers.findIndex(p => p.id === id);
    if (existingPassengerIndex > -1) {
        passengers[existingPassengerIndex] = { id, name, age, berth, gender }; // Update
    } else {
        passengers.push({ id, name, age, berth, gender }); // Add new
    }

    localStorage.setItem("passengers", JSON.stringify(passengers));
    alert(`Passenger ${id} Details Saved Successfully ✅`);
}


function removeLastPassenger() {
    if (passengerCount === 0) {
        alert("No passengers to remove!");
        return;
    }

    const lastDiv = document.getElementById(`passenger-${passengerCount}`);

    if (lastDiv) {
        lastDiv.remove();
    }

    let passengers = JSON.parse(localStorage.getItem("passengers")) || [];
    passengers = passengers.filter(p => p.id !== passengerCount);
    localStorage.setItem("passengers", JSON.stringify(passengers));

    passengerCount--;
}

function confirmbooking() {
    let passengers = JSON.parse(localStorage.getItem("passengers")) || [];

    if (passengers.length === 0) {
        alert("Please add and save at least one passenger before confirming!");
        return;
    }

    if (passengers.length !== passengerCount) {
         alert("Please make sure all added passengers are saved before confirming!");
         return;
    }

    localStorage.setItem("ticket", passengerCount);
    window.location.href = "confirmbooking.html";
}

