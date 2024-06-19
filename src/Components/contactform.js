import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("8hmmcpbdTvp9j1rv9"); // Replace with your EmailJS user ID
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_eee1e1v"; // Replace with your EmailJS service ID
    const templateId = "template_gzqy8hp"; // Replace with your EmailJS template ID
    
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        full_name: nameRef.current.value,
        user_email: emailRef.current.value,
        user_subject: subjectRef.current.value,
        user_message: messageRef.current.value,
        recipient: emailRef.current.value
      });
      alert("Email successfully sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-fit bg-bg_light_primary getintouch-section">
      <div className="container mx-auto">
        <div className="px-5 pt-20 pb-20">
          <div className="md:grid md:grid-cols-12 md:gap-6">
           
            {/* Contact form section */}
            <div className="md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7">
              <div className="text-left md:grid md:grid-cols-12 md:gap-6">
                <div className="md:max-w-none md:w-full md:col-span-5 lg:col-span-12 md:col-span-12 lg:col-span-12">
                  <h4 className="subtitle" data-aos="fade-down">Say something</h4>
                  <div className="formwrapper">
                    <form onSubmit={handleSubmit} id="Contactform">
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                        <div className="lg:col-span-6 md:col-span-6 lg:col-span-6 ">
                          <input type="text" placeholder="Full Name" name="full_name" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" ref={nameRef} />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 lg:col-span-6">
                          <input type="email" placeholder="Email" name="user_email" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" ref={emailRef} />
                        </div>
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                        <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                          <input type="text" placeholder="Subject" name="user_subject" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" ref={subjectRef}/>
                        </div>
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                        <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                          <textarea placeholder="Message" name="user_message" rows={8} className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" ref={messageRef}/>
                        </div>
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                        <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                          <button className="btn bg-dark_primary text-white bg-sky-500/100" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
