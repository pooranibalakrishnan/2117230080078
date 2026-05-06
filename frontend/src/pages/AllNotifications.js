import { useEffect, useState } from "react";

import {
  Grid,
  Typography,
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import { fetchNotifications } from "../services/api";

function AllNotifications({
  selectedType,
}) {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    loadNotifications();
  }, [selectedType]);

  async function loadNotifications() {
    const data =
      await fetchNotifications(
        1,
        10,
        selectedType
      );
console.log(data);
setNotifications([...data]);
  }

  return (
    <>
      <Typography
        variant="h4"
        sx={{ marginBottom: 3 }}
      >
        All Notifications
      </Typography>

      <Grid container spacing={3}>
        {notifications.map((item) => (
          <Grid item xs={12} md={4} key={item.ID}>
            <NotificationCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AllNotifications;