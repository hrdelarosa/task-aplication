import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex flex-col h-[calc(100vh-69px)] pb-6">
        {children}
      </main>
    </div>
  )
}
