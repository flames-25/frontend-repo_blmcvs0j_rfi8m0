import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-white" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900"
            >
              Authentic Nepali Attire, Modern Craft
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-neutral-600 leading-relaxed"
            >
              From everyday elegance to premium ceremonial wear—discover Daura Suruwal,
              Kurtha Suruwal, Dhaka Topi, tailored coats and suits designed with heritage
              and contemporary finesse.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#collection"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-neutral-800"
              >
                Explore Collection
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
              >
                Book a Fitting
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1656503199157-9a0fe1822bdc?q=80&w=1640&auto=format&fit=crop"
                alt="Nepali traditional wear"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow ring-1 ring-black/5">
              <p className="text-sm font-medium">Handcrafted • Tailored • Premium Fabrics</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
