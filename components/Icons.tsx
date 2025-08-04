import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

export const Logo = (props: SvgProps) => (
  <Svg viewBox="0 0 122 163" fill="none" {...props}>
    <Path
      fill="#BF19FC"
      d="M111.5 23c5-2.692 10.5-4.5 10.5 8v84l-1 5.5-2.367 4.5c-47.53 68.019-95.755 29.667-116.409-1.5L.5 119l-.5-4.5V31c0-10.8 3.5-10.788 11-8 31.2 11.6 47.833 41.5 51 54 5-29 39.885-48.822 49.5-54Z"
    />
    <Path
      fill="url(#a)"
      d="M82.91 21.485a3.021 3.021 0 0 1-2.01 2.87l-12.135 4.412-4.41 12.134a3.06 3.06 0 0 1-5.74 0l-4.41-12.136-12.136-4.41a3.06 3.06 0 0 1 0-5.74l12.135-4.41 4.412-12.136a3.06 3.06 0 0 1 5.738 0l4.413 12.135 12.134 4.412a3.02 3.02 0 0 1 2.008 2.869Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={48.5}
        x2={82.909}
        y1={21}
        y2={21.485}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F8D769" />
        <Stop offset={1} stopColor="#BF31F2" />
      </LinearGradient>
    </Defs>
  </Svg>
);
