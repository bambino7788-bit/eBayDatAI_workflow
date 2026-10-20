import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-hktv01dvkf";
import svgPaths2 from "./svg-oi13yogo94";
import DagActions from "./DagActions";
import DagActionsReleased from "./DagActions-56-751";
import Group322, { TaskSelector as Icon322 } from "./Group322";
import Group323, { TaskSelector as Icon323 } from "./Group323";
import Group324, { TaskSelector as Icon324 } from "./Group324";
import Group325, { TaskSelector as Icon325 } from "./Group325";
import TaskNodeImport, { TaskSelector as IconTask } from "./TaskNode";
import Group326, { TaskSelector as Icon326 } from "./Group326";
import SaveButton from "./Button-53-43";
import DraggableNode from "./DraggableNode";
import ConnectionLine from "./ConnectionLine";
import GenericNode from "./GenericNode";
import Minimap from "./Minimap";
import RunOnlyActions from "./Container-56-282";
import { usePipelineState } from "../app/contexts/PipelineStateContext";
import Container6 from "./WorkflowToolbar";
import NodeDetailPanel from "../app/components/NodeDetailPanel";

function IconHouse() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / house">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / house">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabNotebook() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center opacity-60 px-[10px] py-[6px] relative shrink-0 w-[40px]" data-name="tab-notebook">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <IconHouse />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Title1stLevel() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative rounded-[2px] shrink-0" data-name="title-1st-level">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] overflow-hidden relative shrink-0 text-[#0a0a0a] text-[13px] text-ellipsis">dbdemos_pipeline_bi...</p>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Close 12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Close 12">
          <path d={svgPaths.p1a077100} fill="var(--fill-0, #717182)" id="vector-shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon />
      <Title1stLevel />
      <Close />
    </div>
  );
}

function TopNavigatorWindow() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[8px] relative shrink-0" data-name="top navigator window">
      <Frame12 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Title1stLevel1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="title-1st-level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] min-h-px min-w-px overflow-hidden relative text-[#0a0a0a] text-[13px] text-ellipsis whitespace-nowrap">dbdemos_pipeline_bike_main_db...</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[156px]">
      <Icon1 />
      <Title1stLevel1 />
    </div>
  );
}

function TopNavigatorWindow1() {
  return (
    <div className="content-stretch flex h-full items-center opacity-60 px-[8px] relative shrink-0" data-name="top navigator window">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <Frame13 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Title1stLevel2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="title-1st-level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] min-h-px min-w-px overflow-hidden relative text-[#0a0a0a] text-[13px] text-ellipsis whitespace-nowrap">dbdemos_pipeline_bike_main_db...</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[156px]">
      <Icon2 />
      <Title1stLevel2 />
    </div>
  );
}

function TopNavigatorWindow2() {
  return (
    <div className="content-stretch flex h-full items-center opacity-60 px-[8px] relative shrink-0" data-name="top navigator window">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <Frame14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Title1stLevel3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="title-1st-level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] min-h-px min-w-px overflow-hidden relative text-[#0a0a0a] text-[13px] text-ellipsis whitespace-nowrap">dbdemos_pipeline_bike_main_db...</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[156px]">
      <Icon3 />
      <Title1stLevel3 />
    </div>
  );
}

function TopNavigatorWindow3() {
  return (
    <div className="content-stretch flex h-full items-center opacity-60 px-[8px] relative shrink-0" data-name="top navigator window">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <Frame15 />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / plus">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function NewTab() {
  return (
    <div className="content-stretch flex h-full items-center justify-end p-[12px] relative shrink-0" data-name="New Tab">
      <IconPlus />
    </div>
  );
}

function TopWindowTab() {
  return (
    <div className="bg-[#fafafa] h-[46px] shrink-0 sticky top-0 w-full" data-name="Top Window Tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <TabNotebook />
        <TopNavigatorWindow />
        <TopNavigatorWindow1 />
        <TopNavigatorWindow2 />
        <TopNavigatorWindow3 />
        <NewTab />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, #0968F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative min-w-0 overflow-hidden" data-name="Text">
      <Icon4 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] relative text-[#0a0a0a] text-[16px] truncate min-w-0">dbdemos_pipeline_bike_main_dbdemos_pipeline_bike</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[13.125px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.1254">
        <g id="Icon">
          <path d={svgPaths.p1075b240} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1({ onClick, isActive }: { onClick: () => void; isActive: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 cursor-pointer ${
        isActive ? 'bg-[#a7e1af]' : ''
      }`}
      data-name="button 1"
    >
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-black text-[13px]">Released</p>
    </button>
  );
}

function Button2({ onClick, isActive }: { onClick: () => void; isActive: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 cursor-pointer ${
        isActive ? 'bg-[rgba(42,0,255,0.2)]' : ''
      }`}
      data-name="button 2"
    >
      <p className={`font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] ${
        isActive ? 'text-black' : 'text-[#707070]'
      }`}>Dev</p>
    </button>
  );
}

function ProdDev() {
  const { pipelineState, setPipelineState, triggerPanelClose } = usePipelineState();
  
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Prod_DEV">
      <Button1 
        onClick={() => { setPipelineState('released'); triggerPanelClose(); }} 
        isActive={pipelineState === 'released'} 
      />
      <Button2 
        onClick={() => { setPipelineState('dev'); triggerPanelClose(); }} 
        isActive={pipelineState === 'dev'} 
      />
    </div>
  );
}

function ProdDevWithlink() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Prod_DEV-withlink">
      <ProdDev />
    </div>
  );
}

