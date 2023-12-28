import React from "react";
import "./Tech.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Tech({ name, image }) {
  return (
    <div className="tech">
      <Tippy content={<span>{name}</span>}>
        <img src={image} />
      </Tippy>
    </div>
  );
}

export default Tech;
