import React from 'react';

interface YouTubeEmbedProps {
  url: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
  const embedUrl = url.replace("watch?v=", "embed/");

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
