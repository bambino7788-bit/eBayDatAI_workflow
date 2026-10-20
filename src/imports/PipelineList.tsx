import clsx from "clsx";
import svgPaths from "./svg-hhv7qdtc83";
type Frame427318990VectorShapeProps = {
  additionalClassNames?: string;
};

function Frame427318990VectorShape({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame427318990VectorShapeProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3287 13.3333">
        {children}
      </svg>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("rounded-[999px] size-[32px]", additionalClassNames)}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="icon">
        {children}
      </div>
      <StateLayer />
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
      <div className="content-stretch flex gap-[6px] h-full items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] py-[6px] relative">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pt-[6px] px-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[56px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Row1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="w-[110px]">
      <div className="relative rounded-[56px] shrink-0" data-name="SUCESS-FAILED STATUS">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}
type PagesPageTextProps = {
  text: string;
};

function PagesPageText({ text }: PagesPageTextProps) {
  return (
    <Wrapper1>
      <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
      <div className="h-[2px] relative shrink-0 w-[20px]" data-name="indicator">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="indicator" />
        </svg>
      </div>
    </Wrapper1>
  );
}
type RowProps = {
  additionalClassNames?: string;
};

function Row({ additionalClassNames = "" }: RowProps) {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[56px] items-center justify-end pl-[16px] pr-[12px] relative shrink-0 w-[240px]">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <ButtonCloseX1 />
      <ButtonCloseX2 additionalClassNames="opacity-40" />
      <ButtonCloseX3 />
      <ButtonCloseX className="relative rounded-[32px] shrink-0" color="Gray" size="md" />
      <ButtonCloseX className="relative rounded-[32px] shrink-0" color="Gray" size="md" />
    </div>
  );
}
type RowText1Props = {
  text: string;
  additionalClassNames?: string;
};

function RowText1({ text, additionalClassNames = "" }: RowText1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#191919] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text}</p>
      </div>
    </Wrapper>
  );
}
type RowTextProps = {
  text: string;
};

function RowText({ text }: RowTextProps) {
  return (
    <Wrapper additionalClassNames="w-[169px]">
      <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#191919] text-[0px] text-ellipsis whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] overflow-hidden text-[14px] underline">{text}</p>
      </div>
    </Wrapper>
  );
}

function ButtonCloseX3() {
  return (
    <Wrapper2 additionalClassNames="relative rounded-[32px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="pipeline type">
        <div className="absolute aspect-[44/44] left-0 overflow-clip right-0 top-0">
          <div className="absolute inset-[5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
              <path d={svgPaths.p18b2ad00} fill="var(--fill-0, #0DBBFF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper2>
  );
}
type ButtonCloseX2Props = {
  additionalClassNames?: string;
};

function ButtonCloseX2({ additionalClassNames = "" }: ButtonCloseX2Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("relative rounded-[32px] shrink-0", additionalClassNames)}>
      <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Play-Stop">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Frame">
            <path d={svgPaths.p1ae0c900} fill="var(--fill-0, #191919)" id="Vector" />
          </g>
        </svg>
      </button>
    </Wrapper2>
  );
}
type ButtonCloseX1Props = {
  additionalClassNames?: string;
};

function ButtonCloseX1({ additionalClassNames = "" }: ButtonCloseX1Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("relative rounded-[32px] shrink-0", additionalClassNames)}>
      <div className="relative shrink-0 size-[16px]" data-name="Play-Stop">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Frame">
            <path d={svgPaths.p3747700} fill="var(--fill-0, #191919)" id="Vector" />
          </g>
        </svg>
      </div>
    </Wrapper2>
  );
}
type ContentText1Props = {
  text: string;
};

function ContentText1({ text }: ContentText1Props) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Market_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px]">{text}</p>
      <DataTableSortButton className="relative shrink-0 size-[12px]" />
    </div>
  );
}

