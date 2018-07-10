import React from "react";
import "./Container.css";



const Container = props =>
 <div className="Container">
    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
</div>
export default Container;
