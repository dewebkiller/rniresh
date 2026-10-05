"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import aiVideoAdsImport from "../../images/thumbnail-ai-video-ads.jpg";
import aiAvatarImport from "../../images/thumbnail-ai-avatar.jpg";
import aiShortsImport from "../../images/thumbnail-ai-shorts.jpg";
import aiGenerativeImport from "../../images/thumbnail-ai-generative.jpg";
import aiVoiceImport from "../../images/thumbnail-ai-voice.jpg";
import aiEditingImport from "../../images/thumbnail-ai-editing.jpg";

import iconAiVideoAdsImport from "../../images/icon-ai-video-ads.svg";
import iconAiAvatarImport from "../../images/icon-ai-avatar.svg";
import iconAiShortsImport from "../../images/icon-ai-shorts.svg";
import iconAiGenerativeImport from "../../images/icon-ai-generative.svg";
import iconAiVoiceImport from "../../images/icon-ai-voice.svg";
import iconAiEditingImport from "../../images/icon-ai-editing.svg";

const getSrc = (img) => (typeof img === "string" ? img : img?.src || img);

const aiVideoAds = getSrc(aiVideoAdsImport);
const aiAvatar = getSrc(aiAvatarImport);
const aiShorts = getSrc(aiShortsImport);
const aiGenerative = getSrc(aiGenerativeImport);
const aiVoice = getSrc(aiVoiceImport);
const aiEditing = getSrc(aiEditingImport);

const iconAiVideoAds = getSrc(iconAiVideoAdsImport);
const iconAiAvatar = getSrc(iconAiAvatarImport);
const iconAiShorts = getSrc(iconAiShortsImport);
const iconAiGenerative = getSrc(iconAiGenerativeImport);
const iconAiVoice = getSrc(iconAiVoiceImport);
const iconAiEditing = getSrc(iconAiEditingImport);

// YouTube Sample Videos for each service
// You can enter either the YouTube Video ID (e.g. "-Fs7f9ByYwo") or the full URL (e.g. "https://www.youtube.com/watch?v=-Fs7f9ByYwo" or "https://youtu.be/-Fs7f9ByYwo")
export const SERVICE_SAMPLE_VIDEOS = {
  commercials: "-Fs7f9ByYwo",
  avatars: "-Fs7f9ByYwo",
  shorts: "-Fs7f9ByYwo",
  generative: "-Fs7f9ByYwo",
  voiceover: "-Fs7f9ByYwo",
  editing: "-Fs7f9ByYwo",
};

// Helper to extract YouTube video ID from any format (full URL, youtu.be, or direct ID)
function extractYouTubeId(urlOrId) {
  if (!urlOrId) return "-Fs7f9ByYwo";
  const trimmed = String(urlOrId).trim();
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : trimmed;
}

