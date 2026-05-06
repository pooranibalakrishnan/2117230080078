const { PRIORITY_WEIGHTS } = require("../config/constants");

function calculateTimeFactor(timestamp) {
  const now = Date.now();

  const notificationTime = new Date(timestamp).getTime();

  const differenceInMinutes =
    (now - notificationTime) / (1000 * 60);

  const freshnessScore = Math.max(0, 120 - differenceInMinutes);

  return freshnessScore;
}

function determinePriority(notification) {
  const categoryScore =
    PRIORITY_WEIGHTS[notification.Type] || 25;

  const timeScore = calculateTimeFactor(
    notification.Timestamp
  );

  return categoryScore + timeScore;
}

module.exports = {
  determinePriority,
};