function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-20">
      <section className="w-full rounded-xl2 border border-cx-ink/10 bg-white/90 p-8 shadow-panel backdrop-blur md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cx-moss">
          Company X Design System
        </p>
        <h1 className="text-4xl leading-tight md:text-6xl">Storybook + Tailwind starter</h1>
        <p className="mt-4 max-w-2xl text-lg text-cx-ink/75">
          Run <strong>npm run storybook</strong> to view the Company X brand book and reusable
          UI components for a modern website application.
        </p>
      </section>
    </main>
  )
}

export default App
