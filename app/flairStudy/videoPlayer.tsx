import React from 'react';

interface VideoPlayerProps {
  src: string;
  type: string;
  poster: string;
  className?: string; // Add optional className prop
}

const VideoPlayer = ({ src, type, poster, className }: VideoPlayerProps) => {
  return (
    <div className="video-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster={poster} 
        className={`video-player ${className}`} // Apply className here
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
