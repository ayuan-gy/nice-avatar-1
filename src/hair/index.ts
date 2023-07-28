import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";

export default function hair(props: {
  style: string;
  color: string;
  colorRandom: boolean;
}): string {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick":
      return Thick({ color, colorRandom });
    case "mohawk":
      return Mohawk({ color, colorRandom });
    case "womanLong":
      return WomanLong({ color });
    case "womanShort":
      return WomanShort({ color });
    case "normal":
    default:
      return Normal({ color });
  }
}
