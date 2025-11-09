import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll get back to you shortly.");
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Book a Fitting</h2>
            <p className="mt-3 text-neutral-600">
              Tell us what you’re looking for—Daura Suruwal, Kurtha Suruwal, Dhaka Topi, coats or suits.
              We’ll help you with sizing, fabric selection, and delivery timelines.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-neutral-50 ring-1 ring-black/5">
              <p className="text-sm text-neutral-700">Showroom: Jyatha, Thamel, Kathmandu</p>
              <p className="text-sm text-neutral-700">Hours: Sun–Fri, 10:00–18:00</p>
              <p className="text-sm text-neutral-700">Phone: +977 980-0000000</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-neutral-50 p-6 rounded-xl ring-1 ring-black/5">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900" required />
              </div>
              <div>
                <label className="block text-sm font-medium">What are you interested in?</label>
                <select className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>Daura Suruwal</option>
                  <option>Kurtha Suruwal</option>
                  <option>Dhaka Topi</option>
                  <option>Coats & Suits</option>
                  <option>Half Coats</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea rows={4} className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-neutral-800">
                <Send className="h-4 w-4" /> Send request
              </button>
              {status && <p className="text-sm text-emerald-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
