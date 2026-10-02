'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import dynamic from "next/dynamic";
import idea from "../lottie/idea.json";
import design from "../lottie/design.json";
import develop from "../lottie/develop.json";
import testing from "../lottie/testing.json";
import launch from "../lottie/launch.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

function AiVideoWorkProcess(props) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);

  return (
    <>
      <div className="bg-bg_light_primary pt-20">
        <div className="container mx-auto pb-20">
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <div className="text-center">
              <h2 className="title aos-init aos-animate" data-aos="fade-down">
                Work Process
              </h2>
              <h4 className="subtitle aos-init aos-animate" data-aos="fade-down">
                From Concept to Final AI Video Production
              </h4>
            </div>
          </div>
          <div className="px-5">
            <div className="flex gap-5 justify-around items-start work_process_container">
              
              {/* Step 1 */}
              <div className="work_process_wrapper wpw_color_purple text-left" data-aos="fade-right" data-aos-delay="200">
                <Player
                  autoplay
                  loop
                  src={idea}
                  style={{ height: "80px", width: "80px" }}
                ></Player>
                <div className="work_process_content clear-both">
                  <h6>01. Script & Concept</h6>
                  <p>
                    Defining your creative vision, hook, and messaging. We draft high-retention scripts and scene-by-scene storyboard concepts.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="work_process_wrapper wpw_color_gray text-left" data-aos="fade-right" data-aos-delay="300">
                <Player
                  autoplay
                  loop
                  src={design}
                  style={{ height: "80px", width: "80px" }}
                ></Player>
                <div className="work_process_content clear-both">
                  <h6>02. Prompt Design</h6>
                  <p>
                    Crafting generative prompts and style frames. We test lighting, character consistency, camera angles, and art directions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="work_process_wrapper wpw_color_blue text-left" data-aos="fade-right" data-aos-delay="400">
                <Player
                  autoplay
                  loop
                  src={develop}
                  style={{ height: "80px", width: "80px" }}
                ></Player>
                <div className="work_process_content clear-both">
                  <h6>03. AI Generation</h6>
                  <p>
                    Synthesizing cinematic video shots, realistic avatars, and hyperrealistic voiceovers using advanced generative AI pipelines.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="work_process_wrapper wpw_color_yellow text-left" data-aos="fade-right" data-aos-delay="500">
                <Player
                  autoplay
                  loop
                  src={testing}
                  style={{ height: "80px", width: "80px" }}
                ></Player>
                <div className="work_process_content clear-both">
                  <h6>04. Edit & Polish</h6>
                  <p>
                    Compositing in Premiere Pro and After Effects with sound design, dynamic captions, color grading, and motion transitions.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="work_process_wrapper text-left" data-aos="fade-right" data-aos-delay="600">
                <Player
                  autoplay
                  loop
                  src={launch}
                  style={{ height: "80px", width: "80px" }}
                ></Player>
                <div className="work_process_content clear-both">
                  <h6>05. Final Delivery</h6>
                  <p>
                    Rendering crystal-clear 4K video exports formatted for TikTok, Reels, YouTube, paid ad networks, or website embedding.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiVideoWorkProcess;
