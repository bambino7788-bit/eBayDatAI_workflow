import { ChevronRight } from 'lucide-react';
import svgPaths from "../../imports/svg-a10285garl";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex gap-2 items-center min-h-[36px]">
      {/* Grid Icon */}
      <div className="relative shrink-0 size-4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.pff0fc00} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </svg>
      </div>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <div className="relative shrink-0 size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M6 12L10 8L6 4" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
              </svg>
            </div>
          )}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px] hover:text-[#0968F6] transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className={`font-['Geist:${index === items.length - 1 ? 'Medium' : 'Regular'}',sans-serif] ${index === items.length - 1 ? 'font-medium' : 'font-normal'} text-[14px] leading-[1.5] text-[${index === items.length - 1 ? '#0a0a0a' : '#737373'}] tracking-[0.07px]`}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}