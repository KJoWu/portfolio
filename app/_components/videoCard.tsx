import React from 'react';
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
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  };

  const videoId = getYouTubeVideoId(video.url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden group">
      <div className="w-full h-full">
        <iframe
          src={embedUrl}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className={`absolute inset-0 transition-opacity duration-300
        opacity-0 group-hover:opacity-100
        bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-medium text-lg mb-2">{video.title}</h3>
          <p className="text-gray-200 text-sm mb-4">{video.description}</p>
          
          <div className="flex items-center gap-4">
            <a
              href={video.url}
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
