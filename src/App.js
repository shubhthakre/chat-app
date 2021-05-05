import {ChatEngine} from 'react-chat-engine';

 import ChatFeed from './Components/ChatFeed';
import './App.css';
import LoginForm from './Components/LoginForm';
import Darkmode from './Components/Darkmode';


const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    const handleSignOut = () => {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        window.location.reload();
      };
    

    return(
        <div>
        <nav className="navbar" id="overlay">
        
         <button type="button" className="btn" onClick={handleSignOut}>
          SignOut
        </button>
        </nav>
        <ChatEngine
        
            height='97vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
			projectID='f66442c4-9c1a-4d93-a617-55b25a58df2d'
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

           
            />
        </div> )
}

export default App;