import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-blue-50 text-gray-900">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <footer className="py-10 border-t mt-8 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} LMS Platform. Dibuat dengan cinta untuk pembelajar Indonesia.
        </div>
      </footer>
    </div>
  )
}

export default App
