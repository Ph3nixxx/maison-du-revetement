import React, {useRef, useEffect} from "react"

export default function Video({src}) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline>
            <source src={src} type="video/mp4"/>
        </video>
    );
}