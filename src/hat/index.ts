import Turban from "./turban";
import Beanie from "./beanie";

export default function hat(props: { color: string; style: string }): string {
  const { style, color } = props;
  switch (style) {
    case "beanie":
      return Beanie({ color });
    case "turban":
      return Turban({ color });
    case "none":
    default:
      return "";
  }
}
