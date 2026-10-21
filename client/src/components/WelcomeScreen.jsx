export default function WelcomeScreen() {
  return (
    <section className="flex h-full min-h-0 w-full items-center justify-center overflow-y-auto bg-[#FFFCF7] px-6 py-10 dark:bg-[#111111]">
      <div className="flex w-full max-w-md flex-col items-center text-center">
      
        <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#C92F32]/10 ring-1 ring-[#C92F32]/15">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="h-10 w-10"
            aria-hidden="true"
          >
            <path
              d="M10 13.5A6.5 6.5 0 0 1 16.5 7h15a6.5 6.5 0 0 1 6.5 6.5v13a6.5 6.5 0 0 1-6.5 6.5H23l-10 8v-9.5a6.5 6.5 0 0 1-3-5.5v-12.5Z"
              stroke="#C92F32"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M17 20h14M17 26h9"
              stroke="#C92F32"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

       
        <h2 className="text-2xl font-bold tracking-tight text-[#29211E] sm:text-3xl dark:text-white">
          Welcome to Masked<span className="text-[#C92F32]">.</span>
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-6 text-[#887C73] dark:text-white/50">
          Your space. Your rules.
          <br />
          Private conversations, without the noise.
        </p>

        
        <div className="my-8 h-px w-16 bg-[#C92F32]/30" />

        <p className="max-w-xs text-sm leading-6 text-[#887C73] dark:text-white/45">
          Select a conversation from the sidebar to start chatting, or find
          someone using the search bar.
        </p>

       
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#29211E]/10 px-4 py-2 dark:border-white/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-4 w-4 text-[#C92F32]"
            aria-hidden="true"
          >
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path
              d="M8 10V7a4 4 0 0 1 8 0v3"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-xs font-medium text-[#887C73] dark:text-white/50">
            Your space, your conversations
          </span>
        </div>
      </div>
    </section>
  )
}