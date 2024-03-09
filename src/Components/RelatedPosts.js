import React  from "react";
import { Link } from "react-router-dom";
function BlogExcerpt (props) {
  return (
    <>
    <div className="container mx-auto pb-20">
    <div className="md:grid md:grid-cols-12 md:gap-6">
      
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12">
        <h4>Related Posts</h4>
        <div className="container flex gap-4 justify-center mx-auto">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white border rounded-lg shadow md:col-span-4 lg:col-span-4"
          >
            <Link to={'/'}>
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-2">
              
            <Link to={'/'} >
                <h6 className="font-bold">
                  Noteworthy technology acquisitions 2021
                </h6>
              
                </Link>
              
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white border rounded-lg shadow md:col-span-4 lg:col-span-4"
          >
            <Link to={'/'}>
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-2">
              
            <Link to={'/'} >
                <h6 className="font-bold">
                  Noteworthy technology acquisitions 2021
                </h6>
              
                </Link>
              
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white border rounded-lg shadow md:col-span-4 lg:col-span-4"
          >
            <Link to={'/'}>
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-2">
              
            <Link to={'/'} >
                <h6 className="font-bold">
                  Noteworthy technology acquisitions 2021
                </h6>
              
                </Link>
              
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white border rounded-lg shadow md:col-span-4 lg:col-span-4"
          >
            <Link to={'/'}>
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div className="p-2">
              
            <Link to={'/'} >
                <h6 className="font-bold">
                  Noteworthy technology acquisitions 2021
                </h6>
              
                </Link>
              
            </div>
          </div>
        </div>
        </div>
        
      
      </div>
    </div>
    
    </>
  )
}
export default BlogExcerpt;