import * as React from "react";
const SvgLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={500} height={312} {...props}>
    <defs>
      <clipPath id="logo_svg__a">
        <path clipRule="evenodd" d="M497 343h506v252H497V343z" />
      </clipPath>
      <clipPath id="logo_svg__b">
        <path
          clipRule="evenodd"
          d="M497.016 343.727H1003v250.597H497l.016-250.597z"
        />
      </clipPath>
      <clipPath id="logo_svg__c">
        <path clipRule="evenodd" d="M504 351h492v236H504V351z" />
      </clipPath>
      <clipPath id="logo_svg__d">
        <path
          clipRule="evenodd"
          d="M497.016 343.727H1003v250.597H497l.016-250.597z"
        />
      </clipPath>
      <clipPath id="logo_svg__e">
        <path
          clipRule="evenodd"
          d="M543.04 389.879h413.92V548.07H543.04V389.879z"
        />
      </clipPath>
    </defs>
    <path
      d="M115.43 78 250 0l134.57 78v156L250 312l-134.57-78V78zm1.943 154.862L250 309.744l132.627-76.882V79.138L250 2.256 117.373 79.138z"
      fill="#F9CC0B"
    />
    <g clipPath="url(#logo_svg__a)" transform="translate(.533) scale(.33262)">
      <g clipPath="url(#logo_svg__b)">
        <path
          d="M497.016 594.273V343.727H1003v250.546H497.016z"
          fill="#F9CC0B"
        />
      </g>
    </g>
    <g clipPath="url(#logo_svg__c)" transform="translate(.533) scale(.33262)">
      <g clipPath="url(#logo_svg__d)">
        <path
          d="M504.691 586.594V351.406H995.31v235.188H504.691z"
          fill="#0C1D36"
        />
      </g>
    </g>
    <path
      d="M173.508 189.995v-67.994h152.984v67.986l-152.984.008z"
      fill="#F9CC0B"
    />
    <g clipPath="url(#logo_svg__e)" transform="translate(.533) scale(.33262)">
      <path
        d="M642.605 389.879h11.68V548.12h-11.68v-73.926h-87.933v73.926h-11.633V389.88h11.633v73.074h87.933v-73.075zm155.942 0v11.281h-49.688v146.961H737.23v-146.96h-49.687v-11.282zm84.183 0c24.543 0 43.051 6.73 55.516 20.152 12.48 13.414 18.715 33.172 18.715 59.172 0 26.188-6.234 45.848-18.613 59.067-12.414 13.222-30.922 19.851-55.618 19.851h-50.925V389.88zm0 147.355c20.528 0 36.02-5.504 46.473-16.492 10.438-10.988 15.684-28.367 15.684-52.137 0-23.27-5.246-40.359-15.785-51.347-10.543-10.988-25.985-16.477-46.372-16.477h-39.296v136.453z"
        fill="#0C1D36"
      />
    </g>
  </svg>
);
export default SvgLogo;
