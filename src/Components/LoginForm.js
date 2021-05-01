import { useState } from 'react';
import axios from 'axios';

const projectID = 'f66442c4-9c1a-4d93-a617-55b25a58df2d';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials, enter placeholder username.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Room</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={username} onChange={(e) =>
           setUsername(e.target.value)} className="input" 
           placeholder="admin/user2/user3" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"
           placeholder="123 /1234" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;