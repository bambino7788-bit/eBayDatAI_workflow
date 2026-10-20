import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/Main-6/svg-qrynokiyhq";
import imgImageProfile from "../../imports/Main-6/8fe30908c384f79f43b7c3d792ca97fdd5f13905.png";
import imgUserAvatar from "../../imports/Main-6/d175b495332e1c671b3141cf16482498ac96c910.png";
import imgUserAvatar1 from "../../imports/Main-6/9615c4f6d246c49a8f9070386218edd0fa6ec2fb.png";
import imgUserAvatar2 from "../../imports/Main-6/657d3b4802585eaf6afff87a991372e471720c80.png";
import imgUserAvatar3 from "../../imports/Main-6/b3c60842db087ae7c555316267b8f357756a45a6.png";
import imgUserAvatar4 from "../../imports/Main-6/ba85a99b845e57ad37964396a64792d0e0cf62e8.png";
import imgArchitectureDiagram from "../../imports/Main-8/afce8bebc1248986d34398eedc19d26a70ed1c08.png";
import ContextMenu from "../../imports/ContextMenu-1";

function Chat({
  className,
  value,
  onChange,
  onSend,
}: {
  className?: string;
  value?: string;
  onChange?: (v: string) => void;
  onSend?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <div className={className || "relative w-[716px]"} data-name="Chat">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <div className="bg-[#f5f5f5] h-[122px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-between px-[12px] py-[8px] relative size-full">
              <textarea
                value={value ?? ""}
                onChange={(e) => onChange?.(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onSend?.();
                  }
                }}
                placeholder="Ask me anything or search for resources... (Use @ to reference resources)"
                className="flex-1 w-full resize-none outline-none bg-transparent font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#0a0a0a] text-[14px] placeholder:text-[#a2a2a2]"
              />
              <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0 w-[322px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                    <div ref={wrapperRef} className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setMenuOpen((v) => !v)}
                        className="content-stretch flex items-center relative shrink-0 cursor-pointer rounded-[6px] hover:bg-[#ececec] p-[2px] transition-colors"
                        data-name="button"
                        aria-label="Add attachment"
                      >
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / plus">
                          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                            <div className="absolute inset-[-0.75px_-8.04%]">
                              <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
                                <path d="M0.75 0.75H10.0833" id="Vector" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
                            <div className="absolute inset-[-8.04%_-0.75px]">
                              <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 1.5 10.8333" width="1.5">
                                <path d="M0.75 0.75V10.0833" id="Vector" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                      {menuOpen && (
                        <div className="absolute top-full left-0 mt-[8px] z-50 origin-top-left scale-[0.72] w-[280px]">
                          <ContextMenu />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="1">
                      <div className="max-w-[320px] min-w-[80px] relative rounded-[48px] shrink-0" data-name="Button 2">
                        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[6px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[20px]">GPT-5.6</p>
                            </div>
                            <div className="relative shrink-0 size-[16px]" data-name="Trailing icon">
                              <div className="absolute inset-[31.25%_6.25%_18.75%_6.25%]" data-name="vector-shape">
                                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
                                  <path d={svgPaths.p1aafc500} fill="#707070" id="vector-shape" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute cursor-pointer inset-0 rounded-[999px]" data-name="State layer">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0" data-name="Icon Button">
                      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[7px] relative size-full">
                          <div className="relative shrink-0 size-[14.75px]" data-name="Icon wrapper">
                            <div className="absolute inset-[-5.08%_0]">
                              <svg className="block size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 14.75 16.25" width="14.75">
                                <g id="Icon wrapper">
                                  <path d={svgPaths.p2f27a700} fill="#737373" id="Pixel color override hack" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={() => onSend?.()} className="bg-[#737373] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#5f5f5f] transition-colors" data-name="Icon Button">
                      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] p-[7px] relative size-full">
                          <div className="relative shrink-0 size-[14.75px]" data-name="Icon wrapper">
                            <div className="absolute inset-[-5.1%_-5.1%_-5.08%_-5.09%]">
                              <svg className="block size-full" fill="none" height="16.2512" preserveAspectRatio="none" viewBox="0 0 16.2522 16.2512" width="16.2522">
                                <g id="Icon wrapper">
                                  <path d={svgPaths.p2dd67630} fill="white" id="Pixel color override hack" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">Use @ to reference datasets, models, and other resources</p>
      </div>
    </div>
  );
}

function TopNavigation({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[64px] relative w-[1200px]"} data-name="TopNavigation">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[24px] py-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
            <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[10px] shrink-0 w-[36px]" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <g id="Icon">
                    <path d={svgPaths.p1ce3c700} id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1a06de00} id="Vector_2" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[16px] rounded-[33554400px] size-[18px] top-[2px]" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[11px] relative shrink-0 text-[11px] text-center text-white tracking-[0.0645px] whitespace-nowrap">
                  3
                </p>
              </div>
            </div>
            <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[10px] shrink-0 w-[36px]" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <g id="Icon">
                    <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p17f25d40} id="Vector_3" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-start pl-[4px] relative shrink-0" data-name="Container:margin">
              <div className="bg-[#e5e7eb] border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
                <div className="h-[30px] relative shrink-0 w-full" data-name="Image (Profile)">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProfile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p1536ae00} fill="url(#paint0_linear_0_264)" />
            <path d={svgPaths.p1536ae00} fill="url(#paint1_linear_0_264)" />
            <path d={svgPaths.p1536ae00} stroke="url(#paint2_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
          <path d={svgPaths.p3d84200} fill="url(#paint3_linear_0_264)" id="Vector_2" stroke="url(#paint4_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M26.6667 4V9.33333" id="Vector_3" stroke="url(#paint5_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M29.3333 6.66667H24" id="Vector_4" stroke="url(#paint6_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 22.6667V25.3333" id="Vector_5" stroke="url(#paint7_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 24H4" id="Vector_6" stroke="url(#paint8_linear_0_264)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_264" x1="16.0024" x2="16.0024" y1="2.66633" y2="29.3337">
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_264" x1="16.0024" x2="16.0024" y1="2.66633" y2="29.3337">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_264" x1="7.99995" x2="23.9999" y1="7.20071" y2="26.4007">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_264" x1="8" x2="24" y1="7.2" y2="26.4">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_264" x1="8" x2="24" y1="7.2" y2="26.4">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_264" x1="27.1667" x2="27.1667" y1="4" y2="9.33333">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_264" x1="26.6667" x2="26.6667" y1="6.66667" y2="7.66667">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_264" x1="5.83333" x2="5.83333" y1="22.6667" y2="25.3333">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_264" x1="5.33333" x2="5.33333" y1="24" y2="25">
            <stop stopColor="#B476FF" />
            <stop offset="0.471154" stopColor="#86B5FF" />
            <stop offset="1" stopColor="#34B3BD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[10px] shrink-0 w-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Text">
      <Button />
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[24px] text-[transparent] text-center tracking-[-0.144px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(150.43043719421632deg, rgb(180, 118, 255) 18.362%, rgb(134, 181, 255) 49.714%, rgb(52, 179, 189) 84.905%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }}>
        Neo
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[28px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-center tracking-[-0.144px] whitespace-nowrap">{`Welcome, I'm`}</p>
          <Text />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-center tracking-[-0.144px] whitespace-nowrap">, feel free to ask me any questions.</p>
        </div>
      </div>
    </div>
  );
}

