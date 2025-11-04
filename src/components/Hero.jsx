import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/30 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Mulai karir digitalmu
          </div>
          <h1 className="font-extrabold tracking-tight text-gray-900 text-4xl sm:text-5xl lg:text-6xl">
            Ayo Tingkatkan Karir Digital Bersama Kami!
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Bergabunglah dengan ribuan pembelajar. Akses kursus berkualitas yang diajar oleh para ahli industri,
            lengkap dengan proyek nyata dan dukungan mentor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start justify-center">
            <a
              href="#courses"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition"
            >
              Mulai Belajar
            </a>
            <a
              href="#features"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Lihat Keunggulan
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20" />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/10 to-emerald-500/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
              alt="Belajar Online"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