function SignalBase({ text, color, borderColor }: { text: string; color: string; borderColor: string }) {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="signal base">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[10px] tracking-[0.5px] uppercase`} style={{ color }}>
          {text}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor }} />
    </div>
  );
}

function Signal() {
  const { pipelineState } = usePipelineState();
  
  if (pipelineState === 'released') {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Signal">
        <SignalBase text="Released-Active" color="#288034" borderColor="rgba(40,128,52,0.97)" />
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Signal">
      <SignalBase text="Development" color="#0a0a0a" borderColor="#707070" />
    </div>
  );
}

function PipelineVersionStatus() {
  const { pipelineState } = usePipelineState();
  
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Pipeline Version Status1">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[13px]">
        {pipelineState === 'released' ? 'Version 2' : 'Version 3'}
      </p>
      <Signal />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ProdDevWithlink />
      <PipelineVersionStatus />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative min-w-0 w-full overflow-hidden">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative min-w-0">
        <Text />
        <Icon5 />
        <Frame38 />
      </div>
    </div>
  );
}

function Container3({ isDrawerOpen = false }: { isDrawerOpen?: boolean }) {
  return (
    <div className="relative flex-1 min-w-0 overflow-hidden" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Frame37 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10.909px] py-[0.909px] relative">
        <p className="font-['Geist:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#252525] text-[13px] text-center">21</p>
        <Icon6 />
      </div>
    </div>
  );
}

function IconPencil() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_16107)" id="Icon / pencil">
          <path d={svgPaths.p38174380} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 3.33333L12.6667 6" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_24_16107">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveDropdownButton() {
  const [open, setOpen] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const ref = useRef<HTMLDivElement>(null);
  const { setIsEditMode, triggerPanelClose } = usePipelineState();

  const handleSave = () => {
    if (saveState !== 'idle') return;
    triggerPanelClose();
    setSaveState('saving');
    setTimeout(() => {
      setSaveState('saved');
      setTimeout(() => setSaveState('idle'), 2000);
    }, 800);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative" style={{ zIndex: open ? 50 : undefined }}>
      <div className="flex items-center h-[32px] rounded-[8px] overflow-hidden" style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
        {/* Main save button */}
        <button
          className={`transition-all duration-200 flex items-center justify-center gap-[5px] px-[10px] h-full ${
            saveState === 'idle'
              ? 'bg-[#0968f6] hover:bg-[#0856d6] cursor-pointer'
              : saveState === 'saving'
                ? 'bg-[#0968f6]/80 cursor-not-allowed'
                : 'bg-[#22c55e] cursor-default'
          }`}
          style={{ borderRadius: "8px 0 0 8px", minWidth: saveState !== 'idle' ? 68 : undefined }}
          onClick={handleSave}
          disabled={saveState !== 'idle'}
        >
          {saveState === 'saving' && (
            <svg className="animate-spin" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
              <path d="M11 6a5 5 0 0 0-5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          {saveState === 'saved' && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.5L5 9L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          <span className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-center text-white tracking-[0.07px] whitespace-nowrap">
            {saveState === 'idle' ? 'Save' : saveState === 'saving' ? 'Saving' : 'Saved'}
          </span>
        </button>
        {/* Divider */}
        <div className="w-[1px] h-full bg-white/30" />
        {/* Dropdown arrow */}
        <button
          className="bg-[#0968f6] hover:bg-[#0856d6] transition-colors flex items-center justify-center px-[6px] h-full cursor-pointer"
          style={{ borderRadius: "0 8px 8px 0" }}
          onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+4px)] bg-white border border-[#e5e5e5] rounded-[8px] py-[4px] min-w-[160px]"
          style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
        >
          <button
            className="w-full text-left px-[12px] py-[8px] hover:bg-[#fafafa] transition-colors cursor-pointer flex items-center gap-[8px]"
            onClick={() => { setOpen(false); triggerPanelClose(); }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11.667 4.667H5.833c-.92 0-1.666.746-1.666 1.666v5.834c0 .92.746 1.666 1.666 1.666h5.834c.92 0 1.666-.746 1.666-1.666V6.333c0-.92-.746-1.666-1.666-1.666Z" stroke="#737373" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.333 9.333h-.5A1.667 1.667 0 0 1 .167 7.667V1.833A1.667 1.667 0 0 1 1.833.167h5.834A1.667 1.667 0 0 1 9.333 1.833v.5" stroke="#737373" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">
              Save to Copy
            </span>
          </button>
          <button
            className="w-full text-left px-[12px] py-[8px] hover:bg-[#fafafa] transition-colors cursor-pointer flex items-center gap-[8px]"
            onClick={() => { setOpen(false); setIsEditMode(false); triggerPanelClose(); }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.167 1.167H3.5A1.667 1.667 0 0 0 1.833 2.833v8.334A1.667 1.667 0 0 0 3.5 12.833h7A1.667 1.667 0 0 0 12.167 11.167V5.167l-4-4Z" stroke="#737373" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.167 1.167v4h4" stroke="#737373" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.167 9.333 6.417 8.083 7.667 9.333" stroke="#737373" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">
              Save and Exit
            </span>
          </button>
        </div>
      )}

      {/* Save success toast */}
      {saveState === 'saved' && (
        <div
          className="absolute right-0 top-[calc(100%+8px)] flex items-center gap-[8px] bg-[#0a0a0a] text-white rounded-[8px] px-[12px] py-[8px] z-[60] pointer-events-none"
          style={{
            boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
            animation: 'saveToastSlide 0.25s ease-out',
          }}
        >
          <div className="w-[18px] h-[18px] rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] tracking-[0.07px] leading-[1.5] whitespace-nowrap">
            Pipeline saved successfully
          </span>
        </div>
      )}

      <style>{`
        @keyframes saveToastSlide {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function EditButton() {
  const { setIsEditMode, triggerPanelClose } = usePipelineState();
  return (
    <div className="relative group">
      <button
        className="bg-white hover:bg-[#fafafa] transition-colors flex items-center justify-center w-[37.813px] h-[31.996px] rounded-[8px] cursor-pointer relative"
        style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
        onClick={() => { setIsEditMode(true); triggerPanelClose(); }}
      >
        <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L5.333 13.333l-3.333.667.667-3.333L11.333 2Z" stroke="#252525" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
        Edit
        <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#0a0a0a]" />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[31.996px] relative shrink-0" data-name="Button">
      <SaveDropdownButton />
    </div>
  );
}

function IconPlus1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / plus">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0 w-[37.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.909px] relative size-full">
        <IconPlus1 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9943 15.9943">
        <g clipPath="url(#clip0_24_16213)" id="Icon">
          <path d={svgPaths.p31066180} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p28926af0} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2bec0d00} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2b7f2700} id="Vector_4" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2b6b8648} id="Vector_5" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_24_16213">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0 w-[37.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.909px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9943 15.9943">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0 w-[37.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.909px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container4() {
  const { pipelineState, isEditMode } = usePipelineState();
  
  return (
    <div className="h-[31.996px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.997px] h-full items-center relative">
        {pipelineState === 'dev' && isEditMode && (
          <>
            <Button3 />
            <Button4 />
          </>
        )}
        {pipelineState === 'dev' && !isEditMode && (
          <EditButton />
        )}
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container2({ isDrawerOpen = false }: { isDrawerOpen?: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between gap-[8px] pb-[9px] pt-[8px] px-[16px] relative w-full">
          <Container3 isDrawerOpen={isDrawerOpen} />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container1({ isDrawerOpen = false }: { isDrawerOpen?: boolean }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Container2 isDrawerOpen={isDrawerOpen} />
      </div>
    </div>
  );
}

function DotBg() {
  return null;
}

function TaskSelector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_24_14936)" id="task selector">
          <path d={svgPaths.peb32400} fill="var(--fill-0, #5E9178)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_24_14936">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Dependency Check</p>
          <p className="mb-0">Source: Hive</p>
          <p>Sink: Pronto</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return <div className="content-stretch flex items-center p-[4px] rounded-[4px] shrink-0" />;
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame19 />
    </div>
  );
}

function TaskNode() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[507px] rounded-[4px] top-[375px] w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Component />
      <Frame />
      <Frame6 />
    </div>
  );
}

function TaskSelector1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_24_14911)" id="task selector">
          <g id="pipeline type">
            <path d={svgPaths.pdad6a00} fill="var(--fill-0, #60DAFF)" id="Vector" />
            <path d={svgPaths.p2ef1f700} fill="var(--fill-0, #65BEE7)" id="Vector_2" />
            <path d={svgPaths.p2ecda780} fill="var(--fill-0, #599CDA)" id="Vector_3" />
            <path d={svgPaths.p130ec80} fill="var(--fill-0, #C7C7C7)" id="Vector_4" />
            <path d={svgPaths.p69a8000} fill="var(--fill-0, #65BEE7)" id="Vector_5" />
            <path d={svgPaths.p241b18c0} fill="var(--fill-0, #599CDA)" id="Vector_6" />
            <path d={svgPaths.p15a84100} fill="var(--fill-0, #C7C7C7)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_24_14911">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector1 />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Pipeline Template</p>
          <p className="mb-0">Version: 3</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return <div className="content-stretch flex items-center p-[4px] rounded-[4px] shrink-0" />;
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon10 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame20 />
    </div>
  );
}

function TaskNode1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[1131px] rounded-[4px] top-[405px] w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Component1 />
      <Frame1 />
      <Frame7 />
    </div>
  );
}

function TaskSelector2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_24_15866)" id="task selector">
          <path d={svgPaths.p2213e400} fill="var(--fill-0, #E25A1C)" id="Vector" />
          <g id="SQL">
            <path d={svgPaths.pee8d500} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
            <path d={svgPaths.p1a73a200} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
            <path d={svgPaths.p3d1ae380} fill="var(--fill-0, #E25A1C)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_24_15866">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector2 />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0968f6] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Spark SQL</p>
          <p className="mb-0">Source: Hive</p>
          <p>Sink: Pronto</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return <div className="content-stretch flex items-center p-[4px] rounded-[4px] shrink-0" />;
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame21 />
    </div>
  );
}

function TaskNode3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start mr-[-8px] relative rounded-[4px] shrink-0 w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border-2 border-[#0968f6] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
      <Component2 />
      <Frame2 />
      <Frame8 />
    </div>
  );
}

function TaskArrowStatus() {
  return (
    <div className="mr-[-8px] relative shrink-0 size-[20px]" data-name="task arrow status">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-circle-right-filled">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3b05d300} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pe47ec00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-circle-right">
          <path d={svgPaths.pecb5d80} fill="var(--fill-0, #0968F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TaskNode2() {
  return (
    <div className="absolute content-stretch flex items-center left-[819px] pr-[8px] rounded-[4px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.15),0px_5px_17px_0px_rgba(0,0,0,0.2)] top-[245px]" data-name="Task Node">
      <TaskNode3 />
      <TaskArrowStatus />
    </div>
  );
}

function TaskSelector3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_24_15925)" id="task selector">
          <g id="Group">
            <path d={svgPaths.p3c821e00} fill="var(--fill-0, #669DF6)" id="Vector" />
            <path d={svgPaths.p2faeb80} fill="var(--fill-0, #669DF6)" id="Vector_2" />
            <path d={svgPaths.p2643df80} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p2cbc5ef0} fill="var(--fill-0, #4285F4)" id="Vector_4" />
            <g id="Vector_5" />
            <g id="a">
              <path d={svgPaths.p828ba00} fill="var(--fill-0, #3A414A)" id="Vector_6" />
              <path d={svgPaths.p2bac98f0} fill="var(--fill-0, #3A414A)" id="Vector_7" />
              <path d={svgPaths.p2dc39570} fill="var(--fill-0, #3A414A)" id="Vector_8" />
            </g>
            <g id="b">
              <path d={svgPaths.p1f1e08c0} fill="var(--fill-0, #3A414A)" id="Vector_9" />
              <path d={svgPaths.p110ae680} fill="var(--fill-0, #3A414A)" id="Vector_10" />
            </g>
            <g id="c">
              <path d={svgPaths.p22fb3100} fill="var(--fill-0, #3A414A)" id="Vector_11" />
              <path d={svgPaths.p3fa14280} fill="var(--fill-0, #3A414A)" id="Vector_12" />
              <path d={svgPaths.p39aabe00} fill="var(--fill-0, #3A414A)" id="Vector_13" />
              <path d={svgPaths.p8347000} fill="var(--fill-0, #3A414A)" id="Vector_14" />
            </g>
          </g>
          <path d={svgPaths.p1a4b4840} fill="var(--fill-0, #AECBFA)" id="Vector_15" />
          <path d={svgPaths.p904cb00} fill="var(--fill-0, #AECBFA)" id="Vector_16" />
        </g>
        <defs>
          <clipPath id="clip0_24_15925">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector3 />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Data Movement</p>
          <p>
            Source: NuDocument
            <br aria-hidden="true" />
            Sink: Hive
          </p>
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Copy 16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Copy 16">
          <path clipRule="evenodd" d={svgPaths.p3074400} fill="var(--fill-0, #707070)" fillRule="evenodd" id="vector-shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Copy />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon12 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame22 />
    </div>
  );
}

