'use client';

import React from "react";
import nireshProfileImport from "../images/niresh-shrestha-profile.png";
import Link from "next/link";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);
const nireshProfile = getSrc(nireshProfileImport);

export const AiVideoCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-bg_light_primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Gradient Card Container */}
        <div
          className="relative rounded-[2.5rem] pt-10 sm:pt-14 px-6 sm:px-10 md:px-14 lg:px-16 pb-0 shadow-xl border border-white/70 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #ede9fe 40%, #fae8ff 100%)",
          }}
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            
            {/* Left Column: Visual Composition with Cards & Real Niresh Photo attached at bottom */}
            <div className="lg:col-span-6 relative flex justify-center items-end self-end pt-12 min-h-[420px] sm:min-h-[480px]">
              
              {/* White Circular Orbit Ring + Curved Pink Arrow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 320 320" fill="none">
                  <circle
                    cx="160"
                    cy="160"
                    r="125"
                    stroke="rgba(255, 255, 255, 0.75)"
                    strokeWidth="8"
                    strokeDasharray="18 10"
                  />
                  <path
                    d="M 170 50 C 105 45 60 85 58 135"
                    stroke="#f43f5e"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon points="46,126 58,146 70,128" fill="#f43f5e" />
                </svg>
              </div>

              {/* Background Card 1: Discussion */}
              <div
                className="absolute top-6 left-0 sm:-left-2 md:-left-4 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/80 w-[230px] sm:w-[260px]"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5M12 17c-1.8 0-3 1-3 1h6s-1.2-1-3-1z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-800 text-sm tracking-tight">Discussion</span>
                </div>

                <div className="flex gap-2.5 items-start mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    ER
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Emily Rogers</span>
                      <span className="text-[10px] text-slate-400">12:14 PM</span>
                    </div>
                    <p className="text-slate-600 mt-0.5 leading-snug">
                      <span className="text-blue-600 font-medium">@Niresh</span> initial AI video commercial render is approved!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-50">
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                    New
                  </span>
                  <span className="text-[11px] text-slate-500 truncate">
                    Carly: Need 9:16 Reels cut next...
                  </span>
                </div>
              </div>

              {/* Center: Authentic Niresh Studio Photo attached flush at bottom */}
              <div className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-[340px] flex justify-center items-end self-end">
                <img
                  src={nireshProfile}
                  alt="Niresh Shrestha - AI Video Producer"
                  className="w-full object-contain block align-bottom -mb-1 drop-shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>

              {/* Foreground Card 2: New Urgent */}
              <div
                className="absolute bottom-4 right-0 sm:-right-2 md:-right-4 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/90 w-[220px] sm:w-[250px]"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-emerald-50 text-emerald-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-300">
                    New
                  </span>
                  <span className="bg-rose-50 text-rose-500 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-rose-300">
                    Urgent
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    AS
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800">Adam Smith</span>
                    <span className="text-slate-400 text-[11px]"> via portal</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl text-xs text-slate-700">
                  <div className="text-rose-500 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <p className="leading-snug">
                    <span className="font-semibold text-slate-900">[Urgent]</span> Need 4K product launch video exports
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Short Title, Content, and Two Buttons in same row */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6 pb-12 sm:pb-16 text-center lg:text-left self-center">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e293b] leading-tight" data-aos="fade-down">
                Scale Your Brand With AI Video
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-up">
                Generate high-converting commercial ads, viral social reels, and photorealistic AI avatars. Get cinematic video production delivered in days, not months.
              </p>

              {/* Two buttons in the same row */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2" data-aos="fade-up" data-aos-delay="100">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#1e293b] text-white px-8 py-3.5 font-medium text-sm sm:text-base hover:bg-black transition-all shadow-md inline-flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full bg-white text-slate-800 border border-slate-300 hover:border-slate-800 px-8 py-3.5 font-medium text-sm sm:text-base transition-all shadow-sm inline-flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  View Sample Work
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AiVideoCTA;
