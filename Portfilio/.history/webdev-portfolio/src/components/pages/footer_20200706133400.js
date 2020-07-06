import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Footer = () => {
  return (
    <div className='text-center'>
      <GithubFilled
        href='https://github.com/G-carloo'
        onClick={"https://github.com/G-carloo"}
      />
      <CodepenCircleOutlined
        href='https://codepen.io/G-carloo'
        onClick={"https://codepen.io/G-carloo"}
      />
      <RocketOutlined href='#topfunction' onClick='topFunction' />
    </div>
  );
};

export default Footer;
