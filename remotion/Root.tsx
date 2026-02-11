import { Composition } from "remotion";
import { HeroAnimation } from "./HeroAnimation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroAnimation"
        component={HeroAnimation}
        durationInFrames={300}
        fps={30}
        width={640}
        height={400}
      />
    </>
  );
};
