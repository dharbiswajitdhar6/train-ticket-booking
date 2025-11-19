window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    openPopupsignup();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("myBookingsContainer");
  
const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
  localStorage.setItem("allBookings", JSON.stringify([]));
  }
  const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];

  if (allBookings.length === 0) {
    container.innerHTML = "<p>No bookings yet.</p>";
    return;
  }
 
  allBookings.reverse().forEach(booking => {
    const card = document.createElement('div');
    card.classList.add('booking-card');

    let passengersHTML = '';
    booking.passengers.forEach(p => {
      passengersHTML += `<p><strong>${p.name}</strong> (Age: ${p.age}, ${p.gender}, ${p.berth})</p>`;
    });

    card.innerHTML = `
      <div class="booking-header">
        <h3>${booking.trainName} (${booking.trainNum})</h3>
        <p class="city-line" style="font-weight: 700;">${booking.from.toUpperCase()} → ${booking.to.toUpperCase()}</p>
        <span class="pnr"><strong>PNR: ${booking.pnr}</strong></span>
      </div>

      <div class="booking-details">
        <p><strong>Travel Date:</strong> ${booking.tdate}</p>
        <p><strong>Username:</strong> ${booking.username}</p>
        <p><strong>Date Booked:</strong> ${booking.bookingDate}</p>
        <p><strong>Coach:</strong> ${booking.coach}</p>
        <p><strong>Total Fare:</strong> ₹${booking.totalFare}</p>
        <p><strong>Passengers:</strong></p>
        <div class="passengers-list">${passengersHTML}</div>
      </div>`;

    container.appendChild(card);
  });
});
console.log(JSON.parse(localStorage.getItem("allBookings"))[3]);
