import {ChatEngine} from 'react-chat-engine';

 import ChatFeed from './Components/ChatFeed';
import './App.css';
import LoginForm from './Components/LoginForm';


const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
			projectID='f66442c4-9c1a-4d93-a617-55b25a58df2d'
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

           
   /> )
}

export default App;