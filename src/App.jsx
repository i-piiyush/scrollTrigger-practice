import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {

  useGSAP(() => {
    gsap.from("#box",{
      opacity:0,
      y:40,
      duration:1
    })
 
   gsap.from("#box2",{
    filter:"blur(30px)",
    opacity:0,
    scrollTrigger:{
      trigger:"#box2",
      scroller:"body",
      markers:true,
      start:"top 50%",
      scrub:true,
      end:"bottom 30%"
    }
   })
  });

  return (
    <>
      <main>
        <div className="page1 ">
         <h1 id="box">hii ji</h1>
        </div>
        <div className="page2">
          
          <h1 id="box2">kese Ho?</h1>
        </div>
        <div className="page1"></div>
      </main>
    </>
  );
}

export default App;
