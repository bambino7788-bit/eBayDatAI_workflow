import { useId, useState } from "react";
import { WorkspaceSettings } from "./WorkspaceSettings";
import { ConfigurationTabContent } from "./ConfigurationTabContent";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  XCircle,
  Activity,
  Zap,
  AlertTriangle,
  ArrowUpRight,
  MoreHorizontal,
  Calendar,
} from "lucide-react";

type TopTab = "analysis" | "configuration" | "settings";

/* ─── Mock data for Analysis ─── */
const executionTrend = [
  { date: "May 20", success: 42, failed: 3 },
  { date: "May 21", success: 38, failed: 5 },
  { date: "May 22", success: 45, failed: 2 },
  { date: "May 23", success: 40, failed: 4 },
  { date: "May 24", success: 50, failed: 1 },
  { date: "May 25", success: 47, failed: 3 },
  { date: "May 26", success: 44, failed: 2 },
  { date: "May 27", success: 52, failed: 1 },
  { date: "May 28", success: 48, failed: 3 },
  { date: "May 29", success: 55, failed: 2 },
  { date: "May 30", success: 51, failed: 1 },
  { date: "May 31", success: 58, failed: 2 },
  { date: "Jun 01", success: 53, failed: 1 },
];

const durationTrend = [
  { date: "May 20", avgMin: 12.3 },
  { date: "May 21", avgMin: 14.1 },
  { date: "May 22", avgMin: 11.8 },
  { date: "May 23", avgMin: 13.5 },
  { date: "May 24", avgMin: 10.2 },
  { date: "May 25", avgMin: 11.0 },
  { date: "May 26", avgMin: 12.7 },
  { date: "May 27", avgMin: 9.8 },
  { date: "May 28", avgMin: 11.5 },
  { date: "May 29", avgMin: 10.1 },
  { date: "May 30", avgMin: 9.5 },
  { date: "May 31", avgMin: 10.8 },
  { date: "Jun 01", avgMin: 9.2 },
];

const nodePerformance = [
  { name: "Spark SQL", avgDuration: 4.2, runs: 156 },
  { name: "Data Quality", avgDuration: 2.8, runs: 89 },
  { name: "Data Movement", avgDuration: 6.1, runs: 124 },
  { name: "Dep. Check", avgDuration: 1.2, runs: 201 },
  { name: "Pipeline TPL", avgDuration: 3.5, runs: 67 },
];

const statusDistribution = [
  { name: "Success", value: 623, color: "#10b981" },
  { name: "Failed", value: 28, color: "#ef4444" },
  { name: "Running", value: 5, color: "#0968F6" },
  { name: "Pending", value: 12, color: "#f59e0b" },
];

const recentRuns = [
  {
    id: "RUN-2847",
    pipeline: "dbdemos_pipeline_bike_main",
    status: "success",
    duration: "8m 32s",
    startTime: "2026-06-01 14:30:00",
    nodes: 12,
    triggeredBy: "Schedule",
  },
  {
    id: "RUN-2846",
    pipeline: "dbdemos_pipeline_bike_transform",
    status: "success",
    duration: "5m 18s",
    startTime: "2026-06-01 14:00:00",
    nodes: 8,
    triggeredBy: "Manual",
  },
  {
    id: "RUN-2845",
    pipeline: "dbdemos_pipeline_bike_extract",
    status: "failed",
    duration: "3m 47s",
    startTime: "2026-06-01 13:30:00",
    nodes: 6,
    triggeredBy: "Schedule",
  },
  {
    id: "RUN-2844",
    pipeline: "dbdemos_pipeline_bike_load",
    status: "success",
    duration: "12m 05s",
    startTime: "2026-06-01 13:00:00",
    nodes: 15,
    triggeredBy: "API",
  },
  {
    id: "RUN-2843",
    pipeline: "dbdemos_pipeline_bike_main",
    status: "success",
    duration: "9m 12s",
    startTime: "2026-06-01 12:30:00",
    nodes: 12,
    triggeredBy: "Schedule",
  },
];

const alertSummary = [
  { type: "SLA Breach", count: 3, severity: "high" },
  { type: "Node Failure", count: 7, severity: "high" },
  { type: "Long Running", count: 5, severity: "medium" },
  { type: "Data Quality", count: 2, severity: "low" },
];

