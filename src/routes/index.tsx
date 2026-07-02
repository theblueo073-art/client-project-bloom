import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Star, MapPin, Phone, Clock, Calendar, Sparkles, ArrowRight, Quote, Heart, Mail } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import haircutImg from "@/assets/service-haircut.jpg";
import shaveImg from "@/assets/service-shave.jpg";
import beardImg from "@/assets/service-beard.jpg";
import aboutImg from "@/assets/about.jpg";
import g1 from "@/assets/gallery/g1.jpg.asset.json";
import g2 from "@/assets/gallery/g2.jpg.asset.json";
import g3 from "@/assets/gallery/g3.jpg.asset.json";
import g4 from "@/assets/gallery/g4.jpg.asset.json";
import g5 from "@/assets/gallery/g5.jpg.asset.json";
import g6 from "@/assets/gallery/g6.jpg.asset.json";
import g7 from "@/assets/gallery/g7.jpg.asset.json";
import g8 from "@/assets/gallery/g8.jpg.asset.json";
import g9 from "@/assets/gallery/g9.jpg.asset.json";
import g10 from "@/assets/gallery/g10.jpg.asset.json";
import g11 from "@/assets/gallery/g11.jpg.asset.json";
import g12 from "@/assets/gallery/g12.jpg.asset.json";

const gallery = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

export const Route = createFileRoute("/")({
  component: Landing,
});

const BOOK_URL = "https://stellarbarber.setmore.com";
const PHONE = "+1 212-689-8999";
const ADDRESS = "864 6th Ave, New York, NY 10001";

const services = [
  { title: "Signature Haircut", price: "$45", desc: "Precision cut shaped to your head, hair type, and lifestyle. Includes consultation, wash, and style.", img: haircutImg },
  { title: "Hot Towel Shave", price: "$40", desc: "The classic straight razor ritual — steamed towels, warm lather, and a face that feels brand new.", img: shaveImg },
  { title: "Beard Sculpt", price: "$30", desc: "Line-up, trim, and condition. We shape your beard so it looks intentional, never accidental.", img: beardImg },
];

