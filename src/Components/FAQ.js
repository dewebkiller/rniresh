import React, { useEffect } from "react";
import AOS from "aos";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import manwithtab from '../images/manwithtab.png'

function FAQ(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [expanded, setExpanded] = React.useState(false);

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
          <div className="">
            <h5 className="btn-capsule aos-init aos-animate mb-5" data-aos="fade-down">
              FAQ
            </h5>
            <h5 className="subtitle aos-init aos-animate" data-aos="fade-down">
            We Want Your Application to Have the Best Quality Possible
            </h5>
          </div>
        </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          01. How will the system operate?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{flexShrink: 0 }}>
          02. What types of payments do you accept?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          03. Can you guarantee confidentiality?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          04. Can you guarantee confidentiality?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          05. Can you guarantee confidentiality?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
<img src={manwithtab} alt="" data-aos="fade-up"/>
      </div>
    </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default FAQ;