function Sort() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-[8.33%_0]" data-name="vector-shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
          <g id="vector-shape">
            <path d={svgPaths.p26620730} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p19d88300} fill="var(--fill-0, #707070)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Market_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px]">{text}</p>
      <Sort />
      <div className="relative shrink-0 size-[16px]" data-name="Search 16">
        <div className="absolute inset-[6.25%]" data-name="vector-shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0002 14.0002">
            <path d={svgPaths.p16e29b00} fill="var(--fill-0, #707070)" id="vector-shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type StateLayerProps = {
  additionalClassNames?: string;
};

function StateLayer({ additionalClassNames = "" }: StateLayerProps) {
  return (
    <div className={clsx("absolute cursor-pointer inset-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] size-full" />
      </div>
    </div>
  );
}
type TabsTabItemBasicTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TabsTabItemBasicText({ text, additionalClassNames = "" }: TabsTabItemBasicTextProps) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <Wrapper3>
        <p className="font-['Market_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#707070] text-[14px]">{text}</p>
      </Wrapper3>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center overflow-clip relative", additionalClassNames)}>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d="M13 1L1 13M1 1L13 13" id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonCloseXHelper() {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <Helper additionalClassNames="p-[4px]" />
    </div>
  );
}
type ButtonCloseXProps = {
  className?: string;
  color?: "Gray" | "Primary";
  size?: "sm" | "md" | "xs";
  state?: "Default" | "Hover" | "Focused" | "Disabled";
  theme?: "Light" | "Dark";
};

function ButtonCloseX({ className, color = "Primary", size = "xs", state = "Default", theme = "Light" }: ButtonCloseXProps) {
  if (size === "xs" && color === "Primary" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Primary, Theme=Light, State=Disabled">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Light" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Light, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Light, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Light" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Light, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Light, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Primary, Theme=Dark, State=Default">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Primary, Theme=Dark, State=Disabled">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Dark, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Dark, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Dark, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Dark, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Light" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Gray, Theme=Light, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[4px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Gray, Theme=Light, State=Disabled">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Light" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Light, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Light, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Light" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Light, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Light" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Light, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Gray, Theme=Dark, State=Default">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Gray, Theme=Dark, State=Disabled">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Dark, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Dark, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Dark" && state === "Default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Dark, State=Default">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Dark" && state === "Disabled") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Dark, State=Disabled">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[#cee7fb] relative rounded-[6px] shadow-[0px_0px_0px_4px_#cee7fb]"} data-name="Size=xs, Color=Primary, Theme=Light, State=Focused">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[#cee7fb] relative rounded-[8px] shadow-[0px_0px_0px_4px_#cee7fb]"} data-name="Size=md, Color=Primary, Theme=Light, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[#cee7fb] relative rounded-[8px] shadow-[0px_0px_0px_4px_#cee7fb]"} data-name="Size=sm, Color=Primary, Theme=Light, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shadow-[0px_0px_0px_4px_#2a99f4]"} data-name="Size=xs, Color=Primary, Theme=Dark, State=Focused">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_0px_4px_#2a99f4]"} data-name="Size=md, Color=Primary, Theme=Dark, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_0px_4px_#2a99f4]"} data-name="Size=sm, Color=Primary, Theme=Dark, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.12)] relative rounded-[6px]"} data-name="Size=xs, Color=Gray, Theme=Light, State=Focused">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.12)] relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Light, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Light" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.12)] relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Light, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shadow-[0px_0px_0px_4px_#667085]"} data-name="Size=xs, Color=Gray, Theme=Dark, State=Focused">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_0px_4px_#667085]"} data-name="Size=md, Color=Gray, Theme=Dark, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Dark" && state === "Focused") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_0px_4px_#667085]"} data-name="Size=sm, Color=Gray, Theme=Dark, State=Focused">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[#e3f2ff] relative rounded-[6px]"} data-name="Size=xs, Color=Primary, Theme=Light, State=Hover">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[#e3f2ff] relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Light, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[#e3f2ff] relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Light, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Primary" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[6px]"} data-name="Size=xs, Color=Primary, Theme=Dark, State=Hover">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Primary" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px]"} data-name="Size=md, Color=Primary, Theme=Dark, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Primary" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px]"} data-name="Size=sm, Color=Primary, Theme=Dark, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.08)] relative rounded-[6px]"} data-name="Size=xs, Color=Gray, Theme=Light, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[4px]" />
        </div>
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.08)] relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Light, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Light" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(16,24,40,0.08)] relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Light, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="gap-[4px] p-[8px]" />
        </div>
      </div>
    );
  }
  if (size === "xs" && color === "Gray" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[6px]"} data-name="Size=xs, Color=Gray, Theme=Dark, State=Hover">
        <ButtonCloseXHelper />
      </div>
    );
  }
  if (size === "md" && color === "Gray" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px]"} data-name="Size=md, Color=Gray, Theme=Dark, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[10px]" />
        </div>
      </div>
    );
  }
  if (size === "sm" && color === "Gray" && theme === "Dark" && state === "Hover") {
    return (
      <div className={className || "bg-[rgba(255,255,255,0.2)] relative rounded-[8px]"} data-name="Size=sm, Color=Gray, Theme=Dark, State=Hover">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="p-[8px]" />
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative rounded-[8px]"} data-name="Size=xs, Color=Primary, Theme=Light, State=Default">
      <ButtonCloseXHelper />
    </div>
  );
}
type DataTableSortButtonProps = {
  className?: string;
  state?: "default" | "down" | "up";
};

