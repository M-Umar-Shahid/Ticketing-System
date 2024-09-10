import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';

export default function AgentsEvent() {
  // Placeholder data to replace backend dependencies
  const event = {
    _id: 1,
    banner: 'https://via.placeholder.com/250x100', // Placeholder banner image
    name: 'Sample Event Name',
    location: 'Sample Location',
    date_from: new Date(), // Static date for demonstration
    entry_type: 'Paid', // 'Free' or 'Paid'
    ticket_price: 20, // Example ticket price
  };

  return (
    <Card className="items-center justify-center hover:scale-y-105 transition-all flex flex-wrap mb-6" sx={{ boxShadow: 3, borderRadius: '8px' }}>
      <CardMedia
        component="img"
        sx={{ width: '250px', height: '100px', borderRadius: '0px' }}
        image={event.banner}
        alt={event.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {event.name}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">
          <strong>Location:</strong> {event.location}
        </Typography>
        <Typography variant="body2">
          <strong>Date:</strong> {new Date(event.date_from).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">
          <strong>Price:</strong> {event.entry_type === 'Free' ? 'Free' : `$${event.ticket_price}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
