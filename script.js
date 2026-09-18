const addButton = document.getElementById("add-task");

const taskName = document.getElementById("task-name");

const taskDate = document.getElementById("task-date");

const deadlineList = document.getElementById("deadline-list");


addButton.addEventListener("click", function () {

    const name = taskName.value;

    const date = taskDate.value;


    // Check if both fields are filled

    if (name === "" || date === "") {

        alert("Please enter a task and deadline!");

        return;
    }


    // Calculate days remaining

    const today = new Date();

    const deadlineDate = new Date(date);

    const difference = deadlineDate - today;

    const daysLeft = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );


    // Decide deadline message

    let deadlineMessage;


    if (daysLeft < 0) {

        deadlineMessage = "❌ Overdue";

    } else if (daysLeft === 0) {

        deadlineMessage = "🚨 Due today";

    } else if (daysLeft === 1) {

        deadlineMessage = "🔥 Due tomorrow";

    } else {

        deadlineMessage = `⏰ ${daysLeft} days left`;
    }


    // Create deadline card

    const deadline = document.createElement("div");

    deadline.classList.add("deadline-item");


    deadline.innerHTML = `

        <div>

            <h3>📚 ${name}</h3>

            <p>Due: ${date}</p>

        </div>

        <span class="days-left">

            ${deadlineMessage}

        </span>

        <div class="deadline-actions">

            <button class="complete-button">
                ✓
            </button>

            <button class="delete-button">
                ×
            </button>

        </div>

    `;


    // Add deadline to the page

    deadlineList.appendChild(deadline);


    // Complete button

    const completeButton =
        deadline.querySelector(".complete-button");


    completeButton.addEventListener("click", function () {

        deadline.classList.toggle("completed");

    });


    // Delete button

    const deleteButton =
        deadline.querySelector(".delete-button");


    deleteButton.addEventListener("click", function () {

        deadline.remove();

    });


    // Clear input boxes

    taskName.value = "";

    taskDate.value = "";

});