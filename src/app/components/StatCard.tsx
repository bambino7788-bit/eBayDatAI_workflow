import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgClass: string;
  iconColorClass: string;
}

export function StatCard({ title, value, icon, iconBgClass, iconColorClass }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.1)] p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-[#717182] text-sm">{title}</span>
        <span className="text-[#252525] text-xl font-medium">{value}</span>
      </div>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass}`}>
        <div className={iconColorClass}>
          {icon}
        </div>
      </div>
    </div>
  );
}
