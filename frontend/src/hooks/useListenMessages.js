import { useEffect } from 'react';
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from '../assets/sounds/notification.mp3'
const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage",(newMessage) => 
    {
        const sound = new Audio(notificationSound)
        newMessage.shouldShake = true; // TODO: Implement shaking animation
        sound.play();
        setMessages([...messages,newMessage])
    })

    return () => socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessages
