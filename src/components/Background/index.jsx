import { useEffect, useState } from "react";
import "./style.css";

export default function () {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
      const mouseMove = (e) => {
        setTimeout(() => {
          setMousePosition({
            x: e.pageX,
            y: e.pageY,
          });
        }, 150);
      };
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      };
    }, []);
  return (
    <>
      <div className="noise"></div>
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="0"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradientes">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div
            className="cursor"
            style={{
              transform: `translate(-400px, -370px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
