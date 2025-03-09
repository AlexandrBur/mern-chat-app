import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  // Новое состояние для управления боковой панелью
  isSidebarOpen: true, // По умолчанию панель открыта
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })), // Функция для переключения состояния
}));

export default useConversation;