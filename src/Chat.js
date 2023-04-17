import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import { Info, StarBorder } from '@mui/icons-material';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {

  const { roomId } = useParams();
  const [roomDetails,setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId)
      .onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }

    db.collection('rooms').doc(roomId)
    .collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot((snapshot) =>
      setRoomMessages(
        snapshot.docs.map(doc => doc.data())
      )
    )

  }, [roomId])
  console.log(roomDetails);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat_channelName">
            <strong> #{roomDetails?.name}</strong>
            <StarBorder/>
          </h4>
        </div>

        <div className="chat__headerRight">
            <p>
                <Info/> Details
            </p>
        </div>
      </div>

      <div className='chat__messages'>
        {roomMessages.map(({message, timestamp,user,userImage}) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>
  );
}

export default Chat