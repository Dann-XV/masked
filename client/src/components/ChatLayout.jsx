
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'
import WelcomeScreen from './WelcomeScreen'
import ThemeToggle from './ThemeToggle'

export default function ChatLayout() {
  const [selectedContact, setSelectedContact] = useState(null)
  const [showContacts, setShowContacts] = useState(false)

  function handleSelectContact(contact) {
    if (selectedContact?.id === contact.id) {
      setSelectedContact(null)
      setShowContacts(false)
      return
    }

    setSelectedContact(contact)
    setShowContacts(false)
  }

  function handleBack() {
    setSelectedContact(null)
    setShowContacts(true)
  }

  function handleWelcomeBack() {
    setShowContacts(false)
  }

  return (
    <main className="h-dvh w-full overflow-hidden bg-[#FFFCF7] dark:bg-[#111111]">
      <div className="flex h-full w-full overflow-hidden">

        
        <aside className="hidden h-full w-[320px] shrink-0 md:flex lg:w-90">
          <Sidebar
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
          />
        </aside>

       
        {showContacts && !selectedContact && (
          <div className="flex h-full w-full flex-col md:hidden">
            <button
              type="button"
              onClick={handleWelcomeBack}
              className="flex shrink-0 items-center gap-2 border-b border-[#29211E]/10 bg-white px-4 py-3 text-sm text-[#C92F32] dark:border-white/10 dark:bg-[#171717]"
            >
              <ArrowLeft size={18} strokeWidth={2} />
              Back
            </button>

            <div className="min-h-0 flex-1">
              <Sidebar
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
              />
            </div>
          </div>
        )}

       
        <section
          className={`h-full min-h-0 min-w-0 flex-1 ${
            selectedContact
              ? 'flex'
              : showContacts
                ? 'hidden md:flex'
                : 'flex'
          }`}
        >
          {selectedContact ? (
            <div className="flex h-full min-h-0 w-full flex-col">
              
              <button
                type="button"
                onClick={handleBack}
                className="flex shrink-0 items-center gap-2 border-b border-[#29211E]/10 bg-white px-4 py-3 text-sm text-[#C92F32] md:hidden dark:border-white/10 dark:bg-[#171717]"
              >
                <ArrowLeft size={18} strokeWidth={2} />
                Back
              </button>

              <div className="min-h-0 flex-1">
                <ChatWindow
                  key={selectedContact.id}
                  contact={selectedContact}
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-0 w-full flex-col">
              
              <div className="relative min-h-0 flex-1">
                
                <div className="absolute right-4 top-4 z-10 md:hidden">
                  <ThemeToggle />
                </div>

                <WelcomeScreen />
              </div>

              
              <div className="border-t border-[#29211E]/10 p-4 md:hidden dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setShowContacts(true)}
                  className="w-full rounded-xl bg-[#C92F32] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View conversations
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
