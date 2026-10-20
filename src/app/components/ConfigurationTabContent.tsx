import { useState } from "react";
import { ConfigurationSectionsContent } from "../../imports/Container-52-240550";
import vscSvgPaths from "../../imports/svg-x4go720d4p";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  Play,
  Square,
  Copy,
  Download,
  ArrowUpDown,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  StopCircle,
  Mail,
  MessageSquare,
  Code,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

type ConfigCategory = "pool" | "pipeline-variables" | "notebook-environment" | "alert-method-template";

const categories: { key: ConfigCategory; label: string }[] = [
  { key: "pool", label: "Pool Setting" },
  { key: "pipeline-variables", label: "Pipeline Variables" },
  { key: "notebook-environment", label: "Notebook Environment" },
  { key: "alert-method-template", label: "Alert Method Template" },
];

/* ═══════════════════════════════════════════
   Pagination
   ═══════════════════════════════════════════ */
function Pagination({
  total,
  currentPage,
  pageSize,
  onPageChange,
}: {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const [goToValue, setGoToValue] = useState("");

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  const handleGoTo = () => {
    const page = parseInt(goToValue);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setGoToValue("");
    }
  };

  return (
    <div className="flex items-center justify-between w-full pt-[12px] pb-[4px]">
      <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] text-[#737373] tracking-[0.07px] leading-[1.5]">
        Total {total.toLocaleString()} items
      </span>
      <div className="flex items-center gap-[8px]">
        {/* Prev */}
        <button
          className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] cursor-pointer hover:bg-[#fafafa] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={14} color="#0a0a0a" />
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            <span
              key={`ell-${i}`}
              className="w-[32px] h-[32px] flex items-center justify-center font-['Geist:Regular',sans-serif] text-[14px] text-[#737373]"
            >
              ···
            </span>
          ) : (
            <button
              key={p}
              className={`w-[32px] h-[32px] flex items-center justify-center rounded-[6px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] cursor-pointer transition-colors ${
                p === currentPage
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-[#f5f5f5]"
              }`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] cursor-pointer hover:bg-[#fafafa] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={14} color="#0a0a0a" />
        </button>

        {/* Page size */}
        <div className="flex items-center gap-[4px] ml-[8px]">
          <div className="flex items-center gap-[4px] px-[8px] py-[4px] border border-[#e5e5e5] rounded-[6px] bg-white">
            <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px]">
              {pageSize} / page
            </span>
            <ChevronDown size={12} color="#737373" />
          </div>
        </div>

        {/* Go to */}
        <div className="flex items-center gap-[6px] ml-[4px]">
          <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#737373] tracking-[0.07px]">
            Go to
          </span>
          <input
            className="w-[44px] h-[28px] border border-[#e5e5e5] rounded-[6px] bg-white text-center font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] outline-none focus:border-[#0968F6] transition-colors"
            value={goToValue}
            onChange={(e) => setGoToValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGoTo()}
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Notebook Environment Section
   ═══════════════════════════════════════════ */
const notebookNames = [
  "Sandy Notebook Project", "ML Training Pipeline", "Data Analysis Env", "Feature Engineering",
  "Model Evaluation Suite", "ETL Processing Env", "Real-time Analytics", "Batch Scoring Env",
  "Data Validation Env", "Experiment Tracker", "A/B Test Analysis", "User Segmentation",
  "Revenue Forecasting", "Anomaly Detection", "NLP Processing Env", "Image Classification",
  "Recommendation Eng", "Search Ranking Env", "Fraud Detection Env", "Price Optimization",
];
const hardwareTypes = ["CPU", "GPU", "CPU", "CPU", "GPU", "CPU", "CPU", "GPU", "CPU", "CPU"];
const envVersions = ["Python 1.3.1", "Python 1.4.0", "Python 1.3.2", "Python 1.5.0", "Python 1.3.1"];
const statusTypes: ("active" | "cve" | "stop")[] = ["active", "active", "cve", "active", "stop", "active", "active", "cve", "active", "active"];

const notebookData = Array.from({ length: 100 }, (_, i) => ({
  name: notebookNames[i % notebookNames.length] + (i >= notebookNames.length ? ` ${Math.floor(i / notebookNames.length) + 1}` : ""),
  hardware: hardwareTypes[i % hardwareTypes.length],
  env: envVersions[i % envVersions.length],
  updated: `2026-${String(1 + (i % 12)).padStart(2, "0")}-${String(1 + (i % 28)).padStart(2, "0")} ${String(8 + (i % 14)).padStart(2, "0")}:${String(i % 60).padStart(2, "0")}:00`,
  status: statusTypes[i % statusTypes.length],
}));

function StatusBadgeNB({ status }: { status: "active" | "cve" | "stop" }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full border border-[#d1fae5] bg-white">
        <CheckCircle2 size={12} color="#10b981" />
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#10b981] tracking-[0.06px] leading-[1.5]">Active</span>
      </span>
    );
  }
  if (status === "cve") {
    return (
      <span className="inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full border border-[#fef3c7] bg-white">
        <AlertTriangle size={12} color="#f59e0b" />
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#f59e0b] tracking-[0.06px] leading-[1.5]">CVE Issue</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full border border-[#e5e5e5] bg-white">
      <StopCircle size={12} color="#737373" />
      <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#737373] tracking-[0.06px] leading-[1.5]">Stop</span>
    </span>
  );
}

function NotebookEnvironmentContent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Header */}
      <div className="flex items-center gap-[8px] w-full">
        <div className="flex items-center gap-[8px]">
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#0a0a0a] text-[20px] tracking-[0.1px]">
            Notebook Environment
          </p>
          <RefreshCw size={14} color="#737373" className="cursor-pointer hover:color-[#0a0a0a]" />
        </div>
        <div className="flex-1 flex items-center justify-end gap-[12px]">
          <button className="bg-white border border-[#e5e5e5] rounded-[8px] px-[16px] py-[7.5px] min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5] cursor-pointer hover:bg-[#fafafa] transition-colors"
            style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
            Change Log
          </button>
          <button className="bg-[#0968F6] rounded-[8px] px-[16px] py-[7.5px] min-h-[36px] flex items-center gap-[6px] cursor-pointer hover:bg-[#0856d6] transition-colors"
            style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1V12M1 6.5H12" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] tracking-[0.07px] leading-[1.5]">Config</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr_1fr_0.8fr_1.2fr] bg-[#fafafa] border-b border-[#e5e5e5]">
          {[
            { label: "Environment Name", sort: true },
            { label: "Hardware", sort: true },
            { label: "Environment", sort: true },
            { label: "Last Updated", sort: "down" },
            { label: "Status", sort: true },
            { label: "Action", sort: false },
          ].map((col) => (
            <div key={col.label} className="flex items-center gap-[4px] px-[16px] py-[10px]">
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">
                {col.label}
              </span>
              {col.sort === true && <ArrowUpDown size={12} color="#a3a3a3" />}
              {col.sort === "down" && <ArrowDown size={12} color="#a3a3a3" />}
            </div>
          ))}
        </div>

        {/* Table Body */}
        {notebookData.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1.5fr_0.8fr_0.8fr_1fr_0.8fr_1.2fr] border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex items-center px-[16px] py-[12px]">
              <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0968F6] tracking-[0.07px] leading-[1.5] underline cursor-pointer truncate">
                {row.name}
              </span>
            </div>
            <div className="flex items-center px-[16px] py-[12px]">
              <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">{row.hardware}</span>
            </div>
            <div className="flex items-center px-[16px] py-[12px]">
              <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">{row.env}</span>
            </div>
            <div className="flex items-center px-[16px] py-[12px]">
              <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#737373] tracking-[0.07px] leading-[1.5]">{row.updated}</span>
            </div>
            <div className="flex items-center px-[16px] py-[12px]">
              <StatusBadgeNB status={row.status} />
            </div>
            <div className="flex items-center gap-[8px] px-[16px] py-[12px]">
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
                <Play size={14} color="#737373" />
              </button>
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
                <Square size={14} color="#a3a3a3" />
              </button>
              <div className="relative group">
                <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
                  <div className="relative size-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                      <path d={vscSvgPaths.p18b2ad00} fill="#0968F6" />
                    </svg>
                  </div>
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                  IDE
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
                </div>
              </div>
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
                <Copy size={14} color="#737373" />
              </button>
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
                <Download size={14} color="#737373" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination total={1385} currentPage={currentPage} pageSize={100} onPageChange={setCurrentPage} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   Alert Method Template Section
   ═══════════════════════════════════════════ */
