'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Leaf & Lintel enquiry from ${form.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone')}\nInterest: ${form.get('interest')}\n\nMessage:\n${form.get('message')}`
    );
    window.location.href = `mailto:hello@leafandlintel.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-paper p-6 shadow-elegant sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Name
          <input required name="name" className="rounded-md border border-charcoal/15 bg-white px-4 py-3 outline-none transition focus:border-gold" />
        </label>
        <label className="grid gap-2 text-sm">
          Email
          <input required type="email" name="email" className="rounded-md border border-charcoal/15 bg-white px-4 py-3 outline-none transition focus:border-gold" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Phone
          <input name="phone" className="rounded-md border border-charcoal/15 bg-white px-4 py-3 outline-none transition focus:border-gold" />
        </label>
        <label className="grid gap-2 text-sm">
          I am interested in
          <select name="interest" className="rounded-md border border-charcoal/15 bg-white px-4 py-3 outline-none transition focus:border-gold">
            <option>Landlord partnership</option>
            <option>Available rooms</option>
            <option>Property management</option>
            <option>Investment partnership</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Message
        <textarea required name="message" rows={5} className="rounded-md border border-charcoal/15 bg-white px-4 py-3 outline-none transition focus:border-gold" />
      </label>
      <button className="mt-2 rounded-md bg-forest px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-charcoal">
        Send enquiry
      </button>
      {sent && <p className="text-sm text-stone">Your email app should now open with the enquiry prepared.</p>}
    </form>
  );
}
