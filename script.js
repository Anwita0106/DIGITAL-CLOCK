// Get references to HTML elements with IDs "hour", "minutes", "seconds", and "ampm"
const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

// Function to update the clock
function updateClock() {
  // Get the current hour, minute, and second from the system's date and time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // Initialize the AM/PM indicator to "AM"
  let ampm = "AM";

  // Check if the current hour is greater than 12 (after noon)
  if (h > 12) {
    // If it is, subtract 12 from the hour to get the 12-hour format
    h = h - 12;
    // Update the AM/PM indicator to "PM"
    ampm = "PM";
  }

  // Add leading zeros to hour, minute, and second if they are less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update the text content of the HTML elements with the updated time values
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = ampm;

  // Schedule the updateClock function to run again after 1000 milliseconds (1 second)
  setTimeout(() => {
    updateClock();
  }, 1000);
}

// Call the updateClock function to start updating the clock
updateClock();