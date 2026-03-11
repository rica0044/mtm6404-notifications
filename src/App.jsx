import { useState } from 'react';
import './App.css';
import notificationsData from './notifications';

function NotificationCard({ children, onClear }) {
  return (
    <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {children}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearOne = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications Manager</h1>
      
      <p>Count: {notifications.length}</p>

      {notifications.map((item) => (
        <NotificationCard key={item.id} onClear={() => clearOne(item.id)}>
          <h4>{item.name}</h4>
          <p>{item.message}</p>
        </NotificationCard>
      ))}

      {notifications.length > 0 && (
        <button onClick={clearAll} style={{ marginTop: '20px', color: 'red' }}>
          Clear All Notifications
        </button>
      )}
    </div>
  );
}

export default App;