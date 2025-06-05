'use client'

import { useState, useEffect } from "react";
import { useTheme } from "../../_context/themeContext";
import { devProjects } from "../data/projects";
import { creativeWorks } from "../data/creativeWorks";
import { eventProjects, Video } from "../data/eventProjects";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";

// Skeleton loader for cards
const CardSkeleton = ({ type = "default" }: { type?: "default" | "video" }) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative overflow-hidden rounded-xl animate-pulse ${isDark ? "bg-gray-800/50 border border-gray-700/50" : "bg-white border border-gray-200/50"
      } backdrop-blur-sm`}>
      {/* Image skeleton */}
      <div className={`w-full ${type === "video" ? "aspect-[16/9]" : "aspect-[4/3]"} ${isDark ? "bg-gray-700" : "bg-gray-200"
        }`}>
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-300"
              }`}></div>
          </div>
        )}
      </div>

      {/* Content skeleton */}
      <div className="p-3 space-y-2">
        <div className={`h-4 rounded ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
        <div className={`h-3 rounded w-3/4 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
        <div className="flex gap-2 mt-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-6 w-12 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"
              }`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};























//  HighlightedEventCard component with title below image and reduced padding
const HighlightedEventCard = ({ event, isDark }: { event: any; isDark: boolean }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDark
      ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50"
      : "bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200/50"
      } backdrop-blur-lg`}>
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hero Image Section */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className={`absolute inset-0 animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
            }`}></div>
        )}
        <img
          src={event.image || event.src}
          alt={event.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="relative p-4 space-y-4">
        {/* Title moved below image */}
        <div>
          <h3 className={`font-semibold text-base mb-2 text-gray-900 ${isDark ? "text-white" : "text-gray-900"}`}>
            {event.title}
          </h3>
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          {/* <h4 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-purple-400" : "text-purple-600"
            }`}>
            Event Details
          </h4> */}
          <p className={`text-sm text-gray-600 mb-3 ${isDark ? "text-gray-300" : "text-gray-700"
            }`}>
            {event.description || event.fullDescription || "Experience this amazing event that brings together creativity, innovation, and community in an unforgettable celebration."}
          </p>
        </div>

        {/* Tags if available */}
        {event.tags && (
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${isDark
                  ? "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                  : "bg-gray-100/80 text-gray-600 border border-gray-200/50"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-opacity-10 border-gray-400">
          {/* Event Link Button - Sleek Modern Design */}
          <a
            href={event.eventLink || event.url || event.link || "#"}
            target={event.eventLink || event.url || event.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-purple-500/20 hover:from-purple-500 hover:to-blue-500"
          >
            <span>
              {event.eventLink || event.url || event.link ? "View Event" : "Event Link"}
            </span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Recap Link Button - Subtle Secondary Style */}
          <a
            href={event.recapLink || "#"}
            target={event.recapLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${isDark
              ? "bg-gray-800/40 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50 hover:text-gray-200"
              : "bg-gray-50/80 text-gray-600 border border-gray-200/60 hover:bg-gray-100/80 hover:text-gray-700"
              }`}
          >

            <span>
              {event.recapLink ? "Recap" : "Recap"}
            </span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Additional Info Section */}
        {(event.date || event.location || event.attendees) && (
          <div className={`pt-3 border-t border-opacity-20 border-gray-500 space-y-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"
            }`}>
            {event.date && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{event.date}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.location}</span>
              </div>
            )}
            {event.attendees && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span>{event.attendees} attendees</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};













































// Enhanced CreativeWorkCard with loading state
const CreativeWorkCard = ({ work, isHighlightedEvent = false }: { work: any; isHighlightedEvent?: boolean }) => {
  const { isDark } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    if (work.url || work.link) {
      window.open(work.url || work.link, '_blank');
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${isDark ? "bg-gray-800/50 border border-gray-700/50" : "bg-white border border-gray-200/50"
        } backdrop-blur-sm ${work.url || work.link ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {/* Image container with loading state */}
      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
        {!imageLoaded && (
          <div className={`absolute inset-0 animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
            }`}></div>
        )}
        <img
          src={work.image || work.src}
          alt={work.title || work.alt || "Creative work"}
          className={`w-full h-full transition-opacity duration-300 ${isHighlightedEvent ? 'object-cover' : 'object-contain'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className={`font-semibold text-base mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
          {work.title}
        </h3>
        {work.description && (
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} line-clamp-2 mb-3`}>
            {work.description}
          </p>
        )}
        {work.tags && (
          <div className="flex flex-wrap gap-1">
            {work.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${isDark
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};




const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:&|$)/);
  return match ? match[1] : null;
};

const getTikTokVideoId = (url: string) => {
  // Handle various TikTok URL formats
  const patterns = [
    /tiktok\.com\/@[^/]+\/video\/(\d+)/,
    /tiktok\.com\/t\/([a-zA-Z0-9]+)/,
    /vm\.tiktok\.com\/([a-zA-Z0-9]+)/,
    /tiktok\.com\/v\/(\d+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const getVideoType = (url: string) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  } else if (url.includes('tiktok.com') || url.includes('vm.tiktok.com')) {
    return 'tiktok';
  }
  return 'unknown';
};

const VideoCard = ({ video, isDark }: { video: Video; isDark: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  const videoType = getVideoType(video.url);
  const youtubeVideoId = videoType === 'youtube' ? getYouTubeVideoId(video.url) : null;
  const tiktokVideoId = videoType === 'tiktok' ? getTikTokVideoId(video.url) : null;

  const renderThumbnail = () => {
    if (videoType === 'youtube' && youtubeVideoId) {
      return (
        <img
          src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      );
    } else if (videoType === 'tiktok') {
      // For TikTok, we'll use a generic thumbnail or placeholder
      // TikTok doesn't provide easy thumbnail access like YouTube
      return (
        <div className="w-full h-full bg-gradient-to-br from-black via-pink-900 to-cyan-900 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🎵</div>
            <div className="text-sm opacity-80">TikTok Video</div>
          </div>
        </div>
      );
    }

    // Fallback for unknown video types
    return (
      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🎥</div>
          <div className="text-sm opacity-80">Video</div>
        </div>
      </div>
    );
  };

  const renderPlayer = () => {
    if (videoType === 'youtube' && youtubeVideoId) {
      return (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    } else if (videoType === 'tiktok') {
      return (
        <iframe
          className="w-full h-full"
          src={`https://www.tiktok.com/embed/v2/${tiktokVideoId}`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    }

    // Fallback - open in new tab
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center hover:text-blue-400 transition-colors"
        >
          <div className="text-4xl mb-2">🔗</div>
          <div className="text-sm">Open Video</div>
        </a>
      </div>
    );
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 ${isDark
          ? 'bg-gray-800/50 border border-gray-700/50'
          : 'bg-white border border-gray-200/50'
        } backdrop-blur-sm`}
    >
      <div className="relative w-full aspect-[16/9] bg-black overflow-hidden cursor-pointer">
        {!loaded ? (
          <div onClick={() => setLoaded(true)}>
            {renderThumbnail()}
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-4 backdrop-blur-sm transition-all duration-300 hover:bg-black/80 hover:scale-110 group-hover:shadow-lg">
                <svg
                  className="w-8 h-8 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          renderPlayer()
        )}
      </div>
      {/* Card content */}
      <div className="p-4">
        <h3
          className={`font-semibold text-base mb-2 ${isDark ? 'text-white' : 'text-gray-900'
            }`}
        >
          {video.title}
        </h3>
        {video.description && (
          <p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
              } mb-3`}
          >
            {video.description}
          </p>
        )}
        <p
          className={`text-sm mb-2 ${isDark ? 'text-white' : 'text-gray-900'
            }`}
        >
          At {video.location}
        </p>
      </div>
    </div>
  );
};








// Enhanced ProjectCard with modern design
const ModernProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { isDark } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl ${isDark
      ? "bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50"
      : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50"
      } backdrop-blur-lg hover:scale-[1.02]`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Project number */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${isDark
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                }`}>
                #{String(index + 1).padStart(2, '0')}
              </span>
              <div className={`h-px flex-1 ${isDark ? "bg-gradient-to-r from-gray-600 to-transparent" : "bg-gradient-to-r from-gray-300 to-transparent"
                }`}></div>
            </div>

            {/* Title */}
            <h3 className={`text-xl lg:text-2xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"
              }`}>
              {project.title}
            </h3>

            {/* Description */}
            <p className={`text-sm lg:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
              }`}>
              {project.description}
            </p>

            {/* Technologies or Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${isDark
                    ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50"
                    : "bg-gray-100/80 text-gray-700 border border-gray-200/50 hover:bg-gray-200/80"
                    }`}
                >
                  {tech}
                </span>
              ))}
              {project.tags?.split(' | ').map((tag: string, tagIndex: number) => (
                <span
                  key={`tag-${tagIndex}`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${isDark
                    ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50"
                    : "bg-gray-100/80 text-gray-700 border border-gray-200/50 hover:bg-gray-200/80"
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>View Live</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>More Info</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Project image */}
          <div className="lg:w-96 lg:flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl bg-black">
              {!imageLoaded && (
                <div className={`absolute inset-0 animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
                  } aspect-[4/3]`}></div>
              )}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<"dev" | "creative" | "event">("dev");
  const [activeGallery, setActiveGallery] = useState<string>("Videography");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Simulate loading when tab changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeTab, activeGallery]);

  useEffect(() => {
    // Reset activeGallery to the first available category when switching tabs
    if (activeTab === "event") {
      const categories = Object.keys(eventProjects);
      if (!categories.includes(activeGallery)) {
        setActiveGallery(categories[0] || "Videography");
      }
    } else if (activeTab === "creative") {
      const categories = Object.keys(creativeWorks);
      if (!categories.includes(activeGallery)) {
        setActiveGallery(categories[0] || "Videography");
      }
    }
  }, [activeTab, activeGallery]);

  const tabs = [
    { key: "dev", label: "Software Work", icon: "" },
    { key: "event", label: "Event + Marketing Work", icon: "" },
    { key: "creative", label: "Playground", icon: "" },
  ];

  return (
    <section id="projects-section" className="mb-32">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Explore my journey through development, creativity, and strategic planning
          </p>
        </div>

        {/* Modern tab navigation */}
        <div className="flex justify-center mb-12 px-2 sm:px-4">
          <div className={`inline-flex p-1 rounded-2xl w-full max-w-3xl ${isDark ? "bg-gray-900/50 border border-gray-700/50" : "bg-gray-100/50 border border-gray-200/50"
            } backdrop-blur-sm`}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "dev" | "creative" | "event")}
                className={`relative flex-1 px-1 sm:px-4 md:px-6 py-3 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 flex flex-col sm:flex-row items-center justify-center text-center gap-0.5 sm:gap-2 ${activeTab === tab.key
                  ? "bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-lg transform sm:scale-105"
                  : `${isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                  }`
                  }`}
              >
                <span className="text-base sm:text-lg mb-0.5 sm:mb-0">{tab.icon}</span>
                <span className="text-center leading-tight sm:leading-normal">
                  <span className="block sm:hidden text-[10px] font-semibold">
                    {tab.key === "dev" ? "Dev" : tab.key === "creative" ? "Creative" : "Events"}
                  </span>
                  <span className="hidden sm:block">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content sections with loading states */}
        {activeTab === "dev" && (
          <div className="space-y-12">
            {isLoading ? (
              // Loading skeletons for dev projects
              Array.from({ length: 3 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : (
              devProjects.map((project, index) => (
                <ModernProjectCard key={index} project={project} index={index} />
              ))
            )}
          </div>
        )}

        {activeTab === "event" && (
          <div>
            <div className="flex justify-center mb-8">
              <div className={`inline-flex p-1 rounded-xl ${isDark ? "bg-gray-800/50 border border-gray-700/50" : "bg-gray-50/50 border border-gray-200/50"
                } backdrop-blur-sm`}>
                {Object.keys(eventProjects).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveGallery(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeGallery === category
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : `${isDark
                        ? "text-gray-400 hover:text-white hover:bg-gray-700/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              // Loading skeletons for event projects
              <div className={`grid ${activeGallery === "Videography" ? "grid-cols-1 md:grid-cols-2" :
                activeGallery === "Highlighted Events" ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" :
                  "grid-cols-1 md:grid-cols-3"
                } gap-6`}>
                {Array.from({ length: activeGallery === "Videography" ? 4 : 6 }).map((_, index) => (
                  <CardSkeleton key={index} type={activeGallery === "Videography" ? "video" : "default"} />
                ))}
              </div>
            ) : (
              eventProjects[activeGallery] && (
                activeGallery === "Videography" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(eventProjects[activeGallery] as Video[]).map((video, index) => (
                      <VideoCard key={index} video={video} isDark={isDark} />
                    ))}
                  </div>
                ) : activeGallery === "Highlighted Events" ? (
                  // Use the new HighlightedEventCard for this specific category
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {(eventProjects[activeGallery] as any[]).map((event, index) => (
                      <HighlightedEventCard
                        key={index}
                        event={event}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(eventProjects[activeGallery] as any[]).map((work, index) => (
                      <CreativeWorkCard
                        key={index}
                        work={work}
                        isHighlightedEvent={false}
                      />
                    ))}
                  </div>
                )
              )
            )}
          </div>
        )}

        {activeTab === "creative" && (
          <div>
            <div className="flex justify-center mb-8">
              <div className={`inline-flex p-1 rounded-xl ${isDark ? "bg-gray-800/50 border border-gray-700/50" : "bg-gray-50/50 border border-gray-200/50"
                } backdrop-blur-sm`}>
                {Object.keys(creativeWorks).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveGallery(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeGallery === category
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : `${isDark
                        ? "text-gray-400 hover:text-white hover:bg-gray-700/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              // Loading skeletons for creative works
              <div className={`grid ${activeGallery === "Videography" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                } gap-6`}>
                {Array.from({ length: activeGallery === "Videography" ? 4 : 6 }).map((_, index) => (
                  <CardSkeleton key={index} type={activeGallery === "Videography" ? "video" : "default"} />
                ))}
              </div>
            ) : (
              creativeWorks[activeGallery] && (
                activeGallery === "Videography" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(creativeWorks[activeGallery] as Video[]).map((video, index) => (
                      <VideoCard key={index} video={video} isDark={isDark} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(creativeWorks[activeGallery] as any[]).map((work, index) => (
                      <CreativeWorkCard key={index} work={work} />
                    ))}
                  </div>
                )
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;