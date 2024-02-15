import React  from "react";
function Breadcrumb () {
    
  return (
    <>
    <div className="breadcrumb-wrapper">
    <div className="page-heading">

        <div className="page-overlay"></div>

        <div className="container flex flex-wrap mx-auto">
            <div className="page-titles-wrap">

                <h3 className="page-subtitle">Providing services for over 12 Years</h3>

                <h1 className="page-title">Qualified &amp; Experienced <br />Web Developer /Designer</h1>
            </div>
            
        </div>
        <div className="breadcrumbs ">
            <div className="container flex flex-wrap mx-auto">
                <div className="breadcrumb">
                    <span><a property="item" title="Home" href="./" className="home"><span>Home</span></a></span><span><span>About me</span></span>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
export default Breadcrumb;