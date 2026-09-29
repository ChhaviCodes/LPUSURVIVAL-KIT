// Write code below 💖

function panicMode() {
  const message = document.getElementById("panic-message");

  message.textContent =
    "😭 You still have time! Close the distractions and GO STUDY!";
}

function addNote() {
  const input = document.getElementById("noteInput");
  const notesList = document.getElementById("notesList");

  const noteText = input.value;

  if (noteText === "") {
    alert("Write something first! 📝");
    return;
  }

  const note = document.createElement("div");

  note.innerHTML = `
    <p>📌 ${noteText}</p>
    <button onclick="this.parentElement.remove()">🗑️ Delete</button>
  `;

  notesList.appendChild(note);

  input.value = "";
}

function addDeadline() {
  const task = document.getElementById("deadlineInput").value;
  const date = document.getElementById("deadlineDate").value;
  const deadlineList = document.getElementById("deadlineList");

  if (task === "" || date === "") {
    alert("Please enter a task and date! ⏰");
    return;
  }

  const deadline = document.createElement("div");

  deadline.innerHTML = `
    <p>
      📌 <strong>${task}</strong><br>
      📅 Due: ${date}
    </p>
    <button onclick="this.parentElement.remove()">🗑️ Delete</button>
  `;

  deadlineList.appendChild(deadline);

  document.getElementById("deadlineInput").value = "";
  document.getElementById("deadlineDate").value = "";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}