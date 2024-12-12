import React, { useState, useRef } from 'react';
import { FiPlay, FiPause, FiMaximize } from 'react-icons/fi';

interface Video {
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

interface VideoCardProps {
  video: Video;
  isDark: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative aspect-video rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isPlaying) {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={video.thumbnail}
        onEnded={handleVideoEnd}
        onLoadedData={() => setIsLoading(false)}
        muted
        loop
      >
        <source src={video.url} type="video/mp4" />
      </video>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      <div className={`absolute inset-0 transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-medium text-lg mb-2">{video.title}</h3>
          <p className="text-gray-200 text-sm mb-4">{video.description}</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handlePlayPause}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
            </button>
            <a
              href={video.link}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMaximize size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
