
const Event = require('../models/Event');
const User = require('../models/User');


exports.createEvent = async (req, res) => {
  try {

    const event = new Event(req.body);
    const userId = event.agent_id
    const user = await User.findById(userId)
    user.role = "Agent"
    await user.save()
    event.ticket_quantity_left = event.ticket_quantity
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({status:"Complete"}).populate('agent_id', 'first_name last_name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getUpcomingEvents = async (req, res) => {
  try {
    const currentDate = new Date();
    const events = await Event.find({ 
      status: "Approved",
      date_from: { $gte: currentDate }
    })
    .populate('agent_id', 'first_name last_name email')
    .sort({ date_from: 1 }) // Sort by the event start date
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAgentsEvents = async (req, res) => {
  try {
    const agentId = req.params.agentId;
    
    const events = await Event.find({ agent_id: agentId }).populate('agent_id', 'first_name last_name email');
    if (!events || events.length === 0) {
      return res.status(404).json({ error: 'No events found for this organizer' });
    }

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('agent_id', 'first_name last_name email');
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }}
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
