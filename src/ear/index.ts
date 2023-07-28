import EarSmall from "./small";
import EarBig from "./big";

export default function ear(props: { color: string; size: string }): string {
  const { color, size } = props;
  return `${size === "small" ? EarSmall({ color }) : EarBig({ color })}`;
}
