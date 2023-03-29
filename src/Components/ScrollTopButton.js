import React from "react";

const ScrollTopButton = () => {
  let mybutton = document.getElementById("up");
  window.onscroll = () => {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="up" id="up" onClick={() => topFunction()}>
      <i className="chevron circle up icon"></i>
    </div>
  );
};

export default ScrollTopButton;
