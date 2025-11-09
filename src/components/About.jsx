import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1627752800709-e0d919ba7b40?q=80&w=1640&auto=format&fit=crop"
              alt="Dhaka fabric and tailoring"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Crafted in Kathmandu</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Our atelier preserves Nepal’s rich heritage with contemporary tailoring. We source
              premium fabrics, celebrate Dhaka patterns, and hand-finish each piece for a refined fit.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Custom measurements and fittings</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Wedding, festival, and formal collections</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Ethical production, lasting quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
