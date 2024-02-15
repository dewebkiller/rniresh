import React  from "react";
function ButtonComp (props) {
  return (
    <button className="btn"><i className={`fa-solid ${props.FAicon}`}></i> {props.Btntext}</button>
  )
}
export default ButtonComp;