function TaskNode4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[819px] rounded-[4px] top-[518px] w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Component3 />
      <Frame3 />
      <Frame9 />
    </div>
  );
}

function TaskSelector4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="task selector">
          <path d={svgPaths.p321d0500} fill="var(--fill-0, #C1D737)" id="Vector" />
          <path d={svgPaths.p1e31bb40} fill="var(--fill-0, #68770D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector4 />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Data Quality</p>
          <p className="mb-0">Rule Type: SQL Metric</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Copy 16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Copy 16">
          <path clipRule="evenodd" d={svgPaths.p3074400} fill="var(--fill-0, #707070)" fillRule="evenodd" id="vector-shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Copy1 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon13 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame23 />
    </div>
  );
}

function TaskNode5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[819px] rounded-[4px] top-[718px] w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Component4 />
      <Frame4 />
      <Frame10 />
    </div>
  );
}

function TaskSelector5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task selector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="task selector">
          <path d={svgPaths.pc0f0100} fill="var(--fill-0, #F9BBB8)" id="Vector" />
          <path d={svgPaths.p2c4af080} fill="var(--fill-0, #F55E55)" id="Vector_2" />
          <path d={svgPaths.p2bfe0100} fill="var(--fill-0, #FFDEAD)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p13c96600} fill="var(--fill-0, #3D3D63)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Component 233">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[13px] px-[8px] relative w-full">
          <TaskSelector5 />
          <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191919] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">NudataEL_extract___ROOT_...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-solid border-t-5 inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[8px] px-[8px] relative w-full">
        <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[16px] min-w-full not-italic relative shrink-0 text-[#707070] text-[12px] w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">Type: Depende Touch</p>
          <p className="mb-0">Source: Hive</p>
          <p>Sink: Pronto</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return <div className="content-stretch flex items-center p-[4px] rounded-[4px] shrink-0" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="vector-shape">
            <path d={svgPaths.p34c11b70} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p3d459600} fill="var(--fill-0, #707070)" />
            <path d={svgPaths.p1f4bd900} fill="var(--fill-0, #707070)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon14 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[260px]">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-solid border-t inset-0 pointer-events-none" />
      <Frame24 />
    </div>
  );
}

function TaskNode6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[1443px] rounded-[4px] top-[405px] w-[260px]" data-name="Task Node">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Component5 />
      <Frame5 />
      <Frame11 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#0968f6] content-stretch flex gap-[8px] items-start left-[1102px] p-[6px] rounded-bl-[8px] rounded-tl-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[409px]" data-name="Button">
      <Plus />
    </div>
  );
}

