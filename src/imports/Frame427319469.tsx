import svgPaths from "./svg-f11lbhx8hw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Maximize2, Minimize2, Check } from 'lucide-react';
import { useState } from 'react';

// Pipeline JSON Sample Data
const PIPELINE_JSON_SAMPLE = {
  "pipeline_id": "dbdemos_pipeline_bike_main",
  "name": "01-pipeline-tutorial",
  "owner": "Emily Chen",
  "created_at": "2021-02-28T20:07:32Z",
  "updated_at": "2026-02-09T14:23:15Z",
  "project": "dbdemos_pipeline_bike_main_dbdemos_pipeline_bike",
  "path": "/pipeline-bike/1-dbo-sql/dbdemos_pipeline_bike_main_dbdemos_pipeline_bike",
  "domain": "Search",
  "tags": ["ebay-memory-initiative", "2026", "ML", "Intent"],
  "environment": "Development",
  "configuration": {
    "schedule": {
      "quartz_cron_expression": "0 0 12 * * ?",
      "timezone_id": "America/Los_Angeles",
      "pause_status": "UNPAUSED"
    },
    "clusters": [
      {
        "label": "default",
        "num_workers": 2,
        "spark_version": "11.3.x-scala2.12",
        "node_type_id": "i3.xlarge"
      }
    ],
    "libraries": [
      {
        "notebook": {
          "path": "/pipeline-bike/1-dbo-sql/02-Pipeline-event-c"
        }
      }
    ]
  },
  "stages": [
    {
      "stage_id": "stage_1",
      "name": "NodalBEI_context__ROOT",
      "type": "Dependency Check",
      "source": "Raw",
      "sink": "Bronze",
      "status": "completed",
      "dependencies": []
    },
    {
      "stage_id": "stage_2",
      "name": "NodalBEI_context__ROOT",
      "type": "Ingest Notebook",
      "source": "data_read",
      "sink": "data_prep",
      "status": "running",
      "dependencies": ["stage_1"]
    },
    {
      "stage_id": "stage_3",
      "name": "NodalBEI_context__ROOT",
      "type": "Spark SQL Notebook",
      "source": "data_prep",
      "sink": "Bronze",
      "status": "pending",
      "dependencies": ["stage_2"]
    },
    {
      "stage_id": "stage_4",
      "name": "NodalBEI_context__ROOT",
      "type": "Ingest Notebook",
      "source": "Bronze Reads",
      "sink": "data_prep",
      "status": "pending",
      "dependencies": ["stage_3"]
    },
    {
      "stage_id": "stage_5",
      "name": "NodalBEI_context__ROOT",
      "type": "Spark SQL",
      "source": "data_prep",
      "sink": "SQL Writes",
      "status": "pending",
      "dependencies": ["stage_2", "stage_4"]
    },
    {
      "stage_id": "stage_6",
      "name": "NodalBEI_context__ROOT",
      "type": "Data Quality",
      "sink": "SQL Writes",
      "status": "pending",
      "dependencies": ["stage_5"]
    }
  ],
  "notifications": {
    "on_success": ["emily.chen@ebay.com"],
    "on_failure": ["emily.chen@ebay.com", "data-engineering@ebay.com"]
  },
  "permissions": {
    "can_manage": ["Emily Chen"],
    "can_view": ["Data Engineering Team"]
  }
};

function IconEllipsisVertical() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / ellipsis-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / ellipsis-vertical">
          <path d={svgPaths.p1d34aa00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pd812e80} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p29ee1ef0} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconX() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / x">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <button className="cursor-pointer hover:opacity-70">
        <IconEllipsisVertical />
      </button>
      <button className="cursor-pointer hover:opacity-70" onClick={onClose}>
        <IconX />
      </button>
    </div>
  );
}

function Frame2({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px]">Pipeline Details</p>
      <Frame onClose={onClose} />
    </div>
  );
}

