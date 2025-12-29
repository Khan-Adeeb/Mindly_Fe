import Button from "../components/Button";
import { TwitterIcon, YoutubeIcon } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-white border-b border-zinc-100 sticky top-0 z-30">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <span className="text-3xl">🧠</span>
        Mindly
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="outline" size="sm" text="Sign in" />
        <Button variant="primary" size="sm" text="Get Started" />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-blue-700 mb-6 max-w-3xl leading-tight">
        Supercharge your mind with <span className="text-blue-600">Mindly</span>
      </h1>
      <p className="text-lg md:text-2xl text-zinc-700 text-center mb-8 max-w-2xl">
        Mindly helps you organize thoughts, boost productivity, and achieve your
        goals with ease. Experience clarity and focus like never before.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
        <Button variant="primary" size="md" text="Join Waitlist" fullWidth />
      </div>
      <div className="flex gap-4 mt-8">
        <a
          href="#"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <TwitterIcon size={20} />
          Twitter
        </a>
        <a
          href="#"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <YoutubeIcon size={20} />
          YouTube
        </a>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "📝",
      title: "Smart Notes",
      desc: "Capture and organize your thoughts instantly with AI-powered suggestions.",
    },
    {
      icon: "📅",
      title: "Task Planner",
      desc: "Stay on top of your day with an intuitive, distraction-free planner.",
    },
    {
      icon: "🔔",
      title: "Reminders",
      desc: "Never miss a beat with timely reminders and notifications.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      desc: "Visualize your growth and stay motivated with insightful analytics.",
    },
  ];
  return (
    <section id="features" className="py-20 px-4 md:px-0 bg-white w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <div className="font-semibold text-lg text-blue-700 mb-2">
                {f.title}
              </div>
              <div className="text-zinc-600 text-center text-base">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: "1️⃣",
      title: "Sign Up",
      desc: "Create your free Mindly account in seconds.",
    },
    {
      icon: "2️⃣",
      title: "Set Your Goals",
      desc: "Tell us what you want to achieve and Mindly will help you get there.",
    },
    {
      icon: "3️⃣",
      title: "Stay Productive",
      desc: "Use Mindly's tools to organize, plan, and track your progress.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-0 bg-blue-50 w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-blue-100"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="font-semibold text-lg text-blue-700 mb-2">
                {step.title}
              </div>
              <div className="text-zinc-600 text-center text-base">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Is Mindly free to use?",
      a: "Yes! Mindly offers a free plan with all core features. Premium features are optional.",
    },
    {
      q: "Can I use Mindly on mobile?",
      a: "Absolutely. Mindly is fully responsive and works great on any device.",
    },
    {
      q: "How do I get started?",
      a: "Just sign up with your email and you’re ready to go!",
    },
    {
      q: "Is my data secure?",
      a: "We take privacy seriously. Your data is encrypted and never shared.",
    },
  ];
  return (
    <section id="faq" className="py-20 px-4 md:px-0 bg-white w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-zinc-200 pb-6">
              <div className="font-semibold text-lg text-blue-700 mb-2">
                {faq.q}
              </div>
              <div className="text-zinc-600 text-base">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-0 bg-blue-600 text-white mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🧠</span> Mindly
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#how-it-works" className="hover:underline">
            How it works
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-blue-200">
            <TwitterIcon size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-blue-200">
            <YoutubeIcon size={20} />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-blue-100 mt-6">
        © {new Date().getFullYear()} Mindly. All rights reserved.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
