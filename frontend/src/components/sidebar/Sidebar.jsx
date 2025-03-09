import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="border-r border-slate-500 p-3 flex flex-col bg-gray-800 w-64 h-screen overflow-y-auto">
      {/* Поиск */}
      <SearchInput />
      <div className="divider px-3"></div>

      {/* Список контактов */}
      <div className="flex-1 overflow-y-auto">
        <Conversations toggleSidebar={toggleSidebar} />
      </div>

      {/* Кнопка выхода */}
      <div className="mt-auto">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;