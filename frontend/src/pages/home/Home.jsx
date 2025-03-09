import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
import useConversation from '../../zustand/useConversation';

const Home = () => {
  const { isSidebarOpen } = useConversation(); // Получаем состояние боковой панели

  return (
    <div className="flex h-full">
      {/* Боковая панель */}
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative md:translate-x-0 z-10`}
      >
        <Sidebar />
      </div>

      {/* Контейнер сообщений */}
      <MessageContainer />
    </div>
  );
};

export default Home;