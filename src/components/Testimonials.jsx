import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Kualitas kursusnya luar biasa. Materinya up-to-date dan langsung bisa diterapkan di kerja.',
    name: 'Jane Doe',
    company: 'Google',
    img: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    quote:
      'Konten yang relevan dan penyajian interaktif bikin belajar jadi menyenangkan.',
    name: 'John Smith',
    company: 'Designer',
    img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote:
      'Jadwal fleksibel dan mentor responsif membuat progres belajar saya konsisten.',
    name: 'Emily White',
    company: 'Developer',
    img: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
  {
    quote:
      'Komunitasnya aktif dan suportif. Banyak peluang kolaborasi proyek nyata.',
    name: 'Michael Brown',
    company: 'Data Scientist',
    img: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Apa Kata Mereka</h2>
        <p className="mt-2 text-gray-600">Pengalaman nyata dari para pembelajar</p>
      </div>

      <div className="[mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
        {[...Array(2)].map((_, i) => (
          <motion.ul
            key={i}
            className="w-full inline-flex flex-nowrap items-stretch gap-6 will-change-transform"
            animate={{ x: i === 0 ? ['0%', '-100%'] : ['-100%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            aria-hidden={i === 1}
          >
            {testimonials.concat(testimonials).map((t, idx) => (
              <li key={`${i}-${idx}`} className="shrink-0 w-[380px]">
                <div className="relative h-full p-6 rounded-3xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-xl text-left overflow-hidden">
                  <div className="absolute -top-16 -left-16 w-44 h-44 bg-indigo-300/30 blur-3xl rounded-full" />
                  <div className="relative z-10">
                    <Quote className="w-8 h-8 text-indigo-500 mb-4" />
                    <p className="text-gray-700 leading-relaxed">{t.quote}</p>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        src={t.img}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        ))}
      </div>
    </section>
  )
}
