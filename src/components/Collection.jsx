import { motion } from "framer-motion";

const items = [
  {
    title: "Daura Suruwal",
    desc: "Classic silhouette refined for comfort and ceremony.",
    img: "https://images.unsplash.com/photo-1636041282381-4c06c2723cb5?q=80&w=1640&auto=format&fit=crop",
    tag: "Premium",
  },
  {
    title: "Kurtha Suruwal",
    desc: "Lightweight, breathable fabrics for everyday elegance.",
    img: "https://images.unsplash.com/photo-1598974345319-414ce98cde1b?q=80&w=1640&auto=format&fit=crop",
    tag: "Basics",
  },
  {
    title: "Dhaka Topi",
    desc: "Heritage patterns woven with precision and pride.",
    img: "https://images.unsplash.com/photo-1520975922284-eca76d9bfee6?q=80&w=1640&auto=format&fit=crop",
    tag: "Signature",
  },
  {
    title: "Coats & Suits",
    desc: "Tailored perfection for weddings and special occasions.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1640&auto=format&fit=crop",
    tag: "Tailored",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Curated Collection</h2>
            <p className="mt-2 text-neutral-600">A selection blending tradition and contemporary tailoring.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl overflow-hidden bg-neutral-50 ring-1 ring-black/5 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium tracking-tight">{item.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-neutral-900 text-white">{item.tag}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
