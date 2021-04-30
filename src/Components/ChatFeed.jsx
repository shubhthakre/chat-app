import React from 'react'
import Messageform from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    const { chats , activeChat ,userName ,messages} = props;


    //if chat is exist then finds chats active
    const chat = chats && chats[activeChat];

     const renderReadReceipts = (message ,isMyMessage) =>{

       return chat.people.map((person,index) => person.last_read == message.id && (
            <div
                key ={`read_${index}`}
                className = 'read-receipt'
                style = {{
                    float :isMyMessage ? 'right' : 'left',
                 backgroundImage: message.sender && `url(${person?.person?.avatar})`
                }}
            />
        ))
     }
    //genrating messages

    const renderMessages = () =>{
        //fetch messages
        const keys = Object.keys(messages)//get messages

        // console.log(keys);
       //render messages
        return keys.map((keys,index)=>{

            const message = messages[keys];
            //if this is message find last message
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            return(

                //this div act as a message
                <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className="message-block">
                {
                    isMyMessage     //if it is my message render mymessage if not render thermessage
                    ?<MyMessage message={message}/> //here pass the message as a props
                    :<TheirMessage message={message} lastMessage={message[lastMessageKey]}/>
                }

                </div>
                <div className="read-receipts" 
                          style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                         {renderReadReceipts(message, isMyMessage)}
                 </div>

                </div>
            )

        })
        
    }

    renderMessages();

    if(!chat) return "Loading...";

    return(
        <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
        
                {chat.people.map((person) =>  `${person.person.username}`)}
            </div>
        </div>
        
        {renderMessages()}

        <div style={{ height : '100px'}}/>

    
        <div className='message-form-conatiner'>

        <Messageform {...props} chatId={activeChat}/>

        </div>
            
        </div>
    )
}

export default ChatFeed;