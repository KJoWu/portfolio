import React from 'react';

interface VideoPlayerProps {
  src: string;
  type: string;
  poster: string;
  className?: string;
}

const VideoPlayer = ({ src, type, poster, className }: VideoPlayerProps) => {
  return (
    <div className={`video-container ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="video-player w-full h-full object-contain"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
