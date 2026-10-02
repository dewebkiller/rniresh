'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import nireshAiSketchImport from "../images/niresh-ai-video-sketch.png";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);
const nireshAiSketch = getSrc(nireshAiSketchImport);

function AiVideoFAQ(props) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="section-faq">
        <div className="container mx-auto pt-20">
          <div className="px-5">
            <div className="md:grid md:grid-cols-12 md:gap-6">
              
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="flex flex-wrap gap-4 mb-10">
                  <div>
                    <h5 className="btn-capsule aos-init aos-animate mb-5" data-aos="fade-down">
                      FAQ
                    </h5>
                    <h5 className="subtitle aos-init aos-animate" data-aos="fade-down">
                      Everything You Need to Know About AI Video Production
                    </h5>
                  </div>
                </div>

                {/* Q1 */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      01. What AI video models and software tools do you use?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      I utilize industry-leading generative video models including Runway Gen-3 Alpha, Kling AI, Luma Dream Machine, Midjourney, and ElevenLabs for voice synthesis. All scenes are professionally composited and edited using Adobe Premiere Pro and After Effects for seamless timing, typography, and finishing.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Q2 */}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      02. How do revisions and creative adjustments work?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Revisions are handled through prompt refinement, motion parameter tuning, seed adjustments, and hands-on post-production editing. We align on storyboards and style frames before final rendering, and post-production software is used to fine-tune colors, cuts, captions, and effects.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Q3 */}
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      03. Do I own full commercial rights to the produced videos?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, 100%. All completed video assets, audio voiceovers, and rendered visuals delivered to you come with full commercial rights for your website, social media, paid advertising, and broadcast distribution.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Q4 */}
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      04. Can you generate realistic digital human avatars and custom voices?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Absolutely! I can create hyperrealistic digital human presenters speaking your exact script with natural lip-syncing, expressions, and studio-grade voice synthesis in multiple languages and diverse accents.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Q5 */}
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      05. What is the typical turnaround time for an AI video project?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Turnaround is significantly faster than traditional video production sets. Most viral social reels, product ads, and avatar explainer videos are completed within 2 to 5 business days, depending on project length and creative complexity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Q6 */}
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="mt-5 mb-5 accordion_item">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
                    <Typography sx={{ flexShrink: 0 }}>
                      06. What do I need to provide to get started?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You can start with as little as a brief idea, website link, or product description! If you already have brand assets, logos, scripts, or reference styles, you can share them. If not, I can assist from the ground up with scriptwriting and creative visual direction.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </div>

              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 relative">
                <img
                  src={nireshAiSketch}
                  alt="Niresh Shrestha"
                  data-aos="fade-up"
                  className="faqimage"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiVideoFAQ;
