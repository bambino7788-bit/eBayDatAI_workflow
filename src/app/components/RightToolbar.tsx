import React from "react";
import svgPaths from "../../imports/svg-9hls83l6ep";

export type PanelType = 'info' | 'alerts' | 'instance' | 'history' | 'variables' | 'auto-retry' | 'related-pipeline' | null;

interface RightToolbarProps {
  activePanel?: PanelType;
  onPanelClick?: (panel: PanelType) => void;
  hideAutoRetry?: boolean;
  isReleasedMode?: boolean;
}

interface TooltipButtonProps {
  children: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
}

function TooltipButton({ children, tooltip, onClick, className }: TooltipButtonProps) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
      {/* Tooltip - 显示在左侧 */}
      <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
        {tooltip}
        {/* Arrow - 指向右边 */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0a0a0a]" />
      </div>
    </div>
  );
}

function IconInfo({ color = "#737373" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_14657)" id="Icon / info">
          <path d={svgPaths.p3dc49580} id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M9 12V9" id="Vector_2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M9 6H9.0075" id="Vector_3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
        </g>
        <defs>
          <clipPath id="clip0_24_14657">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconSiren() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / siren">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_16197)" id="Icon / siren">
          <path d={svgPaths.p9e52100} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12923b80} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 9H16.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.875 3.375L13.5 3.75" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 9H2.25" id="Vector_5" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 1.5V2.25" id="Vector_6" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.69675 3.69675L4.227 4.227" id="Vector_7" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 9V13.5" id="Vector_8" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_24_16197">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconDocument() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
            <path d={svgPaths.p3fd2d700} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p28bf0de0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.5">
            <path d="M2.25 0.75H0.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
            <path d="M6.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
            <path d="M6.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconClock() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.p37c15d80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.50016 7.50016">
            <path d="M0.75 0.75V5.25L3.75 6.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconVariable() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / variable">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon / variable">
          <path d={svgPaths.p10f0d600} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d={svgPaths.p4c81e00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M11.25 6.75L6.75 11.25" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d="M6.75 6.75L11.25 11.25" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
        </g>
      </svg>
    </div>
  );
}

function IconRepeat() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / repeat-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_14640)" id="Icon / repeat-2">
          <path d="M1.5 6.75L3.75 4.5L6 6.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d={svgPaths.p28337b16} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d={svgPaths.p17f84600} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
          <path d={svgPaths.p30888780} id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4375" />
        </g>
        <defs>
          <clipPath id="clip0_24_14640">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function RightToolbar({ activePanel = null, onPanelClick, hideAutoRetry = false, isReleasedMode = false }: RightToolbarProps) {
  const handleClick = (panel: PanelType) => {
    if (onPanelClick) {
      onPanelClick(activePanel === panel ? null : panel);
    }
  };

  const getButtonClass = (panel: PanelType) => {
    const isActive = activePanel === panel;
    return `relative rounded-[8px] shrink-0 size-[34px] transition-colors cursor-pointer ${
      isActive 
        ? 'bg-[rgba(9,104,246,0.1)]' 
        : 'hover:bg-[#f5f5f5]'
    }`;
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center pt-[16px] relative w-[50px] border-l border-[#e5e5e5] h-full" data-name="Right Toolbar">
      {/* Info Button */}
      <TooltipButton
        children={
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
            <IconInfo color={activePanel === 'info' ? "#0968F6" : "#737373"} />
          </div>
        }
        tooltip="Info"
        onClick={() => handleClick('info')}
        className={getButtonClass('info')}
      />

      {/* Alerts Button - Only in Released mode */}
      {isReleasedMode && (
        <TooltipButton
          children={
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <IconSiren />
            </div>
          }
          tooltip="Alerts"
          onClick={() => handleClick('alerts')}
          className={getButtonClass('alerts')}
        />
      )}

      {/* Instance Button - Only in Released mode */}
      {isReleasedMode && (
        <TooltipButton
          children={
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <IconDocument />
            </div>
          }
          tooltip="Instance"
          onClick={() => handleClick('instance')}
          className={getButtonClass('instance')}
        />
      )}

      {/* History Button */}
      <TooltipButton
        children={
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
            <IconClock />
          </div>
        }
        tooltip="History"
        onClick={() => handleClick('history')}
        className={getButtonClass('history')}
      />

      {/* Variables Button */}
      <TooltipButton
        children={
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
            <IconVariable />
          </div>
        }
        tooltip="Variables"
        onClick={() => handleClick('variables')}
        className={getButtonClass('variables')}
      />

      {/* Auto-Retry Button */}
      <TooltipButton
        children={
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
            <IconRepeat />
          </div>
        }
        tooltip="Auto-Retry"
        onClick={() => handleClick('auto-retry')}
        className={getButtonClass('auto-retry')}
      />

      {/* Overview Button with badge */}
      <TooltipButton
        children={
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M6 2H3.33333C2.59695 2 2 2.59695 2 3.33333V6C2 6.73638 2.59695 7.33333 3.33333 7.33333H6C6.73638 7.33333 7.33333 6.73638 7.33333 6V3.33333C7.33333 2.59695 6.73638 2 6 2Z" stroke={activePanel === 'related-pipeline' ? "#0968F6" : "#737373"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M4.66667 7.33333V10C4.66667 10.3536 4.80714 10.6928 5.05719 10.9428C5.30724 11.1929 5.64638 11.3333 6 11.3333H8.66667" stroke={activePanel === 'related-pipeline' ? "#0968F6" : "#737373"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M12.6667 8.66667H10C9.26362 8.66667 8.66667 9.26362 8.66667 10V12.6667C8.66667 13.403 9.26362 14 10 14H12.6667C13.403 14 14 13.403 14 12.6667V10C14 9.26362 13.403 8.66667 12.6667 8.66667Z" stroke={activePanel === 'related-pipeline' ? "#0968F6" : "#737373"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                {/* Badge */}
                <div className="absolute -top-2 -right-2 min-w-[16px] h-[16px] px-[3px] bg-[#3b82f6] text-white text-[9px] font-['Geist:Medium',sans-serif] font-medium flex items-center justify-center rounded-full leading-none">21</div>
              </div>
            </div>
          </div>
        }
        tooltip="Related Pipeline (21)"
        onClick={() => handleClick('related-pipeline')}
        className={getButtonClass('related-pipeline')}
      />
    </div>
  );
}