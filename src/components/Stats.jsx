import { motion } from 'framer-motion'
import CountUpNumber from './CountUpNumber'

export default function Stats() {
  const stats = [
    { label: 'Kursus Aktif', value: 128, color: 'text-blue-700', glow: 'bg-blue-400' },
    { label: 'Siswa Terdaftar', value: 45210, color: 'text-emerald-700', glow: 'bg-emerald-400' },
    { label: 'Mentor Ahli', value: 85, color: 'text-purple-700', glow: 'bg-purple-400' },
    { label: 'Ulasan Positif', value: 9720, color: 'text-amber-700', glow: 'bg-amber-400' },
  ]

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative p-6 rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl text-center overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-36 h-36 ${s.glow}/40 blur-3xl rounded-full`} />
              <div className="relative z-10">
                <div className={`text-4xl font-extrabold ${s.color}`}>
                  <CountUpNumber from={0} to={s.value} duration={1000} />
                </div>
                <p className="mt-2 text-sm text-gray-600">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
