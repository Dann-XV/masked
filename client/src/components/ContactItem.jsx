
export default function ContactItem({ contact, isSelected, onClick }) {
  const { name, username, initials, color, lastMessage, time, unread, online } =
    contact

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors
        ${
          isSelected
            ? 'bg-[#C92F32]/10'
            : 'hover:bg-[#29211E]/5 dark:hover:bg-white/5'
        }`}
    >
      
      <div className="relative shrink-0">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${color}`}
        >
          {initials}
        </div>

        {online && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500 dark:border-[#171717]" />
        )}
      </div>

      
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="truncate text-sm font-semibold text-[#29211E] dark:text-white">
            {name}
          </span>

          <span className="shrink-0 text-[10px] text-[#887C73] dark:text-white/40">
            {time}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-xs text-[#887C73] dark:text-white/45">
            {lastMessage || username}
          </span>

          {unread > 0 && !isSelected && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-[#C92F32] px-1.5 text-[10px] font-semibold text-white">
              {unread}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}