const alertTemplates = [
  {
    name: "Template A",
    channels: [
      { type: "Email" as const, recipients: "Sandy Wang, Kathryn Murphy, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
      { type: "Slack" as const, recipients: "Sandy Wang, Kathryn Murphy, #Core Tech, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
      { type: "Pager" as const, recipients: "Sandy Wang, Kathryn Murphy, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
    ],
  },
  {
    name: "Template B",
    channels: [
      { type: "Email" as const, recipients: "Sandy Wang, Kathryn Murphy, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
      { type: "Slack" as const, recipients: "Sandy Wang, Kathryn Murphy, #Core Tech, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
      { type: "Pager" as const, recipients: "Sandy Wang, Kathryn Murphy, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins, Jacob Jones, Cameron Williamson, DL-ebay-DLSteam, Guy Hawkins" },
    ],
  },
];

function ChannelIcon({ type }: { type: "Email" | "Slack" | "Pager" }) {
  if (type === "Email") return <Mail size={14} color="#0968F6" />;
  if (type === "Slack") return <MessageSquare size={14} color="#0968F6" />;
  return <Code size={14} color="#0968F6" />;
}

function AlertMethodTemplateContent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Header */}
      <div className="flex items-center gap-[8px] w-full">
        <div className="flex items-center gap-[8px]">
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#0a0a0a] text-[20px] tracking-[0.1px]">
            Alert Method Template
          </p>
          <RefreshCw size={14} color="#737373" className="cursor-pointer" />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="bg-[#0968F6] rounded-[8px] px-[16px] py-[7.5px] min-h-[36px] flex items-center gap-[6px] cursor-pointer hover:bg-[#0856d6] transition-colors"
            style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1V12M1 6.5H12" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#fafafa] tracking-[0.07px] leading-[1.5]">Template</span>
          </button>
        </div>
      </div>

      {/* Template Cards */}
      {alertTemplates.map((tpl) => (
        <div key={tpl.name} className="bg-white border border-[#e5e5e5] rounded-[12px] p-[16px] flex flex-col w-full" style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-[8px]">
            <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">
              {tpl.name}
            </span>
            <div className="flex items-center gap-[8px]">
              <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0a0a0a] tracking-[0.07px] underline cursor-pointer leading-[1.5]">
                Apply to...
              </span>
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
                <Pencil size={14} color="#0a0a0a" />
              </button>
              <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
                <Trash2 size={14} color="#a3a3a3" />
              </button>
            </div>
          </div>

          {/* Channels */}
          {tpl.channels.map((ch, idx) => (
            <div
              key={ch.type}
              className={`flex items-start gap-[24px] py-[10px] ${
                idx < tpl.channels.length - 1 ? "border-b border-[#e5e5e5]" : ""
              }`}
            >
              <div className="flex items-center gap-[6px] w-[72px] shrink-0 pt-[2px]">
                <div className="w-[20px] h-[20px] rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                  <ChannelIcon type={ch.type} />
                </div>
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">
                  {ch.type}
                </span>
              </div>
              <p className="flex-1 font-['Geist:Regular',sans-serif] text-[13px] text-[#737373] tracking-[0.07px] leading-[1.5]">
                {ch.recipients}
              </p>
            </div>
          ))}
        </div>
      ))}

      {/* Pagination */}
      <Pagination total={2} currentPage={currentPage} pageSize={10} onPageChange={setCurrentPage} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   Pool Settings (with pagination wrapper)
   ═══════════════════════════════════════════ */
function PoolSettingContent() {
  return (
    <div className="flex flex-col w-full">
      <ConfigurationSectionsContent contentType="pool" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   Pipeline Variables (with pagination wrapper)
   ═══════════════════════════════════════════ */
function PipelineVariablesContent() {
  return (
    <div className="flex flex-col w-full">
      <ConfigurationSectionsContent contentType="pipeline-variables" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Configuration Tab
   ═══════════════════════════════════════════ */
export function ConfigurationTabContent() {
  const [activeCategory, setActiveCategory] = useState<ConfigCategory>("pool");

  return (
    <div className="flex w-full h-full">
      {/* Left Sidebar */}
      <div className="w-[196px] shrink-0 flex flex-col gap-[4px] pr-[4px] pt-[4px] border-r border-[#e5e5e5]">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              className={`w-full text-left h-[40px] px-3 flex items-center rounded-lg transition-all cursor-pointer ${
                isActive
                  ? "bg-[#f7f7f7] border border-[#ebebeb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  : "hover:bg-gray-100 border border-transparent"
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span
                className={`font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[20px] ${
                  isActive ? "text-[#343434]" : "text-[#252525]"
                }`}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right Content */}
      <div className="flex-1 pl-[24px] pt-[24px] overflow-auto">
        {activeCategory === "pool" && <PoolSettingContent />}
        {activeCategory === "pipeline-variables" && <PipelineVariablesContent />}
        {activeCategory === "notebook-environment" && <NotebookEnvironmentContent />}
        {activeCategory === "alert-method-template" && <AlertMethodTemplateContent />}
      </div>
    </div>
  );
}