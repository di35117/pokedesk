import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import landing from "../public/Landing.png";
import card from "../public/Card.png";
import logo from "../public/logo.svg";
import second from "../public/2nd.jpg";
import bg2 from "../public/bg2.png";
import writing from "../public/wriiting.png";
import pikachu from "../public/run-pikachu.gif";
import button from "../public/button.png";
import middle from "../public/middle.png";
import right from "../public/right.png";
import third from "../public/3rd.png";
import variant1 from "../public/variant4.png";
import variant2 from "../public/variant3.png";
import fourth from "../public/4th.png";
import transit from "../public/transit.png";
import fifth from "../public/5th.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cardRef = useRef(null);
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const horizontalSectionRef = useRef(null);

  // Section 2 Refs
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const middleImgRef = useRef(null);
  const rightImgRef = useRef(null);

  // Section 3 Refs
  const variant1Ref = useRef(null);
  const variant2Ref = useRef(null);

  // Section 4 Refs
  const fourthSectionRef = useRef(null);
  const transitRef = useRef(null);

  useEffect(() => {
    // --- 1. Hero Card Tilt ---
    const el = cardRef.current;
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xVal = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const yVal = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      gsap.to(el, {
        rotationY: xVal * 15,
        rotationX: -yVal * 15,
        x: xVal * 20,
        y: yVal * 20,
        ease: "power2.out",
        duration: 0.5,
        transformPerspective: 1000,
        transformOrigin: "center center",
      });
    };
    window.addEventListener("mousemove", onMove);

    // --- 2. GSAP Context ---
    const ctx = gsap.context(() => {
      // A. Hero Scroll Parallax
      gsap.to(wrapperRef.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // B. Horizontal Scroll Container Animation
      const sections = horizontalSectionRef.current;

      const horizontalTween = gsap.to(sections, {
        x: "-300vw", // FIXED: Changed from -200vw to -300vw to reach the 5th section
        ease: "none",
        scrollTrigger: {
          trigger: sections,
          start: "top top",
          end: "+=4000", // Increased duration (was 3000) for smoother scrolling over 4 sections
          pin: true,
          scrub: 1,
        },
      });

      // C. Section 2 Background Loop
      gsap.to([bg1Ref.current, bg2Ref.current], {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      });

      // D. Section 4 Transit Animation
      gsap.fromTo(
        transitRef.current,
        {
          opacity: 0,
          scaleX: 0,
          transformOrigin: "center center",
        },
        {
          opacity: 1,
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: fourthSectionRef.current,
            containerAnimation: horizontalTween,
            start: "left center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Initial States
      gsap.set(rightImgRef.current, { opacity: 0, display: "none" });
      gsap.set(variant2Ref.current, { opacity: 0, display: "none" });
    }, [heroRef, horizontalSectionRef]);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  // --- Handlers for Section 2 ---
  const handleMouseEnter = () => {
    gsap.to(rightImgRef.current, {
      display: "block",
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(middleImgRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(middleImgRef.current, { display: "none" }),
    });
  };
  const handleMouseLeave = () => {
    gsap.to(middleImgRef.current, {
      display: "block",
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(rightImgRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(rightImgRef.current, { display: "none" }),
    });
  };

  // --- Handlers for Section 3 ---
  const handleVariantEnter = () => {
    gsap.to(variant2Ref.current, {
      display: "block",
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(variant1Ref.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(variant1Ref.current, { display: "none" }),
    });
  };
  const handleVariantLeave = () => {
    gsap.to(variant1Ref.current, {
      display: "block",
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(variant2Ref.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(variant2Ref.current, { display: "none" }),
    });
  };

  return (
    <div className="w-full font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 px-12 text-black">
        <img src={logo} alt="Logo" className="w-12 h-auto" />
        <div className="space-x-10 text-sm font-bold tracking-wide cursor-pointer">
          <Link to="/" className="hover:text-gray-200 transition-colors">
            HOME
          </Link>
          <Link to="/buy" className="hover:text-gray-200 transition-colors">
            BUY
          </Link>
          <a href="#" className="hover:text-gray-200 transition-colors">
            SELL
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            TRADE
          </a>
        </div>
      </nav>

      {/* SECTION 1 */}
      <div
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden [perspective:1000px]"
      >
        <img
          src={landing}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex h-full items-center justify-end px-24 pt-10">
          <div ref={wrapperRef}>
            <img
              ref={cardRef}
              src={card}
              alt="Card"
              className="w-80 md:w-259 drop-shadow-2xl will-change-transform"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 w-full text-center text-white text-xs font-bold tracking-widest z-40">
        SCROLL DOWN <br /> v
      </div>

      {/* HORIZONTAL CONTAINER: Width = 400vw (Sections 2, 3, 4, 5) */}
      <div
        ref={horizontalSectionRef}
        className="flex flex-nowrap w-[400vw] h-screen"
      >
        {/* SECTION 2 */}
        <div className="relative w-screen h-screen shrink-0 overflow-hidden">
          <img
            src={second}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bg"
          />
          <div className="relative z-10 flex items-center justify-center h-full px-20 py-32">
            <div className="relative inline-block rounded-3xl overflow-hidden shadow-lg">
              <img
                src={bg2}
                className="block w-full h-auto opacity-0 pointer-events-none"
                alt="Sizer"
              />
              <div className="absolute inset-0 flex flex-nowrap">
                <img
                  ref={bg1Ref}
                  src={bg2}
                  className="w-full h-full object-cover shrink-0"
                  alt="Loop"
                />
                <img
                  ref={bg2Ref}
                  src={bg2}
                  className="w-full h-full object-cover shrink-0"
                  alt="Loop"
                />
              </div>
              <div className="absolute top-50 left-130 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <img src={writing} className="w-120" />
              </div>
              <div className="absolute top-90 left-125 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <img src={button} className="w-30" />
              </div>
              <div
                className="absolute top-70 left-220 right-0 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={middle}
                  className="w-[45rem] opacity-0 pointer-events-none"
                />
                <img
                  ref={middleImgRef}
                  src={middle}
                  className="w-100 absolute top-0 left-70"
                />
                <img
                  ref={rightImgRef}
                  src={right}
                  className="w-100 absolute top-0 left-70"
                />
              </div>
              <img
                src={pikachu}
                className="absolute bottom-8 left-[20%] z-30 w-50 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="relative w-screen h-screen shrink-0 overflow-hidden">
          <img
            src={third}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bg"
          />
          <div
            className="absolute top-1/2 right-20 -translate-y-1/2 z-20 cursor-pointer"
            onMouseEnter={handleVariantEnter}
            onMouseLeave={handleVariantLeave}
          >
            <img
              src={variant1}
              className="w-[30rem] opacity-0 pointer-events-none"
            />
            <img
              ref={variant1Ref}
              src={variant1}
              className="absolute top-0 left-35 w-[30rem]"
            />
            <img
              ref={variant2Ref}
              src={variant2}
              className="absolute top-0 left-35 w-[30rem]"
            />
          </div>
        </div>

        {/* SECTION 4 */}
        <div
          ref={fourthSectionRef}
          className="relative w-screen h-screen shrink-0 overflow-hidden flex justify-center items-center"
        >
          <img
            src={fourth}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bg"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <img
              ref={transitRef}
              src={transit}
              alt="Transit"
              className="w-360 max-h-[80vh] object-contain"
            />
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="relative w-screen h-screen shrink-0 overflow-hidden">
          <img
            src={fifth}
            className="absolute inset-0 w-full h-full object-contain"
            alt="Bg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
