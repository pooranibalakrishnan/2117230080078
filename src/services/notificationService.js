const axios = require("axios");

const { API_ENDPOINT } = require("../config/constants");

const {
  determinePriority,
} = require("../utils/priorityCalculator");

async function retrieveNotifications() {
  try {
    const response = await axios.get(API_ENDPOINT);

    const notificationList =
      response.data.notifications || [];

    const processedNotifications =
      notificationList.map((item) => {
        return {
          ...item,
          score: determinePriority(item),
        };
      });

    processedNotifications.sort((first, second) => {
      return second.score - first.score;
    });

    return processedNotifications.slice(0, 10);
  } catch (error) {
    console.log(
      "\nAPI connection could not be established."
    );

    console.log(
      "Using fallback sample notifications.\n"
    );

    // fallback data
    const fallbackNotifications = [
      {
        ID: "A101",
        Type: "Placement",
        Message: "Microsoft hiring drive",
        Timestamp: "2026-05-06 10:30:00",
      },
      {
        ID: "A102",
        Type: "Result",
        Message: "Mid-semester results published",
        Timestamp: "2026-05-06 09:45:00",
      },
      {
        ID: "A103",
        Type: "Event",
        Message: "Tech symposium tomorrow",
        Timestamp: "2026-05-06 08:00:00",
      },
    ];

    const rankedNotifications =
      fallbackNotifications.map((item) => {
        return {
          ...item,
          score: determinePriority(item),
        };
      });

    rankedNotifications.sort((a, b) => {
      return b.score - a.score;
    });

    return rankedNotifications;
  }
}

module.exports = {
  retrieveNotifications,
};