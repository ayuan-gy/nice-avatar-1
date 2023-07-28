import Hoody from "./hoody";
import Short from "./short";
import Polo from "./polo";
import { chroma } from "../utils";

export default function shirt(props: { color: string; style: string }): string {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex().valueOf();
  switch (style) {
    case "hoody":
      return Hoody({ color: color, lightColor: secondColor });
    case "polo":
      return Polo({ color: color, lightColor: secondColor });
    case "short":
    default:
      return Short({ color: color });
  }
}
