/**
 * ExtendedLayerComposition.tsx
 * 
 * A secondary composition file to keep DynamicLayerComposition.tsx from getting too large.
 * Add new templates here as needed.
 * 
 * Current Templates:
 * - Fact Cards (Template 31)
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  Img,
  Audio,
  Video,
  Sequence,
} from "remotion";

import { loadFont as loadPlayfairDisplay } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";
import { loadFont as loadBebasNeue } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadRussoOne } from "@remotion/google-fonts/RussoOne";
import { loadFont as loadLilitaOne } from "@remotion/google-fonts/LilitaOne";
import { loadFont as loadChangaOne } from "@remotion/google-fonts/ChangaOne";
import { loadFont as loadArchivoBlack } from "@remotion/google-fonts/ArchivoBlack";
import { loadFont as loadGravitasOne } from "@remotion/google-fonts/GravitasOne";
import { loadFont as loadBungee } from "@remotion/google-fonts/Bungee";
import { loadFont as loadLuckiestGuy } from "@remotion/google-fonts/LuckiestGuy";
import { loadFont as loadAmaticSC } from "@remotion/google-fonts/AmaticSC";
import { loadFont as loadSatisfy } from "@remotion/google-fonts/Satisfy";
import { loadFont as loadPacifico } from "@remotion/google-fonts/Pacifico";
import { loadFont as loadDancingScript } from "@remotion/google-fonts/DancingScript";
import { loadFont as loadOleoScript } from "@remotion/google-fonts/OleoScript";
import { loadFont as loadSilkscreen } from "@remotion/google-fonts/Silkscreen";
import { loadFont as loadKodeMono } from "@remotion/google-fonts/KodeMono";
import { loadFont as loadAsimovian } from "@remotion/google-fonts/Asimovian";
import { loadFont as loadTagesschrift } from "@remotion/google-fonts/Tagesschrift";
import { loadFont as loadStoryScript } from "@remotion/google-fonts/StoryScript";
import { loadFont as loadBitcountGridDouble } from "@remotion/google-fonts/BitcountGridDouble";
import { loadFont as loadRobotoMono } from "@remotion/google-fonts/RobotoMono";
import { loadFont as loadSourceCodePro } from "@remotion/google-fonts/SourceCodePro";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
import { loadFont as loadFiraCode } from "@remotion/google-fonts/FiraCode";
import { loadFont as loadIBMPlexMono } from "@remotion/google-fonts/IBMPlexMono";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadRaleway } from "@remotion/google-fonts/Raleway";
import { loadFont as loadMerriweather } from "@remotion/google-fonts/Merriweather";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadOswald } from "@remotion/google-fonts/Oswald";
import { loadFont as loadAbrilFatface } from "@remotion/google-fonts/AbrilFatface";
import { loadFont as loadSpaceMono } from "@remotion/google-fonts/SpaceMono";
import { loadFont as loadCourierPrime } from "@remotion/google-fonts/CourierPrime";
import { loadFont as loadUbuntuMono } from "@remotion/google-fonts/UbuntuMono";
import { loadFont as loadInconsolata } from "@remotion/google-fonts/Inconsolata";
import { loadFont as loadAnonymousPro } from "@remotion/google-fonts/AnonymousPro";
import { loadFont as loadOpenSans } from "@remotion/google-fonts/OpenSans";
import { loadFont as loadNunito } from "@remotion/google-fonts/Nunito";
import { loadFont as loadWorkSans } from "@remotion/google-fonts/WorkSans";
import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";
import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";
import { loadFont as loadQuicksand } from "@remotion/google-fonts/Quicksand";
import { loadFont as loadCormorantGaramond } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadLora } from "@remotion/google-fonts/Lora";
import { loadFont as loadEBGaramond } from "@remotion/google-fonts/EBGaramond";
import { loadFont as loadLibreBaskerville } from "@remotion/google-fonts/LibreBaskerville";
import { loadFont as loadCrimsonText } from "@remotion/google-fonts/CrimsonText";
import { loadFont as loadPTSerif } from "@remotion/google-fonts/PTSerif";
import { loadFont as loadSpectral } from "@remotion/google-fonts/Spectral";
import { loadFont as loadRighteous } from "@remotion/google-fonts/Righteous";
import { loadFont as loadPermanentMarker } from "@remotion/google-fonts/PermanentMarker";
import { loadFont as loadBangers } from "@remotion/google-fonts/Bangers";
import { loadFont as loadGreatVibes } from "@remotion/google-fonts/GreatVibes";
import { loadFont as loadSacramento } from "@remotion/google-fonts/Sacramento";
import { loadFont as loadCaveat } from "@remotion/google-fonts/Caveat";

const { fontFamily: libreBaskerville } = loadLibreBaskerville();
const { fontFamily: crimsonText } = loadCrimsonText();
const { fontFamily: ptSerif } = loadPTSerif();
const { fontFamily: spectral } = loadSpectral();
const { fontFamily: righteous } = loadRighteous();
const { fontFamily: permanentMarker } = loadPermanentMarker();
const { fontFamily: bangers } = loadBangers();
const { fontFamily: greatVibes } = loadGreatVibes();
const { fontFamily: sacramento } = loadSacramento();
const { fontFamily: caveat } = loadCaveat();

const { fontFamily: ebGaramond } = loadEBGaramond();

const { fontFamily: lora } = loadLora();

const { fontFamily: cormorantGaramond } = loadCormorantGaramond();

const { fontFamily: quicksand } = loadQuicksand();

const { fontFamily: dmSans } = loadDMSans();
const { fontFamily: manrope } = loadManrope();

// Load all fonts
const { fontFamily: workSans } = loadWorkSans();
const { fontFamily: playfairDisplay } = loadPlayfairDisplay();
const { fontFamily: roboto } = loadRoboto();
const { fontFamily: bebasNeue } = loadBebasNeue();
const { fontFamily: russoOne } = loadRussoOne();
const { fontFamily: lilitaOne } = loadLilitaOne();
const { fontFamily: changaOne } = loadChangaOne();
const { fontFamily: archivoBlack } = loadArchivoBlack();
const { fontFamily: gravitasOne } = loadGravitasOne();
const { fontFamily: bungee } = loadBungee();
const { fontFamily: luckiestGuy } = loadLuckiestGuy();
const { fontFamily: amaticSC } = loadAmaticSC();
const { fontFamily: satisfy } = loadSatisfy();
const { fontFamily: pacifico } = loadPacifico();
const { fontFamily: dancingScript } = loadDancingScript();
const { fontFamily: oleoScript } = loadOleoScript();
const { fontFamily: silkscreen } = loadSilkscreen();
const { fontFamily: kodeMono } = loadKodeMono();
const { fontFamily: asimovian } = loadAsimovian();
const { fontFamily: tagesschrift } = loadTagesschrift();
const { fontFamily: storyScript } = loadStoryScript();
const { fontFamily: bitcountGridDouble } = loadBitcountGridDouble();
const { fontFamily: robotoMono } = loadRobotoMono();
const { fontFamily: sourceCodePro } = loadSourceCodePro();
const { fontFamily: jetBrainsMono } = loadJetBrainsMono();
const { fontFamily: firaCode } = loadFiraCode();
const { fontFamily: ibmPlexMono } = loadIBMPlexMono();
const { fontFamily: inter } = loadInter();
const { fontFamily: poppins } = loadPoppins();
const { fontFamily: montserrat } = loadMontserrat();
const { fontFamily: raleway } = loadRaleway();
const { fontFamily: merriweather } = loadMerriweather();
const { fontFamily: anton } = loadAnton();
const { fontFamily: oswald } = loadOswald();
const { fontFamily: abrilFatface } = loadAbrilFatface();
const { fontFamily: spaceMono } = loadSpaceMono();
const { fontFamily: courierPrime } = loadCourierPrime();
const { fontFamily: ubuntuMono } = loadUbuntuMono();
const { fontFamily: inconsolata } = loadInconsolata();
const { fontFamily: anonymousPro } = loadAnonymousPro();
const { fontFamily: openSans } = loadOpenSans();
const { fontFamily: nunito } = loadNunito();

// Map font names to loaded fontFamily values
const fontMap: Record<string, string> = {
  "EB Garamond, serif": ebGaramond,
  "Lora, serif": lora,
  "Cormorant Garamond, serif": cormorantGaramond,
  "Quicksand, sans-serif": quicksand,
  "DM Sans, sans-serif": dmSans,
  "Manrope, sans-serif": manrope,
  "Work Sans, sans-serif": workSans,
  "Nunito, sans-serif": nunito,
  "Inter, sans-serif": playfairDisplay,
  "Roboto, sans-serif": roboto,
  "Open Sans, sans-serif": openSans,
  "Bebas Neue, cursive": bebasNeue,
  "Russo One": russoOne,
  "Lilita One": lilitaOne,
  "Changa One": changaOne,
  "Archivo Black": archivoBlack,
  "Gravitas One": gravitasOne,
  "Libre Baskerville, serif": libreBaskerville,
  "Crimson Text, serif": crimsonText,
  "PT Serif, serif": ptSerif,
  "Spectral, serif": spectral,
  "Righteous, cursive": righteous,
  "Permanent Marker, cursive": permanentMarker,
  "Bangers, cursive": bangers,
  "Great Vibes, cursive": greatVibes,
  "Sacramento, cursive": sacramento,
  "Satisfy, cursive": satisfy,
  "Caveat, cursive": caveat,
  "Roboto Mono, monospace": robotoMono,
  "Fira Code, monospace": firaCode,
  "JetBrains Mono, monospace": jetBrainsMono,
  "Space Mono, monospace": spaceMono,
  Bungee: bungee,
  "Luckiest Guy": luckiestGuy,
  "Amatic SC": amaticSC,
  Satisfy: satisfy,
  Pacifico: pacifico,
  "Dancing Script": dancingScript,
  "Oleo Script": oleoScript,
  Silkscreen: silkscreen,
  "Kode Mono": kodeMono,
  Asimovian: asimovian,
  Tagesschrift: tagesschrift,
  "Story Script": storyScript,
  "Bitcount Grid Double": bitcountGridDouble,
  "Roboto Mono": robotoMono,
  "Source Code Pro": sourceCodePro,
  "JetBrains Mono": jetBrainsMono,
  "Fira Code": firaCode,
  "IBM Plex Mono": ibmPlexMono,
  Inter: inter,
  "Poppins, sans-serif": poppins,
  "Montserrat, sans-serif": montserrat,
  "Raleway, sans-serif": raleway,
  "Merriweather, serif": merriweather,
  Anton: anton,
  Oswald: oswald,
  "Abril Fatface": abrilFatface,
  "Space Mono": spaceMono,
  "Courier Prime": courierPrime,
  "Ubuntu, sans-serif": ubuntuMono,
  Inconsolata: inconsolata,
  "Anonymous Pro": anonymousPro,
};

//function to resolved all fonts
function resolveFontFamily(propsFontFamily: string) {
  return fontMap[propsFontFamily] || propsFontFamily;
}

// ============================================================================
// BASE LAYER TYPES - Matching DynamicLayerComposition
// ============================================================================

export interface LayerBase {
  id: string;
  name: string;
  visible: boolean;
  locked: boolean;
  startFrame: number;
  endFrame: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation: number;
  opacity: number;
  zIndex?: number;
  animation?: {
    entrance?:
      | "fade"
      | "slideUp"
      | "slideDown"
      | "slideLeft"
      | "slideRight"
      | "scale"
      | "zoomPunch"
      | "bounce"
      | "none";
    entranceDuration?: number;
  };
}

export interface TextLayer extends LayerBase {
  type: "text";
  content: string;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fontWeight: string;
  fontStyle?: string;
  textAlign: "left" | "center" | "right";
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  textOutline?: boolean;
  outlineColor?: string;
  textShadow?: boolean;
  shadowColor?: string;
  shadowX?: number;
  shadowY?: number;
  shadowBlur?: number;
}

export interface ImageLayer extends LayerBase {
  type: "image";
  src: string;
  isBackground?: boolean;
  gradient?: string;
  objectFit?: "cover" | "contain" | "fill";
  filter?: string;
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
  adjustments?: {
    brightness?: number;
    contrast?: number;
    saturation?: number;
  };
  flipX?: boolean;
  flipY?: boolean;
}

export interface VideoLayer extends LayerBase {
  type: "video";
  src: string;
  volume: number;
  loop?: boolean;
  playbackRate?: number;
  objectFit?: "cover" | "contain" | "fill";
  filter?: string;
  fadeIn?: number;
  fadeOut?: number;
  borderRadius?: number;
  flipX?: boolean;
  flipY?: boolean;
}

export interface AudioLayer extends LayerBase {
  type: "audio";
  src: string;
  volume: number;
  loop?: boolean;
  fadeIn?: number;
  fadeOut?: number;
}

// ============================================================================
// FACT CARDS LAYER TYPE
// ============================================================================

export interface FactCardLayer extends LayerBase {
  type: "fact-card";
  title: string;
  subtitle?: string;
  description?: string;
  isIntro?: boolean;
  isOutro?: boolean;
  cardStyle?: {
    backgroundColor?: string;
    borderRadius?: number;
    blur?: number;
    padding?: string;
  };
  titleStyle?: {
    fontSize?: number;
    fontFamily?: string;
    fontColor?: string;
    fontWeight?: string;
  };
  subtitleStyle?: {
    fontSize?: number;
    fontFamily?: string;
    fontColor?: string;
    fontWeight?: string;
  };
}

// ============================================================================
// COMBINED LAYER TYPE
// ============================================================================

export type ExtendedLayer =
  | TextLayer
  | ImageLayer
  | VideoLayer
  | AudioLayer
  | FactCardLayer;

// Type Guards
export const isTextLayer = (l: ExtendedLayer): l is TextLayer => l.type === "text";
export const isImageLayer = (l: ExtendedLayer): l is ImageLayer => l.type === "image";
export const isVideoLayer = (l: ExtendedLayer): l is VideoLayer => l.type === "video";
export const isAudioLayer = (l: ExtendedLayer): l is AudioLayer => l.type === "audio";
export const isFactCardLayer = (l: ExtendedLayer): l is FactCardLayer => l.type === "fact-card";

// ============================================================================
// COMPOSITION PROPS
// ============================================================================

export interface ExtendedCompositionProps {
  layers: ExtendedLayer[];
  backgroundColor?: string;
  editingLayerId?: string | null;
  templateId?: number;
  addWatermark?: boolean; // ✅ ADD THIS
  globalStyles?: {
    fontSizeTitle?: number;
    fontSizeSubtitle?: number;
    fontFamilyTitle?: string;
    fontFamilySubtitle?: string;
    fontColorTitle?: string;
    fontColorSubtitle?: string;
  };
  duration?: number;
}

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

const getEntranceAnimation = (
  entrance: string | undefined,
  relativeFrame: number,
  entranceDuration: number
): { opacity: number; transform: string } => {
  if (!entrance || entrance === "none") {
    return { opacity: 1, transform: "" };
  }

  const progress = Math.min(relativeFrame / entranceDuration, 1);
  const eased = Easing.out(Easing.cubic)(progress);

  switch (entrance) {
    case "fade":
      return { opacity: eased, transform: "" };

    case "scale":
      const scale = interpolate(eased, [0, 1], [0.5, 1]);
      return { opacity: eased, transform: `scale(${scale})` };

    case "slideUp":
      const slideUpY = interpolate(eased, [0, 1], [100, 0]);
      return { opacity: eased, transform: `translateY(${slideUpY}px)` };

    case "slideDown":
      const slideDownY = interpolate(eased, [0, 1], [-100, 0]);
      return { opacity: eased, transform: `translateY(${slideDownY}px)` };

    case "slideLeft":
      const slideLeftX = interpolate(eased, [0, 1], [100, 0]);
      return { opacity: eased, transform: `translateX(${slideLeftX}px)` };

    case "slideRight":
      const slideRightX = interpolate(eased, [0, 1], [-100, 0]);
      return { opacity: eased, transform: `translateX(${slideRightX}px)` };

    case "bounce":
      const bounceY = interpolate(progress, [0, 0.4, 0.7, 1], [50, -15, 5, 0]);
      return { opacity: Math.min(progress * 2, 1), transform: `translateY(${bounceY}px)` };

    case "zoomPunch":
      const zoomScale = interpolate(progress, [0, 0.6, 1], [0.3, 1.1, 1]);
      return { opacity: eased, transform: `scale(${zoomScale})` };

    default:
      return { opacity: 1, transform: "" };
  }
};

// ============================================================================
// IMAGE LAYER COMPONENT
// ============================================================================

const ImageLayerComponent: React.FC<{
  layer: ImageLayer;
  relativeFrame: number;
  fps: number;
}> = ({ layer, relativeFrame }) => {
  const entranceDuration = layer.animation?.entranceDuration || 30;
  const { opacity: animOpacity, transform: animTransform } = getEntranceAnimation(
    layer.animation?.entrance,
    relativeFrame,
    entranceDuration
  );

  const finalOpacity = layer.opacity * animOpacity;

  let filterStr = layer.filter || "";
  if (layer.adjustments) {
    const { brightness, contrast, saturation } = layer.adjustments;
    if (brightness !== undefined) filterStr += ` brightness(${brightness})`;
    if (contrast !== undefined) filterStr += ` contrast(${contrast})`;
    if (saturation !== undefined) filterStr += ` saturate(${saturation})`;
  }

  const transformStr = `rotate(${layer.rotation}deg) ${animTransform} ${layer.flipX ? "scaleX(-1)" : ""} ${layer.flipY ? "scaleY(-1)" : ""}`.trim();

  if (layer.isBackground) {
    return (
      <AbsoluteFill style={{ zIndex: layer.zIndex || 0 }}>
        {layer.gradient && !layer.src ? (
          <div style={{ width: "100%", height: "100%", background: layer.gradient, opacity: finalOpacity }} />
        ) : (
          <Img
            src={layer.src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: layer.objectFit || "cover",
              filter: filterStr.trim() || undefined,
              opacity: finalOpacity,
              transform: transformStr || undefined,
            }}
          />
        )}
      </AbsoluteFill>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${layer.position.x - layer.size.width / 2}%`,
        top: `${layer.position.y - layer.size.height / 2}%`,
        width: `${layer.size.width}%`,
        height: `${layer.size.height}%`,
        transform: transformStr || undefined,
        opacity: finalOpacity,
        borderRadius: layer.borderRadius,
        overflow: "hidden",
        zIndex: layer.zIndex || 0,
      }}
    >
      <Img
        src={layer.src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: layer.objectFit || "cover",
          filter: filterStr.trim() || undefined,
        }}
      />
    </div>
  );
};

// ============================================================================
// VIDEO LAYER COMPONENT
// ============================================================================

const VideoLayerComponent: React.FC<{
  layer: VideoLayer;
  relativeFrame: number;
  fps: number;
}> = ({ layer, relativeFrame }) => {
  const entranceDuration = layer.animation?.entranceDuration || 30;
  const { opacity: animOpacity, transform: animTransform } = getEntranceAnimation(
    layer.animation?.entrance,
    relativeFrame,
    entranceDuration
  );

  let fadeOpacity = 1;
  const layerDuration = layer.endFrame - layer.startFrame;
  if (layer.fadeIn && relativeFrame < layer.fadeIn) {
    fadeOpacity = relativeFrame / layer.fadeIn;
  }
  if (layer.fadeOut && relativeFrame > layerDuration - layer.fadeOut) {
    fadeOpacity = (layerDuration - relativeFrame) / layer.fadeOut;
  }

  const finalOpacity = layer.opacity * animOpacity * fadeOpacity;
  const transformStr = `rotate(${layer.rotation}deg) ${animTransform} ${layer.flipX ? "scaleX(-1)" : ""} ${layer.flipY ? "scaleY(-1)" : ""}`.trim();

  return (
    <div
      style={{
        position: "absolute",
        left: `${layer.position.x - layer.size.width / 2}%`,
        top: `${layer.position.y - layer.size.height / 2}%`,
        width: `${layer.size.width}%`,
        height: `${layer.size.height}%`,
        transform: transformStr || undefined,
        opacity: finalOpacity,
        borderRadius: layer.borderRadius,
        overflow: "hidden",
        zIndex: layer.zIndex || 0,
      }}
    >
      <Video
        src={layer.src}
        volume={layer.volume}
        loop={layer.loop}
        playbackRate={layer.playbackRate || 1}
        style={{
          width: "100%",
          height: "100%",
          objectFit: layer.objectFit || "cover",
          filter: layer.filter,
        }}
      />
    </div>
  );
};

// ============================================================================
// TEXT LAYER COMPONENT
// ============================================================================

const TextLayerComponent: React.FC<{
  layer: TextLayer;
  relativeFrame: number;
  fps: number;
}> = ({ layer, relativeFrame }) => {
  const entranceDuration = layer.animation?.entranceDuration || 30;
  const { opacity: animOpacity, transform: animTransform } = getEntranceAnimation(
    layer.animation?.entrance,
    relativeFrame,
    entranceDuration
  );

  const finalOpacity = layer.opacity * animOpacity;

  let textShadow = undefined;
  if (layer.textShadow) {
    const x = layer.shadowX || 0;
    const y = layer.shadowY || 2;
    const blur = layer.shadowBlur || 4;
    const color = layer.shadowColor || "rgba(0,0,0,0.5)";
    textShadow = `${x}px ${y}px ${blur}px ${color}`;
  }

  let textStroke = undefined;
  if (layer.textOutline) {
    textStroke = `1px ${layer.outlineColor || "#000"}`;
  }

  const transformStr = `rotate(${layer.rotation}deg) ${animTransform}`.trim();

  return (
    <div
      style={{
        position: "absolute",
        left: `${layer.position.x - layer.size.width / 2}%`,
        top: `${layer.position.y - layer.size.height / 2}%`,
        width: `${layer.size.width}%`,
        height: `${layer.size.height}%`,
        display: "flex",
        alignItems: "center",
        justifyContent:
          layer.textAlign === "center"
            ? "center"
            : layer.textAlign === "right"
            ? "flex-end"
            : "flex-start",
        transform: transformStr || undefined,
        opacity: finalOpacity,
        zIndex: layer.zIndex || 0,
      }}
    >
      <span
        style={{
          fontFamily: resolveFontFamily(layer.fontFamily),
          fontSize: `${layer.fontSize}em`,
          fontWeight: layer.fontWeight as any,
          fontStyle: layer.fontStyle,
          color: layer.fontColor,
          textAlign: layer.textAlign,
          lineHeight: layer.lineHeight || 1.4,
          letterSpacing: layer.letterSpacing ? `${layer.letterSpacing}px` : undefined,
          textTransform: layer.textTransform,
          textShadow,
          WebkitTextStroke: textStroke,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {layer.content}
      </span>
    </div>
  );
};

// ============================================================================
// FACT CARD COMPONENT
// ============================================================================

const FactCardComponent: React.FC<{
  layer: FactCardLayer;
  relativeFrame: number;
  fps: number;
  globalStyles?: ExtendedCompositionProps["globalStyles"];
}> = ({ layer, relativeFrame, fps, globalStyles }) => {
  const layerDuration = layer.endFrame - layer.startFrame;
  const opacity = interpolate(
    relativeFrame,
    [0, fps * 0.3, layerDuration - fps * 0.5, layerDuration],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  let translateY = 0;
  if (layer.isIntro || layer.isOutro) {
    translateY = interpolate(
      relativeFrame,
      [0, fps * 0.4, fps * 0.7, fps],
      [50, -15, 5, 0],
      {
        easing: Easing.out(Easing.ease),
        extrapolateRight: "clamp",
      }
    );
  } else {
    translateY = interpolate(
      relativeFrame,
      [0, fps * 0.6],
      [50, 0],
      {
        easing: Easing.out(Easing.quad),
        extrapolateRight: "clamp",
      }
    );
  }

  const cardStyle = layer.cardStyle || {};
  const titleStyle = layer.titleStyle || {};
  const subtitleStyle = layer.subtitleStyle || {};
  const isSpecialSlide = layer.isIntro || layer.isOutro;

  const titleFontSize = titleStyle.fontSize || globalStyles?.fontSizeTitle || 48;
  const titleFontFamily = titleStyle.fontFamily || globalStyles?.fontFamilyTitle || "Inter, sans-serif";
  const titleFontColor = titleStyle.fontColor || globalStyles?.fontColorTitle || "#FFFFFF";
  
  const subtitleFontSize = subtitleStyle.fontSize || globalStyles?.fontSizeSubtitle || 24;
  const subtitleFontFamily = subtitleStyle.fontFamily || globalStyles?.fontFamilySubtitle || "Inter, sans-serif";
  const subtitleFontColor = subtitleStyle.fontColor || globalStyles?.fontColorSubtitle || "#FFFFFF";
  const posX = layer.position?.x ?? 50;
  const posY = layer.position?.y ?? 50;
  const sizeW = layer.size?.width ?? 80;
  const sizeH = layer.size?.height ?? 40;

  return (
    <AbsoluteFill
      style={{
        zIndex: layer.zIndex || 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${posX}%`,
          top: `${posY}%`,
          width: `${sizeW}%`,
          height: `${sizeH}%`,
          transform: `translate(-50%, -50%) translateY(${translateY}px)`,
        }}
      >
        <div
          style={{
            background: cardStyle.backgroundColor || "rgba(255, 255, 255, 0.15)",
            borderRadius: cardStyle.borderRadius || 25,
            padding: cardStyle.padding || "60px 80px",
            textAlign: "center",
            backdropFilter: `blur(${cardStyle.blur || 20}px)`,
            WebkitBackdropFilter: `blur(${cardStyle.blur || 20}px)`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
            opacity,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
        <h1
          style={{
            fontSize: isSpecialSlide ? titleFontSize * 1.3 : titleFontSize,
            fontWeight: (titleStyle.fontWeight as any) || "bold",
            margin: 0,
            marginBottom: "20px",
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            fontFamily: resolveFontFamily(titleFontFamily),
            color: titleFontColor,
          }}
        >
          {layer.title}
        </h1>

        {(layer.description || layer.subtitle) && (
          <p
            style={{
              fontSize: isSpecialSlide ? subtitleFontSize * 1.2 : subtitleFontSize,
              margin: 0,
              fontWeight: (subtitleStyle.fontWeight as any) || 300,
              opacity: 0.95,
              lineHeight: 1.5,
              fontFamily: resolveFontFamily(subtitleFontFamily),
              color: subtitleFontColor,
            }}
          >
            {layer.description || layer.subtitle}
          </p>
        )}
      </div>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN COMPOSITION
// ============================================================================

export const ExtendedLayerComposition: React.FC<ExtendedCompositionProps> = ({
  layers,
  backgroundColor = "#000000",
  editingLayerId,
  globalStyles,
  addWatermark = false, // ✅ ADD THIS
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const visibleLayers = layers
    .filter((layer) => {
      if (!layer.visible) return false;
      if (layer.id === editingLayerId) return false;
      return frame >= layer.startFrame && frame <= layer.endFrame;
    })
    .sort((a, b) => {
      if (isImageLayer(a) && a.isBackground) return -1;
      if (isImageLayer(b) && b.isBackground) return 1;
      return (a.zIndex || 0) - (b.zIndex || 0);
    });

  return (
    <AbsoluteFill style={{ background: backgroundColor }}>
      {visibleLayers.map((layer) => {
        const relativeFrame = Math.max(0, frame - layer.startFrame);

        if (isImageLayer(layer)) {
          return (
            <ImageLayerComponent
              key={layer.id}
              layer={layer}
              relativeFrame={relativeFrame}
              fps={fps}
            />
          );
        }

        if (isVideoLayer(layer)) {
          return (
            <VideoLayerComponent
              key={layer.id}
              layer={layer}
              relativeFrame={relativeFrame}
              fps={fps}
            />
          );
        }

        if (isTextLayer(layer)) {
          return (
            <TextLayerComponent
              key={layer.id}
              layer={layer}
              relativeFrame={relativeFrame}
              fps={fps}
            />
          );
        }

        if (isFactCardLayer(layer)) {
          return (
            <FactCardComponent
              key={layer.id}
              layer={layer}
              relativeFrame={relativeFrame}
              fps={fps}
              globalStyles={globalStyles}
            />
          );
        }

        return null;
      })}

      {layers
        .filter(
          (l): l is AudioLayer =>
            l.type === "audio" &&
            l.visible &&
            l.id !== editingLayerId &&
            Boolean((l as AudioLayer).src) &&
            (l as AudioLayer).src.trim() !== ""
        )
        .map((layer) => (
          <Sequence
            key={layer.id}
            from={layer.startFrame}
            durationInFrames={layer.endFrame - layer.startFrame}
          >
            <Audio src={layer.src} volume={layer.volume} />
          </Sequence>
        ))}

      {/* Watermark for Free Plan Users */}
      {addWatermark && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            zIndex: 9999,
            opacity: 0.7,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 8,
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 50,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            Made with ViralMotion
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};


export const ExtendedDynamicComposition: React.FC<{
  config: ExtendedCompositionProps
}> = ({config}) => {
  return <ExtendedLayerComposition {...config}/>
}

export default ExtendedLayerComposition;