function Frame16({ 
  onNodeDragStart, 
  onNodeDragEnd,
  nodeTypes,
  setNodeTypes,
  nodePositions,
  setNodePositions,
  connections,
  setConnections,
  nodeCounter,
  setNodeCounter,
  isReadOnly = false,
  selectedNodeKey,
  setSelectedNodeKey,
}: { 
  onNodeDragStart?: () => void; 
  onNodeDragEnd?: () => void;
  nodeTypes: Record<string, string>;
  setNodeTypes: (types: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => void;
  nodePositions: Record<string, { x: number; y: number; width: number; height: number }>;
  setNodePositions: (positions: Record<string, { x: number; y: number; width: number; height: number }> | ((prev: Record<string, { x: number; y: number; width: number; height: number }>) => Record<string, { x: number; y: number; width: number; height: number }>)) => void;
  connections: Array<{ id: string; from: string; to: string }>;
  setConnections: (connections: Array<{ id: string; from: string; to: string }> | ((prev: Array<{ id: string; from: string; to: string }>) => Array<{ id: string; from: string; to: string }>)) => void;
  nodeCounter: number;
  setNodeCounter: (counter: number | ((prev: number) => number)) => void;
  isReadOnly?: boolean;
  selectedNodeKey: string | null;
  setSelectedNodeKey: (key: string | null) => void;
}) {

  const updateNodePosition = (nodeKey: string, x: number, y: number) => {
    if (isReadOnly) return;
    setNodePositions(prev => ({
      ...prev,
      [nodeKey]: { ...prev[nodeKey as keyof typeof prev], x, y }
    }));
  };

  const handleAddNodeFromNode = (fromNodeKey: string, type: string) => {
    if (isReadOnly) return;
    const newNodeKey = `node${nodeCounter}`;
    const fromNode = nodePositions[fromNodeKey as keyof typeof nodePositions];
    
    const newNode = {
      x: fromNode.x + 380,
      y: fromNode.y,
      width: 260,
      height: 120
    };

    setNodePositions(prev => ({
      ...prev,
      [newNodeKey]: newNode
    }));

    setNodeTypes(prev => ({
      ...prev,
      [newNodeKey]: type
    }));

    setConnections(prev => [...prev, {
      id: `conn${nodeCounter}`,
      from: fromNodeKey,
      to: newNodeKey
    }]);

    setNodeCounter(prev => prev + 1);
  };

  const handleAddNodeToConnection = (connectionId: string, type: string) => {
    if (isReadOnly) return;
    const connection = connections.find(c => c.id === connectionId);
    if (!connection) return;

    const newNodeKey = `node${nodeCounter}`;
    const fromNode = nodePositions[connection.from as keyof typeof nodePositions];
    const toNode = nodePositions[connection.to as keyof typeof nodePositions];
    
    const newNode = {
      x: (fromNode.x + toNode.x) / 2,
      y: (fromNode.y + toNode.y) / 2,
      width: 260,
      height: 120
    };

    setNodePositions(prev => ({
      ...prev,
      [newNodeKey]: newNode
    }));

    setNodeTypes(prev => ({
      ...prev,
      [newNodeKey]: type
    }));

    setConnections(prev => [
      ...prev.filter(c => c.id !== connectionId),
      {
        id: `conn${nodeCounter}_1`,
        from: connection.from,
        to: newNodeKey
      },
      {
        id: `conn${nodeCounter}_2`,
        from: newNodeKey,
        to: connection.to
      }
    ]);

    setNodeCounter(prev => prev + 1);
  };

  const handleDeleteConnection = (connectionId: string) => {
    if (isReadOnly) return;
    setConnections(prev => prev.filter(c => c.id !== connectionId));
  };

  const renderNodeComponent = (nodeKey: string) => {
    const nodeType = nodeTypes[nodeKey];
    
    switch(nodeType) {
      case 'group322':
        return <Group322 />;
      case 'group323':
        return <Group323 />;
      case 'group324':
        return <Group324 />;
      case 'group325':
        return <Group325 />;
      case 'tasknode':
        return <TaskNodeImport />;
      case 'group326':
        return <Group326 />;
      default:
        return <GenericNode type={nodeType} />;
    }
  };

  const NODE_DESCRIPTIONS: Record<string, string> = {
    group322: 'Reads and ingests data from external or internal sources into the pipeline.',
    group323: 'Applies transformation logic to reshape or enrich the incoming data.',
    group324: 'Moves data between storage systems and external destinations.',
    group325: 'Applies conditional routing logic to branch the pipeline flow.',
    tasknode: 'Executes a custom task or script within the pipeline.',
    group326: 'Applies AI-powered model inference to the data stream.',
  };

  const handleDeleteNode = (nodeKey: string) => {
    setNodePositions(prev => { const next = { ...prev }; delete next[nodeKey]; return next; });
    setNodeTypes(prev => { const next = { ...prev }; delete next[nodeKey]; return next; });
    setConnections(prev => prev.filter(c => c.from !== nodeKey && c.to !== nodeKey));
    setSelectedNodeKey(null);
  };

  const handleDuplicateNode = (nodeKey: string) => {
    const node = nodePositions[nodeKey as keyof typeof nodePositions];
    const nodeType = nodeTypes[nodeKey];
    if (!node) return;
    const newKey = `node${nodeCounter}`;
    setNodePositions(prev => ({
      ...prev,
      [newKey]: { x: node.x + 40, y: node.y + 40, width: node.width, height: node.height },
    }));
    setNodeTypes(prev => ({ ...prev, [newKey]: nodeType }));
    setNodeCounter(prev => prev + 1);
  };

  return (
    <div className="absolute h-[1163px] left-1/2 top-1/2 w-[2319px] -translate-x-1/2 -translate-y-1/2">
      {connections.map((connection) => {
        const fromNode = nodePositions[connection.from as keyof typeof nodePositions];
        const toNode = nodePositions[connection.to as keyof typeof nodePositions];
        
        if (!fromNode || !toNode) return null;
        
        return (
          <ConnectionLine
            key={connection.id}
            startX={fromNode.x}
            startY={fromNode.y}
            startWidth={fromNode.width}
            startHeight={fromNode.height}
            endX={toNode.x}
            endY={toNode.y}
            endWidth={toNode.width}
            endHeight={toNode.height}
            onAddNode={isReadOnly ? undefined : (type) => handleAddNodeToConnection(connection.id, type)}
            onDelete={isReadOnly ? undefined : () => handleDeleteConnection(connection.id)}
          />
        );
      })}

      {Object.keys(nodePositions).map((nodeKey) => {
        const node = nodePositions[nodeKey as keyof typeof nodePositions];
        return (
          <DraggableNode
            key={nodeKey}
            initialX={node.x}
            initialY={node.y}
            width={node.width}
            height={node.height}
            onPositionChange={(x, y) => updateNodePosition(nodeKey, x, y)}
            onDragStart={onNodeDragStart}
            onDragEnd={onNodeDragEnd}
            onAddNode={isReadOnly ? undefined : (type) => handleAddNodeFromNode(nodeKey, type)}
            isReadOnly={isReadOnly}
            isSelected={selectedNodeKey === nodeKey}
            onSelect={() => setSelectedNodeKey(nodeKey)}
            onDelete={isReadOnly ? undefined : () => handleDeleteNode(nodeKey)}
            onDuplicate={isReadOnly ? undefined : () => handleDuplicateNode(nodeKey)}
            nodeDescription={NODE_DESCRIPTIONS[nodeTypes[nodeKey]] ?? 'Executes pipeline operations and data transformations.'}
          >
            {renderNodeComponent(nodeKey)}
          </DraggableNode>
        );
      })}
    </div>
  );
}

function Dag({ 
  zoom = 100, 
  panX = 0, 
  panY = 0, 
  onNodeDragStart, 
  onNodeDragEnd,
  nodeTypes,
  setNodeTypes,
  nodePositions,
  setNodePositions,
  connections,
  setConnections,
  nodeCounter,
  setNodeCounter,
  isReadOnly = false,
  selectedNodeKey,
  setSelectedNodeKey,
}: { 
  zoom?: number; 
  panX?: number; 
  panY?: number; 
  onNodeDragStart?: () => void; 
  onNodeDragEnd?: () => void;
  nodeTypes: Record<string, string>;
  setNodeTypes: (types: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => void;
  nodePositions: Record<string, { x: number; y: number; width: number; height: number }>;
  setNodePositions: (positions: Record<string, { x: number; y: number; width: number; height: number }> | ((prev: Record<string, { x: number; y: number; width: number; height: number }>) => Record<string, { x: number; y: number; width: number; height: number }>)) => void;
  connections: Array<{ id: string; from: string; to: string }>;
  setConnections: (connections: Array<{ id: string; from: string; to: string }> | ((prev: Array<{ id: string; from: string; to: string }>) => Array<{ id: string; from: string; to: string }>)) => void;
  nodeCounter: number;
  setNodeCounter: (counter: number | ((prev: number) => number)) => void;
  isReadOnly?: boolean;
  selectedNodeKey: string | null;
  setSelectedNodeKey: (key: string | null) => void;
}) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative w-full" data-name="Dag">
      <div 
        style={{ 
          transform: `translate(${panX}px, ${panY}px) scale(${zoom / 100})`,
          transformOrigin: 'top left',
          transition: 'transform 0.3s ease',
          width: '2319px',
          height: '1163px',
          position: 'relative',
          margin: 'auto'
        }}
      >
        <DotBg />
        <Frame16 
          onNodeDragStart={onNodeDragStart} 
          onNodeDragEnd={onNodeDragEnd}
          nodeTypes={nodeTypes}
          setNodeTypes={setNodeTypes}
          nodePositions={nodePositions}
          setNodePositions={setNodePositions}
          connections={connections}
          setConnections={setConnections}
          nodeCounter={nodeCounter}
          setNodeCounter={setNodeCounter}
          isReadOnly={isReadOnly}
          selectedNodeKey={selectedNodeKey}
          setSelectedNodeKey={setSelectedNodeKey}
        />
      </div>
    </div>
  );
}

