'use client';

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import Link from "next/link";
import thumbnailAvatarImport from "../images/thumbnail-ai-avatar.jpg";
import thumbnailShortsImport from "../images/thumbnail-ai-shorts.jpg";
import thumbnailAdsImport from "../images/thumbnail-ai-video-ads.jpg";
import thumbnailEditingImport from "../images/thumbnail-ai-editing.jpg";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

const thumbnails = [
  {
    id: "avatar",
    title: "AI Digital Avatar",
    category: "Virtual Presenter",
    badge: "Photorealistic",
    src: getSrc(thumbnailAvatarImport),
    caption: "Multi-language lip-sync avatar spokesperson",
  },
  {
    id: "shorts",
    title: "Viral Shorts & Reels",
    category: "Social Content",
    badge: "High-Retention",
    src: getSrc(thumbnailShortsImport),
    caption: "TikTok, Reels & Shorts optimized for viral reach",
  },
  {
    id: "ads",
    title: "Commercial Video Ads",
    category: "Brand Campaigns",
    badge: "Cinematic 8K",
    src: getSrc(thumbnailAdsImport),
    caption: "Studio-quality commercial storytelling & VFX",
  },
  {
    id: "editing",
    title: "AI Neural Upscaling",
    category: "Post-Production",
    badge: "60 FPS / 4K",
    src: getSrc(thumbnailEditingImport),
    caption: "Color grading, restoration & neural enhancement",
  },
];

export const FeaturedAiVideoService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);

  // Auto Slider Timer: advances every 3.8s, pauses on hover
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % thumbnails.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeTab]);

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % thumbnails.length);
  };

  const activeItem = thumbnails[activeTab];

  return (
    <section
      className="w-full relative py-20 lg:py-28 overflow-hidden border-y border-white/60 shadow-sm"
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #ede9fe 40%, #fae8ff 100%)",
      }}
    >
      {/* Decorative Background Orbit Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
          <circle
            cx="380"
            cy="120"
            r="220"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="14"
            strokeDasharray="28 18"
          />
          <circle
            cx="380"
            cy="120"
            r="150"
            stroke="rgba(147, 51, 234, 0.15)"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />

      {/* Content strictly inside container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-purple-700 border border-purple-200 shadow-sm text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm"
            data-aos="fade-down"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Featured Service · Next-Gen Innovation
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1e293b] mb-5 leading-tight"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Scale Your Brand With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600">
              AI Video Production
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience cinematic commercial video ads, photorealistic virtual avatars, and viral social content—engineered with generative AI and delivered in days, not months.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Feature Highlights & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Feature Cards in White Frosted Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature 1 */}
              <div
                className="bg-white/95 backdrop-blur-md hover:bg-white border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  AI Commercials & Ads
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-converting commercial storytelling with custom AI scene synthesis and cinematic VFX.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="bg-white/95 backdrop-blur-md hover:bg-white border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  Photorealistic Avatars
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Natural human spokesperson presenters with multilingual lip-sync in 40+ global languages.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="bg-white/95 backdrop-blur-md hover:bg-white border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  Viral Shorts & Reels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-retention 9:16 vertical videos with dynamic typography, audio hooks, and fast pacing.
                </p>
              </div>

              {/* Feature 4 */}
              <div
                className="bg-white/95 backdrop-blur-md hover:bg-white border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  Voice Cloning & Dubbing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hyperrealistic neural voice synthesis with natural cadence, emotion modulation, and translation.
                </p>
              </div>

            </div>

            {/* Performance Stats Strip */}
            <div
              className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-sm"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  10x
                </div>
                <div className="text-xs text-slate-600 font-medium leading-tight">
                  Faster Production<br />Turnaround
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">
                  70%
                </div>
                <div className="text-xs text-slate-600 font-medium leading-tight">
                  Cost Savings vs.<br />Traditional Shoots
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                  4K 60fps
                </div>
                <div className="text-xs text-slate-600 font-medium leading-tight">
                  Ultra-HD Neural<br />Upscaling
                </div>
              </div>
            </div>

            {/* Two Action Buttons matching CTA style */}
            <div
              className="flex flex-wrap items-center gap-4 pt-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link
                href="/ai-video-production"
                className="rounded-full bg-[#1e293b] text-white px-8 py-3.5 font-medium text-sm sm:text-base hover:bg-black transition-all shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Explore AI Video Services</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="rounded-full bg-white text-slate-800 border border-slate-300 hover:border-slate-800 px-8 py-3.5 font-medium text-sm sm:text-base transition-all shadow-sm hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Request a Quote</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Showcase Auto-Slider */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="200">
            
            {/* Main Interactive Showcase Card with hover pause */}
            <div
              className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-white shadow-xl p-4 sm:p-5"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Top Card Bar with Live Badge & Controls */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-800">
                    AI Video Showcase
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {isPaused ? "(Paused)" : "(Auto-playing)"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#8066ac]/10 text-[#8066ac] border border-[#8066ac]/30 shadow-[0_2px_8px_rgba(128,102,172,0.25)]">
                    {activeItem.badge}
                  </span>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1 ml-1">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous slide"
                      className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next slide"
                      className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Image Frame with Crossfade Transition */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-slate-100 group shadow-inner">
                {thumbnails.map((item, index) => {
                  const isCurrent = index === activeTab;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Black to Transparent Gradient Content Background */}
                      <div className="absolute inset-x-0 bottom-0 pt-24 pb-5 px-5 bg-gradient-to-t from-black via-black/85 via-50% to-transparent flex flex-col justify-end">
                        <span className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-1 drop-shadow-sm">
                          {item.category}
                        </span>
                        <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1 drop-shadow-md">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-100 font-medium line-clamp-2 drop-shadow leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Thumbnail Selector Switcher with Active Progress Bar */}
              <div className="grid grid-cols-4 gap-2.5 mt-3.5 pt-1">
                {thumbnails.map((item, index) => {
                  const isActive = index === activeTab;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(index)}
                      className={`relative rounded-xl overflow-hidden p-1 transition-all duration-300 text-left border ${
                        isActive
                          ? "border-[#8066ac] bg-[#8066ac]/10 shadow-[0_4px_18px_rgba(128,102,172,0.45)] ring-2 ring-[#8066ac]/40"
                          : "border-slate-200 bg-white hover:border-[#8066ac]/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1.5 bg-slate-100">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className={`text-[10px] font-semibold truncate px-0.5 ${isActive ? "text-[#8066ac] font-bold" : "text-slate-700"}`}>
                        {item.title}
                      </div>

                      {/* Active slide progress indicator in logo color */}
                      {isActive && !isPaused && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8066ac] animate-[pulse_1.5s_infinite]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Direct Link to Dedicated Page */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Full service catalog, pricing & workflows
                </span>
                <Link
                  href="/ai-video-production"
                  className="text-purple-700 hover:text-purple-900 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore all</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedAiVideoService;
