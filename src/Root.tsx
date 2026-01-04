import { Composition } from "remotion";
import { FactsCardVideo } from "./components/FactsCardTemplate";
import { BarGraph } from "./components/BarGraphTemplate";
import { getAudioData } from "@remotion/media-utils";
import { SplitScreen } from "./components/SplitScreen";
import { QuoteComposition } from "./components/QuoteTemplate";
import KpiFlipCards from "./components/KpiFlipCardsTemplate";
import { KenBurnsCarousel } from "./components/KenBurnsSwipe";
import {
  ChatVideo2,
  ChatVideoProps,
  TranscriptJson,
} from "./components/FakeTextConversation";
import { MyRedditVideo } from "./components/RedditVideoTemplate";
import { StoryTellingVideo } from "./components/StoryTellingTemplate";
import {
  SimpleGraphProps,
  SimpleTrendGraph,
} from "./components/CurveLineTrend/SimplifierComponent";
import { NewTypingAnimation } from "./components/NewTextTyping/TypingAnimation";
import { calculateDuration, durationIndicatorQuote } from "./helpers";
import KineticTypographyIntro from "./components/KineticText";
import {
  FlipCardsCompositionComponent,
  MetricCardsProps,
} from "./components/FlipCards";
import { LogoCompositionComponent } from "./components/LogoAnimation";
import * as defaultValues from "./defaultvalues";
import { TestTextComposition } from "./components/SampleTemplate";
import { DynamicTemplate, Layer } from "./components/DynamicLayerComposition";
import ExtendedLayerComposition, {
  ExtendedDynamicComposition,
} from "./components/ExtendedComposition";

type Derived = React.ComponentProps<typeof ChatVideo2>;

const exampleLayers: Layer[] = [
  {
    id: "upper-panel",
    type: "video",
    name: "Upper Panel",
    startFrame: 0,
    endFrame: 600,
    visible: true,
    locked: false,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    position: { x: 50, y: 25 },
    size: { width: 100, height: 50 },
    rotation: 0,
    opacity: 1,
    volume: 0.5,
    loop: true,
    playbackRate: 1,
    objectFit: "cover",
    animation: { entrance: "none", entranceDuration: 0 },
  },
  {
    id: "lower-panel",
    type: "video",
    name: "Lower Panel",
    startFrame: 0,
    endFrame: 600,
    visible: true,
    locked: false,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    position: { x: 50, y: 75 },
    size: { width: 100, height: 50 },
    rotation: 0,
    opacity: 1,
    volume: 0.5,
    loop: true,
    playbackRate: 1,
    objectFit: "cover",
    animation: { entrance: "none", entranceDuration: 0 },
  },
];

