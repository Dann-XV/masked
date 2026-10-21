export default function MessageBubble({ message }) {
  const isOwnMessage = message.sender === 'me'

  return (
    <div
      className={`flex w-full ${
        isOwnMessage ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 sm:max-w-[70%] ${
          isOwnMessage
            ? 'rounded-br-md bg-[#C92F32] text-white'
            : 'rounded-bl-md bg-[#F7F0E6] text-[#29211E] dark:bg-[#252525] dark:text-white'
        }`}
      >
        <p className="whitespace-pre-wrap wrap-break-word text-sm leading-6">
          {message.text}
        </p>

        <div
          className={`mt-1.5 text-right text-[10px] ${
            isOwnMessage
              ? 'text-white/70'
              : 'text-[#887C73] dark:text-white/40'
          }`}
        >
          {message.time}
        </div>
      </div>
    </div>
  )
}