function ExpertCard({
  title,
  description,
  col,
  row,
  avatarExtra,
  onSelect,
}: {
  title: string;
  description: string;
  col: "col-1" | "col-2";
  row: "row-1" | "row-2";
  avatarExtra?: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <div onClick={onSelect} className={`bg-white ${col} justify-self-stretch relative rounded-[12px] ${row} self-start shrink-0 ${onSelect ? "cursor-pointer hover:border-[#8b5cf6] hover:shadow-[0px_2px_8px_0px_rgba(139,92,246,0.12)] transition-all" : ""}`} data-name="AIAssistantPage">
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_#252525,0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[8px] items-start p-[17px] relative size-full">
        <div className="relative rounded-[999px] shrink-0 size-[20px]" data-name="User avatar">
          <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[999px]">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[999px] size-full" src={imgUserAvatar} />
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[999px] size-full" src={imgUserAvatar1} />
            {avatarExtra}
          </div>
        </div>
        <div className="relative shrink-0" data-name="container">
          <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative size-full text-[#737373] text-[12px] whitespace-nowrap">
            <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">{title}</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experts({ onSelectArchitect }: { onSelectArchitect?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[0px] w-full">
        <span className="leading-[20px] text-[14px]">{`The `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[#8b5cf6] text-[14px]">Experts</span>
        <span className="leading-[20px] text-[14px]">{` assist you with the work`}</span>
      </p>
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Container">
        <ExpertCard
          title="Solution Engineer"
          description="Solve complex engineering challenges"
          col="col-1"
          row="row-1"
          avatarExtra={
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[999px]">
              <img alt="" className="absolute h-[557.49%] left-[-331.01%] max-w-none top-[-36.42%] w-[882.52%]" src={imgUserAvatar2} />
            </div>
          }
        />
        <ExpertCard
          title="Data Analysis Expert"
          description="Analyze the data and uncover the insights"
          col="col-2"
          row="row-1"
          avatarExtra={
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[999px]">
              <img alt="" className="absolute h-[263.65%] left-[-23.07%] max-w-none top-[-49.56%] w-[381.43%]" src={imgUserAvatar3} />
            </div>
          }
        />
        <ExpertCard
          title="Solution Architect"
          description="Design system architectures and technical solutions"
          col="col-1"
          row="row-2"
          onSelect={onSelectArchitect}
        />
        <ExpertCard
          title="Support & Service Expert"
          description="Resolve your issues and improve experience"
          col="col-2"
          row="row-2"
          avatarExtra={
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[999px]">
              <img alt="" className="absolute h-[316.9%] left-[-247.58%] max-w-none top-[-27.7%] w-[475.25%]" src={imgUserAvatar4} />
            </div>
          }
        />
      </div>
    </div>
  );
}

function TryAskingItem({ label }: { label: string }) {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#fafafa] transition-colors" data-name="Input">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[7.5px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[21px] items-center min-w-px overflow-clip relative" data-name="AL">
            <div className="relative shrink-0 size-[20px]" data-name="Decoration left">
              <div className="absolute left-[2px] size-[15.417px] top-[2px]" data-name="Pixel override hack">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.7498" preserveAspectRatio="none" viewBox="0 0 14.7498 14.7498" width="14.7498">
                  <path d={svgPaths.p51cc100} fill="#737373" id="Pixel override hack" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-name="AL">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">{label}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function TryAsking() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] whitespace-nowrap">Try asking:</p>
      <TryAskingItem label="Search for customer datasets" />
      <TryAskingItem label="How do I get started with the DataAI platform?" />
      <TryAskingItem label="Which assistant should I use for my task?" />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Conversation: thinking animation + streaming reasoning            */
/* ---------------------------------------------------------------- */

const REASONING_LINES = [
  "Parsing the requirement: disable any firearms listing within 60s of going live.",
  "Mapping the latency budget across ingestion, inference and action stages.",
  "Selecting eBay Data & AI services that fit a real-time compliance pipeline.",
  "Choosing Kafka to stream new listing events into the Item Logical Data Model.",
  "Designing feature prep: image embeddings + label generation per listing.",
  "Evaluating a text classifier on policy keywords with a transformer backbone.",
  "Adding an image classifier + vector search for similar-firearm detection.",
  "Composing a decision layer: LLM reasoning over a rule + model ensemble.",
  "Defining the output path: publish results to a compliance Kafka topic.",
  "Verifying the end-to-end path stays comfortably under the 60s target.",
];

function AnimStyles() {
  return (
    <style>{`
      @keyframes neo-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      @keyframes neo-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes neo-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .35; transform: scale(.7); } }
      .neo-shimmer-text {
        background: linear-gradient(90deg,#a3a3a3 0%,#a3a3a3 35%,#0a0a0a 50%,#a3a3a3 65%,#a3a3a3 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent; color: transparent;
        animation: neo-shimmer 2.4s linear infinite;
      }
      .neo-line { animation: neo-rise .35s ease-out both; }
      .neo-dot { animation: neo-pulse 1.1s ease-in-out infinite; }
    `}</style>
  );
}

function formatDuration(s: number) {
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return rem ? `${m}m${rem}s` : `${m}m`;
}

function ThinkingBlock({ onDone, displaySeconds }: { onDone: () => void; displaySeconds: number }) {
  const [elapsed, setElapsed] = useState(0);
  const [visible, setVisible] = useState(1);
  const [done, setDone] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const notified = useRef(false);

  // Live timer
  useEffect(() => {
    if (done) return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [done]);

  // Reveal reasoning lines one by one
  useEffect(() => {
    if (visible >= REASONING_LINES.length) {
      const end = setTimeout(() => {
        setDone(true);
        setExpanded(false);
      }, 900);
      return () => clearTimeout(end);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), 850);
    return () => clearTimeout(t);
  }, [visible]);

  // Auto-scroll the streaming panel to the newest line
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visible]);

  // Notify parent once, after collapse
  useEffect(() => {
    if (done && !notified.current) {
      notified.current = true;
      onDone();
    }
  }, [done, onDone]);

  return (
    <div className="w-full">
      {/* Header: pulsing dot + shimmer / collapsed summary */}
      <button
        type="button"
        onClick={() => done && setExpanded((v) => !v)}
        className={`flex items-center gap-[8px] ${done ? "cursor-pointer" : "cursor-default"}`}
      >
        {!done && <span className="neo-dot size-[8px] rounded-full bg-[#8b5cf6] shrink-0" />}
        {done ? (
          <span className="font-['Geist:Medium',sans-serif] text-[14px] tracking-[0.07px]">
            <span className="text-[#737373]">Worked </span>
            <span className="text-[#a3a3a3]">for {formatDuration(displaySeconds)}</span>
          </span>
        ) : (
          <span className="neo-shimmer-text font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
            Thinking… {elapsed}s
          </span>
        )}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`text-[#a3a3a3] transition-transform ${expanded ? "rotate-180" : ""} ${done ? "" : "hidden"}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Reasoning body */}
      <div
        className="overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out"
        style={{ maxHeight: expanded ? 168 : 0, opacity: expanded ? 1 : 0, marginTop: expanded ? 10 : 0 }}
      >
        <div className="border-l-2 border-[#ececec] pl-[14px]">
          <div ref={scrollRef} className={`flex flex-col gap-[8px] pr-[4px] ${done ? "max-h-[148px] overflow-auto" : "max-h-[148px] overflow-hidden"}`}>
            {REASONING_LINES.slice(0, visible).map((line, i) => (
              <p
                key={i}
                className="neo-line font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#737373]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AssistantRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[16px] items-start w-full">
      <div className="size-[32px] shrink-0 rounded-full overflow-hidden bg-[#e5e7eb]">
        <img alt="" className="size-full object-cover" src={imgUserAvatar1} />
      </div>
      <div className="flex-1 min-w-0 bg-white rounded-[12px] p-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        {children}
      </div>
    </div>
  );
}

function UserRow({ text }: { text: string }) {
  return (
    <div className="flex gap-[16px] items-start justify-end w-full">
      <div className="max-w-[76%] bg-[#f5f5f5] rounded-[12px] p-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">{text}</p>
      </div>
      <div className="size-[32px] shrink-0 rounded-full overflow-hidden bg-[#e5e7eb]">
        <img alt="" className="size-full object-cover" src={imgImageProfile} />
      </div>
    </div>
  );
}

const TURN_DURATIONS = [32, 105, 45];

function AnswerContent({ index }: { index: number }) {
  if (index === 0) {
    return (
      <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">
        Absolutely. We've already built a solution for <span className="font-semibold">blade item compliance</span>. Do you
        want me to reference that solution to support firearm item compliance as well?
      </p>
    );
  }
  if (index === 1) {
    return (
      <div className="flex flex-col gap-[10px]">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">
          Great — here's how we can reuse it. The end-to-end flow keeps you within the 1-minute window:
        </p>
        <ul className="flex flex-col gap-[6px] font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">
          <li><span className="font-semibold">Data Ingest:</span> Kafka → Item Logical Data Model.</li>
          <li><span className="font-semibold">Feature Prep:</span> Image embedding and label generation.</li>
          <li><span className="font-semibold">Similarity Calculation:</span> Text classifier (policy keywords + transformer), image classifier (image embedding + vector search for similar-firearm detection).</li>
          <li><span className="font-semibold">Decision:</span> Call an LLM with a rule + model ensemble to produce the compliance result.</li>
          <li><span className="font-semibold">Output:</span> Publish the result to a compliance Kafka topic to trigger disabling.</li>
        </ul>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#737373]">
          Want me to visualize the full end-to-end flow?
        </p>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="flex flex-col gap-[12px]">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">
          The solution flow is as below. Let me know if you want me to hand it over to the{" "}
          <span className="font-semibold">Solution Engineer</span> to help you implement the solution.
        </p>
        <div className="rounded-[12px] overflow-hidden border border-[#ececec]">
          <img alt="Solution architecture diagram" className="w-full block" src={imgArchitectureDiagram} />
        </div>
      </div>
    );
  }
  return (
    <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#737373]">
      I've shared the full solution above. Feel free to start a new conversation for anything else.
    </p>
  );
}

function Turn({ index, userText, onAnswered }: { index: number; userText: string; onAnswered: () => void }) {
  const [answered, setAnswered] = useState(false);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <UserRow text={userText} />
      <AssistantRow>
        <ThinkingBlock
          displaySeconds={TURN_DURATIONS[index] ?? 30}
          onDone={() => {
            setAnswered(true);
            onAnswered();
          }}
        />
        {answered && (
          <div className="neo-line mt-[14px]">
            <AnswerContent index={index} />
          </div>
        )}
      </AssistantRow>
    </div>
  );
}

const DEFAULT_QUESTION =
  "Hi, I need a solution architecture to ensure any firearms listing is disabled within 1 minute after it gets listed successfully on eBay. I want to leverage eBay Data & AI services. Can you help?";

const MAX_TURNS = 3;

export function AskNeoPage() {
  const [input, setInput] = useState("");
  const [turns, setTurns] = useState<string[]>([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  const started = turns.length > 0;
  // Ready for the next turn once every started turn has finished answering.
  const ready = answeredCount === turns.length;
  const canContinue = ready && turns.length < MAX_TURNS;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [turns.length, answeredCount]);

  const startConversation = (text: string) => {
    const q = text.trim() || DEFAULT_QUESTION;
    setTurns((c) => [...c, q]);
    setInput("");
  };

  const sendNext = () => {
    if (!canContinue) return;
    startConversation(input);
  };

  const resetConversation = () => {
    setTurns([]);
    setAnsweredCount(0);
    setInput("");
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white overflow-auto" data-name="Main">
      <AnimStyles />
      <TopNavigation className="bg-white h-[64px] relative shrink-0 w-full" />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
        <div className="flex flex-col items-center size-full">
          {started ? (
            <div className="w-full max-w-[720px] flex flex-col flex-1 px-[24px] pt-[20px] pb-[24px]">
              <div className="flex items-center justify-between pb-[16px] mb-[4px] border-b border-[#ececec]">
                <button
                  type="button"
                  onClick={resetConversation}
                  className="flex items-center gap-[6px] text-[#525252] hover:text-[#0a0a0a] transition-colors cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">Back</span>
                </button>
                <div className="flex items-center gap-[8px]">
                  <div className="size-[24px] shrink-0 rounded-full overflow-hidden bg-[#e5e7eb]">
                    <img alt="" className="size-full object-cover" src={imgUserAvatar1} />
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0a0a0a]">Solution Architect</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[32px]">
                {/* Greeting shown once at the top of the conversation */}
                <AssistantRow>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#0a0a0a]">
                    Hi! I'm <span className="font-semibold">Solution Architect</span>. I'm here to help you design system
                    architectures and technical solutions on the eBay DataAI platform.
                  </p>
                </AssistantRow>
                {turns.map((q, i) => (
                  <Turn key={i} index={i} userText={q} onAnswered={() => setAnsweredCount((c) => c + 1)} />
                ))}
                {/* Quick reply to advance the conversation */}
                {canContinue && (
                  <div className="neo-line flex justify-end">
                    <button
                      type="button"
                      onClick={() => startConversation("Yes, please.")}
                      className="px-[16px] py-[8px] rounded-full border border-[#8b5cf6] text-[#8b5cf6] font-['Inter:Medium',sans-serif] font-medium text-[14px] hover:bg-[#8b5cf6] hover:text-white transition-colors cursor-pointer"
                    >
                      Yes, please
                    </button>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
              <div className="sticky bottom-0 bg-white pt-[16px]">
                <Chat
                  className="relative shrink-0 w-full"
                  value={input}
                  onChange={setInput}
                  onSend={sendNext}
                />
              </div>
            </div>
          ) : (
            <div className="content-stretch flex flex-col items-center pt-[120px] px-[24px] pb-[48px] relative size-full">
              <div className="relative shrink-0 w-full max-w-[720px]" data-name="Container">
                <div className="overflow-visible rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start p-[2px] relative size-full">
                    <Heading />
                    <Chat
                      className="relative shrink-0 w-full"
                      value={input}
                      onChange={setInput}
                      onSend={() => startConversation(input)}
                    />
                    <Experts onSelectArchitect={() => startConversation(DEFAULT_QUESTION)} />
                    <TryAsking />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AskNeoPage;
