import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation, isSidebarOpen, toggleSidebar } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => {
      // Cleanup function (unmounts)
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Кнопка для отображения/скрытия боковой панели */}
      {!selectedConversation ? (
        // Если разговор не выбран, кнопка в правом верхнем углу экрана
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-lg z-20"
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            {/* Бургер / Крестик */}
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></div>
          </div>
        </button>
      ) : (
        // Если разговор выбран, кнопка внутри заголовка
        <div className="bg-slate-500 px-4 py-2 mb-2 flex justify-between items-center">
          <div>
            <span className="label-text">To:</span>{' '}
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-blue-500 text-white p-2 rounded-lg"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              {/* Бургер / Крестик */}
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></div>
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></div>
            </div>
          </button>
        </div>
      )}

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-5xl text-center" />
      </div>
    </div>
  );
};