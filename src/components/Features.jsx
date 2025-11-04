import { motion } from 'framer-motion'
import { Target, Award, Users } from 'lucide-react'

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  const items = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Kurikulum Relevan',
      desc:
        'Materi dirancang bersama ahli industri agar Anda menguasai skill yang paling dicari saat ini.',
      color: 'from-blue-500/15',
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Mentor Profesional',
      desc:
        'Belajar langsung dari praktisi berpengalaman yang membimbing dari dasar hingga mahir.',
      color: 'from-emerald-500/15',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Komunitas Solid',
      desc:
        'Gabung komunitas aktif untuk kolaborasi proyek dan perluas jaringan profesional Anda.',
      color: 'from-purple-500/15',
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Kenapa Memilih Kami?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pengalaman belajar modern yang interaktif, terstruktur, dan berdampak langsung pada karir Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.color} to-transparent blur-2xl rounded-full`} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-md text-blue-600">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
