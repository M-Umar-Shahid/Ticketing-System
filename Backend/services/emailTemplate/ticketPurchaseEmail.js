const ticketPurchaseEmailTemplate = (user, ticketDetails) => {
    return `
      <h1>Ticket Purchase Confirmation</h1>
      <p>Dear ${user.first_name} ${user.last_name},</p>
      <p>Thank you for your purchase! Here are your ticket details:</p>
      <ul>
        <li><strong>Event:</strong> ${ticketDetails.eventName}</li>
        <li><strong>Date:</strong> ${ticketDetails.eventDate}</li>
        <li><strong>Ticket Quantity:</strong> ${ticketDetails.quantity}</li>
        <li><strong>Total Price:</strong> $${ticketDetails.totalPrice}</li>
      </ul>
      <p>We look forward to seeing you at the event!</p>
      <p>Best regards,</p>
      <p>Your Event Team</p>
    `;
  };
  
  module.exports = ticketPurchaseEmailTemplate;
  