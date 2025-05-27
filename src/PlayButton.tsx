import Button from "./Button";
type PlayButtonProps = {
  isPlaying: boolean;
  handlePlayHint: Function;
};
const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  handlePlayHint,
}) => {
  if (isPlaying) {
    return <p style={{ display: "inline" }}>playing...</p>;
  } else {
    return <Button text={"play"} onClick={handlePlayHint} />;
  }
};

export default PlayButton;
