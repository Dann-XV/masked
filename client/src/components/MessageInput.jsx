import { useState } from 'react'

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = text.trim()

    if (!trimmedText) return

    onSend(trimmedText)
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-[#29211E]/10 bg-white p-4 dark:border-white/10 dark:bg-[#171717] sm:px-6"
    >
      <div className="flex items-end gap-3 rounded-2xl border border-[#29211E]/10 bg-[#F7F0E6] p-2 dark:border-white/10 dark:bg-[#202020]">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              event.currentTarget.form.requestSubmit()
            }
          }}
          placeholder="Write a message..."
          aria-label="Write a message"
          rows={1}
          className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-[#29211E] outline-none placeholder:text-[#887C73] dark:text-white dark:placeholder:text-white/35"
        />

        <button
          type="submit"
          disabled={!text.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C92F32] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>

      <p className="mt-2 text-center text-[10px] text-[#887C73] dark:text-white/35">
        Enter to send · Shift + Enter for a new line
      </p>
    </form>
  )
}