function Title({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame2 onClose={onClose} />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[0.18px] w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">/pipeline-bike/1-dbo-sql/dbdemos_pipeline_bike_main_dbdemos_pipeline_bike</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 1">
          <g id="Frame 427319472">
            <line id="Line 1" stroke="var(--stroke-0, #E5E5E5)" x2="517" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full" data-name="row">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 w-[80px] whitespace-pre-wrap">Owner</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0">Emily Chen</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full" data-name="row">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 w-[80px] whitespace-pre-wrap">Created</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0">2021-02-28 20:07:32</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full" data-name="row">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 w-[80px] whitespace-pre-wrap">Project</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0">dbdemos_pipeline_bike_main_dbdemos_pipeline_bike</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[22px] left-0 rounded-[10px] top-0 w-[153.023px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[12px]">ebay-memory-initiative</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute h-[22px] left-[161.02px] rounded-[10px] top-0 w-[48.406px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[12px]">2026</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[22px] left-[217.43px] rounded-[10px] top-0 w-[35.539px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[12px]">ML</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute h-[22px] left-[260.97px] rounded-[10px] top-0 w-[51.789px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[12px]">Intent</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="row">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-[80px] whitespace-pre-wrap">Tags</p>
      <Container />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full" data-name="row">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 w-[80px] whitespace-pre-wrap">Domain</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0">Search</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 1">
          <g id="Frame 427319472">
            <line id="Line 1" stroke="var(--stroke-0, #E5E5E5)" x2="517" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Code Viewer Component with Copy and Fullscreen functionality
function CodeViewer({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const containerClass = isFullscreen
    ? "fixed inset-0 z-50 bg-[#f5f5f7] flex flex-col"
    : "h-[220px] relative shrink-0 w-[517px] bg-[#f5f5f7] border border-[#e5e5e5] rounded-[8px] overflow-hidden flex flex-col";

  // Custom syntax highlighting style with blue tones - no red colors
  const customStyle = {
    'code[class*="language-"]': {
      color: '#0078d4',
    },
    'pre[class*="language-"]': {
      color: '#0078d4',
    },
    'comment': { color: '#5a5e66', fontStyle: 'italic' },
    'prolog': { color: '#5a5e66' },
    'doctype': { color: '#5a5e66' },
    'cdata': { color: '#5a5e66' },
    'punctuation': { color: '#5a5e66' },
    'property': { color: '#0066cc' },
    'tag': { color: '#0066cc' },
    'boolean': { color: '#0078d4' },
    'number': { color: '#0066cc' },
    'constant': { color: '#0066cc' },
    'symbol': { color: '#0066cc' },
    'deleted': { color: '#5a5e66' },
    'selector': { color: '#0066cc' },
    'attr-name': { color: '#0066cc' },
    'string': { color: '#0078d4' },
    'char': { color: '#0078d4' },
    'builtin': { color: '#0078d4' },
    'inserted': { color: '#0078d4' },
    'operator': { color: '#5a5e66' },
    'entity': { color: '#0078d4' },
    'url': { color: '#0078d4' },
    'variable': { color: '#0078d4' },
    'atrule': { color: '#0066cc' },
    'attr-value': { color: '#0078d4' },
    'keyword': { color: '#0066cc' },
    'function': { color: '#0066cc' },
    'class-name': { color: '#0066cc' },
    'regex': { color: '#0078d4' },
    'important': { color: '#0066cc', fontWeight: 'bold' },
    'namespace': { color: '#0066cc' },
  };

  return (
    <div className={containerClass} data-name="pipeline-json-display">
      {/* Action Buttons Bar */}
      <div className="flex items-center justify-end gap-[8px] px-[12px] py-[8px] bg-[#f0f0f2] border-b border-[#e5e5e5]">
        <button
          onClick={handleCopy}
          className="p-[6px] hover:bg-[#e5e5e7] text-[#525252] rounded-[4px] transition-colors"
          title="Copy to clipboard"
        >
          {isCopied ? (
            <Check size={16} className="text-[#0968F6]" />
          ) : (
            <Copy size={16} />
          )}
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-[6px] hover:bg-[#e5e5e7] text-[#525252] rounded-[4px] transition-colors"
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 size={16} />
          ) : (
            <Maximize2 size={16} />
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="flex-1 overflow-auto">
        <SyntaxHighlighter
          language="json"
          style={{
            ...vs,
            ...customStyle,
          }}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: '#4a4a4a',
            textAlign: 'right',
            userSelect: 'none',
            backgroundColor: '#f5f5f7',
          }}
          customStyle={{
            margin: 0,
            padding: '12px',
            background: '#f5f5f7',
            fontSize: '12px',
            lineHeight: '18px',
            fontFamily: "'Geist:Regular', 'Courier New', monospace",
            color: '#0078d4',
            overflowX: 'hidden',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
          codeTagProps={{
            style: {
              fontFamily: "'Geist:Regular', 'Courier New', monospace",
              color: '#0078d4',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function Overview({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full" data-name="Overview">
      <Title onClose={onClose} />
      <Frame4 />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[14px]">General Information</p>
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Frame3 />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[14px]">Pipeline Json</p>
      <CodeViewer code={JSON.stringify(PIPELINE_JSON_SAMPLE, null, 2)} />
    </div>
  );
}

export default function Frame1({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  if (!isOpen) return null;
  
  return (
    <div className="w-[550px] bg-white border-l border-[#e5e5e5] flex flex-col overflow-auto h-full">
      <div className="content-stretch flex flex-col items-start p-[24px] relative h-full">
        <Overview onClose={onClose} />
      </div>
    </div>
  );
}

export { Overview as InfoPanelContent };