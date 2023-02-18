import * as React from "react";
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2000}
    height={1250}
    viewBox="0 0 118 74"
    {...props}
  >
    <defs>
      <clipPath id="logo_svg__a">
        <path d="M39.031 27.117H78.97v19.77H39.03zm0 0" />
      </clipPath>
      <clipPath id="logo_svg__b">
        <path d="M42.664 30.758h32.672v12.48H42.664zm0 0" />
      </clipPath>
    </defs>
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#f9cc0b",
        fillOpacity: 1,
      }}
      d="M27.066 18.5 59 0l31.934 18.5v37L59 74 27.066 55.5zm.461 36.73L59 73.465 90.473 55.23V18.77L59 .535 27.527 18.77zm0 0"
    />
    <g clipPath="url(#logo_svg__a)">
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: "#f9cc0b",
          fillOpacity: 1,
        }}
        d="M39.031 46.883V27.117H78.97v19.766zm0 0"
      />
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: "#0c1d36",
          fillOpacity: 1,
        }}
        d="M39.637 46.277V27.723h38.726v18.554zm0 0"
      />
    </g>
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#f9cc0b",
        fillOpacity: 1,
      }}
      d="M40.848 45.063V28.936h36.304v16.125zm0 0"
    />
    <g clipPath="url(#logo_svg__b)">
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: "#0c1d36",
          fillOpacity: 1,
        }}
        d="M50.523 30.758h.922v12.484h-.922V37.41h-6.941v5.832h-.918V30.758h.918v5.765h6.941zm12.309 0v.89H58.91v11.594h-.918V31.648H54.07v-.89zm6.645 0c1.937 0 3.398.531 4.382 1.59.985 1.058 1.477 2.617 1.477 4.668 0 2.066-.492 3.617-1.469 4.66-.98 1.043-2.441 1.566-4.39 1.566h-4.02V30.758zm0 11.625c1.62 0 2.843-.434 3.668-1.301.824-.867 1.238-2.238 1.238-4.113 0-1.836-.414-3.184-1.246-4.051-.832-.867-2.051-1.3-3.66-1.3h-3.102v10.765zm0 0"
      />
    </g>
  </svg>
);
export default SvgLogo;
