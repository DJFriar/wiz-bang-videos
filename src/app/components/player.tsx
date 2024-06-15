import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import videos from "../video/[vid]/data";

const Player = ({ url }: { url: string }) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error 
    ? <Image src="../NoVideo.png" alt="An image stating that the video is missing." onError={onError} /> 
    : <ReactPlayer url={url} controls={false} playing={true} muted={true} />;
};

export default function VideoPlayer({ url }: {url: string}) {
  return (
    <Player url={url} />
  )
}
