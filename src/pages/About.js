import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../styles/About.css'
import background from '../pages/test2.png'
import background2 from '../pages/test.png'
import TransitionContext from '../context/TransitionContext';


export default function About() {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray('.panel'),
          scrollStarts = [0],
          snapScroll = value => value; // for converting a pixel-based scroll value to the closest panel scroll position
      
      // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top"
        });
      });

      // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map(trigger => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // find the closest snapping spot based on the direction of scroll
            let scroll = snapScroll(self.scrollY() + self.deltaY, self.deltaY > 0 ? 1 : -1);
            goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
          }
        }
      })

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,

    });
  });


  return (
    <main ref={main}>
      <section className="description panel light">
        <div>
          <h1>Vem är jag?</h1>
          <img id="bg1" src={background} alt="1"></img>
          <img id="bg2" src={background2} alt="2"></img>
          <div className="scroll-down">
            Skrolla ner<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel one">
        <h1>Mitt namn är Adrian Moreno.</h1>
        <p>Jag är en 21 årig kille från byn Alfta som ligger i vackra Hälsingland.</p>
        <p>Jag skulle beskriva mig själv som uttåtriktad,nyfiken och ambitiös.</p>
        <div className='images1'>
        <p>
        <img src={`${process.env.PUBLIC_URL}/assets/jag2.png`} alt="bild1"></img>
        <img src={`${process.env.PUBLIC_URL}/assets/jag3.png`} alt="bild2"></img>
        <img src={`${process.env.PUBLIC_URL}/assets/jag.png`} alt="bild3"></img>
        </p>
        </div>
      </section>

      <section className="panel two">
        <h1>2</h1>
      </section>

      <section className="panel three">
      <h1>3</h1>
      </section>
    </main>
  );
}

