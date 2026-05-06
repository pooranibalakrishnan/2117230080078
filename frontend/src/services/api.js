const notifications = [
  {
    ID: "A101",
    Type: "Placement",
    Message: "Microsoft hiring drive",
    Timestamp: "2026-05-06 10:30 AM",
    priority: 95,
  },
  {
    ID: "A102",
    Type: "Result",
    Message: "Mid semester results published",
    Timestamp: "2026-05-06 09:45 AM",
    priority: 90,
  },
  {
    ID: "A103",
    Type: "Event",
    Message: "Tech symposium tomorrow",
    Timestamp: "2026-05-06 08:00 AM",
    priority: 70,
  },
  {
    ID: "A104",
    Type: "Placement",
    Message: "Amazon internship applications open",
    Timestamp: "2026-05-05 06:30 PM",
    priority: 85,
  },
];

export async function fetchNotifications(
  page = 1,
  limit = 10,
  type = "All"
) {
  let filteredData = notifications;

  if (type !== "All") {
    filteredData = notifications.filter(
      (item) => item.Type === type
    );
  }

  return filteredData.slice(0, limit);
}