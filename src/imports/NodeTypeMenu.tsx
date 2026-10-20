import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, X } from 'lucide-react';
import { TaskSelector } from './ToolBar';

interface NodeTypeMenuProps {
  onSelectType: (type: string) => void;
  onClose: () => void;
}

interface NodeItem {
  id: string;
  label: string;
  taskSelectorType: string;
}

interface NodeCategory {
  id: string;
  label: string;
  nodes: NodeItem[];
}

const nodeCategories: NodeCategory[] = [
  {
    id: "transform",
    label: "Transform",
    nodes: [
      { id: "batch-inference", label: "Batch Inference", taskSelectorType: "Batch Inference" },
      { id: "spark-sql", label: "Spark SQL", taskSelectorType: "Spark SQL" },
      { id: "shell-script", label: "Shell Script", taskSelectorType: "Shell Script" },
      { id: "spark-jar", label: "Spark Jar", taskSelectorType: "Spark Jar" },
      { id: "pyspark-cloud-pilot", label: "Pyspark Cloud (Pilot)", taskSelectorType: "Pilot" },
      { id: "pyspark-yarn", label: "Pyspark Yarn", taskSelectorType: "Pyspark Yarn" },
      { id: "pipeline-template", label: "Pipeline Template", taskSelectorType: "pipeline" },
      { id: "data-quality", label: "Data quality", taskSelectorType: "data quality" },
      { id: "rheos-sql", label: "Rheos SQL", taskSelectorType: "Rheos SQL" },
      { id: "flink-jar", label: "Flink Jar", taskSelectorType: "icn-FlinkJar (1)" },
    ],
  },
  {
    id: "data-movement",
    label: "Data Movement",
    nodes: [
      { id: "data-movement", label: "Data Movement", taskSelectorType: "Data Movement" },
    ],
  },
  {
    id: "control-flow",
    label: "Control Flow",
    nodes: [
      { id: "dependency-check", label: "Dependency Check", taskSelectorType: "Dependency Check" },
      { id: "dependency-touch", label: "Dependency Touch", taskSelectorType: "Dependency Touch" },
      { id: "variable-init", label: "Variable Initialization", taskSelectorType: "Variable" },
    ],
  },
  {
    id: "ai-operator",
    label: "AI Operator",
    nodes: [
      { id: "ray-job", label: "Ray Job", taskSelectorType: "ray job" },
    ],
  },
  {
    id: "data-ops",
    label: "Data Ops",
    nodes: [
      { id: "data-retention", label: "Data Retention", taskSelectorType: "Data Retention" },
    ],
  },
  {
    id: "legacy-pipeline",
    label: "Legacy Pipeline Operator",
    nodes: [
      { id: "dint-operator", label: "DINT Operator", taskSelectorType: "Dint" },
      { id: "pipeline-init", label: "Pipeline Initialization", taskSelectorType: "Pipeline Initialization" },
      { id: "uow-update", label: "UOW Update", taskSelectorType: "UOW Update" },
    ],
  },
  {
    id: "logic",
    label: "Logic",
    nodes: [
      { id: "if-else", label: "IF/ELSE", taskSelectorType: "if else 1" },
    ],
  },
];

export default function NodeTypeMenu({ onSelectType, onClose }: NodeTypeMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const toggleCategory = (id: string) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = nodeCategories
    .map((cat) => ({
      ...cat,
      nodes: cat.nodes.filter((n) =>
        n.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.nodes.length > 0);

  return (
    <div
      ref={menuRef}
      className="w-[264px] h-[480px] bg-white border border-[#e5e5e5] rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] flex flex-col overflow-hidden"
    >
      {/* Search bar */}
      <div className="px-[10px] py-[10px] border-b border-[#e5e5e5] shrink-0">
        <div className="flex items-center gap-[8px] bg-[#fafafa] border border-[#e5e5e5] rounded-[8px] px-[10px] py-[7px]">
          <Search size={14} className="text-[#737373] shrink-0" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-[13px] font-['Geist:Regular',sans-serif] text-[#0a0a0a] placeholder:text-[#737373] tracking-[0.07px]"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-[#737373] hover:text-[#0a0a0a] transition-colors cursor-pointer"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Node list */}
      <div className="flex-1 overflow-y-auto py-[4px]">
        {filtered.length === 0 ? (
          <div className="px-[16px] py-[24px] text-center">
            <p className="text-[13px] font-['Geist:Regular',sans-serif] text-[#737373] tracking-[0.07px]">
              No nodes found
            </p>
          </div>
        ) : (
          filtered.map((category) => {
            const isCollapsed = collapsed[category.id];
            return (
              <div key={category.id} className="mb-[2px]">
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center gap-[6px] px-[12px] py-[7px] hover:bg-[#fafafa] transition-colors cursor-pointer"
                >
                  {isCollapsed ? (
                    <ChevronRight size={14} className="text-[#0a0a0a] shrink-0" />
                  ) : (
                    <ChevronDown size={14} className="text-[#0a0a0a] shrink-0" />
                  )}
                  <span className="text-[13px] font-['Geist:SemiBold',sans-serif] text-[#0a0a0a] tracking-[0.07px]">
                    {category.label}
                  </span>
                </button>

                {/* Nodes */}
                {!isCollapsed &&
                  category.nodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => onSelectType(node.id)}
                      className="w-full flex items-center gap-[10px] pl-[32px] pr-[12px] py-[7px] hover:bg-[#fafafa] transition-colors cursor-pointer text-left"
                    >
                      <div className="shrink-0 size-[24px]">
                        <TaskSelector property1={node.taskSelectorType as any} />
                      </div>
                      <span className="text-[13px] font-['Geist:Regular',sans-serif] text-[#0a0a0a] tracking-[0.07px] truncate">
                        {node.label}
                      </span>
                    </button>
                  ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
