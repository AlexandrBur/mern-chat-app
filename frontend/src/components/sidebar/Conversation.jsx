import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation, toggleSidebar } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  const handleClick = () => {
    setSelectedConversation(conversation); // Выбираем разговор
    toggleSidebar(); // Закрываем боковую панель
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? 'bg-indigo-500' : ''}
        `}
        onClick={handleClick} // Обработчик клика
      >
        <div className="avatar online">
          <div className={`w-9 rounded-full ${isOnline ? 'avatar-online' : ''}`}>
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-x1">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;