'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function AiVideoProblemSolution(props) {
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
            <h5 className="btn-capsule aos-init aos-animate mb-5" data-aos="fade-down">
              Why AI Video
            </h5>
            <h3 className="subtitle aos-init aos-animate" data-aos="fade-down">
              The Problem & Our AI Solution
            </h3>
          </div>
        </div>
        <div className="px-5">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            
            {/* Left Column: Traditional Video Problems */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="timeline-wrapper timeline icon timeline--style-1">
                <h5 className="timeline__title" data-aos="fade-down">
                  Traditional Video Problems
                </h5>
                <ul>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <h6 className="timeline__item__title">
                          Exorbitant Production Costs
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Studio rentals, actors, cameras & crew
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Traditional video shoots require expensive studio bookings, director and camera crews, actors, permits, and lighting setups, easily running thousands of dollars for a single 60-second video.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <h6 className="timeline__item__title">
                          Painfully Slow Turnaround
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Weeks of pre-production, filming & edits
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          From initial script approvals to casting, location scouting, shooting days, and post-production, traditional workflows take weeks or months to deliver finished video assets.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <h6 className="timeline__item__title">
                          Expensive Script Changes & Reshoots
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Zero flexibility once the shoot wraps
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          If product specs change, a line needs fixing, or a new offer is introduced, re-filming requires re-booking the set, crew, and talent at full cost all over again.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <h6 className="timeline__item__title">
                          Scaling Bottlenecks & Creative Fatigue
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Impossible to meet social media volume
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Modern platforms demand constant video variations, testing different hooks, formats, and angles. Producing that volume manually with traditional shoots is cost-prohibitive.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <h6 className="timeline__item__title">
                          Language & Global Localization Barriers
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Costly dubbing and mismatched visuals
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Creating localized video versions across global markets typically means hiring multiple foreign voice actors and editing audio tracks that rarely match the speaker’s mouth movements.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: AI Video Solutions */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="timeline-wrapper timeline icon timeline--style-1">
                <h5 className="timeline__title" data-aos="fade-down">
                  AI Video Solutions
                </h5>
                <ul>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <h6 className="timeline__item__title">
                          Up to 80% Cost Reduction
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Zero physical set or talent overhead
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          High-fidelity cinematic scenes, virtual actors, and photorealistic environments are generated digitally—eliminating physical equipment costs, travel expenses, and studio fees.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <h6 className="timeline__item__title">
                          Rapid 48 to 72 Hour Turnaround
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          From concept to high-res render in days
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Generative AI pipelines and automated workflows compress weeks of production into days, allowing your business to seize real-time trends and launch marketing campaigns instantly.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <h6 className="timeline__item__title">
                          Effortless Revisions & Prompt Iteration
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Instant scene & dialogue re-generation
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Need to tweak a sentence, change a voice inflection, or adjust a camera angle? AI allows rapid re-generation and post-production refinement without reshoot penalties.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <h6 className="timeline__item__title">
                          Infinite Scaling & Creative Variations
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Dozens of hooks, angles & aspect ratios
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Effortlessly generate multi-hook variations, test diverse visual styles, and export in 9:16 (Reels/TikTok), 16:9 (YouTube), and 1:1 (Feed) to maximize campaign conversions.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <h6 className="timeline__item__title">
                          Global Reach with AI Lip-Sync & Dubbing
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Native voices in 30+ languages
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="timeline__item__description">
                          Deploy lifelike voice cloning and AI-driven lip synchronization to localize your message across global audiences while preserving original cadence and emotional tone.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AiVideoProblemSolution;
