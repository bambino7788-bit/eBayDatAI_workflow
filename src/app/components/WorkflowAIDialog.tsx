import { useState, useRef, useEffect } from "react";
import { Paperclip, Scaling, Mic, Send, ChevronLeft, Plus, X } from "lucide-react";
import InstancePanelDesign from "../../imports/InstancePanel";
import { cn } from "./ui/utils";

function IconButtons({ className, onScale }: { className?: string; onScale?: () => void }) {
  return (
    <div className={cn("flex gap-[8px] items-center shrink-0", className)}>
      <button type="button" className="cursor-pointer flex items-center justify-center rounded-[6px] p-[2px] hover:bg-black/[0.04] transition-colors" aria-label="Attach file">
        <Paperclip className="size-[16px] text-[#525252]" strokeWidth={1.75} />
      </button>
      <button type="button" onClick={onScale} title="Open AI drawer" className="group relative cursor-pointer flex items-center justify-center rounded-[6px] p-[2px] hover:bg-black/[0.04] transition-colors" aria-label="Open AI drawer">
        <Scaling className="size-[16px] text-[#525252]" strokeWidth={1.75} />
        <span role="tooltip" className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-[4px] bg-[#0a0a0a] px-2 py-2 text-[12px] text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 pointer-events-none z-50">Open AI drawer</span>
      </button>
      <button type="button" className="cursor-pointer flex items-center justify-center rounded-[6px] p-[2px] hover:bg-black/[0.04] transition-colors" aria-label="Voice input">
        <Mic className="size-[16px] text-[#525252]" strokeWidth={1.75} />
      </button>
      <button type="button" className="cursor-pointer flex items-center justify-center rounded-[6px] p-[2px] hover:bg-black/[0.04] transition-colors" aria-label="Send">
        <Send className="size-[16px] text-[#525252]" strokeWidth={1.75} />
      </button>
    </div>
  );
}

export function WorkflowAIDialog({ value, onValueChange, onScale }: { value: string; onValueChange: (value: string) => void; onScale: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Collapse again when clicking outside (only if empty)
  useEffect(() => {
    if (!expanded) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node) && value.trim() === "") {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [expanded, value]);

  const open = () => {
    setExpanded(true);
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  return (
    <div
      ref={wrapRef}
      className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-20 w-[440px] max-w-[calc(100%-48px)]"
    >
      {/* Gradient border wrapper */}
      <div className="rounded-[12px] p-px bg-[linear-gradient(105deg,#b476ff_0%,#86b5ff_50%,#f56b6b_100%)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
        <div
          className={cn(
            "bg-white rounded-[11px] overflow-hidden transition-[height] duration-300 ease-out",
            expanded ? "h-[128px]" : "h-[42px]"
          )}
        >
          {expanded ? (
            <div className="flex flex-col h-full px-[12px] py-[8px]">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder="Edit or extend your workflow..."
                className="flex-1 w-full resize-none outline-none bg-transparent font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] tracking-[-0.0762px] text-[#0a0a0a] placeholder:text-[#afafaf]"
              />
              <div className="flex items-center justify-end pt-[4px]">
                <IconButtons onScale={onScale} />
              </div>
            </div>
          ) : (
            <div
              onClick={open}
              className="flex items-center justify-between w-full h-full px-[12px] text-left cursor-text"
            >
              <span className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] tracking-[-0.0762px] text-[#afafaf] whitespace-nowrap">
                Edit or extend your workflow...
              </span>
              <IconButtons onScale={onScale} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkflowAIDialog;

export function WorkflowAIDrawer({ value, onValueChange, onClose }: { value: string; onValueChange: (value: string) => void; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <aside aria-label="Neo AI drawer" className="relative h-full w-[438px] max-w-[45vw] shrink-0 overflow-hidden border-r border-[#e5e5e5] bg-white font-['Geist:Regular',sans-serif] tracking-[0.07px] [&_[data-name=InstancePanel]]:border-l-0 [&_[data-name=InstancePanel]>div:last-child]:w-full [&_[data-name=InstancePanel]>div:first-child]:invisible [&_[data-name=Chat]]:invisible [&_p]:font-['Geist:Regular',sans-serif]">
      <InstancePanelDesign />
      <div className="absolute inset-x-0 top-0 flex h-10 items-center justify-between border-b border-[#e5e5e5] bg-white px-3 text-[13px]">
        <button type="button" onClick={onClose} className="flex cursor-pointer items-center gap-1 rounded hover:bg-[#fafafa]"><ChevronLeft className="size-4 text-[#737373]" />New Chat</button>
        <div className="flex items-center gap-2">
          {[{ label: "New", icon: Plus, action: () => onValueChange("") }, { label: "Close AI drawer", icon: X, action: onClose }].map(({ label, icon: Icon, action }) => (
            <button key={label} type="button" aria-label={label} onClick={action} className="group relative cursor-pointer rounded p-1 text-[#525252] hover:bg-[#f5f5f5]">
              <Icon className="size-4" />
              <span role="tooltip" className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-[4px] bg-[#0a0a0a] px-2 py-2 text-[12px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">{label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-3 h-[122px] overflow-hidden rounded-xl bg-[#f5f5f5] [&_[data-name=InstancePanel]]:border-0 [&_[data-name=InstancePanel]>div:first-child]:hidden [&_[data-name=InstancePanel]>div:last-child]:h-full [&_[data-name=InstancePanel]>div:last-child]:p-0 [&_[data-name=InstancePanel]>div:last-child>div:first-child]:hidden [&_[data-name=Chat]]:visible [&_[class*='322']]:w-auto [&_[class*='322']]:flex-1">
        <InstancePanelDesign />
        <textarea autoFocus aria-label="Ask Neo" value={value} onChange={event => onValueChange(event.target.value)} placeholder="Ask me anything or search for resources... (Use @ to reference resources)" className="absolute inset-x-3 top-2 h-[70px] w-[calc(100%-24px)] resize-none bg-[#f5f5f5] text-[14px] leading-5 text-[#0a0a0a] outline-none placeholder:text-[#a2a2a2]" />
      </div>
    </aside>
  );
}
