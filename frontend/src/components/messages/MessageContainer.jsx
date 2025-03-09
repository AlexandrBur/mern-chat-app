import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import EmojiPicker from 'emoji-picker-react';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation, isSidebarOpen, toggleSidebar } =
    useConversation();
  const { authUser } = useAuthContext();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Состояние для отображения панели эмодзи
  const [message, setMessage] = useState(''); // Состояние для текста сообщения

  useEffect(() => {
    return () => {
      // Cleanup function (unmounts)
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  // Обработчик выбора эмодзи
  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji); // Добавляем эмодзи к тексту сообщения
    setShowEmojiPicker(false); // Закрываем панель эмодзи
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Кнопка для отображения/скрытия боковой панели */}
      {!selectedConversation ? (
        // Если разговор не выбран, кнопка в правом верхнем углу экрана
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-2 right-2 bg-indigo-500 text-white p-2 rounded-lg z-20">
          <div className="w-6 h-6 relative flex items-center justify-center">
            {/* Бургер / Крестик */}
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                isSidebarOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}></div>
          </div>
        </button>
      ) : (
        // Если разговор выбран, кнопка внутри заголовка
        <div className="bg-gray-800 px-4 py-2 mb-2 flex justify-between items-center">
          <div>
            <span className="label-text">Кому:</span>{' '}
            <span className="text-white font-bold">{selectedConversation.fullName}</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-indigo-500 text-white p-2 rounded-lg">
            <div className="w-6 h-6 relative flex items-center justify-center">
              {/* Бургер / Крестик */}
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></div>
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? 'opacity-0' : 'opacity-100'
                }`}></div>
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></div>
            </div>
          </button>
        </div>
      )}

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Messages />
          {/* Панель эмодзи */}
          {showEmojiPicker && (
            <div className="absolute bottom-16 right-4 z-30">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme="dark" // Темная тема
                skinTonesDisabled // Отключаем выбор тонов кожи
                searchDisabled // Отключаем поиск (опционально)
                previewConfig={{ showPreview: false }} // Отключаем превью
                width={300} // Ширина панели
                height={400} // Высота панели
                emojiStyle="native" // Стиль эмодзи
                suggestedEmojisMode={false} // Отключаем предложенные эмодзи
                skinTonePickerLocation="PREVIEW" // Расположение выбора тона кожи
                lazyLoadEmojis // Ленивая загрузка эмодзи
              />
            </div>
          )}
          {/* Контейнер для инпута и кнопки эмодзи */}
          <div className="flex items-center p-2 bg-transparent">
            {/* Кнопка для открытия панели эмодзи */}
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-2 text-gray-400 hover:text-white bg-gray-800 rounded-lg mr-2">
              😊
            </button>
            {/* Инпут для отправки сообщений */}
            <div className="flex-1">
              <MessageInput message={message} setMessage={setMessage} />
            </div>
          </div>
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