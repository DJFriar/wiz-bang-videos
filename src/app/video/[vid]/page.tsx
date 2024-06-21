'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import ReactPlayer from "react-player/file"
import Link from "next/link";

import videos from "./data";
import VideoMissing from '../../../../public/VideoMissing.png'

export default function Video({ params }: { params: {vid: string} }) {
  const fireworkSKU = params.vid;
  const videoURL = `/videos/${fireworkSKU}.mp4`;
  const firework = videos.find((obj) => obj.sku === fireworkSKU);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <main className="flex flex-col items-center justify-between py-24">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Image src="/LilSparky.png" alt="Sparky the Mascot. Clicking this loads the home page." width={34} height={64}/>
        </Link>
      </div>
      <div className="text-4xl md:text-5xl pb-2">
        {firework?.name}
      </div>
      { !firework?.hasVideo 
        ? <div className=""><Image src={VideoMissing} alt="" height={400} width={400} /></div>
        : <div>{ hasWindow && <ReactPlayer url={videoURL} controls={false} playing={true} muted={true} width="100vw" /> }</div>
      }

      {/* <div className="mb-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
        {firework?.description}
      </div> */}
    </main>
  )
}
