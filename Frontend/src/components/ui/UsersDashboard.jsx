import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExportIcon from "@mui/icons-material/ImportExport";

const UserDashboard = () => {
  // Attendees data
  const attendees = [
    { id: 1, firstName: "Marcus", lastName: "Stanton", reply: "Attending" },
    { id: 2, firstName: "Abram", lastName: "Culhane", reply: "Attending" },
    { id: 3, firstName: "John", lastName: "Doe", reply: "Maybe Attending" },
    { id: 4, firstName: "Jane", lastName: "Doe", reply: "Not Attending" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter attendees based on search term
  const filteredAttendees = attendees.filter(
    (attendee) =>
      attendee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle edit and delete
  const handleEdit = (id) => {
    console.log(`Edit attendee with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete attendee with id: ${id}`);
  };

  return (
    <Box sx={{ p: 2, bgcolor: "#f4f6f8", height: "100vh" }}>
      {/* Overview Statistics */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#4caf50" }}>
              589
            </Typography>
            <Typography variant="body1">Total Events</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#ff9800" }}>
              267
            </Typography>
            <Typography variant="body1">Attending</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#f44336" }}>
              37
            </Typography>
            <Typography variant="body1">Not Attending</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#9c27b0" }}>
              $16,786
            </Typography>
            <Typography variant="body1">Gross Sales</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Search and Filter Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <TextField
          variant="outlined"
          label="Search by Name, Email, Confirmation"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1, mr: 2 }}
        />
        <Button variant="contained" sx={{ mr: 2 }}>
          Add Filter
        </Button>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <ExportIcon />
        </IconButton>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Reply</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAttendees.map((attendee) => (
              <TableRow key={attendee.id}>
                <TableCell>{attendee.firstName}</TableCell>
                <TableCell>{attendee.lastName}</TableCell>
                <TableCell>{attendee.reply}</TableCell>
                <TableCell>
                  {/* Edit and Delete Buttons */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(attendee.id)}
                    sx={{ mr: 2 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(attendee.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserDashboard;