/* ─── Stat Card ─── */
function StatCard({
  label,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  iconBg,
}: {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-[20px] flex flex-col gap-[12px]"
      style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
      <div className="flex items-center justify-between">
        <span
          className="font-['Geist:Medium',sans-serif] font-medium text-[12px] tracking-[0.48px] text-[#737373] uppercase leading-[1.5]"
        >
          {label}
        </span>
        <div
          className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center"
          style={{ background: iconBg }}
        >
          <Icon size={16} color={iconColor} />
        </div>
      </div>
      <div className="flex items-end gap-[8px]">
        <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[28px] leading-[1.2] text-[#0a0a0a] tracking-[-0.48px]">
          {value}
        </span>
        <span
          className={`font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.06px] flex items-center gap-[2px] pb-[4px] ${
            changeType === "up"
              ? "text-[#10b981]"
              : changeType === "down"
              ? "text-[#ef4444]"
              : "text-[#737373]"
          }`}
        >
          {changeType === "up" ? (
            <TrendingUp size={12} />
          ) : changeType === "down" ? (
            <TrendingDown size={12} />
          ) : null}
          {change}
        </span>
      </div>
    </div>
  );
}

/* ─── Chart Card Wrapper ─── */
function ChartCard({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-[#e5e5e5] rounded-[12px] p-[20px] flex flex-col gap-[16px] ${className}`}
      style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[2px]">
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
            {title}
          </span>
          {subtitle && (
            <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] tracking-[0.06px] text-[#737373]">
              {subtitle}
            </span>
          )}
        </div>
        <button className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
          <MoreHorizontal size={14} color="#737373" />
        </button>
      </div>
      {children}
    </div>
  );
}

/* ─── Status Badge ─── */
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string }> = {
    success: { bg: "#d1fae5", text: "#065f46" },
    failed: { bg: "#fef2f2", text: "#dc2626" },
    running: { bg: "#eff6ff", text: "#0968F6" },
    pending: { bg: "#fef3c7", text: "#d97706" },
  };
  const s = styles[status] || styles.success;
  return (
    <span
      className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.06px] px-[10px] py-[2px] rounded-full capitalize"
      style={{ background: s.bg, color: s.text }}
    >
      {status}
    </span>
  );
}

/* ─── Custom Chart Tooltip ─── */
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="bg-[#0a0a0a] text-white rounded-[6px] px-[12px] py-[8px] text-[12px] font-['Geist:Medium',sans-serif]"
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
    >
      <p className="font-medium mb-[4px]">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-[11px] opacity-80">
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

