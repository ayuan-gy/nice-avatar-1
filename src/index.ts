import type { NiceAvatarProps } from "./types";

import { genConfig, transformToBgImg } from "./utils";

import Face from "./face/index";
import Hair from "./hair/index";
import Hat from "./hat/index";
import Ear from "./ear/index";
import Eyebrow from "./eyebrow/index";
import Eye from "./eyes/index";
import Glasses from "./glasses/index";
import Nose from "./nose/index";
import Mouth from "./mouth/index";
import Shirt from "./shirt/index";
export default function getNiceAvatar(props: NiceAvatarProps): string {
  const { shape = "square", hairColorRandom = false } = props;
  const config = genConfig(props);

  // Background shape
  let borderRadius;
  switch (shape) {
    case "circle": {
      borderRadius = "100%";
      break;
    }
    case "rounded": {
      borderRadius = "6px";
      break;
    }
    case "square": {
      borderRadius = 0;
      break;
    }
  }
  const svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
  <foreignObject width="256" height="256">
    <div xmlns="http://www.w3.org/1999/xhtml" style="background: ${
      config.bgColor
    }; overflow: hidden; border-radius: 100%; width: 256px; height: 256px;">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position: relative; width: 100%; height: 100%;">
        <div xmlns="http://www.w3.org/1999/xhtml" style="position: absolute; bottom: 0px; width: 100%; height: 90%;">
         ${Face({ color: config.faceColor })}
        ${Hat({ color: config.hatColor, style: config.hatStyle })}
         ${
           config.hatStyle === "none"
             ? Hair({
                 color: config.hairColor,
                 style: config.hairStyle,
                 colorRandom: hairColorRandom,
               })
             : ""
         }
          <div xmlns="http://www.w3.org/1999/xhtml" style="position: absolute;right: -3%;top: 30%;width: 100%;height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
            ${Eyebrow({ style: config.eyeBrowStyle })}
            ${Eye({ style: config.eyeStyle })}
            ${Glasses({ style: config.glassesStyle })}
            ${Ear({ color: config.faceColor, size: config.earSize })}
            ${Nose({ style: config.noseStyle })}
            ${Mouth({ style: config.mouthStyle })}
          </div>
          ${Shirt({
            color: config.shirtColor,
            style: config.shirtStyle,
          })}
        </div>
      </div>
    </div>
  </foreignObject>
</svg>`;
  return svgHtml || "";
}

export { genConfig } from "./utils";
export { transformToBgImg } from "./utils";
