
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import ContactItem from './ContactItem'
import mockContacts from '../data/mockContacts'

export default function Sidebar({ selectedContact, onSelectContact }) {
  const [search, setSearch] = useState('')

  const filteredContacts = mockContacts.filter((contact) =>
    `${contact.name} ${contact.username}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <aside className="flex h-full w-full flex-col border-r border-[#29211E]/10 bg-white dark:border-white/10 dark:bg-[#171717] md:w-[320px] lg:w-[360px]">
    
      <header className="flex items-center justify-between border-b border-[#29211E]/10 px-5 py-5 dark:border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#29211E] dark:text-white">
            masked<span className="text-[#C92F32]">.</span>
          </h1>
          <p className="mt-1 text-xs text-[#887C73] dark:text-white/45">
            Your space, your conversations.
          </p>
        </div>

        <ThemeToggle />
      </header>

      
      <div className="px-4 pb-3 pt-5">
        <div className="flex items-center gap-3 rounded-xl bg-[#F7F0E6] px-3.5 py-3 dark:bg-white/5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5 shrink-0 text-[#887C73] dark:text-white/40"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" strokeLinecap="round" />
          </svg>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search conversations"
            aria-label="Search contacts"
            className="w-full bg-transparent text-sm text-[#29211E] outline-none placeholder:text-[#887C73] dark:text-white dark:placeholder:text-white/35"
          />
        </div>
      </div>

    
      <div className="flex items-center justify-between px-5 pb-3 pt-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#887C73] dark:text-white/40">
          Messages
        </span>
        <span className="text-xs text-[#887C73] dark:text-white/40">
          {filteredContacts.length} contacts
        </span>
      </div>

    
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        {filteredContacts.length ? (
          filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContact?.id === contact.id}
              onClick={() => onSelectContact(contact)}
            />
          ))
        ) : (
          <p className="px-4 py-8 text-center text-sm text-[#887C73] dark:text-white/45">
            No contacts found.
          </p>
        )}
      </div>

      
      <footer className="border-t border-[#29211E]/10 p-4 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C92F32]/10 text-sm font-bold text-[#C92F32]">
            Y
          </div>
          <div>
            <p className="text-sm font-semibold text-[#29211E] dark:text-white">
              Your account
            </p>
            <p className="text-xs text-[#887C73] dark:text-white/45">
              Private by design
            </p>
          </div>
        </div>
      </footer>
    </aside>
  )
}