function AiVideoServiceList(props) {
  const [videoModal, setVideoModal] = useState(null);

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);

  const openVideoModal = (serviceTitle, videoSource = SERVICE_SAMPLE_VIDEOS.commercials) => {
    setVideoModal({
      title: serviceTitle,
      videoId: extractYouTubeId(videoSource),
    });
  };

  const closeVideoModal = () => {
    setVideoModal(null);
  };

  useEffect(() => {
    if (videoModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeVideoModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [videoModal]);

  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h5
              className="btn-capsule aos-init aos-animate mb-5"
              data-aos="fade-down"
            >
              AI Video Services
            </h5>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down">
              Cutting-Edge AI Video Solutions
            </h4>
          </div>
        </div>
        <div className="px-5 services-grid">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Card 1: AI Video Commercials & Ads */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "AI Commercials & Ads",
                        SERVICE_SAMPLE_VIDEOS.commercials
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiVideoAds}
                      alt="AI Video Commercials & Ads"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img
                          src={iconAiVideoAds}
                          alt="AI Video Commercials & Ads"
                        />
                        <h5>AI Commercials & Ads</h5>
                        <ul>
                          <li>- Cinematic brand storytelling</li>
                          <li>- High-converting product ads</li>
                          <li>- Photorealistic B-roll generation</li>
                          <li>- Multi-platform format optimization</li>
                          <li>- Scene direction & prompt styling</li>
                          <li>- Sound effects & music integration</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "AI Commercials & Ads",
                              SERVICE_SAMPLE_VIDEOS.commercials
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: AI Digital Avatars & Presenters */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "AI Avatars & Presenters",
                        SERVICE_SAMPLE_VIDEOS.avatars
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiAvatar}
                      alt="AI Digital Avatars & Presenters"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img src={iconAiAvatar} alt="AI Digital Avatars" />
                        <h5>AI Avatars & Presenters</h5>
                        <ul>
                          <li>- Photorealistic human avatars</li>
                          <li>- Multi-language natural lip-sync</li>
                          <li>- Corporate explainers & training</li>
                          <li>- Virtual brand spokesperson</li>
                          <li>- Script-to-speech video synthesis</li>
                          <li>- Custom presenter persona design</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "AI Avatars & Presenters",
                              SERVICE_SAMPLE_VIDEOS.avatars
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Viral Short-Form Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "Viral Shorts & Reels",
                        SERVICE_SAMPLE_VIDEOS.shorts
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiShorts}
                      alt="Viral Short-Form Content"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img src={iconAiShorts} alt="Viral Shorts & Reels" />
                        <h5>Viral Shorts & Reels</h5>
                        <ul>
                          <li>- TikTok, Reels & Shorts creation</li>
                          <li>- High-retention hooks & pacing</li>
                          <li>- Animated captions & typography</li>
                          <li>- Dynamic sound effects & B-roll</li>
                          <li>- Social trend adaptation</li>
                          <li>- Rapid batch content production</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "Viral Shorts & Reels",
                              SERVICE_SAMPLE_VIDEOS.shorts
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Text-to-Video & Generative Media */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "Text-to-Video & CGI",
                        SERVICE_SAMPLE_VIDEOS.generative
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiGenerative}
                      alt="Text-to-Video & Generative Media"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img src={iconAiGenerative} alt="Text to Video" />
                        <h5>Text-to-Video & CGI</h5>
                        <ul>
                          <li>- Concept visual world-building</li>
                          <li>- Cinematic camera motion control</li>
                          <li>- Scene-to-scene visual consistency</li>
                          <li>- Sci-Fi, fantasy & surreal visuals</li>
                          <li>- High-definition render outputs</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "Text-to-Video & CGI",
                              SERVICE_SAMPLE_VIDEOS.generative
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: AI Voiceover & Multilingual Dubbing */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "Voiceover & Audio Dubbing",
                        SERVICE_SAMPLE_VIDEOS.voiceover
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiVoice}
                      alt="AI Voiceover & Audio Dubbing"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img src={iconAiVoice} alt="AI Voice & Dubbing" />
                        <h5>Voiceover & Audio Dubbing</h5>
                        <ul>
                          <li>- Hyperrealistic AI voice cloning</li>
                          <li>- Multi-language voice translation</li>
                          <li>- Emotion & cadence modulation</li>
                          <li>- Studio audio noise reduction</li>
                          <li>- Background score arrangement</li>
                          <li>- Dialogue & sound synchronization</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "Voiceover & Audio Dubbing",
                              SERVICE_SAMPLE_VIDEOS.voiceover
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: AI Video Enhancement & Editing */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div
                className="md:grid md:grid-cols-12 service-wrapper icon service--style-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="lg:col-span-6">
                  <div
                    className="img-wrap relative group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openVideoModal(
                        "Enhancement & Post-Production",
                        SERVICE_SAMPLE_VIDEOS.editing
                      )
                    }
                    title="Click to view sample video"
                  >
                    <img
                      width="300"
                      height="420"
                      src={aiEditing}
                      alt="AI Video Enhancement & Editing"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#8066ac] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption flex flex-col justify-between h-full">
                      <div>
                        <img src={iconAiEditing} alt="AI Video Editing" />
                        <h5>Enhancement & Post-Production</h5>
                        <ul>
                          <li>- AI 4K & 60FPS video upscaling</li>
                          <li>- Color grading & aesthetic tuning</li>
                          <li>- Premiere & After Effects finishing</li>
                          <li>- Web & broadcast standard delivery</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            openVideoModal(
                              "Enhancement & Post-Production",
                              SERVICE_SAMPLE_VIDEOS.editing
                            )
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#1e293b] text-white shadow-sm cursor-pointer"
                        >
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                            <svg
                              className="w-2.5 h-2.5 fill-current ml-0.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span>View Sample</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={closeVideoModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          {/* Modal Card */}
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-slate-950/90">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                </span>
                <h3
                  id="video-modal-title"
                  className="text-sm sm:text-base font-bold text-white tracking-wide"
                >
                  Sample Video · {videoModal.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeVideoModal}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-90"
                aria-label="Close sample video modal"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Video Player 16:9 Aspect Ratio */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`Sample Video - ${videoModal.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 bg-slate-950/95 text-xs border-t border-white/10">
              <span className="text-slate-400">
                Sample preview for{" "}
                <strong className="text-white">{videoModal.title}</strong>
              </span>
              <button
                type="button"
                onClick={closeVideoModal}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiVideoServiceList;
