import React, { useEffect } from "react";
import AOS from "aos";
import { Player } from "@lottiefiles/react-lottie-player";
import idea from "../lottie/idea.json";
import design from "../lottie/design.json";
import develop from "../lottie/develop.json";
import testing from "../lottie/testing.json";
import launch from "../lottie/launch.json";
function WorkProcess(props) {
  useEffect(() => {
    AOS.init();
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
              Design to Developing a Product
            </h4>
          </div>
        </div>
        <div className="px-5">
          <div className="flex gap-5 justify-around items-start">
            <div className="work_process_wrapper wpw_color_purple text-left"  data-aos="fade-right" data-aos-delay="200">
              <Player
                autoplay
                loop
                src={idea}
                style={{ height: "80px", width: "80px" }}
              ></Player>
              <div className="work_process_content clear-both">
                <h6>01. Idea</h6>

                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu.
                </p>
              </div>
            </div>
            <div className="work_process_wrapper wpw_color_gray text-left"  data-aos="fade-right" data-aos-delay="300">
              <Player
                autoplay
                loop
                src={design}
                style={{ height: "80px", width: "80px" }}
              ></Player>
              <div className="work_process_content clear-both">
                <h6>02. Design</h6>

                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu.
                </p>
              </div>
            </div>
            <div className="work_process_wrapper wpw_color_blue text-left"  data-aos="fade-right" data-aos-delay="400">
              <Player
                autoplay
                loop
                src={develop}
                style={{ height: "80px", width: "80px" }}
              ></Player>
              <div className="work_process_content clear-both">
                <h6>03. Develop</h6>

                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu.
                </p>
              </div>
            </div>
            <div className="work_process_wrapper wpw_color_yellow text-left"  data-aos="fade-right" data-aos-delay="500"> 
              <Player
                autoplay
                loop
                src={testing}
                style={{ height: "80px", width: "80px" }}
              ></Player>
              <div className="work_process_content clear-both">
                <h6>04. Test</h6>

                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu.
                </p>
              </div>
            </div>
            <div className="work_process_wrapper text-left"  data-aos="fade-right" data-aos-delay="600">
              <Player
                autoplay
                loop
                src={launch}
                style={{ height: "80px", width: "80px" }}
              ></Player>
              <div className="work_process_content clear-both">
                <h6>05. Launch</h6>

                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu.
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
export default WorkProcess;
