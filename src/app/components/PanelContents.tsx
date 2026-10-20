import { useState } from "react";
import { Search, ChevronDown, ChevronRight, X, MoreVertical, AlertTriangle, CheckCircle2, Clock, XCircle, Play, Pause, RotateCcw, Copy, Check, ExternalLink, Trash2, Plus, Pencil } from "lucide-react";

// ===== Shared Panel Header =====
function PanelHeader({ title, subtitle, onClose }: { title: string; subtitle?: string; onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">{title}</p>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <button className="cursor-pointer hover:opacity-70">
            <MoreVertical size={16} className="text-[#525252]" />
          </button>
          <button className="cursor-pointer hover:opacity-70" onClick={onClose}>
            <X size={16} className="text-[#525252]" />
          </button>
        </div>
      </div>
      {subtitle && (
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[12px] tracking-[0.18px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-[#e5e5e5] shrink-0" />;
}

// ===== Alerts Panel =====
const MOCK_ALERTS = [
  {
    id: "alert-1",
    severity: "critical" as const,
    title: "Pipeline Execution Failed",
    message: "Stage 'NudataEL_extract___ROOT' failed due to timeout after 30 minutes.",
    timestamp: "2026-02-26 09:15:32",
    acknowledged: false,
  },
  {
    id: "alert-2",
    severity: "warning" as const,
    title: "High Memory Usage",
    message: "Cluster memory usage exceeded 85% during data transformation step.",
    timestamp: "2026-02-25 14:22:10",
    acknowledged: false,
  },
  {
    id: "alert-3",
    severity: "info" as const,
    title: "Pipeline Auto-Recovered",
    message: "Stage 'Bronze_transform' auto-retried and succeeded on attempt 2.",
    timestamp: "2026-02-25 08:45:00",
    acknowledged: true,
  },
  {
    id: "alert-4",
    severity: "critical" as const,
    title: "Schema Mismatch Detected",
    message: "Source table schema has changed. Column 'user_segment' was removed.",
    timestamp: "2026-02-24 16:30:22",
    acknowledged: true,
  },
  {
    id: "alert-5",
    severity: "warning" as const,
    title: "Slow Query Performance",
    message: "Query in stage 'data_aggregation' took 12 min (expected < 5 min).",
    timestamp: "2026-02-24 11:05:18",
    acknowledged: true,
  },
];

function AlertSeverityIcon({ severity }: { severity: "critical" | "warning" | "info" }) {
  switch (severity) {
    case "critical":
      return <XCircle size={14} className="text-[#dc2626] shrink-0" />;
    case "warning":
      return <AlertTriangle size={14} className="text-[#d97706] shrink-0" />;
    case "info":
      return <CheckCircle2 size={14} className="text-[#0968F6] shrink-0" />;
  }
}

function AlertSeverityBadge({ severity }: { severity: "critical" | "warning" | "info" }) {
  const config = {
    critical: { bg: "bg-[#fef2f2]", text: "text-[#dc2626]", border: "border-[#fecaca]", label: "Critical" },
    warning: { bg: "bg-[#fffbeb]", text: "text-[#d97706]", border: "border-[#fde68a]", label: "Warning" },
    info: { bg: "bg-[#eff6ff]", text: "text-[#0968F6]", border: "border-[#bfdbfe]", label: "Info" },
  };
  const c = config[severity];
  return (
    <span className={`${c.bg} ${c.text} ${c.border} border px-[6px] py-[1px] rounded-full text-[10px] font-['Geist:Medium',sans-serif] font-medium tracking-[0.5px] uppercase`}>
      {c.label}
    </span>
  );
}

export function AlertsPanel({ onClose }: { onClose?: () => void }) {
  const [filter, setFilter] = useState<"all" | "critical" | "warning" | "info">("all");
  const filtered = filter === "all" ? MOCK_ALERTS : MOCK_ALERTS.filter(a => a.severity === filter);
  const criticalCount = MOCK_ALERTS.filter(a => a.severity === "critical" && !a.acknowledged).length;

  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative h-full">
        <PanelHeader title="Alerts" subtitle={`${criticalCount} unacknowledged critical alert${criticalCount !== 1 ? "s" : ""}`} onClose={onClose} />
        <Divider />

        {/* Filter Tabs */}
        <div className="flex gap-[4px] bg-[#f5f5f5] p-[3px] rounded-[10px] shrink-0 w-full">
          {(["all", "critical", "warning", "info"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 px-[12px] py-[7px] rounded-[8px] text-[13px] font-['Geist:Medium',sans-serif] font-medium transition-colors cursor-pointer capitalize ${
                filter === f
                  ? "bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  : "text-[#737373]"
              }`}
            >
              {f === "all" ? `All (${MOCK_ALERTS.length})` : f}
            </button>
          ))}
        </div>

        {/* Alert List */}
        <div className="flex flex-col gap-[12px] w-full flex-1 overflow-auto">
          {filtered.map(alert => (
            <div
              key={alert.id}
              className={`border border-[#e5e5e5] rounded-[12px] p-[16px] flex flex-col gap-[8px] ${
                !alert.acknowledged ? "bg-white" : "bg-[#fafafa] opacity-70"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <AlertSeverityIcon severity={alert.severity} />
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] text-[#0a0a0a] leading-[1.5]">{alert.title}</p>
                </div>
                <AlertSeverityBadge severity={alert.severity} />
              </div>
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#737373] leading-[1.5]">{alert.message}</p>
              <div className="flex items-center justify-between">
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{alert.timestamp}</p>
                {!alert.acknowledged && (
                  <button className="text-[11px] font-['Geist:Medium',sans-serif] font-medium text-[#0968F6] cursor-pointer hover:underline">
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== Instance Panel =====
const MOCK_INSTANCES = [
  { id: "run-2026-0226-001", status: "running" as const, startTime: "2026-02-26 08:00:00", duration: "1h 15m", trigger: "Scheduled" },
  { id: "run-2026-0225-003", status: "success" as const, startTime: "2026-02-25 20:00:00", duration: "45m 12s", trigger: "Scheduled" },
  { id: "run-2026-0225-002", status: "success" as const, startTime: "2026-02-25 12:00:00", duration: "42m 08s", trigger: "Manual" },
  { id: "run-2026-0225-001", status: "failed" as const, startTime: "2026-02-25 08:00:00", duration: "12m 33s", trigger: "Scheduled" },
  { id: "run-2026-0224-002", status: "success" as const, startTime: "2026-02-24 20:00:00", duration: "44m 55s", trigger: "Scheduled" },
  { id: "run-2026-0224-001", status: "success" as const, startTime: "2026-02-24 08:00:00", duration: "43m 20s", trigger: "Scheduled" },
];

function InstanceStatusBadge({ status }: { status: "running" | "success" | "failed" }) {
  const config = {
    running: { bg: "bg-[#dbeafe]", text: "text-[#0968F6]", label: "Running" },
    success: { bg: "bg-[#d1fae5]", text: "text-[#065f46]", label: "Success" },
    failed: { bg: "bg-[#fef2f2]", text: "text-[#dc2626]", label: "Failed" },
  };
  const c = config[status];
  return (
    <span className={`${c.bg} ${c.text} px-[10px] py-[4px] rounded-full text-[12px] font-['Geist:Medium',sans-serif] font-medium`}>
      {c.label}
    </span>
  );
}

function InstanceStatusIcon({ status }: { status: "running" | "success" | "failed" }) {
  switch (status) {
    case "running": return <Play size={12} className="text-[#0968F6]" />;
    case "success": return <CheckCircle2 size={12} className="text-[#065f46]" />;
    case "failed": return <XCircle size={12} className="text-[#dc2626]" />;
  }
}

export function InstancePanel({ onClose }: { onClose?: () => void }) {
  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative h-full">
        <PanelHeader title="Pipeline Instances" subtitle="Recent execution history" onClose={onClose} />
        <Divider />

        {/* Summary Stats */}
        <div className="flex gap-[12px] w-full shrink-0">
          {[
            { label: "Total Runs", value: "156", color: "#0a0a0a" },
            { label: "Success Rate", value: "94.2%", color: "#065f46" },
            { label: "Avg Duration", value: "43m", color: "#0968F6" },
          ].map(stat => (
            <div key={stat.label} className="flex-1 border border-[#e5e5e5] rounded-[12px] p-[12px] flex flex-col gap-[4px]">
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">{stat.label}</p>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[1.5]" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Instance Table */}
        <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden w-full flex-1">
          {/* Table Header */}
          <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-[16px] py-[10px] grid grid-cols-[1fr_80px_90px_80px] gap-[8px]">
            {["Run ID", "Status", "Duration", "Trigger"].map(h => (
              <p key={h} className="font-['Geist:Medium',sans-serif] font-medium text-[11px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">{h}</p>
            ))}
          </div>
          {/* Table Rows */}
          {MOCK_INSTANCES.map(inst => (
            <div key={inst.id} className="px-[16px] py-[12px] border-b border-[#e5e5e5] last:border-b-0 grid grid-cols-[1fr_80px_90px_80px] gap-[8px] items-center hover:bg-[#fafafa] transition-colors cursor-pointer">
              <div className="flex items-center gap-[6px]">
                <InstanceStatusIcon status={inst.status} />
                <div>
                  <p className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a] leading-[1.5]">{inst.id}</p>
                  <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{inst.startTime}</p>
                </div>
              </div>
              <InstanceStatusBadge status={inst.status} />
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#0a0a0a] leading-[1.5]">{inst.duration}</p>
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#737373] leading-[1.5]">{inst.trigger}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== History Panel =====
const MOCK_HISTORY = [
  { id: "h1", action: "Pipeline Published", user: "Emily Chen", timestamp: "2026-02-26 09:30:00", detail: "Version 2 published to production", type: "publish" as const },
  { id: "h2", action: "Node Modified", user: "Emily Chen", timestamp: "2026-02-25 16:45:00", detail: "Updated 'NudataEL_extract___ROOT' configuration", type: "edit" as const },
  { id: "h3", action: "Node Added", user: "James Liu", timestamp: "2026-02-25 14:20:00", detail: "Added 'data_quality_check' node to pipeline", type: "add" as const },
  { id: "h4", action: "Variable Updated", user: "Emily Chen", timestamp: "2026-02-24 11:15:00", detail: "Changed 'batch_size' from 1000 to 5000", type: "edit" as const },
  { id: "h5", action: "Pipeline Created", user: "Emily Chen", timestamp: "2021-02-28 20:07:32", detail: "Initial pipeline creation", type: "create" as const },
  { id: "h6", action: "Permission Changed", user: "Admin", timestamp: "2025-12-15 09:00:00", detail: "Added 'Data Engineering Team' as viewers", type: "permission" as const },
  { id: "h7", action: "Schedule Updated", user: "Emily Chen", timestamp: "2025-11-20 13:30:00", detail: "Changed schedule to run every 8 hours", type: "edit" as const },
];

function HistoryIcon({ type }: { type: string }) {
  switch (type) {
    case "publish": return <ExternalLink size={14} className="text-[#065f46]" />;
    case "edit": return <Pencil size={14} className="text-[#d97706]" />;
    case "add": return <Plus size={14} className="text-[#0968F6]" />;
    case "create": return <CheckCircle2 size={14} className="text-[#0968F6]" />;
    case "permission": return <ExternalLink size={14} className="text-[#737373]" />;
    default: return <Clock size={14} className="text-[#737373]" />;
  }
}

export function HistoryPanel({ onClose }: { onClose?: () => void }) {
  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative h-full">
        <PanelHeader title="History" subtitle="Pipeline change log and audit trail" onClose={onClose} />
        <Divider />

        {/* Search */}
        <div className="relative w-full shrink-0">
          <Search size={14} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#737373]" />
          <input
            placeholder="Search history..."
            className="w-full bg-white border border-[#e5e5e5] rounded-[8px] py-[7.5px] pl-[32px] pr-[12px] text-[14px] font-['Geist:Medium',sans-serif] font-medium tracking-[0.07px] text-[#0a0a0a] placeholder:text-[#6b7280] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#0968F6]"
          />
        </div>

        {/* Timeline */}
        <div className="flex flex-col w-full flex-1 overflow-auto">
          {MOCK_HISTORY.map((item, index) => (
            <div key={item.id} className="flex gap-[12px] relative">
              {/* Timeline line */}
              <div className="flex flex-col items-center shrink-0 w-[28px]">
                <div className="w-[28px] h-[28px] rounded-full bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center shrink-0">
                  <HistoryIcon type={item.type} />
                </div>
                {index < MOCK_HISTORY.length - 1 && (
                  <div className="w-px flex-1 bg-[#e5e5e5] min-h-[16px]" />
                )}
              </div>
              {/* Content */}
              <div className="flex flex-col gap-[2px] pb-[20px] min-w-0 flex-1">
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] text-[#0a0a0a] leading-[1.5]">{item.action}</p>
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#737373] leading-[1.5]">{item.detail}</p>
                <div className="flex items-center gap-[8px] mt-[2px]">
                  <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{item.user}</p>
                  <span className="text-[#e5e5e5]">|</span>
                  <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{item.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== Variables Panel =====
const MOCK_VARIABLES = [
  { key: "batch_size", value: "5000", type: "integer", scope: "Pipeline", isSecret: false },
  { key: "source_database", value: "hive_production", type: "string", scope: "Pipeline", isSecret: false },
  { key: "target_schema", value: "bronze_layer", type: "string", scope: "Pipeline", isSecret: false },
  { key: "api_key", value: "••••••••••••", type: "secret", scope: "Pipeline", isSecret: true },
  { key: "max_retries", value: "3", type: "integer", scope: "Stage", isSecret: false },
  { key: "timeout_seconds", value: "1800", type: "integer", scope: "Stage", isSecret: false },
  { key: "enable_dedup", value: "true", type: "boolean", scope: "Pipeline", isSecret: false },
  { key: "partition_column", value: "event_date", type: "string", scope: "Stage", isSecret: false },
];

export function VariablesPanel({ onClose }: { onClose?: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filtered = MOCK_VARIABLES.filter(v =>
    v.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative h-full">
        <PanelHeader title="Variables" subtitle={`${MOCK_VARIABLES.length} variables configured`} onClose={onClose} />
        <Divider />

        {/* Search + Add */}
        <div className="flex gap-[8px] w-full shrink-0">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#737373]" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search variables..."
              className="w-full bg-white border border-[#e5e5e5] rounded-[8px] py-[7.5px] pl-[32px] pr-[12px] text-[14px] font-['Geist:Medium',sans-serif] font-medium tracking-[0.07px] text-[#0a0a0a] placeholder:text-[#6b7280] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#0968F6]"
            />
          </div>
          <button className="bg-[#0968F6] text-[#fafafa] px-[16px] py-[7.5px] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-[6px] shrink-0">
            <Plus size={14} />
            New
          </button>
        </div>

        {/* Variable List */}
        <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden w-full flex-1">
          {/* Table Header */}
          <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-[16px] py-[10px] grid grid-cols-[1fr_1fr_70px_70px_40px] gap-[8px]">
            {["Key", "Value", "Type", "Scope", ""].map((h, i) => (
              <p key={i} className="font-['Geist:Medium',sans-serif] font-medium text-[11px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">{h}</p>
            ))}
          </div>
          {/* Rows */}
          {filtered.map(variable => (
            <div key={variable.key} className="px-[16px] py-[12px] border-b border-[#e5e5e5] last:border-b-0 grid grid-cols-[1fr_1fr_70px_70px_40px] gap-[8px] items-center hover:bg-[#fafafa] transition-colors group">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a] leading-[1.5] truncate">{variable.key}</p>
              <div className="flex items-center gap-[4px] min-w-0">
                <p className={`font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] truncate ${variable.isSecret ? "text-[#737373]" : "text-[#0a0a0a]"}`}>
                  {variable.value}
                </p>
                {!variable.isSecret && (
                  <button
                    onClick={() => handleCopy(variable.key, variable.value)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shrink-0"
                  >
                    {copiedKey === variable.key ? <Check size={12} className="text-[#0968F6]" /> : <Copy size={12} className="text-[#737373]" />}
                  </button>
                )}
              </div>
              <span className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5] bg-[#f5f5f5] px-[6px] py-[2px] rounded-[4px] text-center">{variable.type}</span>
              <span className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{variable.scope}</span>
              <div className="flex gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="cursor-pointer hover:text-[#0968F6] text-[#737373]"><Pencil size={12} /></button>
                <button className="cursor-pointer hover:text-[#dc2626] text-[#737373]"><Trash2 size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== Auto-Retry Panel =====
const MOCK_RETRY_RULES = [
  { id: "r1", name: "Default Retry Policy", maxRetries: 3, delaySeconds: 60, backoffMultiplier: 2, enabled: true, appliesTo: "All Stages" },
  { id: "r2", name: "Critical Stage Retry", maxRetries: 5, delaySeconds: 30, backoffMultiplier: 1.5, enabled: true, appliesTo: "NudataEL_extract___ROOT" },
  { id: "r3", name: "Light Retry", maxRetries: 1, delaySeconds: 120, backoffMultiplier: 1, enabled: false, appliesTo: "data_quality_check" },
];

const MOCK_RETRY_HISTORY = [
  { stage: "NudataEL_extract___ROOT", attempt: 2, result: "success" as const, timestamp: "2026-02-25 08:47:12", duration: "2m 15s" },
  { stage: "Bronze_transform", attempt: 3, result: "success" as const, timestamp: "2026-02-24 20:15:33", duration: "1m 42s" },
  { stage: "NudataEL_extract___ROOT", attempt: 1, result: "failed" as const, timestamp: "2026-02-24 08:12:05", duration: "30m 00s" },
  { stage: "data_aggregation", attempt: 2, result: "failed" as const, timestamp: "2026-02-23 14:33:20", duration: "12m 33s" },
];

export function AutoRetryPanel({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<"rules" | "history">("rules");

  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative h-full">
        <PanelHeader title="Auto-Retry" subtitle="Configure retry policies for pipeline stages" onClose={onClose} />
        <Divider />

        {/* Tabs */}
        <div className="flex gap-[4px] bg-[#f5f5f5] p-[3px] rounded-[10px] shrink-0 w-full">
          {(["rules", "history"] as const).map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex-1 px-[12px] py-[7px] rounded-[8px] text-[13px] font-['Geist:Medium',sans-serif] font-medium transition-colors cursor-pointer capitalize ${
                activeTab === t
                  ? "bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  : "text-[#737373]"
              }`}
            >
              {t === "rules" ? "Retry Rules" : "Retry History"}
            </button>
          ))}
        </div>

        {activeTab === "rules" ? (
          <div className="flex flex-col gap-[12px] w-full flex-1 overflow-auto">
            {MOCK_RETRY_RULES.map(rule => (
              <div key={rule.id} className="border border-[#e5e5e5] rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <RotateCcw size={14} className="text-[#0968F6]" />
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] text-[#0a0a0a] leading-[1.5]">{rule.name}</p>
                  </div>
                  <div className={`w-[36px] h-[20px] rounded-full p-[2px] cursor-pointer transition-colors ${rule.enabled ? "bg-[#0968F6]" : "bg-[#e5e5e5]"}`}>
                    <div className={`w-[16px] h-[16px] rounded-full bg-white shadow-sm transition-transform ${rule.enabled ? "translate-x-[16px]" : "translate-x-0"}`} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-[8px]">
                  {[
                    { label: "Max Retries", value: rule.maxRetries.toString() },
                    { label: "Delay", value: `${rule.delaySeconds}s` },
                    { label: "Backoff", value: `${rule.backoffMultiplier}x` },
                  ].map(item => (
                    <div key={item.label} className="bg-[#fafafa] rounded-[8px] px-[10px] py-[8px]">
                      <p className="font-['Geist:Regular',sans-serif] font-normal text-[10px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">{item.label}</p>
                      <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] leading-[1.5]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">
                  Applies to: <span className="text-[#0a0a0a]">{rule.appliesTo}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden w-full flex-1">
            <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-[16px] py-[10px] grid grid-cols-[1fr_70px_70px_100px_70px] gap-[8px]">
              {["Stage", "Attempt", "Result", "Timestamp", "Duration"].map(h => (
                <p key={h} className="font-['Geist:Medium',sans-serif] font-medium text-[11px] text-[#737373] tracking-[0.48px] uppercase leading-[1.5]">{h}</p>
              ))}
            </div>
            {MOCK_RETRY_HISTORY.map((item, i) => (
              <div key={i} className="px-[16px] py-[12px] border-b border-[#e5e5e5] last:border-b-0 grid grid-cols-[1fr_70px_70px_100px_70px] gap-[8px] items-center hover:bg-[#fafafa] transition-colors">
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a] leading-[1.5] truncate">{item.stage}</p>
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#0a0a0a] leading-[1.5]">#{item.attempt}</p>
                <span className={`px-[6px] py-[2px] rounded-full text-[10px] font-['Geist:Medium',sans-serif] font-medium text-center ${
                  item.result === "success" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fef2f2] text-[#dc2626]"
                }`}>{item.result}</span>
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{item.timestamp}</p>
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] text-[#0a0a0a] leading-[1.5]">{item.duration}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ===== Related Pipeline Panel =====
const MOCK_RELATED_PIPELINES = [
  { id: "rp1", name: "bike_inventory_sync", status: "active" as const, owner: "James Liu", lastRun: "2026-02-26 07:00", relation: "Upstream" },
  { id: "rp2", name: "bike_order_processing", status: "active" as const, owner: "Sarah Kim", lastRun: "2026-02-26 06:30", relation: "Upstream" },
  { id: "rp3", name: "user_segment_enrichment", status: "active" as const, owner: "Emily Chen", lastRun: "2026-02-25 22:00", relation: "Upstream" },
  { id: "rp4", name: "bike_analytics_dashboard", status: "active" as const, owner: "Mike Wang", lastRun: "2026-02-26 08:15", relation: "Downstream" },
  { id: "rp5", name: "bike_recommendation_ml", status: "paused" as const, owner: "Emily Chen", lastRun: "2026-02-24 12:00", relation: "Downstream" },
  { id: "rp6", name: "bike_fraud_detection", status: "active" as const, owner: "Alex Torres", lastRun: "2026-02-26 08:00", relation: "Downstream" },
  { id: "rp7", name: "warehouse_data_quality", status: "active" as const, owner: "Emily Chen", lastRun: "2026-02-26 05:00", relation: "Shared Resource" },
  { id: "rp8", name: "notification_service_etl", status: "active" as const, owner: "James Liu", lastRun: "2026-02-26 07:45", relation: "Downstream" },
  { id: "rp9", name: "pricing_model_training", status: "paused" as const, owner: "Sarah Kim", lastRun: "2026-02-23 18:00", relation: "Downstream" },
  { id: "rp10", name: "inventory_forecast_pipeline", status: "active" as const, owner: "Mike Wang", lastRun: "2026-02-26 06:00", relation: "Upstream" },
  { id: "rp11", name: "search_index_builder", status: "active" as const, owner: "Alex Torres", lastRun: "2026-02-26 04:00", relation: "Downstream" },
  { id: "rp12", name: "customer_360_aggregator", status: "active" as const, owner: "Emily Chen", lastRun: "2026-02-26 03:30", relation: "Upstream" },
  { id: "rp13", name: "ab_test_data_pipeline", status: "active" as const, owner: "James Liu", lastRun: "2026-02-25 20:00", relation: "Shared Resource" },
  { id: "rp14", name: "seller_metrics_pipeline", status: "paused" as const, owner: "Sarah Kim", lastRun: "2026-02-22 10:00", relation: "Downstream" },
  { id: "rp15", name: "listing_quality_scorer", status: "active" as const, owner: "Mike Wang", lastRun: "2026-02-26 07:30", relation: "Downstream" },
  { id: "rp16", name: "category_taxonomy_sync", status: "active" as const, owner: "Alex Torres", lastRun: "2026-02-26 02:00", relation: "Upstream" },
  { id: "rp17", name: "image_processing_pipeline", status: "active" as const, owner: "Emily Chen", lastRun: "2026-02-26 01:15", relation: "Shared Resource" },
  { id: "rp18", name: "real_time_bidding_etl", status: "active" as const, owner: "James Liu", lastRun: "2026-02-26 08:10", relation: "Downstream" },
  { id: "rp19", name: "returns_analytics_pipeline", status: "active" as const, owner: "Sarah Kim", lastRun: "2026-02-25 23:00", relation: "Downstream" },
  { id: "rp20", name: "shipping_cost_optimizer", status: "paused" as const, owner: "Mike Wang", lastRun: "2026-02-21 14:00", relation: "Downstream" },
  { id: "rp21", name: "cross_border_trade_sync", status: "active" as const, owner: "Alex Torres", lastRun: "2026-02-26 05:45", relation: "Upstream" },
];

export function RelatedPipelinePanel({ onClose }: { onClose?: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRelation, setFilterRelation] = useState<"all" | "Upstream" | "Downstream" | "Shared Resource">("all");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(["Upstream", "Downstream", "Shared Resource"]));

  const filtered = MOCK_RELATED_PIPELINES.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRelation === "all" || p.relation === filterRelation;
    return matchesSearch && matchesFilter;
  });

  const grouped = {
    Upstream: filtered.filter(p => p.relation === "Upstream"),
    Downstream: filtered.filter(p => p.relation === "Downstream"),
    "Shared Resource": filtered.filter(p => p.relation === "Shared Resource"),
  };

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  };

  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col h-full overflow-hidden">
      <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0">
        <PanelHeader title="Related Pipelines" subtitle={`${MOCK_RELATED_PIPELINES.length} connected pipelines`} onClose={onClose} />
        <Divider />

        {/* Search */}
        <div className="relative w-full">
          <Search size={14} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#737373]" />
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search pipelines..."
            className="w-full bg-white border border-[#e5e5e5] rounded-[8px] py-[7.5px] pl-[32px] pr-[12px] text-[14px] font-['Geist:Medium',sans-serif] font-medium tracking-[0.07px] text-[#0a0a0a] placeholder:text-[#6b7280] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#0968F6]"
          />
        </div>

        {/* Filter */}
        <div className="flex gap-[4px] bg-[#f5f5f5] p-[3px] rounded-[10px] w-full">
          {(["all", "Upstream", "Downstream", "Shared Resource"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilterRelation(f)}
              className={`flex-1 px-[8px] py-[7px] rounded-[8px] text-[12px] font-['Geist:Medium',sans-serif] font-medium transition-colors cursor-pointer ${
                filterRelation === f
                  ? "bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  : "text-[#737373]"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped List - scrollable area */}
      <div className="flex-1 overflow-y-auto min-h-0 px-[24px] pb-[24px]">
        <div className="flex flex-col gap-[8px]">
          {(Object.entries(grouped) as [string, typeof MOCK_RELATED_PIPELINES][]).map(([group, items]) => {
            if (items.length === 0) return null;
            const isExpanded = expandedGroups.has(group);
            return (
              <div key={group} className="border border-[#e5e5e5] rounded-[12px] overflow-hidden shrink-0">
                <button
                  onClick={() => toggleGroup(group)}
                  className="w-full bg-[#fafafa] px-[16px] py-[10px] flex items-center justify-between cursor-pointer hover:bg-[#f0f0f0] transition-colors"
                >
                  <div className="flex items-center gap-[8px]">
                    {isExpanded ? <ChevronDown size={14} className="text-[#737373]" /> : <ChevronRight size={14} className="text-[#737373]" />}
                    <p className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a] tracking-[0.48px] uppercase leading-[1.5]">{group}</p>
                  </div>
                  <span className="bg-[#dbeafe] text-[#0968F6] text-[11px] font-['Geist:Medium',sans-serif] font-medium px-[8px] py-[2px] rounded-full">{items.length}</span>
                </button>
                {isExpanded && items.map(pipeline => (
                  <div key={pipeline.id} className="px-[16px] py-[12px] border-t border-[#e5e5e5] flex items-center justify-between hover:bg-[#fafafa] transition-colors cursor-pointer group">
                    <div className="flex flex-col gap-[2px] min-w-0">
                      <div className="flex items-center gap-[6px]">
                        <p className="font-['Geist:Medium',sans-serif] font-medium text-[13px] text-[#0a0a0a] leading-[1.5] truncate">{pipeline.name}</p>
                        {pipeline.status === "paused" && (
                          <Pause size={10} className="text-[#d97706] shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">{pipeline.owner}</p>
                        <span className="text-[#e5e5e5]">|</span>
                        <p className="font-['Geist:Regular',sans-serif] font-normal text-[11px] text-[#737373] leading-[1.5]">Last: {pipeline.lastRun}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] shrink-0">
                      <span className={`px-[8px] py-[2px] rounded-full text-[10px] font-['Geist:Medium',sans-serif] font-medium ${
                        pipeline.status === "active" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fffbeb] text-[#d97706]"
                      }`}>{pipeline.status}</span>
                      <ExternalLink size={12} className="text-[#737373] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}