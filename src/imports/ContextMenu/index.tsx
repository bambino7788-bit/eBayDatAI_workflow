import svgPaths from "./svg-d52v8l73vr";

function InterfaceLink({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Interface/Link">
      <div className="absolute inset-[12%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="18.238" preserveAspectRatio="none" viewBox="0 0 18.238 18.238" width="18.238">
          <g id="Vector">
            <path d={svgPaths.p3beeab00} fill="#222222" />
            <path d={svgPaths.p7108b80} fill="#222222" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconSquareLibrary({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / square-library">
      <div className="absolute inset-[9.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 19.5 19.5" width="19.5">
          <g id="Vector">
            <path d={svgPaths.p1616c880} fill="#525252" />
            <path d={svgPaths.p1343b800} fill="#525252" />
            <path d={svgPaths.p393b9900} fill="#525252" />
            <path d={svgPaths.p5518d80} fill="#525252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / wrench">
      <div className="absolute inset-[5.19%_5.19%_9.37%_9.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.5047" preserveAspectRatio="none" viewBox="0 0 20.5047 20.5047" width="20.5047">
          <path d={svgPaths.p24605280} fill="#525252" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconAtSign({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / at-sign">
      <div className="absolute inset-[5.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.4999" preserveAspectRatio="none" viewBox="0 0 21.5003 21.4999" width="21.5003">
          <g id="Vector">
            <path d={svgPaths.p1f2a300} fill="#525252" />
            <path d={svgPaths.p3661fb80} fill="#525252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconPaperclip({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / paperclip">
      <div className="absolute inset-[5.21%_6.64%_5.21%_9.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.5001" preserveAspectRatio="none" viewBox="0 0 20.1558 21.5001" width="20.1558">
          <path d={svgPaths.p1f7d5780} fill="#525252" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <IconPaperclip className="overflow-clip relative shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#0a0a0a] text-[14px]">Add File</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
        <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.99992" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992" width="4.99992">
            <path d={svgPaths.p1957980} fill="#525252" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Frame">
      <IconAtSign className="overflow-clip relative shrink-0 size-[20px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#0a0a0a] text-[14px]">Attach the File</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
        <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.99992" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992" width="4.99992">
            <path d={svgPaths.p1957980} fill="#525252" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Frame">
      <IconWrench className="overflow-clip relative shrink-0 size-[20px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#0a0a0a] text-[14px]">Expert</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
        <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.99992" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992" width="4.99992">
            <path d={svgPaths.p1957980} fill="#525252" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <IconSquareLibrary className="overflow-clip relative shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#0a0a0a] text-[14px]">Skills</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
        <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.99992" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992" width="4.99992">
            <path d={svgPaths.p1957980} fill="#525252" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <InterfaceLink className="relative shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#0a0a0a] text-[14px]">Connector</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
        <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.99992" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992" width="4.99992">
            <path d={svgPaths.p1957980} fill="#525252" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ContextMenu() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col gap-[4px] items-start p-[8px] relative rounded-[8px] size-full" data-name="Context Menu">
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Frame />
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 264 1" width="264">
            <line id="Line 2" stroke="#E6E6E6" x2="264" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}