const {
  retrieveNotifications,
} = require("./services/notificationService");

async function displayPriorityNotifications() {
  console.log(
    "\n========= PRIORITY INBOX =========\n"
  );

  const topNotifications =
    await retrieveNotifications();

  if (topNotifications.length === 0) {
    console.log("No notifications available");
    return;
  }

  topNotifications.forEach((notification, index) => {
    console.log(`Notification ${index + 1}`);
    console.log(`ID: ${notification.ID}`);
    console.log(`Category: ${notification.Type}`);
    console.log(`Message: ${notification.Message}`);
    console.log(
      `Created At: ${notification.Timestamp}`
    );
    console.log(
      `Priority Score: ${notification.score.toFixed(
        2
      )}`
    );

    console.log(
      "----------------------------------------"
    );
  });
}

displayPriorityNotifications();