import { cx } from "../utils/index.js"


 export const LinkedInIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    viewBox="0 0 42 43"
    {...rest}
    className={cx(className, "w-full h-auto")}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0076B2"
        d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
      />
      <path
        fill="#fff"
        d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .808h42v42H0z" />
      </clipPath>
    </defs>
  </svg>

)

export const Instagram = ({className, ...rest}) => (
    <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={70}
    {...rest}
    className={cx(className, "w-full h-auto")}
  >

    <radialGradient id="a" cx=".4" cy="1" r="1">
      <stop offset=".1" stopColor="#fd5" />
      <stop offset=".5" stopColor="#ff543e" />
      <stop offset="1" stopColor="#c837ab" />
    </radialGradient>

    <linearGradient id="b" x2=".2" y2="1">
      <stop offset=".1" stopColor="#3771c8" />
      <stop offset=".5" stopColor="#60f" stopOpacity="0" />
    </linearGradient>

    <rect id="c" height="512" rx="15%" width="512" />

    <use fill="url(#a)" xlinkHref="#c" />

    <use fill="url(#b)" xlinkHref="#c" />

    <g fill="none" stroke="#fff" strokeWidth="30">
      <rect height="308" rx="81" width="308" x="102" y="102" />

      <circle cx="256" cy="256" r="72" />

      <circle cx="347" cy="165" r="6" />
    </g>
  </svg>
);

export const TikTokIcon = ({ className, ...rest }) => (
    <svg
    fill="none"
    height="70"
    viewBox="0 0 92 92"
    width="70"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={cx(className, "w-full h-auto")}
    >
    <path
      fill="#010002"
      d="M0 0h91.5618v91.5618H0z"
    />
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        fill="#ee1d52"
        d="m55.6702 39.5576c3.0666 2.182 6.739 3.3478 10.5015 3.3336v-7.4633c-.7397.002-1.4773-.0773-2.1997-.2364v5.9458c-3.771.0067-7.4488-1.1724-10.514-3.3709v15.3496c-.0093 2.5188-.6994 4.9881-1.9972 7.146-1.2978 2.158-3.1548 3.9243-5.3743 5.1115-2.2194 1.1872-4.7185 1.7511-7.2322 1.632-2.5137-.1192-4.9483-.917-7.0457-2.3088 1.94 1.9647 4.4189 3.3089 7.1228 3.8626 2.7038.5536 5.511.2917 8.0661-.7525 2.555-1.0443 4.743-2.8239 6.2869-5.1136 1.5439-2.2896 2.3742-4.9864 2.3858-7.7486zm2.7217-7.6126c-1.5595-1.6919-2.5164-3.8522-2.7217-6.1449v-.9702h-2.0879c.2581 1.4573.8197 2.8439 1.6483 4.0698.8286 1.2258 1.9057 2.2634 3.1613 3.0453zm-21.7489 26.8432c-.7236-.9471-1.1671-2.0786-1.2799-3.2656s.1095-2.3818.6418-3.4486c.5322-1.0667 1.353-1.9624 2.3688-2.5853 1.0158-.6228 2.186-.9478 3.3772-.9378.6577-.0002 1.3115.1005 1.9388.2986v-7.7122c-.7332-.0972-1.4727-.1387-2.2122-.1244v5.9956c-1.5272-.4832-3.1802-.3733-4.6302.3078s-2.5907 1.8835-3.1953 3.3681c-.6046 1.4845-.6287 3.1425-.0676 4.644.5611 1.5016 1.6664 2.7367 3.0959 3.4598z"
      />
       <path
        fill="#fff"
        d="m53.4569 37.7166c3.0652 2.1985 6.743 3.3777 10.514 3.371v-5.9458c-2.1485-.4547-4.1003-1.5729-5.5801-3.1969-1.2555-.7818-2.3326-1.8194-3.1613-3.0452-.8286-1.2259-1.3902-2.6125-1.6483-4.0698h-5.4931v30.1147c-.0051 1.3329-.4272 2.6308-1.2069 3.7115-.7798 1.0806-1.878 1.8897-3.1407 2.3137-1.2626.424-2.6262.4416-3.8993.0503-1.2732-.3912-2.3919-1.1718-3.1992-2.2319-1.2794-.6461-2.3041-1.7048-2.9086-3.0053s-.7536-2.7669-.4233-4.1626 1.1208-2.6393 2.2439-3.5302 2.5133-1.3771 3.9464-1.3801c.6575.0021 1.311.1027 1.9387.2985v-5.9956c-2.7122.0652-5.3465.9216-7.5793 2.4641-2.2329 1.5425-3.9672 3.7039-4.99 6.219s-1.2897 5.2744-.7678 7.9392c.5218 2.6647 1.8097 5.119 3.7055 7.0615 2.0979 1.4018 4.5363 2.2079 7.0557 2.3322 2.5193.1244 5.0252-.4375 7.2507-1.6259s4.0872-2.9588 5.3869-5.1225c1.2997-2.1638 1.9886-4.6398 1.9934-7.1645z"
      />
      <path
        fill="#69c9d0"
        d="m63.9716 35.1412v-1.6046c-1.9731.0084-3.9081-.5437-5.5801-1.5922 1.4761 1.6287 3.4294 2.7478 5.5801 3.1968zm-10.3897-10.3118c0-.2861-.087-.5847-.1243-.8708v-.9702h-7.581v30.1271c-.0066 1.687-.6816 3.3024-1.8769 4.4917-1.1953 1.1894-2.8132 1.8555-4.4986 1.8522-.9924.005-1.9719-.2252-2.8584-.6717.8073 1.0601 1.926 1.8406 3.1992 2.2319 1.2731.3913 2.6367.3737 3.8993-.0503 1.2627-.424 2.3609-1.2331 3.1407-2.3137.7797-1.0807 1.2017-2.3786 1.2069-3.7116v-30.1146zm-12.1421 16.1706v-1.7042c-3.1195-.4241-6.2906.2218-8.9965 1.8324-2.7058 1.6106-4.7869 4.091-5.9039 7.037-1.1171 2.9459-1.2044 6.1837-.2476 9.1857.9568 3.0019 2.9012 5.591 5.5164 7.3453-1.8814-1.947-3.1556-4.4003-3.6668-7.0602s-.2374-5.4113.7881-7.918c1.0256-2.5066 2.7583-4.6601 4.9866-6.1972 2.2282-1.5372 4.8556-2.3915 7.561-2.4586z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);
