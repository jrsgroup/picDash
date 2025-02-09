import React from "react";

interface PicDashLogoProps {
  className?: string;
}

export function PicDashLogo({ className }: PicDashLogoProps) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135.28 94.61"
      className={`w-auto ${className}`}
    >
      <g id="Layer_1-2" data-name="Layer_1">
        <text
          transform="translate(2.92 44.46)"
          style={{
            fontSize: "52px",
            fill: "#231f20",
            fontFamily: "Geist-Bold, Geist",
            fontVariationSettings: "'wght' 700",
            fontWeight: 700,
          }}
        >
          <tspan x="0" y="0" style={{ letterSpacing: "-0.01em" }}>
            p
          </tspan>
          <tspan x="32.4" y="0" style={{ letterSpacing: "0em" }}>
            i
          </tspan>
          <tspan x="46.8" y="0">
            c
          </tspan>
        </text>
        <text
          transform="translate(2.02 83.17) scale(.98) skewX(-10)"
          style={{
            fontSize: "52.8px",
            fill: "#231f20",
            fontFamily: "Geist-Bold, Geist",
            fontVariationSettings: "'wght' 700",
            fontWeight: 700,
          }}
        >
          <tspan x="0" y="0">
            d
          </tspan>
          <tspan x="33.58" y="0" style={{ letterSpacing: "0em" }}>
            a
          </tspan>
          <tspan x="65.42" y="0" style={{ letterSpacing: "-0.01em" }}>
            s
          </tspan>
          <tspan x="95.1" y="0">
            h
          </tspan>
        </text>
      </g>
    </svg>
  );
}