function Rectangle4() {
  return (
    <div className="absolute bg-[#e5e5e5] inset-[26.51%_46.19%_53.41%_34.01%]">
      <div className="absolute bg-[#e5e5e5] border-[#0968f6] border-[3.192px] border-solid inset-0" />
    </div>
  );
}

function Rectangle6() {
  return <div className="absolute inset-[66.12%_72.71%_27.58%_19.59%]" />;
}

function Rectangle5() {
  return (
    <div className="absolute bg-[#e5e5e5] inset-[56.23%_46.19%_25.29%_34.01%]">
      <div className="absolute bg-[#e5e5e5] inset-0" />
    </div>
  );
}

function Rectangle7() {
  return <div className="absolute inset-[75.36%_72.71%_18.33%_19.59%]" />;
}

function Rectangle() {
  return (
    <div className="absolute bg-[#e5e5e5] inset-[39.36%_74.62%_40.55%_5.58%]">
      <div className="absolute bg-[#e5e5e5] inset-0" />
    </div>
  );
}

function Rectangle1() {
  return <div className="absolute inset-[60.23%_86.79%_33.88%_5.51%]" />;
}

function Rectangle2() {
  return <div className="absolute inset-[69.48%_86.79%_24.64%_5.51%]" />;
}

function Rectangle10() {
  return (
    <div className="absolute inset-[42.23%_-61.42%_38.99%_136.83%]">
      <div className="absolute bg-white border-[#c5cdd7] border-[3.192px] border-solid inset-0" />
    </div>
  );
}

function Rectangle3() {
  return <div className="absolute inset-[82.51%_86.79%_11.6%_5.51%]" />;
}

function Component9() {
  return <div className="size-full" data-name="Component 292" />;
}

function Component10() {
  return <div className="size-full" data-name="Component 294" />;
}

function Component11() {
  return <div className="size-full" data-name="Component 296" />;
}

function Component12() {
  return <div className="size-full" data-name="Component 297" />;
}

function Component6() {
  return <div className="absolute inset-[62.33%_80.41%_30.52%_13.21%]" data-name="Component 285" />;
}

function Component7() {
  return <div className="absolute inset-[72.42%_80.41%_20.85%_13.21%]" data-name="Component 286" />;
}

function Component13() {
  return <div className="size-full" data-name="Component 302" />;
}

function Component14() {
  return <div className="size-full" data-name="Component 303" />;
}

