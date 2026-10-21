import { useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

const initialMessages = [
  {
    id: 1,
    sender: 'them',
    text: 'Hey! How have you been?',
    time: '10:40',
  },
  {
    id: 2,
    sender: 'me',
    text: 'I have been good! Just working on something new.',
    time: '10:41',
  },
  {
    id: 3,
    sender: 'them',
    text: 'That sounds interesting 👀',
    time: '10:42',
  },
]

export default function ChatWindow({ contact }) {
  const [messages, setMessages] = useState(initialMessages)

  function handleSend(text) {
    const newMessage = {
      id: Date.now(),
      sender: 'me',
      text,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((currentMessages) => [...currentMessages, newMessage])
  }

  return (
    <section className="flex h-full min-h-0 flex-col bg-[#FFFCF7] dark:bg-[#111111]">
      <ChatHeader contact={contact} />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 sm:p-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </section>
  )
}