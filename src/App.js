import {ChatEngine} from 'react-chat-engine';

// import ChatFeed from './Components/ChatFeed';
import './App.css';


const App = () =>{
    return(
        <ChatEngine
            height="100vh"
            projectID="15fff267-0c2b-407a-bb32-6d644fbb7f65"
            userName="shubh"
            userSecret="123"
            // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

           
   /> )
}

export default App;