function Component16() {
  return (
    <div className="relative size-full" data-name="Component 311">
      <div className="absolute inset-[3.85%_0]" data-name="Vector">
        <div className="absolute inset-[-20.7%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4176 10.9012">
            <path d={svgPaths.p2e204c00} id="Vector" stroke="var(--stroke-0, #C5CDD7)" strokeWidth="3.19199" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return <div className="size-full" data-name="Component 304" />;
}

function Component8() {
  return <div className="size-full" data-name="Component 287" />;
}

function Group() {
  return (
    <div className="absolute contents inset-[19.88%_-61.42%_11.6%_5.51%]">
      <Rectangle4 />
      <Rectangle6 />
      <Rectangle5 />
      <Rectangle7 />
      <Rectangle />
      <Rectangle1 />
      <Rectangle2 />
      <Rectangle10 />
      <Rectangle3 />
      <div className="absolute flex inset-[39.63%_53.05%_48.18%_40.57%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[15.175px] rotate-180 w-[12.559px]">
          <Component9 />
        </div>
      </div>
      <div className="absolute flex inset-[19.88%_53.05%_48.18%_40.57%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[39.77px] rotate-180 w-[12.559px]">
          <Component10 />
        </div>
      </div>
      <div className="absolute flex inset-[51.82%_52.52%_24.64%_40.57%] items-center justify-center">
        <div className="flex-none h-[29.304px] rotate-180 w-[13.605px]">
          <Component11 />
        </div>
      </div>
      <div className="absolute flex inset-[51.82%_53.05%_33.88%_40.57%] items-center justify-center">
        <div className="flex-none h-[17.792px] rotate-180 w-[12.559px]">
          <Component12 />
        </div>
      </div>
      <Component6 />
      <Component7 />
      <div className="absolute flex inset-[20.72%_40.57%_74.66%_53.05%] items-center justify-center">
        <div className="flex-none h-[5.756px] rotate-180 w-[12.559px]">
          <Component13 />
        </div>
      </div>
      <div className="absolute flex inset-[64.01%_41.1%_33.88%_52.79%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.616px] rotate-180 w-[12.036px]">
          <Component14 />
        </div>
      </div>
      <div className="absolute flex inset-[47.36%_-36.88%_45.93%_117.38%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[8.352px] rotate-180 w-[38.418px]">
          <Component16 />
        </div>
      </div>
      <div className="absolute flex inset-[72.42%_41.1%_25.48%_52.79%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.616px] rotate-180 w-[12.036px]">
          <Component15 />
        </div>
      </div>
      <div className="absolute flex inset-[79.15%_80.41%_14.55%_13.21%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[7.849px] w-[12.559px]">
          <Component8 />
        </div>
      </div>
      <div className="absolute flex inset-[36.95%_65.99%_50.19%_25.38%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[16px] w-[17px]">
          <div className="relative size-full">
            <div className="absolute inset-[-3.13%_0_-18.04%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19.3868">
                <path d={svgPaths.p5f5de00} fill="var(--stroke-0, #8F8F8F)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[52.22%_36.55%_34.13%_53.81%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[17px] w-[19px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.94%_0_-16.98%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.3868">
                <path d={svgPaths.p523dd00} fill="var(--stroke-0, #8F8F8F)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[52.22%_10.66%_47.78%_83.25%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-px w-[12px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.89px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 5.7735">
                <path d={svgPaths.p3e4b3e00} fill="var(--stroke-0, #8F8F8F)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[49.81%_65.99%_34.13%_25.38%]">
        <div className="absolute inset-[-2.5%_0_-14.43%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 23.3868">
            <path d={svgPaths.p166ec500} fill="var(--stroke-0, #8F8F8F)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36.95%_36.55%_47.78%_53.81%]">
        <div className="absolute inset-[-2.63%_0_-15.19%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22.3868">
            <path d={svgPaths.p3ea9fe00} fill="var(--stroke-0, #8F8F8F)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Rectangle8() {
  return (
    <div className="absolute bg-[#e5e5e5] inset-[42.58%_16.75%_38.95%_63.45%]">
      <div className="absolute bg-[#e5e5e5] inset-0" />
    </div>
  );
}

function Rectangle9() {
  return (
    <div className="absolute bg-[#e5e5e5] inset-[42.58%_-9.14%_38.95%_89.34%]">
      <div className="absolute bg-[#e5e5e5] inset-0" />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute h-[124.481px] right-[16px] overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] bottom-[16px] w-[197px]" data-name="map">
      <div className="absolute bg-white border border-[#e5e5e5] border-solid inset-0" />
      <Group />
      <Rectangle8 />
      <Rectangle9 />
    </div>
  );
}

function PipelineDag() {
  const { pipelineState, isEditMode, panelCloseSignal } = usePipelineState();
  const [zoom, setZoom] = useState(100);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isNodeDragging, setIsNodeDragging] = useState(false);

  // "Click to place" mode state
  const [pendingNode, setPendingNode] = useState<{ type: string; label: string } | null>(null);
  const [ghostPos, setGhostPos] = useState({ x: 0, y: 0 });

  // Selected node for deletion
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);

  // Close node detail panel when triggered by toolbar actions (save, edit, release/dev toggle)
  useEffect(() => {
    if (panelCloseSignal > 0) {
      setSelectedNodeKey(null);
    }
  }, [panelCloseSignal]);

  const [nodeTypes, setNodeTypes] = useState<Record<string, string>>({
    node1: 'group322',
    node2: 'group323',
    node3: 'group324',
    node4: 'group325',
    node5: 'tasknode',
    node6: 'group326'
  });

  const [nodePositions, setNodePositions] = useState({
    node1: { x: 300, y: 350, width: 260, height: 120 },
    node2: { x: 680, y: 350, width: 260, height: 120 },
    node3: { x: 1040, y: 285, width: 260, height: 130 },
    node4: { x: 1040, y: 435, width: 260, height: 110 },
    node5: { x: 1420, y: 320, width: 260, height: 120 },
    node6: { x: 1800, y: 320, width: 260, height: 110 }
  });

  const [connections, setConnections] = useState([
    { id: 'conn1', from: 'node1', to: 'node2' },
    { id: 'conn2', from: 'node2', to: 'node3' },
    { id: 'conn3', from: 'node2', to: 'node4' },
    { id: 'conn4', from: 'node3', to: 'node5' },
    { id: 'conn5', from: 'node4', to: 'node5' },
    { id: 'conn6', from: 'node5', to: 'node6' }
  ]);

  const [nodeCounter, setNodeCounter] = useState(7);

  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportDimensions, setViewportDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setViewportDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Keyboard shortcuts: Escape cancels placement; Delete/Backspace deletes selected node
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when focus is in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === 'Escape') {
        setPendingNode(null);
        setSelectedNodeKey(null);
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedNodeKey && isEditMode) {
        // Remove node
        setNodePositions(prev => {
          const next = { ...prev };
          delete next[selectedNodeKey];
          return next;
        });
        setNodeTypes(prev => {
          const next = { ...prev };
          delete next[selectedNodeKey];
          return next;
        });
        // Remove all connections involving this node
        setConnections(prev => prev.filter(c => c.from !== selectedNodeKey && c.to !== selectedNodeKey));
        setSelectedNodeKey(null);
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pendingNode, selectedNodeKey, isEditMode]);

  // Place a new node at canvas-space coordinates
  const addNodeAtCanvasPosition = (canvasX: number, canvasY: number, nodeType: string) => {
    const newKey = `node${nodeCounter}`;
    setNodePositions(prev => ({ ...prev, [newKey]: { x: canvasX, y: canvasY, width: 260, height: 120 } }));
    setNodeTypes(prev => ({ ...prev, [newKey]: nodeType }));
    setNodeCounter(prev => prev + 1);
  };

  // Callback passed to DagActions → NodePickerPanel
  const onAddNode = (nodeType: string, label: string) => {
    setPendingNode({ type: nodeType, label });
  };

  // Overlay click: place pending node
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (!pendingNode || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const canvasX = (e.clientX - rect.left - panX) / (zoom / 100) - 130;
    const canvasY = (e.clientY - rect.top - panY) / (zoom / 100) - 60;
    addNodeAtCanvasPosition(canvasX, canvasY, pendingNode.type);
    setPendingNode(null);
  };

  // Overlay mouse move: update ghost card position
  const handleOverlayMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setGhostPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Drag & drop from NodePickerPanel
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const nodeType = e.dataTransfer.getData('application/node-type');
    if (!nodeType || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const canvasX = (e.clientX - rect.left - panX) / (zoom / 100) - 130;
    const canvasY = (e.clientY - rect.top - panY) / (zoom / 100) - 60;
    addNodeAtCanvasPosition(canvasX, canvasY, nodeType);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const handleFitView = () => {
    setZoom(100);
  };

  const handleActualSize = () => {
    setZoom(100);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (pendingNode) return; // don't pan while in place mode
    if (isNodeDragging) return;
    // Click on canvas background → deselect
    if (e.target === e.currentTarget) setSelectedNodeKey(null);
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isNodeDragging) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNodeDragStart = () => {
    setIsNodeDragging(true);
  };

  const handleNodeDragEnd = () => {
    setIsNodeDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="content-stretch flex flex-col gap-[10px] flex-1 items-center justify-center relative shrink-0 w-full" 
      data-name="pipeline dag"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDragOver={isEditMode ? handleDragOver : undefined}
      onDrop={isEditMode ? handleDrop : undefined}
      style={{ cursor: (!isEditMode || pipelineState === 'released') ? 'default' : (pendingNode ? 'crosshair' : (isNodeDragging ? 'default' : (isDragging ? 'grabbing' : 'grab'))) }}
    >
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4D4D4 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      />
      
      <Dag 
        zoom={zoom} 
        panX={panX} 
        panY={panY} 
        onNodeDragStart={handleNodeDragStart} 
        onNodeDragEnd={handleNodeDragEnd}
        nodeTypes={nodeTypes}
        setNodeTypes={setNodeTypes}
        nodePositions={nodePositions}
        setNodePositions={setNodePositions}
        connections={connections}
        setConnections={setConnections}
        nodeCounter={nodeCounter}
        setNodeCounter={setNodeCounter}
        isReadOnly={pipelineState === 'released' || !isEditMode}
        selectedNodeKey={selectedNodeKey}
        setSelectedNodeKey={setSelectedNodeKey}
      />
      
      {/* Left Side Actions Toolbar */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        {(pipelineState === 'released' || !isEditMode) ? <DagActionsReleased /> : <DagActions onAddNode={onAddNode} />}
      </div>
      
      {/* Top Right Action Buttons */}
      <div className="absolute right-4 top-4 z-10">
        {pipelineState === 'released' ? (
          <RunOnlyActions />
        ) : (
          <div className="h-[30px] rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] bg-white">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center px-[2px] relative">
              {/* Test Run Button */}
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative cursor-pointer hover:bg-[#f5f5f5] rounded-[6px] transition-colors">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M4 2L13.3333 8L4 14V2Z" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Test Run</p>
                </div>
              </div>
              {/* Review Button */}
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative cursor-pointer hover:bg-[#f5f5f5] rounded-[6px] transition-colors">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths2.p19d57600} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6 5.33333H10.6667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M5.33333 8H9.33333" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M7.33333 10.6667H10.6667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Review</p>
                </div>
              </div>
              {/* Deploy Button */}
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative cursor-pointer hover:bg-[#f5f5f5] rounded-[6px] transition-colors">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_rocket_dag)">
                        <path d={svgPaths2.p26265d80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths2.p2bf2d100} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths2.pd918280} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths2.pcbc4a80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_rocket_dag">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] text-center">Deploy</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Right Bottom Combined Panel: Map + Zoom Controls */}
      <div className="absolute bottom-2 right-2 z-10 flex flex-col gap-2">
        {/* Map on top */}
        <div className="h-[66.3px] w-[105px] overflow-clip shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] rounded-lg relative" data-name="map">
          <Minimap
            nodePositions={nodePositions}
            connections={connections}
            workflowWidth={2319}
            workflowHeight={1163}
            zoom={zoom}
            panX={panX}
            panY={panY}
            viewportWidth={viewportDimensions.width}
            viewportHeight={viewportDimensions.height}
          />
        </div>
        
        {/* Zoom Controls */}
        <div className="w-[105px] bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] border border-[#e5e5e5] flex items-center justify-between overflow-hidden">
          <button
            onClick={handleZoomOut}
            className="px-2 py-2 hover:bg-[#f5f5f5] transition-colors border-r border-[#e5e5e5] flex items-center justify-center flex-1"
            title="Zoom Out"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#525252" strokeWidth="1.5" />
              <path d="M4.5 7H9.5" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11.5 11.5L14 14" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          
          <div className="px-2 py-2 border-r border-[#e5e5e5] text-center flex-1">
            <span className="font-['Geist:Regular',sans-serif] text-[11px] text-[#0a0a0a]">
              {zoom}%
            </span>
          </div>
          
          <button
            onClick={handleZoomIn}
            className="px-2 py-2 hover:bg-[#f5f5f5] transition-colors flex items-center justify-center flex-1"
            title="Zoom In"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#525252" strokeWidth="1.5" />
              <path d="M7 4.5V9.5" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4.5 7H9.5" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11.5 11.5L14 14" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Node Detail Panel — right side */}
      {selectedNodeKey && nodeTypes[selectedNodeKey] && (() => {
        const iconMap: Record<string, React.ReactNode> = {
          group322: <Icon322 />,
          group323: <Icon323 />,
          group324: <Icon324 />,
          group325: <Icon325 />,
          tasknode: <IconTask />,
          group326: <Icon326 />,
        };
        return (
          <NodeDetailPanel
            nodeKey={selectedNodeKey}
            nodeType={nodeTypes[selectedNodeKey]}
            nodeIcon={iconMap[nodeTypes[selectedNodeKey]]}
            onClose={() => setSelectedNodeKey(null)}
            isEditMode={isEditMode}
            pipelineState={pipelineState}
          />
        );
      })()}

      {/* Placement overlay — sits below toolbars (z-10) but above nodes */}
      {isEditMode && pendingNode && (
        <div
          className="absolute inset-0 z-[8]"
          style={{ cursor: 'crosshair' }}
          onClick={handleOverlayClick}
          onMouseMove={handleOverlayMouseMove}
        />
      )}

      {/* Ghost node card — follows cursor while placing */}
      {isEditMode && pendingNode && ghostPos.x > 0 && (
        <div
          className="absolute pointer-events-none z-[9]"
          style={{ left: ghostPos.x - 130, top: ghostPos.y - 50 }}
        >
          <div className="bg-white border-2 border-dashed border-[#0968F6] rounded-[8px] w-[260px] px-[12px] py-[10px] shadow-[0px_4px_12px_0px_rgba(9,104,246,0.18)] opacity-90">
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#0968F6] shrink-0" />
              <span className="font-['Geist:Medium',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] truncate">
                {pendingNode.label}
              </span>
            </div>
            <p className="font-['Geist:Regular',sans-serif] text-[11px] text-[#737373] mt-[4px] tracking-[0.06px]">
              Click to place · Esc to cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PipelineDag />
      </div>
    </div>
  );
}

// Component without TopWindowTab for use with external layout
export function WorkflowContent({ isDrawerOpen = false }: { isDrawerOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Container1 isDrawerOpen={isDrawerOpen} />
      <Container8 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <TopWindowTab />
      <Container1 />
      <Container8 />
    </div>
  );
}