const exampleLayersExtended: any[] = [
  {
    id: "background",
    type: "image",
    name: "Background",
    visible: true,
    locked: false,
    startFrame: 0,
    endFrame: 900,
    position: { x: 50, y: 50 },
    size: { width: 100, height: 100 },
    rotation: 0,
    opacity: 1,
    src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1080&q=80",
    isBackground: true,
    objectFit: "cover",
    filter: "brightness(0.7)",
  },
  {
    id: "fact-card-0",
    type: "fact-card",
    name: "Intro Card",
    visible: true,
    locked: false,
    startFrame: 0,
    endFrame: 180,
    position: { x: 50, y: 50 },
    size: { width: 80, height: 40 },
    rotation: 0,
    opacity: 1,
    title: "5 Amazing Facts",
    subtitle: "You Won't Believe!",
    isIntro: true,
    isOutro: false,
    cardStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 25,
      blur: 20,
    },
    titleStyle: {
      fontSize: 48,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    subtitleStyle: {
      fontSize: 24,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    animation: { entrance: "bounce", entranceDuration: 18 },
  },
  {
    id: "fact-card-1",
    type: "fact-card",
    name: "Fact 1",
    visible: true,
    locked: false,
    startFrame: 180,
    endFrame: 360,
    position: { x: 50, y: 50 },
    size: { width: 80, height: 40 },
    rotation: 0,
    opacity: 1,
    title: "Did You Know?",
    description: "The first computer programmer was Ada Lovelace in the 1840s.",
    isIntro: false,
    isOutro: false,
    cardStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 25,
      blur: 20,
    },
    titleStyle: {
      fontSize: 48,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    subtitleStyle: {
      fontSize: 24,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    animation: { entrance: "slideUp", entranceDuration: 18 },
  },
  {
    id: "fact-card-2",
    type: "fact-card",
    name: "Fact 2",
    visible: true,
    locked: false,
    startFrame: 360,
    endFrame: 540,
    position: { x: 50, y: 50 },
    size: { width: 80, height: 40 },
    rotation: 0,
    opacity: 1,
    title: "Amazing Fact",
    description:
      "Honey never spoils. Archaeologists found 3000-year-old honey still edible!",
    isIntro: false,
    isOutro: false,
    cardStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 25,
      blur: 20,
    },
    titleStyle: {
      fontSize: 48,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    subtitleStyle: {
      fontSize: 24,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    animation: { entrance: "slideUp", entranceDuration: 18 },
  },
  {
    id: "fact-card-3",
    type: "fact-card",
    name: "Fact 3",
    visible: true,
    locked: false,
    startFrame: 540,
    endFrame: 720,
    position: { x: 50, y: 50 },
    size: { width: 80, height: 40 },
    rotation: 0,
    opacity: 1,
    title: "Mind Blowing",
    description:
      "There are more stars in the universe than grains of sand on Earth.",
    isIntro: false,
    isOutro: false,
    cardStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 25,
      blur: 20,
    },
    titleStyle: {
      fontSize: 48,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    subtitleStyle: {
      fontSize: 24,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    animation: { entrance: "slideUp", entranceDuration: 18 },
  },
  {
    id: "fact-card-4",
    type: "fact-card",
    name: "Outro Card",
    visible: true,
    locked: false,
    startFrame: 720,
    endFrame: 900,
    position: { x: 50, y: 50 },
    size: { width: 80, height: 40 },
    rotation: 0,
    opacity: 1,
    title: "Thanks for Watching!",
    subtitle: "Like & Subscribe",
    isIntro: false,
    isOutro: true,
    cardStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 25,
      blur: 20,
    },
    titleStyle: {
      fontSize: 48,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    subtitleStyle: {
      fontSize: 24,
      fontFamily: "Inter, sans-serif",
      fontColor: "#FFFFFF",
    },
    animation: { entrance: "bounce", entranceDuration: 18 },
  },
];

type RootProps = Derived & {
  chatdata?: TranscriptJson;
  bgVideo?: string;
  chatAudio?: string;
  musicAudio?: string;
  musicBase?: number;
  musicWhileTalking?: number;
  duckAttackMs?: number;
  duckReleaseMs?: number;
};

const WIDTH = 1080;
const HEIGHT = 1920;
const FPS = 30;
const TAIL_PADDING_SEC = 1.0;

export const RemotionRoot: React.FC = () => {
  const delayStart = 0.5;
  const delayStep = 1;
  const numCards = 4; // Default number of cards
  const flipAnimationTime = 2; // Time for flip animation to complete
  const freezeTime = 1; // Freeze at the end

  // Total duration = start delay + (cards * step delay) + flip animation + freeze
  const calculatedDuration = Math.ceil(
    (delayStart + (numCards - 1) * delayStep + flipAnimationTime + freezeTime) *
      30,
  );
  return (
    <>
      <Composition
        id="GlassFactsVideo"
        component={FactsCardVideo}
        durationInFrames={30 * defaultValues.facstCardDefaultValues.duration}
        fps={30}
        height={1920}
        width={1080}
        defaultProps={defaultValues.facstCardDefaultValues}
        calculateMetadata={async ({ props }) => {
          return {
            durationInFrames: 30 * props.duration,
            fps: 30,
            width: 1080,
            height: 1920,
          };
        }}
      />
      <Composition
        id="BarGraph"
        component={BarGraph}
        durationInFrames={defaultValues.barGraphDefaultValues.duration * 30}
        fps={30}
        height={1920}
        width={1080}
        defaultProps={defaultValues.barGraphDefaultValues}
      />
      <Composition
        id="SplitScreen"
        component={SplitScreen}
        defaultProps={defaultValues.splitScreenDefaultValues}
        fps={60}
        width={1080}
        height={1920}
        calculateMetadata={async ({ props }) => {
          const fps = 60;
          const durationInFrames = Math.ceil(props.duration * fps);

          return {
            durationInFrames,
            fps,
            width: 1080,
            height: 1920,
          };
        }}
      />
      <Composition
        id="QuoteComposition"
        component={QuoteComposition}
        durationInFrames={1}
        fps={30}
        height={1920}
        width={1080}
        defaultProps={defaultValues.quoetTemplateDefaultValues}
        calculateMetadata={async ({ props }) => {
          const durationSeconds = durationIndicatorQuote(props.quote.length);
          return {
            props,
            durationInFrames: durationSeconds * 30,
          };
        }}
      />

      <Composition
        id="KpiFlipCard"
        component={KpiFlipCards}
        durationInFrames={calculatedDuration}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultValues.kpiFlipCardsDefaultValues}
        calculateMetadata={({ props }) => {
          const actualCards = props.cardsData?.length || numCards;
          const actualDelayStart = props.delayStart ?? delayStart;
          const actualDelayStep = props.delayStep ?? delayStep;

          const duration = Math.ceil(
            (actualDelayStart +
              (actualCards - 1) * actualDelayStep +
              flipAnimationTime +
              freezeTime +
              3) *
              30,
          );

          return {
            durationInFrames: duration,
          };
        }}
      />
      <Composition
        id="KenBurnsCarousel"
        component={KenBurnsCarousel}
        durationInFrames={defaultValues.kenburnsDefaultValues.duration * 30}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultValues.kenburnsDefaultValues}
      />
      <Composition
        id="Sample"
        component={TestTextComposition}
        durationInFrames={3 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ChatVideo"
        component={ChatVideo2}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultValues.fakeTextDefaultValues as ChatVideoProps}
        calculateMetadata={async ({ props }) => {
          const p = {
            ...defaultValues.fakeTextDefaultValues,
            ...(props ?? {}),
          } as Required<RootProps>;

          let lastTime = 0;
          // 1. Check chat JSON timestamps
          try {
            const json = p.chatdata;

            if (Array.isArray((json as any)?.segments)) {
              const segments = (json as any).segments as Array<{
                start_time?: number;
                end_time?: number;
              }>;
              lastTime = segments.reduce((max, s) => {
                const start = Number(s.start_time) || 0;
                const end = Number(s.end_time) || 0;
                return Math.max(max, start, end);
              }, 0);
            } else if (Array.isArray(json)) {
              const arr = json as Array<{
                timestamp?: number;
                duration?: number;
              }>;
              lastTime = arr.reduce((max, m) => {
                const start = Number(m.timestamp) || 0;
                const dur = Number(m.duration);
                const end = start + (Number.isFinite(dur) ? dur : 1.2);
                return Math.max(max, start, end);
              }, 0);
            }
          } catch {
            lastTime = 0;
          }

          // 2. Check audio duration
          let audioDuration = 0;
          try {
            const audioData = await getAudioData(p.chatAudio);
            audioDuration = audioData.durationInSeconds;
          } catch {
            audioDuration = 0;
          }

          // 3. Pick the longer one
          const finalDuration =
            Math.max(lastTime, audioDuration) + TAIL_PADDING_SEC;
          const durationInFrames = Math.max(1, Math.ceil(finalDuration * FPS));

          return {
            durationInFrames: durationInFrames + 1,
            fps: FPS,
            width: WIDTH,
            height: HEIGHT,
          };
        }}
      />
      <Composition
        id="RedditNarration"
        component={MyRedditVideo}
        durationInFrames={Math.ceil(
          defaultValues.redditDefaultValues.duration * 30,
        )}
        fps={30}
        height={1920}
        width={1080}
        defaultProps={{
          script: defaultValues.redditDefaultValues.script,
          voiceoverPath: defaultValues.redditDefaultValues.voiceoverPath,
          duration: defaultValues.redditDefaultValues.duration,
          fontSize: defaultValues.redditDefaultValues.fontSize,
          fontFamily: defaultValues.redditDefaultValues.fontFamily,
          fontColor: defaultValues.redditDefaultValues.fontColor,
          sentenceBgColor: defaultValues.redditDefaultValues.sentenceBgColor,
          backgroundOverlayColor: "rgba(0,0,0,0.6)",
          backgroundVideo: defaultValues.redditDefaultValues.backgroundVideo,
          backgroundMusicPath:
            defaultValues.redditDefaultValues.backgroundMusicPath,
          musicVolume: 0.2,
        }}
        calculateMetadata={async ({ props }) => {
          const fps = 30;
          const durationInFrames = Math.ceil(props.duration * fps);

          return {
            durationInFrames,
            fps,
            width: 1080,
            height: 1920,
          };
        }}
      />
      <Composition
        id="StoryTellingVideo"
        component={StoryTellingVideo}
        durationInFrames={Math.ceil(
          defaultValues.storyTellingDefaultValues.duration * 30,
        )}
        fps={30}
        height={1920}
        width={1080}
        defaultProps={{
          script: defaultValues.storyTellingDefaultValues.script,
          voiceoverPath: defaultValues.storyTellingDefaultValues.voiceoverPath,
          duration: defaultValues.storyTellingDefaultValues.duration,
          fontSize: defaultValues.storyTellingDefaultValues.fontSize,
          fontFamily: defaultValues.storyTellingDefaultValues.fontFamily,
          fontColor: defaultValues.storyTellingDefaultValues.fontColor,
          sentenceBgColor:
            defaultValues.storyTellingDefaultValues.sentenceBgColor,
          backgroundOverlayColor: "rgba(0,0,0,0.6)",
          backgroundVideo:
            defaultValues.storyTellingDefaultValues.backgroundVideo,
          backgroundMusicPath:
            defaultValues.storyTellingDefaultValues.backgroundMusicPath,
          musicVolume: 0.2,
        }}
        calculateMetadata={async ({ props }) => {
          const fps = 30;
          const durationInFrames = Math.ceil(props.duration * fps);

          return {
            durationInFrames,
            fps,
            width: 1080,
            height: 1920,
          };
        }}
      />
      <Composition
        id="CurveLineTrend"
        component={SimpleTrendGraph}
        durationInFrames={
          30 * defaultValues.curveLineTrendDefaultValues.duration
        }
        fps={30}
        width={1080}
        height={1920}
        defaultProps={
          defaultValues.curveLineTrendDefaultValues as SimpleGraphProps
        }
      />
      <Composition
        id="NewTexTyping"
        component={NewTypingAnimation}
        durationInFrames={calculateDuration(
          defaultValues.textTypingDefaultValues.phrase,
        )}
        fps={60}
        width={1080}
        height={1920}
        defaultProps={{
          phraseData: defaultValues.textTypingDefaultValues.phrase,
          fontIndex: defaultValues.textTypingDefaultValues.fontIndex, // Poppins
          backgroundIndex:
            defaultValues.textTypingDefaultValues.backgroundIndex, // Ambient Flow
          audioIndex: defaultValues.textTypingDefaultValues.audioIndex, // Soft Keys
        }}
      />
      <Composition
        id="KineticText"
        component={KineticTypographyIntro}
        fps={30}
        defaultProps={{
          config: defaultValues.defaultConfig,
        }}
        width={1080}
        height={1920}
        durationInFrames={240}
      />
      <Composition
        id="FlipCards"
        durationInFrames={180}
        component={FlipCardsCompositionComponent}
        defaultProps={{
          config: defaultValues.flipcardsdefaulvalues as MetricCardsProps,
        }}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="LogoAnimation"
        component={LogoCompositionComponent}
        defaultProps={{ config: defaultValues.logoanimationdefaultvalues }}
        calculateMetadata={({ props }) => {
          const fps = 30;
          const outlineFrames = props.config.durationOutline * fps;
          const fillFrames = props.config.durationFill * fps;
          const endPauseFrames = props.config.durationEndPause * fps;

          return {
            durationInFrames: outlineFrames + fillFrames + endPauseFrames,
            fps: 30,
            width: 1920,
            height: 1080,
          };
        }}
      />
      <Composition
        id="DynamicVideo"
        component={DynamicTemplate}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          config: {
            layers: exampleLayers,
            backgroundColor: "#000000",
            duration: 10,
            templateId: 1,
            addWatermark: true
          },
        }}
        calculateMetadata={({ props }) => {
          const duration = props.config?.duration ?? 10; // fallback to 10 seconds
          const fps = 30;

          return {
            durationInFrames: duration * fps,
          };
        }}
      />

      <Composition
        id="ExtendedDynamicComposition"
        component={ExtendedDynamicComposition}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ config: { layers: exampleLayersExtended, addWatermark: true } }}
      />
    </>
  );
};
