import wordpressdevelopmenticon from  "../images/wordpress.png";
import woocommerceicon from "../images/woocommerce.png";
import webdesignicon from "../images/web-design-icon.png";
import  graphicdesignicon from "../images/graphic-design-icon.png";
import uiixicon from "../images/ui-ux-icon.png";
import contentwrittingicon from "../images/content-writting-icon.png";

function Skills() {
  return (
    <section className="min-h-fit bg-bg_light_primary">
    <div className="px-5 py-20">
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <div className="text-center">
          <h2 className="title" data-aos="fade-down">Services</h2>
          <h4 className="subtitle" data-aos="fade-down">I love What I do</h4>
        </div>
        
      </div>
      <div className="container flex flex-wrap gap-4 justify-center mx-auto">
        <div data-aos="fade-up" data-aos-delay="0" className="bg-white sm:cursor-pointer relative group w-full flex gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={wordpressdevelopmenticon} alt="WordPress Development" />
            </div>
            <div>
            <h6>WordPress Development</h6>
            <p className="italic">Theme, Customization, Plugin, Addons</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="bg-white sm:cursor-pointer relative group w-full flex gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={woocommerceicon} alt="Web Development" />
            </div>
            <div>
            <h6>Woocommerce Development</h6>
            <p className="italic">Online store development with WooCommerce.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="bg-white sm:cursor-pointer relative group w-full flex gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={webdesignicon} alt="Woo Commerce Development" />
            </div>
            <div>
            <h6>Web Design</h6>
            <p className="italic">Fully Responsive and eye catchy web design</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="900" className="bg-white sm:cursor-pointer relative group w-full flex gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={uiixicon} alt="Web design" />
            </div>
            <div>
            <h6>UI/UX</h6>
            <p className="italic">Prototype for the web and mobile apps.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="1200" className="bg-white sm:cursor-pointer relative group w-full flex gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={graphicdesignicon} alt="UI/UX" />
            </div>
            <div>
            <h6>Graphic Design</h6>
            <p className="italic">Logos, Banner, Ads, Business card</p>
            </div>
          </div>

        

          <div data-aos="fade-up" data-aos-delay="1800" className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
          <div>
          <img src={contentwrittingicon} alt="Web Development" />
            </div>
            <div>
            <h6>Content Writting</h6>
            <p className="italic">Technical Writing, Content Translation </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Skills;