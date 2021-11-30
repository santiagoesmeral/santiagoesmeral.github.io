import React from "react";
import Header from "./Header";
import "./Homepage.scss";

export default function Homepage() {
  /*
  intro: just welcome to my webpage, maybe a language toggle, and an svg/canvas of my signature
  who-am-i: some graphs about my skill confidence in javascript and stuff, and my story programming, aswell as a card of stuff outside of programming
  projects: some cool card selection with some small projects using APIs
  */
  console.log(process.env.NODE_ENV);
  return (
    <div className="homepage">
      <Header />
      <section id="intro" className="homepage-section intro">
        <svg
          className="signature"
          viewBox="0 0 187 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 132C24.2342 127.422 44.3244 111.227 61.4444 97.3333C77.794 84.0653 93.9484 70.0571 107.889 54.2222C117.515 43.2875 127.979 30.0202 129.944 15.0556C130.901 7.77096 127.848 2.05626 120 1.66667C110.037 1.17203 102.194 9.48352 96.5 16.5556C87.189 28.1208 78.699 42.602 77.7778 57.7778C76.8784 72.5947 83.9319 86.2827 90.5556 99C101.473 119.962 114.711 143.322 113.111 167.889C112.203 181.827 106.862 195.591 100.333 207.778C95.0308 217.676 88.4539 229.068 79.2222 235.889C74.0819 239.687 68.1365 240.107 65.3333 233.5C60.5832 222.303 69.5302 209.482 76 201.111C104.732 163.935 148.016 139.943 185 112"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <h4 className="text-discover intro-title">Welcome to my page</h4>

        <p>
          I'm Santiago Esmeral, a web developer who values quality over
          quantity, and simplicity over complexity. Scroll down to learn more
          about me and my projects.
        </p>
      </section>

      <section id="who-am-i" className="homepage-section who-am-i">
        <h1>Who am i?</h1>
        <p>
          This is a page that i'm making as both a demonstration of my
          knowledge, aswell as a place where i can try things out. Hopefully
          you'll like it!
        </p>
      </section>
      <section id="my-projects" className="homepage-section my-projects">
        <h1>My projects</h1>
        <p>
          This is a page that i'm making as both a demonstration of my
          knowledge, aswell as a place where i can try things out. Hopefully
          you'll like it!
        </p>
      </section>
    </div>
  );
}
