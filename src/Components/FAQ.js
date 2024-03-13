import React, { useEffect } from "react";
import AOS from "aos";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import nireshwepdev from "../images/niresh-shrestha-wpdeveloper.png";

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
          01. How can I contact you for inquiries or collaborations?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can reach out to me through the contact form on the website. Simply navigate to the "Contact" page, fill out the form or you can call me in the given numbers with your details and message, and I'll get back to you as soon as possible.
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
          02. Do you offer web development services other than WordPress?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, absolutely! While WordPress is my specialty, I also offer frontend development services using various technologies like HTML, CSS, and JavaScript. Whether it's building a custom website or enhancing an existing one, I'm here to help.
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
          03. Can I see examples of your previous work?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Of course! You can view my portfolio by clicking on the "Portfolio" section of the website. There, you'll find a collection of projects I've worked on, showcasing my skills and expertise in frontend development and WordPress customization.
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
          04. How long does it take for you to complete a website project?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The timeline for each project varies depending on its complexity and specific requirements. However, I always strive to deliver high-quality work in a timely manner. During our initial consultation, we can discuss your project's scope and timeline in detail to ensure expectations are aligned.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          05. Do you provide ongoing maintenance and support too?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, I offer maintenance and support services to ensure your website remains up-to-date, secure, and performing optimally. Whether it's regular updates, troubleshooting issues, or implementing new features, you can count on me to provide ongoing assistance and support for your website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="mt-5 mb-5 accordion_item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
          06. Can you guarantee confidentiality?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yes of course I can guarantee confidentiality. Your personal details and the project  will be kept strictly confidential. If necessary We can do NDA contract too. Yes, we are committed to providing the  highest level of professionalism in all aspects of our work. All communications with clients are strictly confident.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 relative">
<img src={nireshwepdev} alt="" data-aos="fade-up" className="faqimage"/>
      </div>
    </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default FAQ;
