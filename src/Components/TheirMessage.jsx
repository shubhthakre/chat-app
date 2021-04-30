import React from 'react'


const TheirMessage = ({lastMessage , message}) => {

    //givving boolean value which going to tell us if this is first message   by user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;


    return(
        <div className='message-row'>
           {isFirstMessageByUser && (
            <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message?.sender?.avatar})` }}
        />
           )}
           {
            message?.attachment?.length > 0

         ?(
              <img
               src={message.attachment[0].file}
               alt="message-attachment"
               className="message-image"
                  style={{marginLeft : isFirstMessageByUser ? "4px " : "48px"}}
        />
          ) :(
            <div className="message" style={{float:'left' , backgroundColor:"#CABCDC"}}>
                     {message.text}
             </div>
          )
           }
           
        </div>
    )
} 

export default TheirMessage;