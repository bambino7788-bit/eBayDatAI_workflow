import { Star, MoreVertical, FileText, Users, Clock, Share2, PlayCircle } from 'lucide-react';
import { cn } from './ui/utils';

export interface NotebookCardProps {
  id: string;
  title: string;
  isStarred?: boolean;
  description: string;
  language: string;
  environment: string;
  cellCount: number;
  collaboratorCount: number;
  updatedAt: string;
  authorEmail: string;
  tags: string[];
}

export function NotebookCard({
  title,
  isStarred,
  description,
  language,
  environment,
  cellCount,
  collaboratorCount,
  updatedAt,
  authorEmail,
  tags
}: NotebookCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.1)] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[#252525] font-semibold text-base leading-tight pr-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {isStarred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#717182] text-sm mb-4 line-clamp-2 flex-grow">
        {description}
      </p>

      {/* Environment Tags */}
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">
          {language}
        </span>
        <span className="bg-gray-100 text-[#252525] text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
          <span className="w-3 h-3 flex items-center justify-center rounded-full bg-gray-200 text-[8px]">⚙️</span>
          {environment}
        </span>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-[#717182] text-xs mb-4">
        <div className="flex items-center gap-1">
          <FileText className="w-3.5 h-3.5" />
          <span>{cellCount} cells</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{collaboratorCount} collaborators</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{updatedAt}</span>
        </div>
      </div>

      {/* Author */}
      <div className="text-sm text-[#717182] mb-4">
        By <span className="text-[#252525]">{authorEmail}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-[#252525] text-xs px-2 py-1 rounded-full border border-gray-200">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <button className="flex-1 bg-[#0968F6] hover:bg-blue-600 text-white h-9 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors">
          <PlayCircle className="w-4 h-4" />
          Open
        </button>
        <button className="w-9 h-9 border border-[#ebebeb] rounded-lg flex items-center justify-center hover:bg-gray-50 text-[#717182]">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
