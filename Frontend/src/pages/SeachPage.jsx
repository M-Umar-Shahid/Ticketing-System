import { useState,useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";


const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/protected/events"); // Fetch API call
        const data = await response.json(); // Parse the JSON response
        setEvents(data); // Assuming the API returns an array of events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, []);
  const { register, handleSubmit, reset } = useForm();

  const handleSearch = (data) => {
    
    const { location, date, type } = data;
    const results = events?.filter(
      (event) =>
        (location
          ? event.location.toLowerCase().includes(location.toLowerCase())
          : true) &&
        (date ? event.date === date : true) &&
        (type ? event.type.toLowerCase().includes(type.toLowerCase()) : true)
    );
    setFilteredEvents(results);
    reset();
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", mt: 4, p: 2 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Search Events
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <form onSubmit={handleSubmit(handleSearch)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                {...register("location")}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register("date")}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Type"
                variant="outlined"
                fullWidth
                {...register("type")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Event List */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Event Results
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Box
              key={event.id}
              sx={{
                p: 2,
                mb: 2,
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => handleEventClick(event)}
            >
              <Typography variant="h6">{event.type}</Typography>
              <Typography variant="body1">
                Location: {event.location}
              </Typography>
              <Typography variant="body1">Date: {event.date}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No events found.</Typography>
        )}
      </Paper>

      {/* Event Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Event Details
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Box>
              <Typography variant="h6">{selectedEvent.type}</Typography>
              <Typography variant="body1">
                Location: {selectedEvent.location}
              </Typography>
              <Typography variant="body1">
                Date: {selectedEvent.date}
              </Typography>
              <Typography variant="body1">
                Details: {selectedEvent.details}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SearchPage;
