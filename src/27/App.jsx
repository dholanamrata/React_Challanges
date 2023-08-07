import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  const handleSent = () => {
    alert(`Sending: "${message}"`);
    setIsSent(true);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSent();
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
      {isSent && <h1>Thank you!</h1>}
    </form>
  );
}
