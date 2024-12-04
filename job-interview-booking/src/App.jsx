import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slot, setSlot] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && slot) {
      console.log(`Interview booked for: ${name} (${email}) at ${slot}`);
      setShowConfirmation(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Interview Booking System</h1>
        <p>Choose a suitable slot for your job interview.</p>
      </header>

      {!showConfirmation ? (
        <section id="booking-form" className="fadeIn">
          <h2>Book Your Interview Slot</h2>

          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="slot">Choose a Slot:</label>
            <select
              id="slot"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Select a slot
              </option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
            </select>

            <button type="submit" className="submit-btn">Book Interview</button>
          </form>
        </section>
      ) : (
        <section id="confirmation" className="fadeIn">
          <h2>Booking Confirmation</h2>
          <p>Thank you for booking your interview. You will receive a confirmation email shortly.</p>
        </section>
      )}

      <footer>
        <p>&copy; 2024 Job Interview Booking System</p>
      </footer>
    </div>
  );
}

export default App;
