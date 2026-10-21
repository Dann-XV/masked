export default function ChatHeader({ contact }) {
  return (
    <header className="flex items-center justify-between border-b border-[#29211E]/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#171717] sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${contact.color}`}>
          {contact.initials}
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-[#29211E] dark:text-white">
            {contact.name}
          </h2>

          <p className="mt-0.5 text-xs text-[#887C73] dark:text-white/45">
            {contact.online ? 'Online' : contact.username}
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="More conversation options"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#887C73] transition-colors hover:bg-[#F7F0E6] dark:text-white/60 dark:hover:bg-white/5"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>
    </header>
  )
}
