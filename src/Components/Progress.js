import progressimage from "../images/marketing.svg";
function Progress () {
  return (
   <section className="container relative overflow-hidden mx-auto px-4 sm:px-6">
<div class="px-5 py-20">
<div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h2 className="title" data-aos="fade-down">
              Skills
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
            My Experience Area
            </h4>
          </div>
        </div>
  <div className="md:grid md:grid-cols-12 md:gap-6">
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">

    <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="200">
          <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"--value": "90"}}></div> 
            </div>
          </div>
          <div>
          <p class="ml-10 font-medium text-gray-600 sm:text-xl">WordPress Development </p><em className="ml-10 text-gray-600 text-xs">Theme, Customization, Plugin</em>
          </div>
          
      </div>

      <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="400">
          <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{"--value": "95"}}></div> 
            </div>
          </div>
          <div>
          <p class="ml-10 font-medium text-gray-600 sm:text-xl">Frontend Development</p> 
          <em className="ml-10 text-gray-600 text-xs">React, CSS3, jQuery, Sass</em>
          </div>
          
      </div>

      <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="600">
          <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"--value": "85"}}></div> 
            </div>
          </div>
          <div>
          <p class="ml-10 font-medium text-gray-600 sm:text-xl">Digital Marketing</p>
          <em className="ml-10 text-gray-600 text-xs">SEO, Content Writting</em>
          </div>
          
      </div>

      <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="900">
          <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"--value": "85"}}></div> 
            </div>
          </div>
          <div>
          <p class="ml-10 font-medium text-gray-600 sm:text-xl">Graphic Design</p>
          <em className="ml-10 text-gray-600 text-xs">Logo, Branding, Email marketing templates</em>
          </div>
      </div>
      
    </div>
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left" data-aos-delay="2000">
     <img src={progressimage} alt="My Skills" className="h-full object-cover" /> 
    </div>
  </div>
</div>
</section> 
  )
} 
export default Progress;