const testimonials = [
  { name: "Daniel", meta: "Regular · 6 months ago", body: "Stellar is an accurate name. I've been getting cuts from Abdul for about a year — beautifully shaped, even, neat. Skilled with both scissors and clippers." },
  { name: "John Tibbetts", meta: "Local Guide · 85 reviews", body: "Abdul and his team have an incredible spot. Beautiful environment, warm vibes, fair prices, quick timing. So grateful to have stumbled upon this shop." },
  { name: "Danny Rampersaud", meta: "Visitor from Orlando", body: "Called Sam the owner and he took me in immediately. Walked out feeling like a new man. Awesome guy, very friendly, years of experience." },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-gold" />
          <span className="font-display text-lg font-bold tracking-tight">Stellar</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition hover:text-foreground">Services</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#gallery" className="transition hover:text-foreground">Gallery</a>
          <a href="#reviews" className="transition hover:text-foreground">Reviews</a>
          <a href="#visit" className="transition hover:text-foreground">Visit</a>
        </nav>
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
          Book <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Stellar Barbershop interior" width={1600} height={1200} className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Chelsea's most loved barbershop · Est. 6th Ave
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[7.5rem]">
            Sharp cuts.<br />
            <span className="italic text-gold">Steady hands.</span><br />
            Zero waiting.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
            A modern chair on 6th Avenue where old-world craft meets New York precision. Book your barber, walk in, walk out sharper.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--gold)] transition hover:brightness-110">
              <Calendar className="h-5 w-5" />
              Book your chair
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-base font-medium text-foreground transition hover:bg-card">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="font-semibold">4.8</span>
              <span className="text-muted-foreground">· 317 Google reviews</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-gold" /> LGBTQ+ friendly
            </div>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <div className="rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-gold" /> Today's hours
            </div>
            <div className="mt-3 text-2xl font-semibold">Closed · Opens 9:30 am</div>
            <div className="mt-6 space-y-3 text-sm">
              {[["Mon – Fri", "9:30 – 8:00"], ["Saturday", "9:30 – 7:00"], ["Sunday", "Closed"]].map(([d, h]) => (
                <div key={d} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0">
                  <span className="text-muted-foreground">{d}</span>
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90">
              Reserve online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Fades", "Scissor Cuts", "Hot Towel Shave", "Beard Sculpt", "Kids Cuts", "Head Massage", "Line-Ups", "Grey Blending"];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-card/30 py-6">
      <div className="flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap font-display text-2xl italic text-muted-foreground">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-16">
            {s} <Star className="h-4 w-4 fill-gold text-gold" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</div>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1] sm:text-6xl">
            Every cut, dialed<br />in with intention.
          </h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Straightforward menu, honest prices, world-class execution. No upselling, no rushing — just the cut you asked for, done right.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={900} height={1100} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <span className="text-lg font-semibold text-gold">{s.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
          See full menu & book <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-black text-gold sm:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative border-y border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
          <img src={aboutImg} alt="Sam, owner of Stellar Barbershop" loading="lazy" width={1200} height={1400} className="relative aspect-[4/5] w-full rounded-2xl object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background px-6 py-5 shadow-xl sm:block">
            <div className="font-display text-3xl font-black text-gold">15+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of craft</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Stellar</div>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] sm:text-5xl">
            A barbershop built on <span className="italic text-gold">care</span>, not turnover.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Sam opened Stellar on 6th Ave to bring the old-school barber ritual back to Manhattan — the kind where your barber remembers your name, your cowlick, and the exact length you like on the sides.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Today, Abdul and the team welcome everyone through the door. Warm lighting, plants on the counter, honest prices, and a chair that feels like yours the moment you sit down.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat n="317" label="5-star ready reviews" />
            <Stat n="30 min" label="Average visit" />
            <Stat n="6 days" label="Open a week" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">The Work</div>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1] sm:text-6xl">
            Fresh cuts,<br /><span className="italic text-gold">straight from the chair.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A look at the fades, tapers, and beard work coming out of Stellar every week.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={img.url}
                alt={`Stellar Barbershop work ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Word on 6th Ave</div>
        <h2 className="mt-4 font-display text-4xl font-black leading-[1] sm:text-6xl">
          317 reviews.<br />
          <span className="italic text-gold">4.8 stars.</span> One chair.
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <span className="text-sm text-muted-foreground">Verified Google reviews</span>
        </div>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="relative flex flex-col rounded-2xl border border-border/60 bg-card p-8">
            <Quote className="h-8 w-8 text-gold/40" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
              "{t.body}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border/60 pt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.meta}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="visit" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-card to-background p-8 sm:p-16">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-black leading-[1] sm:text-6xl">
              Your next great<br /><span className="italic text-gold">haircut starts here.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Reserve online in 60 seconds. Walk-ins welcome when a chair opens up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition hover:brightness-110">
                <Calendar className="h-5 w-5" /> Book online
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-base font-medium transition hover:bg-card">
                <Phone className="h-4 w-4" /> Call the shop
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/60 p-8 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Find us</div>
                <div className="mt-1 font-semibold">{ADDRESS}</div>
                <a href={`https://maps.google.com/?q=${encodeURIComponent("Stellar Barbershop " + ADDRESS)}`} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-gold hover:underline">
                  Get directions →
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="mt-1 block font-semibold hover:text-gold">{PHONE}</a>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Today</div>
                <div className="mt-1 font-semibold">Closed · Opens 9:30 am</div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a href="mailto:stellarbarbershop@gmail.com" className="mt-1 block font-semibold hover:text-gold">stellarbarbershop@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="flex items-center gap-3">
          <Scissors className="h-5 w-5 shrink-0 text-gold" />
          <div className="min-w-0">
            <div className="font-display text-lg font-bold">Stellar Barbershop</div>
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Made with care on 6th Ave, NYC</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="https://client-project-bloom.lovable.app" target="_blank" rel="noreferrer" className="hover:text-foreground">Website</a>
          <a href={BOOK_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Booking</a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-foreground">{PHONE}</a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
