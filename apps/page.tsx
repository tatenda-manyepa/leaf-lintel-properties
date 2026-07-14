import Image from 'next/image';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  HomeModernIcon,
  KeyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import CinematicHero from '@/components/CinematicHero';

const services = [
  {
    title: 'HMO Development',
    description: 'Thoughtful refurbishment and conversion of residential properties into welcoming professional shared homes.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Rent-to-Rent Partnerships',
    description: 'A hands-off solution for suitable landlords, supported by proactive communication and responsible property care.',
    icon: KeyIcon
  },
  {
    title: 'Professional Accommodation',
    description: 'Comfortable, well-presented rooms and communal spaces designed around modern professional living.',
    icon: HomeModernIcon
  }
];

const values = [
  ['Reliable communication', 'Clear, respectful updates for landlords, residents and partners.'],
  ['Quality-led homes', 'Careful attention to safety, comfort, presentation and practical living.'],
  ['Responsible management', 'A long-term approach to protecting properties and creating positive tenancies.'],
  ['Local understanding', 'A growing Midlands portfolio shaped by the needs of local professionals.']
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="section-shell flex items-center justify-between py-6">
          <Logo light />
          <nav className="hidden items-center gap-8 text-sm text-paper/80 lg:flex">
            <a href="#about" className="hover:text-soft-gold">About</a>
            <a href="#services" className="hover:text-soft-gold">What we do</a>
            <a href="#projects" className="hover:text-soft-gold">Projects</a>
            <a href="#landlords" className="hover:text-soft-gold">Landlords</a>
          </nav>
          <a href="#contact" className="rounded-md border border-soft-gold/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-paper transition hover:bg-soft-gold hover:text-charcoal">
            Enquire
          </a>
        </div>
      </header>

      <CinematicHero />

      <section id="about" className="bg-paper py-24 lg:py-32">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-t-[10rem] rounded-b-2xl bg-cream shadow-elegant">
            <Image src="/images/about.svg" alt="Refined property exterior placeholder" fill className="object-cover" />
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow">About Leaf &amp; Lintel</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Homes designed with care. Partnerships built on trust.</h2>
            <div className="mt-6 h-px w-24 bg-gold" />
            <p className="mt-7 leading-8 text-stone">
              We are a growing property business focused on transforming well-located homes into thoughtfully designed accommodation for working professionals. Our approach combines practical property expertise with high standards of presentation, management and communication.
            </p>
            <p className="mt-5 leading-8 text-stone">
              From refurbishment through to day-to-day operation, every decision is guided by a simple aim: to create homes residents are proud to live in and relationships landlords can feel confident in.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3"><CheckBadgeIcon className="h-6 w-6 shrink-0 text-gold" /><span>Professional shared living</span></div>
              <div className="flex gap-3"><ShieldCheckIcon className="h-6 w-6 shrink-0 text-gold" /><span>Responsible property care</span></div>
              <div className="flex gap-3"><SparklesIcon className="h-6 w-6 shrink-0 text-gold" /><span>Design-conscious finishes</span></div>
              <div className="flex gap-3"><BuildingOffice2Icon className="h-6 w-6 shrink-0 text-gold" /><span>Midlands growth focus</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-cream py-24 lg:py-32">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">A considered approach to property</h2>
            <p className="mt-5 leading-8 text-stone">A focused set of services that can grow with the portfolio without making the business look bigger than it currently is.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group rounded-2xl border border-charcoal/10 bg-paper p-8 transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-paper"><Icon className="h-7 w-7" /></div>
                <p className="mt-8 text-xs tracking-[0.2em] text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-stone">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-paper py-24 lg:py-32">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Current project</p>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl">Follow the transformation</h2>
            </div>
            <p className="max-w-md leading-7 text-stone">Real project photographs will make this section especially powerful. Add progress updates without publishing the exact address.</p>
          </div>
          <ProjectCard />
        </div>
      </section>

      <section className="bg-forest py-24 text-paper lg:py-28">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Our standards</p>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl">The details that make a house feel like home.</h2>
            </div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {values.map(([title, copy], i) => (
                <div key={title} className="border-t border-paper/20 pt-5">
                  <p className="text-xs tracking-[0.18em] text-soft-gold">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-2xl">{title}</h3>
                  <p className="mt-3 leading-7 text-paper/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="landlords" className="bg-cream py-24 lg:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">For property owners</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Could your property suit a professional shared home?</h2>
            <p className="mt-7 max-w-xl leading-8 text-stone">
              We welcome conversations with landlords who value dependable communication, thoughtful upkeep and a professional long-term relationship. Each opportunity is assessed individually for location, layout, condition and suitability.
            </p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-forest">
              Start a conversation <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl bg-paper p-8 shadow-elegant sm:p-10">
            <h3 className="font-display text-3xl">What a partnership can offer</h3>
            <div className="mt-7 grid gap-5">
              {[
                'A single professional point of contact',
                'Regular communication and agreed property checks',
                'Careful resident selection and house standards',
                'A clear agreement tailored to the arrangement',
                'Prompt reporting of maintenance concerns'
              ].map((item) => (
                <div key={item} className="flex gap-3 border-b border-charcoal/10 pb-5 last:border-0 last:pb-0">
                  <CheckBadgeIcon className="h-6 w-6 shrink-0 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-paper py-24 lg:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Let’s talk property.</h2>
            <p className="mt-6 leading-8 text-stone">For landlord partnerships, professional accommodation or future property opportunities, send an enquiry and the team will respond directly.</p>
            <div className="mt-8 space-y-3 text-sm">
              <p><span className="text-stone">Email</span><br />hello@leafandlintel.co.uk</p>
              <p><span className="text-stone">Location</span><br />Derby &amp; the Midlands</p>
            </div>
            <p className="mt-8 rounded-xl border border-gold/30 bg-cream p-4 text-sm leading-6 text-stone">
              Replace the email address and add his business phone or WhatsApp number before launch.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-charcoal py-12 text-paper">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Logo light />
            <p className="mt-5 max-w-md text-sm leading-6 text-paper/55">Creating beautiful professional homes and trusted property partnerships across the Midlands.</p>
          </div>
          <div className="text-sm text-paper/50 md:text-right">
            <p>© 2026 Leaf &amp; Lintel Properties</p>
            <p className="mt-2">Privacy · Terms · Contact</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
