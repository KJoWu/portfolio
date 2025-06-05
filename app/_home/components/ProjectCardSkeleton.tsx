import { useTheme } from "../../_context/themeContext";

export const ProjectCardSkeleton = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 animate-pulse ${
      isDark ? "bg-gray-800/30 border border-gray-700/30" : "bg-white/50 border border-gray-200/30"
    } backdrop-blur-sm`}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content skeleton */}
        <div className="flex-1 space-y-4">
          <div className={`h-8 rounded-lg w-3/4 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
          <div className="space-y-2">
            <div className={`h-4 rounded ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
            <div className={`h-4 rounded w-5/6 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
            <div className={`h-4 rounded w-4/5 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-6 w-16 rounded-full ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}></div>
            ))}
          </div>
        </div>
        
        {/* Image skeleton */}
        <div className="lg:w-96">
          <div className={`w-full aspect-[4/3] rounded-xl ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}></div>
        </div>
      </div>
    </div>
  );
};