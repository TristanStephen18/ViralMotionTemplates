// TestTextComposition.tsx
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

// Load Inter font
const { fontFamily: inter } = loadFont();

export const TestTextComposition: React.FC<{
  text?: string;
  fontColor?: string;
  fontSize?: number;
}> = ({ text = "Hello Lambda!", fontColor = "#ffffff", fontSize = 60 }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: inter,
          color: fontColor,
          fontSize,
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
