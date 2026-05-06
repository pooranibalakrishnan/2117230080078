import {
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

function NotificationCard({ notification }) {
  if (!notification) {
    return null;
  }

  return (
    <Card
      sx={{
        width: 300,
        margin: 2,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Chip
          label={
            notification.Type ||
            notification.type ||
            "Notification"
          }
          color="primary"
          sx={{ marginBottom: 2 }}
        />

        <Typography variant="h6">
          {notification.Message ||
            notification.message}
        </Typography>

        <Typography
          variant="body2"
          sx={{ marginTop: 1 }}
        >
          {notification.Timestamp ||
            notification.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;