function DataTableSortButton({ className, state = "default" }: DataTableSortButtonProps) {
  const isDown = state === "down";
  const isUpOrDown = ["up", "down"].includes(state);
  return (
    <div className={className || "relative size-[12px]"}>
      <div className={`absolute ${isDown ? "inset-[8.33%_8.33%_8.36%_8.33%]" : state === "up" ? "inset-[8.36%_8.33%_8.33%_8.33%]" : "inset-[8.33%_0]"}`} data-name="vector-shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isUpOrDown ? "0 0 10 9.99655" : "0 0 12 10"}>
          {isUpOrDown && <path d={isDown ? svgPaths.p53a3980 : svgPaths.p1bd66580} fill="var(--fill-0, #191919)" id="vector-shape" />}
          {state === "default" && (
            <g id="vector-shape">
              <path d={svgPaths.p26620730} fill="var(--fill-0, #707070)" />
              <path d={svgPaths.p19d88300} fill="var(--fill-0, #707070)" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

export default function PipelineList() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="pipeline list">
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[4px] relative self-stretch shrink-0 w-[196px]" data-name="Tabs">
          <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
          <TabsTabItemBasicText text="Pool Setting" additionalClassNames="rounded-[8px]" />
          <TabsTabItemBasicText text="Pipeline Variables" />
          <div className="bg-[#e5e5e5] relative rounded-[8px] shrink-0 w-full" data-name="Tab Item/Basic">
            <Wrapper3>
              <p className="font-['Market_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px]">Notebook Environment</p>
            </Wrapper3>
          </div>
          <TabsTabItemBasicText text="Alert Method Template" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[24px] relative">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['Market_Sans:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#161616] text-[20px]">Notebook Environment</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="refresh">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path d={svgPaths.p396b6f40} fill="var(--fill-0, #161616)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative">
                  <div className="h-[32px] max-w-[319.998046875px] min-w-[79.99951171875px] relative rounded-[32px] shrink-0" data-name="CTA button">
                    <div aria-hidden="true" className="absolute border border-[#8f8f8f] border-solid inset-0 pointer-events-none rounded-[32px]" />
                    <Wrapper4>
                      <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">Change Log</p>
                      </div>
                      <StateLayer additionalClassNames="rounded-[999px]" />
                    </Wrapper4>
                  </div>
                  <div className="bg-[#0968f6] h-[31.999px] max-w-[319.998046875px] min-w-[79.99951171875px] relative rounded-[32px] shrink-0" data-name="CTA button">
                    <Wrapper4>
                      <div className="relative shrink-0 size-[16px]" data-name="leading-icon">
                        <div className="absolute inset-[6.25%]" data-name="vector-shape">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 13.9999">
                            <path d={svgPaths.p1ffcda00} fill="var(--fill-0, white)" id="vector-shape" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Market_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                        <p className="leading-[20px]">Config</p>
                      </div>
                      <StateLayer additionalClassNames="rounded-[999px]" />
                    </Wrapper4>
                  </div>
                </div>
              </div>
              <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <div className="content-stretch flex items-start shrink-0 sticky top-0 w-full">
                    <div className="bg-[#f7f7f7] flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center p-[16px] relative size-full">
                          <ContentText text="Environment Name" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center p-[16px] relative shrink-0 w-[106px]" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <ContentText text="Hardware" />
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center p-[16px] relative shrink-0 w-[125px]" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="content">
                        <div className="flex flex-col font-['Market_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-right whitespace-nowrap">
                          <p className="leading-[20px]">Environment</p>
                        </div>
                        <Sort />
                      </div>
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center p-[16px] relative shrink-0 w-[118px]" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <ContentText1 text="Last Updated" />
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center p-[16px] relative shrink-0 w-[93px]" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <ContentText1 text="Status" />
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex h-[52px] items-center p-[16px] relative shrink-0 w-[240px]" data-name="header">
                      <div aria-hidden="true" className="absolute border-0 border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="content">
                        <div className="flex flex-col font-['Market_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-right whitespace-nowrap">
                          <p className="leading-[20px]">Action</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <RowText text="Sandy Notebook Prod 1" />
                    <RowText1 text="CPU" additionalClassNames="w-[96px]" />
                    <RowText1 text="Python 1.3.1" additionalClassNames="w-[125px]" />
                    <RowText1 text="2021-02-28 20:07:32" additionalClassNames="w-[111px]" />
                    <Row1>
                      <div className="bg-[#e0fae0] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="_Badge base">
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
                          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                            <div className="absolute inset-[-13.64%_-9.38%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 7">
                                <path d={svgPaths.p1c198100} id="Icon" stroke="var(--stroke-0, #3CC14E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Market_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3cc14e] text-[12px] text-center">Active</p>
                      </div>
                    </Row1>
                    <div className="bg-white content-stretch flex gap-[12px] h-[56px] items-center justify-end pl-[16px] pr-[12px] relative shrink-0 w-[240px]" data-name="row-3">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <ButtonCloseX1 additionalClassNames="opacity-40" />
                      <ButtonCloseX2 />
                      <ButtonCloseX3 />
                      <ButtonCloseX className="relative rounded-[32px] shrink-0" color="Gray" size="md" />
                      <ButtonCloseX className="relative rounded-[32px] shrink-0" color="Gray" size="md" />
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <RowText text="Sandy Notebook Prod 2" />
                    <RowText1 text="CPU" additionalClassNames="w-[96px]" />
                    <RowText1 text="Python 1.3.1" additionalClassNames="w-[125px]" />
                    <RowText1 text="2021-02-28 20:07:32" additionalClassNames="w-[111px]" />
                    <div className="bg-white content-stretch flex h-[56px] items-center pl-[16px] pr-[12px] relative shrink-0 w-[110px]" data-name="row-3">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-start justify-center relative rounded-[56px] shrink-0" data-name="SUCESS-FAILED STATUS">
                        <div className="bg-[#fff0d3] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="_Badge base">
                          <div className="h-[12.001px] relative shrink-0" data-name="Attention Triangle 16">
                            <div className="flex flex-col items-center size-full">
                              <div className="content-stretch flex flex-col h-full items-center relative">
                                <div className="h-[11.253px] relative shrink-0 w-[12px]" data-name="vector-shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.2526">
                                    <path d={svgPaths.pa51be00} fill="var(--fill-0, #E99A02)" id="vector-shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Market_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e99a02] text-[12px] text-center">CVE Issue</p>
                        </div>
                      </div>
                    </div>
                    <Row />
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <RowText text="Sandy Notebook Prod 2" />
                    <RowText1 text="CPU" additionalClassNames="w-[96px]" />
                    <RowText1 text="Python 1.3.1" additionalClassNames="w-[125px]" />
                    <RowText1 text="2021-02-28 20:07:32" additionalClassNames="w-[111px]" />
                    <Row1>
                      <div className="bg-[#c7c7c7] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="_Badge base">
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="stop_circle">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <path d={svgPaths.pdc07800} fill="var(--fill-0, #363636)" id="Vector" />
                          </svg>
                        </div>
                        <p className="font-['Market_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#363636] text-[12px] text-center">Stop</p>
                      </div>
                    </Row1>
                    <Row />
                  </div>
                  <div className="relative shrink-0 w-full" data-name="pagination">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative w-full">
                        <Wrapper5 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                          <div className="content-stretch flex flex-col items-start justify-center pr-[8px] relative w-full">
                            <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Total 1,385 items</p>
                            </div>
                          </div>
                        </Wrapper5>
                        <div className="relative shrink-0" data-name="Pagination size 4">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center py-[2px] relative">
                              <Wrapper6 additionalClassNames="bg-white relative shrink-0">
                                <Frame427318990VectorShape additionalClassNames="inset-[8.33%_8.33%_8.33%_8.36%]">
                                  <path d={svgPaths.p2d89e580} fill="var(--fill-0, #191919)" id="vector-shape" />
                                </Frame427318990VectorShape>
                              </Wrapper6>
                              <div className="content-stretch flex items-center relative shrink-0" data-name="pages">
                                <Wrapper1>
                                  <div className="flex flex-col font-['Market_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">
                                    <p className="leading-[20px]">1</p>
                                  </div>
                                  <div className="h-[2px] relative shrink-0 w-[20px]" data-name="indicator">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                                      <path clipRule="evenodd" d={svgPaths.p22735300} fill="var(--fill-0, #191919)" fillRule="evenodd" id="indicator" />
                                    </svg>
                                  </div>
                                </Wrapper1>
                                <PagesPageText text="2" />
                                <PagesPageText text="3" />
                                <div className="h-[32px] relative rounded-[22px] shrink-0 w-[44px]" data-name=".Overflow">
                                  <Wrapper6 additionalClassNames="absolute left-[6px] top-0">
                                    <div className="absolute inset-[40.62%_9.38%_40.63%_9.37%]" data-name="vector-shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 3">
                                        <g id="vector-shape">
                                          <path d={svgPaths.p17cf4600} fill="var(--fill-0, #707070)" />
                                          <path d={svgPaths.p50631f8} fill="var(--fill-0, #707070)" />
                                          <path d={svgPaths.p2adfa800} fill="var(--fill-0, #707070)" />
                                        </g>
                                      </svg>
                                    </div>
                                  </Wrapper6>
                                </div>
                                <PagesPageText text="6" />
                              </div>
                              <Wrapper6 additionalClassNames="bg-white relative shrink-0">
                                <Frame427318990VectorShape additionalClassNames="inset-[8.33%_8.36%_8.33%_8.33%]">
                                  <path d={svgPaths.p182d6cc0} fill="var(--fill-0, #191919)" id="vector-shape" />
                                </Frame427318990VectorShape>
                              </Wrapper6>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-h-px min-w-px relative" data-name="pagination-options">
                          <div className="bg-white h-full max-h-[24px] relative rounded-[4px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            <div className="flex flex-row items-center justify-center max-h-[inherit] size-full">
                              <div className="content-stretch flex gap-[8px] h-full items-center justify-center max-h-[inherit] p-[8px] relative">
                                <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">
                                  <p className="leading-[16px]">100 / page</p>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
                                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                                    <div className="absolute inset-[-20.87%_-10.44%_-20.88%_-10.44%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.67 5.67">
                                        <path d={svgPaths.p2ef2a800} id="Icon" stroke="var(--stroke-0, #8F8F8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Wrapper5 additionalClassNames="shrink-0">
                            <div className="content-stretch flex flex-col items-start justify-center px-[7px] relative">
                              <p className="font-['Market_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(16,24,40,0.65)]">Go to</p>
                            </div>
                          </Wrapper5>
                          <button className="cursor-pointer h-full relative shrink-0 w-[44px]" data-name="Input field">
                            <div className="content-stretch flex flex-col items-start relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="_Input field base">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Input with label">
                                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Input">
                                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex items-center px-[14px] py-[10px] relative size-full">
                                        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
                                          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#707070] text-[14px] text-left whitespace-pre-wrap">&nbsp;</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_1px_rgba(16,24,40,0.05)]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}