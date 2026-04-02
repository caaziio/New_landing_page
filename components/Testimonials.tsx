"use client";

import * as React from "react";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";

const testimonials = [
  {
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah K.",
    role: "Senior PM @ Coupang",
    quote: "The alignment score showed me exactly why Korean recruiters weren't responding — fixed it in a week.",
    mainImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James W.",
    role: "Data Scientist @ Naver",
    quote: "First interview invite from Naver came 3 weeks after using the 60-day challenge framework.",
    mainImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&auto=format&fit=crop&q=60",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Elena M.",
    role: "Frontend Lead @ Kakao",
    quote: "Finally a service that truly understands the cultural bridge between global experience and Korean corporate standards.",
    mainImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=60",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Marcus B.",
    role: "UX Designer @ Samsung",
    quote: "The resume audit was brutally honest and incredibly useful. Landed my dream role within 2 months.",
    mainImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Yuna P.",
    role: "Marketing Manager @ LG",
    quote: "Acafo translated my 8 years of global marketing experience into language Korean hiring teams actually respond to.",
    mainImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699052e?w=800&auto=format&fit=crop&q=60",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Daniel J.",
    role: "Backend Engineer @ Krafton",
    quote: "The 60-day plan kept me accountable. Went from zero responses to 4 offers in 6 weeks.",
    mainImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&auto=format&fit=crop&q=60",
  },
];

const TestimonialCard = ({
  profileImage,
  name,
  role,
  quote,
  mainImage,
}: {
  profileImage: string;
  name: string;
  role: string;
  quote: string;
  mainImage: string;
}) => (
  <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-[1.02]">
    <img
      src={mainImage}
      alt={quote}
      className="w-full h-auto object-cover min-h-[280px]"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/800x1000/0a1a3a/ffffff?text=Acafo";
      }}
    />
    
    {/* Consistent dark gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />

    {/* Content Container */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
      {/* Top: profile + name */}
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          className="w-10 h-10 rounded-full border border-white/20"
          alt={name}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/40x40/3b82f6/ffffff?text=A";
          }}
        />
        <div>
          <p className="font-bold text-sm leading-none">{name}</p>
          <p className="text-white/50 text-[10px] mt-1.5 uppercase tracking-widest font-medium">
            {role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-lg md:text-xl font-serif italic leading-relaxed text-white/95 mt-auto drop-shadow-sm">
        "{quote}"
      </p>
    </div>

    {/* Hover highlight border */}
    <div className="absolute inset-0 border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500 rounded-2xl" />
  </div>
);

export default function Testimonials() {
  const [columns, setColumns] = React.useState(3);

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  React.useEffect(() => {
    const handleResize = () => setColumns(getColumns(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 0%, #0a1a3a 0%, #060f1e 45%, #03080f 100%)",
      }}
    >
      {/* SVG grain */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="t-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#t-noise)" />
      </svg>

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "-8%",
          width: "55vw", height: "55vw", maxWidth: 720, maxHeight: 720,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", right: "-10%",
          width: "48vw", height: "48vw", maxWidth: 640, maxHeight: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,60,200,0.18) 0%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-12%", right: "-5%",
          width: "52vw", height: "52vw", maxWidth: 680, maxHeight: 680,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.20) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* Top/bottom hairlines */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.25) 40%, rgba(99,60,200,0.20) 60%, transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.18) 40%, rgba(99,60,200,0.14) 60%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-syne font-extrabold tracking-tighter leading-[1.1] uppercase text-white">
            Users <br />
            <span className="text-brand-blue italic font-serif lowercase tracking-normal">
              voices.
            </span>
          </h2>
          <div className="mt-8 h-[1px] w-24 bg-brand-blue mx-auto" />
          <p className="mt-6 text-white/50 text-base max-w-md leading-relaxed">
            Real people. Real results. From landing pages to offer letters.
          </p>
        </div>

        {/* Masonry Grid */}
        <MasonryGrid columns={columns} gap={6}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
