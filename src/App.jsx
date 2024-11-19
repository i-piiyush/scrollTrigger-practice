import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.from("#box", {
      opacity: 0,
      y: 40,
      duration: 1,
    });

    gsap.to(".page2 h1", {
      transform: "translateX(-30%)",
      scrollTrigger: {
        trigger: ".page2",
        scroller:"main",
        scrub: 3,
        markers: true,
        start: "top 10%",
        end: "top -150%",
        pin: true,
      },
    });
  });

  return (
    <>
    <main>
       <div className="page1 ">
        <h1 id="box">hii ji</h1>
      </div>
      <div className="page2">
        <h1>kese Ho?</h1>
      </div>
      <div className="page1"></div>
    </main>
     
    </>
  );
}

export default App;
