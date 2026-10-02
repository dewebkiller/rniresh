'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import aiVideoAdsImport from "../images/thumbnail-ai-video-ads.jpg";
import aiAvatarImport from "../images/thumbnail-ai-avatar.jpg";
import aiShortsImport from "../images/thumbnail-ai-shorts.jpg";
import aiGenerativeImport from "../images/thumbnail-ai-generative.jpg";
import aiVoiceImport from "../images/thumbnail-ai-voice.jpg";
import aiEditingImport from "../images/thumbnail-ai-editing.jpg";

import iconAiVideoAdsImport from "../images/icon-ai-video-ads.svg";
import iconAiAvatarImport from "../images/icon-ai-avatar.svg";
import iconAiShortsImport from "../images/icon-ai-shorts.svg";
import iconAiGenerativeImport from "../images/icon-ai-generative.svg";
import iconAiVoiceImport from "../images/icon-ai-voice.svg";
import iconAiEditingImport from "../images/icon-ai-editing.svg";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

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

function AiVideoServiceList(props) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);

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
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiVideoAds}
                      alt="AI Video Commercials & Ads"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                      <img src={iconAiVideoAds} alt="AI Video Commercials & Ads" />
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
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: AI Digital Avatars & Presenters */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiAvatar}
                      alt="AI Digital Avatars & Presenters"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Viral Short-Form Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiShorts}
                      alt="Viral Short-Form Content"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Text-to-Video & Generative Media */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiGenerative}
                      alt="Text-to-Video & Generative Media"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                      <img src={iconAiGenerative} alt="Text to Video" />
                      <h5>Text-to-Video & CGI</h5>
                      <ul>
                        <li>- Runway Gen-3 & Kling AI workflows</li>
                        <li>- Concept visual world-building</li>
                        <li>- Cinematic camera motion control</li>
                        <li>- Scene-to-scene visual consistency</li>
                        <li>- Sci-Fi, fantasy & surreal visuals</li>
                        <li>- High-definition render outputs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: AI Voiceover & Multilingual Dubbing */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiVoice}
                      alt="AI Voiceover & Audio Dubbing"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: AI Video Enhancement & Editing */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={aiEditing}
                      alt="AI Video Enhancement & Editing"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                      <img src={iconAiEditing} alt="AI Video Editing" />
                      <h5>Enhancement & Post-Production</h5>
                      <ul>
                        <li>- AI 4K & 60FPS video upscaling</li>
                        <li>- Frame interpolation & de-noise</li>
                        <li>- Color grading & aesthetic tuning</li>
                        <li>- Unwanted object & artifact removal</li>
                        <li>- Premiere & After Effects finishing</li>
                        <li>- Web & broadcast standard delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AiVideoServiceList;
