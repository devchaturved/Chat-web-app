import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis';
import Conversation from './Conversation'
const Convesations = () => {
  const {loading,conversations} = useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation,idx) =>(
        <Conversation
        key={conversation._id}
        conversation = {conversation}
        emoji = {getRandomEmoji()}
        lastIdx = {idx === conversations.length-1}
        />
      ))}

      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Convesations







// import Conversation from '../sidebar/Conversation'
// const Convesations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default Convesations