/* ─── Analysis Tab Content ─── */
function AnalysisContent() {
  const failedBarPatternId = `execution-failed-${useId().replace(/:/g, "")}`;

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-[16px]">
        <StatCard
          label="Total Runs (30d)"
          value="668"
          change="+12.3% vs prev"
          changeType="up"
          icon={Activity}
          iconColor="#0968F6"
          iconBg="#eff6ff"
        />
        <StatCard
          label="Success Rate"
          value="95.8%"
          change="+2.1% vs prev"
          changeType="up"
          icon={CheckCircle2}
          iconColor="#10b981"
          iconBg="#d1fae5"
        />
        <StatCard
          label="Avg Duration"
          value="10.8m"
          change="-1.5m vs prev"
          changeType="up"
          icon={Clock}
          iconColor="#f59e0b"
          iconBg="#fef3c7"
        />
        <StatCard
          label="Failed Runs (30d)"
          value="28"
          change="-5 vs prev"
          changeType="up"
          icon={XCircle}
          iconColor="#ef4444"
          iconBg="#fef2f2"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-3 gap-[16px]">
        <ChartCard
          title="Execution Trend"
          subtitle="Daily success vs failed runs"
          className="col-span-2"
        >
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={executionTrend} barGap={2}>
                <defs>
                  <pattern id={failedBarPatternId} width="6" height="6" patternUnits="userSpaceOnUse">
                    <rect width="6" height="6" fill="#dbeafe" />
                    <path d="M-1 1L1 -1M0 6L6 0M5 7L7 5" stroke="#0968F6" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#737373", fontFamily: "'Geist:Regular',sans-serif" }}
                  axisLine={{ stroke: "#e5e5e5" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#737373", fontFamily: "'Geist:Regular',sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="success" fill="#0968F6" radius={[3, 3, 0, 0]} name="Success" />
                <Bar dataKey="failed" fill={`url(#${failedBarPatternId})`} stroke="#0968F6" radius={[3, 3, 0, 0]} name="Failed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-4 font-['Geist:Regular',sans-serif] text-[12px] leading-[1.5] tracking-[0.06px] text-[#737373]" aria-label="Execution trend legend">
            <span className="flex items-center gap-2"><span aria-hidden="true" className="size-3 rounded-[2px] bg-[#0968F6]" />Success (solid)</span>
            <span className="flex items-center gap-2"><span aria-hidden="true" className="size-3 rounded-[2px] border border-[#0968F6] bg-[repeating-linear-gradient(135deg,#dbeafe_0px,#dbeafe_3px,#0968F6_3px,#0968F6_4px)]" />Failed (striped)</span>
          </div>
        </ChartCard>

        <ChartCard title="Run Status Distribution" subtitle="Last 30 days">
          <div className="h-[240px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  strokeWidth={2}
                  stroke="#fff"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-[12px] justify-center">
            {statusDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-[6px]">
                <div
                  className="w-[8px] h-[8px] rounded-full"
                  style={{ background: item.color }}
                />
                <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#737373] tracking-[0.06px]">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-3 gap-[16px]">
        <ChartCard
          title="Average Duration Trend"
          subtitle="Avg pipeline execution time (minutes)"
          className="col-span-2"
        >
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={durationTrend}>
                <defs>
                  <linearGradient id="durationGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0968F6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#0968F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#737373", fontFamily: "'Geist:Regular',sans-serif" }}
                  axisLine={{ stroke: "#e5e5e5" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#737373", fontFamily: "'Geist:Regular',sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                  unit="m"
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="avgMin"
                  stroke="#0968F6"
                  strokeWidth={2}
                  fill="url(#durationGrad)"
                  name="Avg Duration"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Node Type Performance" subtitle="Avg duration by node type">
          <div className="flex flex-col gap-[12px]">
            {nodePerformance.map((node) => (
              <div key={node.name} className="flex items-center gap-[12px]">
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] w-[100px] shrink-0 truncate">
                  {node.name}
                </span>
                <div className="flex-1 h-[20px] bg-[#f5f5f5] rounded-[4px] overflow-hidden">
                  <div
                    className="h-full rounded-[4px] transition-all"
                    style={{
                      width: `${(node.avgDuration / 7) * 100}%`,
                      background:
                        node.avgDuration > 5
                          ? "#f59e0b"
                          : node.avgDuration > 3
                          ? "#0968F6"
                          : "#10b981",
                    }}
                  />
                </div>
                <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#737373] tracking-[0.06px] w-[40px] text-right shrink-0">
                  {node.avgDuration}m
                </span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Recent Runs + Alert Summary */}
      <div className="grid grid-cols-3 gap-[16px]">
        <ChartCard title="Recent Pipeline Runs" subtitle="Latest executions" className="col-span-2">
          <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_80px_80px_140px_60px_80px] gap-[8px] px-[16px] py-[10px] bg-[#fafafa] border-b border-[#e5e5e5]">
              {["Pipeline", "Status", "Duration", "Start Time", "Nodes", "Trigger"].map(
                (h) => (
                  <span
                    key={h}
                    className="font-['Geist:Medium',sans-serif] font-medium text-[12px] tracking-[0.48px] text-[#737373] uppercase leading-[1.5]"
                  >
                    {h}
                  </span>
                )
              )}
            </div>
            {/* Table Rows */}
            {recentRuns.map((run) => (
              <div
                key={run.id}
                className="grid grid-cols-[1fr_80px_80px_140px_60px_80px] gap-[8px] px-[16px] py-[12px] border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5] truncate">
                    {run.pipeline}
                  </span>
                  <span className="font-['Geist:Regular',sans-serif] text-[11px] text-[#737373] tracking-[0.06px]">
                    {run.id}
                  </span>
                </div>
                <div className="flex items-center">
                  <StatusBadge status={run.status} />
                </div>
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5] flex items-center">
                  {run.duration}
                </span>
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#737373] tracking-[0.07px] leading-[1.5] flex items-center">
                  {run.startTime}
                </span>
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5] flex items-center">
                  {run.nodes}
                </span>
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#737373] tracking-[0.07px] leading-[1.5] flex items-center">
                  {run.triggeredBy}
                </span>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Alert Summary" subtitle="Active alerts in last 7 days">
          <div className="flex flex-col gap-[8px]">
            {alertSummary.map((alert) => (
              <div
                key={alert.type}
                className="flex items-center justify-between px-[12px] py-[10px] rounded-[8px] border border-[#e5e5e5] hover:bg-[#fafafa] transition-colors"
              >
                <div className="flex items-center gap-[10px]">
                  <AlertTriangle
                    size={14}
                    color={
                      alert.severity === "high"
                        ? "#ef4444"
                        : alert.severity === "medium"
                        ? "#f59e0b"
                        : "#737373"
                    }
                  />
                  <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0a0a0a] tracking-[0.07px] leading-[1.5]">
                    {alert.type}
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span
                    className="font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] leading-[1.5]"
                    style={{
                      color:
                        alert.severity === "high"
                          ? "#ef4444"
                          : alert.severity === "medium"
                          ? "#f59e0b"
                          : "#737373",
                    }}
                  >
                    {alert.count}
                  </span>
                  <ArrowUpRight size={12} color="#737373" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[8px] pt-[4px]">
            <Zap size={14} color="#0968F6" />
            <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#737373] tracking-[0.06px]">
              Auto-retry resolved 4 alerts this week
            </span>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export function ProjectHomePage() {
  const [activeTab, setActiveTab] = useState<TopTab>("analysis");

  const tabs: { key: TopTab; label: string }[] = [
    { key: "analysis", label: "Analysis" },
    { key: "configuration", label: "Configuration" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="flex-1 bg-white overflow-auto">
      <div className="flex flex-col gap-[8px] items-start pb-[24px] pt-[8px] px-[24px] w-full">
        {/* Breadcrumb - hidden */}
        {/* <div className="flex gap-[8px] h-[36px] items-center min-h-[36px] shrink-0">
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] text-[#737373] text-[14px] tracking-[0.07px]">
            Home
          </p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="#737373"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.125"
            />
          </svg>
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] text-[#0a0a0a] text-[14px] tracking-[0.07px]">
            Emily's Project
          </p>
        </div> */}

        {/* Title + Action */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-[16px] items-start justify-center">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.2] text-[#0a0a0a] text-[24px] tracking-[-0.48px]">
                Emily's Project
              </p>
              <div className="flex gap-[24px] items-center">
                {/* Badge */}
                <div className="bg-[#f5f5f5] flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] rounded-[8px]">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[#171717] text-[12px] text-center tracking-[0.18px] leading-[1.5]">
                    Search
                  </span>
                </div>
                {/* Time */}
                <div className="flex gap-[8px] items-center">
                  <Calendar size={16} color="#737373" />
                  <p className="font-['Geist:Regular',sans-serif] font-normal text-[#0a0a0a] text-[14px] tracking-[0.07px] leading-[1.5]">
                    Updated 2026-06-01 00:00:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top-level Tabs */}
          <div className="bg-[#f5f5f5] rounded-[10px] w-full">
            <div className="flex items-center p-[3px] w-full">
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className={`flex-1 min-h-[29px] rounded-[10px] cursor-pointer transition-colors ${
                    activeTab === tab.key
                      ? "bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                      : "hover:bg-white/50"
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <div className="flex items-center justify-center min-h-[inherit] w-full px-[8px] py-[4px]">
                    <span
                      className={`font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] ${
                        activeTab === tab.key ? "text-[#0a0a0a]" : "text-[#737373]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "analysis" && (
            <div className="w-full">
              <AnalysisContent />
            </div>
          )}
          {activeTab === "configuration" && <ConfigurationTabContent />}
          {activeTab === "settings" && <WorkspaceSettings />}
        </div>
      </div>
    </div>
  );
}
