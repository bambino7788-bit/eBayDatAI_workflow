import { useState, useRef, useCallback } from 'react';
import { X, MoreVertical, HelpCircle, ChevronDown, ChevronUp, RefreshCw, Check, Loader2 } from 'lucide-react';

interface NodeDetailData {
  name: string;
  timeout: string;
  description: string;
  processing: {
    type: string;
    clusterName: string;
    databaseName: string;
    tableName: string;
  };
  upstreamDependency: {
    frequency: string;
    interval: string;
    latestDataReadiness: string;
  };
  watchMode: string;
}

// Mock data per node type
const NODE_DETAIL_DATA: Record<string, NodeDetailData> = {
  group322: {
    name: 'NudataEL_extract___ROOT_A',
    timeout: '1000',
    description: 'Dependency check for upstream data ingestion pipeline',
    processing: {
      type: 'Metadata based',
      clusterName: 'Cluster 01',
      databaseName: 'Databasename',
      tableName: 'dbdemos_pipeline_bike_main_dbdemos_pipeline_bi...',
    },
    upstreamDependency: {
      frequency: 'Daily',
      interval: '1 Day',
      latestDataReadiness: '{2024-11-14 00:00:00}',
    },
    watchMode: 'Watch Daily Upstream Data Dependency with Data Offset 5 days',
  },
  group323: {
    name: 'NudataEL_transform_B',
    timeout: '800',
    description: 'Applies transformation logic to reshape incoming data',
    processing: {
      type: 'Metadata based',
      clusterName: 'Cluster 02',
      databaseName: 'TransformDB',
      tableName: 'bike_transform_staging_v2',
    },
    upstreamDependency: {
      frequency: 'Daily',
      interval: '1 Day',
      latestDataReadiness: '{2024-11-14 06:00:00}',
    },
    watchMode: 'Watch Daily Upstream Data Dependency with Data Offset 3 days',
  },
  group324: {
    name: 'NudataEL_move_C',
    timeout: '1200',
    description: 'Moves data between Hive and Pronto storage systems',
    processing: {
      type: 'Metadata based',
      clusterName: 'Cluster 03',
      databaseName: 'MovementDB',
      tableName: 'bike_data_movement_hive_pronto',
    },
    upstreamDependency: {
      frequency: 'Hourly',
      interval: '6 Hours',
      latestDataReadiness: '{2024-11-14 12:00:00}',
    },
    watchMode: 'Watch Hourly Upstream Data Dependency with Data Offset 1 hour',
  },
  group325: {
    name: 'NudataEL_route_D',
    timeout: '600',
    description: 'Applies conditional routing logic for pipeline branching',
    processing: {
      type: 'Metadata based',
      clusterName: 'Cluster 01',
      databaseName: 'RoutingDB',
      tableName: 'bike_routing_conditions_v3',
    },
    upstreamDependency: {
      frequency: 'Daily',
      interval: '1 Day',
      latestDataReadiness: '{2024-11-13 18:00:00}',
    },
    watchMode: 'Watch Daily Upstream Data Dependency with Data Offset 2 days',
  },
  tasknode: {
    name: 'NudataEL_task_E',
    timeout: '500',
    description: 'Executes custom task scripts within the pipeline',
    processing: {
      type: 'Metadata based',
      clusterName: 'Cluster 04',
      databaseName: 'TaskDB',
      tableName: 'bike_custom_task_execution',
    },
    upstreamDependency: {
      frequency: 'Weekly',
      interval: '7 Days',
      latestDataReadiness: '{2024-11-10 00:00:00}',
    },
    watchMode: 'Watch Weekly Upstream Data Dependency with Data Offset 1 day',
  },
  group326: {
    name: 'NudataEL_ai_F',
    timeout: '2000',
    description: 'AI-powered model inference on the data stream',
    processing: {
      type: 'Metadata based',
      clusterName: 'GPU Cluster 01',
      databaseName: 'InferenceDB',
      tableName: 'bike_model_inference_results',
    },
    upstreamDependency: {
      frequency: 'Daily',
      interval: '1 Day',
      latestDataReadiness: '{2024-11-14 03:00:00}',
    },
    watchMode: 'Watch Daily Upstream Data Dependency with Data Offset 7 days',
  },
};

const DEFAULT_DATA: NodeDetailData = {
  name: 'Unknown Node',
  timeout: '1000',
  description: 'Pipeline node',
  processing: {
    type: 'Metadata based',
    clusterName: 'Cluster 01',
    databaseName: 'DefaultDB',
    tableName: 'default_table',
  },
  upstreamDependency: {
    frequency: 'Daily',
    interval: '1 Day',
    latestDataReadiness: '{2024-11-14 00:00:00}',
  },
  watchMode: 'Watch Daily Upstream Data Dependency with Data Offset 5 days',
};

/* ─── Read-only sub-components ─── */

function SectionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[4px] relative shrink-0 w-full min-w-0">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] text-[#737373] text-[12px] tracking-[0.06px]">{label}</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] text-[#0a0a0a] text-[14px] tracking-[0.07px] min-w-0 break-words">{value}</p>
    </div>
  );
}

function SectionDivider({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#191919] text-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}

/* ─── Edit-mode form sub-components ─── */

const inputBaseClass = "w-full bg-white border border-[#e5e5e5] rounded-[8px] px-[12px] py-[7.5px] min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a] outline-none focus:border-[#0968F6] transition-colors";
const labelClass = "font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]";
const selectWrapperClass = "relative w-full";

function FormInput({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div className="flex flex-col gap-[6px] w-full min-w-0">
      <label className={labelClass}>
        {required && <span className="text-[#e11d48] mr-[2px]">*</span>}
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className={inputBaseClass}
        style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
      />
    </div>
  );
}

function FormNumberInput({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  const numVal = parseInt(value) || 0;
  return (
    <div className="flex flex-col gap-[6px] w-full min-w-0">
      <label className={labelClass}>
        {required && <span className="text-[#e11d48] mr-[2px]">*</span>}
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`${inputBaseClass} pr-[28px]`}
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
        />
        <div className="absolute right-[6px] top-1/2 -translate-y-1/2 flex flex-col gap-0">
          <button className="cursor-pointer text-[#737373] hover:text-[#0a0a0a] transition-colors h-[12px] flex items-center justify-center" onClick={() => onChange(String(numVal + 1))}>
            <ChevronUp size={12} />
          </button>
          <button className="cursor-pointer text-[#737373] hover:text-[#0a0a0a] transition-colors h-[12px] flex items-center justify-center" onClick={() => onChange(String(Math.max(0, numVal - 1)))}>
            <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

function FormTextarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-[6px] w-full min-w-0">
      <label className={labelClass}>{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className={`${inputBaseClass} resize-none`}
        style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
      />
    </div>
  );
}

function FormSelect({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) {
  return (
    <div className="flex flex-col gap-[6px] w-full min-w-0">
      <label className={labelClass}>
        {required && <span className="text-[#e11d48] mr-[2px]">*</span>}
        {label}
      </label>
      <div className={selectWrapperClass}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`${inputBaseClass} appearance-none pr-[32px] cursor-pointer bg-[#fafafa]`}
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
      </div>
    </div>
  );
}

function RadioOption({ label, checked, onChange, children }: { label: string; checked: boolean; onChange: () => void; children?: React.ReactNode }) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer w-full min-w-0">
      <div className="relative shrink-0 w-[18px] h-[18px]">
        <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
        <div className={`w-[18px] h-[18px] rounded-full border-2 ${checked ? 'border-[#0a0a0a]' : 'border-[#d4d4d4]'} flex items-center justify-center transition-colors`}>
          {checked && <div className="w-[8px] h-[8px] rounded-full bg-[#0a0a0a]" />}
        </div>
      </div>
      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">{label}</span>
      {children}
    </label>
  );
}

/* ─── Stepper ─── */

function Stepper({ currentStep, onStepClick }: { currentStep: number; onStepClick: (step: number) => void }) {
  return (
    <div className="flex items-center gap-[8px] bg-[#fafafa] rounded-[20px] px-[12px] py-[6px] shrink-0">
      <button className="flex items-center gap-[6px] cursor-pointer" onClick={() => onStepClick(1)}>
        <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] font-['Geist:Medium',sans-serif] font-medium ${currentStep === 1 ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#737373] border border-[#e5e5e5]'}`}>1</span>
        <span className={`font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] ${currentStep === 1 ? 'text-[#0a0a0a]' : 'text-[#737373]'}`}>Properties</span>
      </button>
      <span className="text-[#d4d4d4] text-[14px]">&gt;</span>
      <button className="flex items-center gap-[6px] cursor-pointer" onClick={() => onStepClick(2)}>
        <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] font-['Geist:Medium',sans-serif] font-medium ${currentStep === 2 ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#737373] border border-[#e5e5e5]'}`}>2</span>
        <span className={`font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] ${currentStep === 2 ? 'text-[#0a0a0a]' : 'text-[#737373]'}`}>Processing</span>
      </button>
    </div>
  );
}

/* ─── Edit Mode Content ─── */

interface EditFormState {
  name: string;
  timeout: string;
  description: string;
  processingType: string;
  clusterName: string;
  databaseName: string;
  tableName: string;
  watchModeType: 'daily' | 'customize';
  dataOffset: string;
  customExpression: string;
}

function EditableContent({ data, onSave }: { data: NodeDetailData; onSave: () => void }) {
  const [step, setStep] = useState(1);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [form, setForm] = useState<EditFormState>(() => ({
    name: data.name,
    timeout: data.timeout.replace(/[^\d]/g, '') || '0',
    description: data.description,
    processingType: data.processing.type,
    clusterName: data.processing.clusterName,
    databaseName: data.processing.databaseName,
    tableName: data.processing.tableName,
    watchModeType: 'daily',
    dataOffset: '0',
    customExpression: '${DS_FROM, %Y%m%d%H%M%S}',
  }));

  const updateField = <K extends keyof EditFormState>(key: K, value: EditFormState[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const clusterOptions = ['Cluster 01', 'Cluster 02', 'Cluster 03', 'Cluster 04', 'GPU Cluster 01'];
  const databaseOptions = ['Databasename', 'TransformDB', 'MovementDB', 'RoutingDB', 'TaskDB', 'InferenceDB'];
  const tableOptions = [
    'dbdemos_pipeline_bike_main_dbdemos_pipeline_bi...',
    'bike_transform_staging_v2',
    'bike_data_movement_hive_pronto',
    'bike_routing_conditions_v3',
    'bike_custom_task_execution',
    'bike_model_inference_results',
  ];

  const handleSave = () => {
    if (saveState !== 'idle') return;
    setSaveState('saving');
    // Simulate async save
    setTimeout(() => {
      setSaveState('saved');
      setTimeout(() => {
        onSave();
      }, 1200);
    }, 800);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 relative">
      {/* Success toast */}
      {saveState === 'saved' && (
        <div
          className="absolute top-[12px] left-1/2 -translate-x-1/2 z-[30] flex items-center gap-[8px] bg-[#0a0a0a] text-white rounded-[8px] px-[14px] py-[10px]"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.18)', animation: 'slideInFade 0.3s ease-out' }}
        >
          <div className="w-[20px] h-[20px] rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
            <Check size={12} strokeWidth={3} color="white" />
          </div>
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[13px] tracking-[0.07px] leading-[1.5] whitespace-nowrap">Pipeline node saved successfully</span>
        </div>
      )}

      {/* Stepper */}
      <div className="px-[16px] pt-[12px] pb-[8px] shrink-0">
        <Stepper currentStep={step} onStepClick={setStep} />
      </div>

      {/* Scrollable form body */}
      <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[20px]">
        {step === 1 && (
          <>
            <div className="flex gap-[12px] w-full">
              <FormInput label="Name" value={form.name} onChange={v => updateField('name', v)} />
              <FormNumberInput label="Timeout(min)" value={form.timeout} onChange={v => updateField('timeout', v)} />
            </div>
            <FormTextarea label="Description" value={form.description} onChange={v => updateField('description', v)} />
          </>
        )}

        {step === 2 && (
          <>
            {/* Processing Type Radio Group */}
            <div className="flex items-center gap-[20px]">
              <RadioOption label="Metadata base" checked={form.processingType === 'Metadata based'} onChange={() => updateField('processingType', 'Metadata based')}>
                <HelpCircle size={14} color="#707070" fill="#707070" stroke="white" strokeWidth={1.5} />
              </RadioOption>
              <RadioOption label="HDFS File" checked={form.processingType === 'HDFS File'} onChange={() => updateField('processingType', 'HDFS File')} />
              <RadioOption label="Http" checked={form.processingType === 'Http'} onChange={() => updateField('processingType', 'Http')} />
            </div>

            {/* Processing fields in bordered container */}
            <div className="relative rounded-[12px] w-full border border-[#e5e5e5] p-[16px] flex flex-col gap-[16px]">
              <div className="flex gap-[12px] w-full">
                <FormSelect label="Cluster Name" value={form.clusterName} onChange={v => updateField('clusterName', v)} options={clusterOptions} required />
                <FormSelect label="Database Name" value={form.databaseName} onChange={v => updateField('databaseName', v)} options={databaseOptions} required />
              </div>
              <FormSelect label="Table Name" value={form.tableName} onChange={v => updateField('tableName', v)} options={tableOptions} required />

              {/* Upstream Dependency Info */}
              <div className="border border-[#e5e5e5] rounded-[8px] p-[12px] flex flex-col gap-[12px] mt-[4px]">
                <div className="flex items-center gap-[6px]">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">Upstream Dependency Info</span>
                  <RefreshCw size={14} className="text-[#737373] cursor-pointer hover:text-[#0a0a0a] transition-colors" />
                </div>
                <div className="flex gap-[16px] w-full">
                  <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">Frequency</span>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] tracking-[0.07px] leading-[1.5] text-[#737373]">{`{${data.upstreamDependency.frequency}}`}</span>
                  </div>
                  <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">Interval</span>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] tracking-[0.07px] leading-[1.5] text-[#737373]">{`{${data.upstreamDependency.interval}}`}</span>
                  </div>
                  <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <span className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">Latest DataReadiness</span>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] tracking-[0.07px] leading-[1.5] text-[#737373]">{data.upstreamDependency.latestDataReadiness}</span>
                  </div>
                </div>
              </div>

              {/* Watch Mode */}
              <div className="flex flex-col gap-[12px] mt-[4px]">
                <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] tracking-[0.48px] leading-[1.5] text-[#737373] uppercase">Watch Mode</span>

                <div className="flex items-center gap-[8px] flex-wrap">
                  <RadioOption label="" checked={form.watchModeType === 'daily'} onChange={() => updateField('watchModeType', 'daily')} />
                  <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a] -ml-[4px]">Watch Daily Upstream Data Dependency with Data Offset</span>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.dataOffset}
                      onChange={e => updateField('dataOffset', e.target.value)}
                      className="w-[56px] bg-white border border-[#e5e5e5] rounded-[6px] px-[8px] py-[4px] text-center font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a] outline-none focus:border-[#0968F6] transition-colors pr-[22px]"
                      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
                    />
                    <div className="absolute right-[4px] top-1/2 -translate-y-1/2 flex flex-col gap-0">
                      <button className="cursor-pointer text-[#737373] hover:text-[#0a0a0a] h-[10px] flex items-center" onClick={() => updateField('dataOffset', String((parseInt(form.dataOffset) || 0) + 1))}>
                        <ChevronUp size={10} />
                      </button>
                      <button className="cursor-pointer text-[#737373] hover:text-[#0a0a0a] h-[10px] flex items-center" onClick={() => updateField('dataOffset', String(Math.max(0, (parseInt(form.dataOffset) || 0) - 1)))}>
                        <ChevronDown size={10} />
                      </button>
                    </div>
                  </div>
                  <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a]">day(s)</span>
                </div>

                <div className="flex items-center gap-[8px] flex-wrap">
                  <RadioOption label="Customize Data Time Of Upstream Data Dependency" checked={form.watchModeType === 'customize'} onChange={() => updateField('watchModeType', 'customize')} />
                </div>
                {form.watchModeType === 'customize' && (
                  <input
                    type="text"
                    value={form.customExpression}
                    onChange={e => updateField('customExpression', e.target.value)}
                    placeholder="${DS_FROM, %Y%m%d%H%M%S}"
                    className={`${inputBaseClass} ml-[26px]`}
                    style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', width: 'calc(100% - 26px)' }}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom buttons */}
      <div className="shrink-0 px-[16px] py-[12px] border-t border-[#e5e5e5] flex items-center justify-between">
        {step === 2 ? (
          <button
            className="cursor-pointer bg-white border border-[#e5e5e5] rounded-[8px] px-[16px] py-[7.5px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-[#0a0a0a] hover:bg-[#fafafa] transition-colors"
            style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
            onClick={() => setStep(1)}
            disabled={saveState !== 'idle'}
          >
            Previous
          </button>
        ) : (
          <div />
        )}
        {step === 1 ? (
          <button
            className="cursor-pointer bg-[#0968F6] hover:bg-[#0856d6] rounded-[8px] px-[16px] py-[7.5px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-white transition-colors"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        ) : (
          <button
            className={`rounded-[8px] px-[16px] py-[7.5px] font-['Geist:Medium',sans-serif] font-medium text-[14px] tracking-[0.07px] leading-[1.5] text-white transition-all duration-200 flex items-center gap-[6px] min-w-[80px] justify-center ${
              saveState === 'idle'
                ? 'bg-[#0968F6] hover:bg-[#0856d6] cursor-pointer'
                : saveState === 'saving'
                  ? 'bg-[#0968F6]/80 cursor-not-allowed'
                  : 'bg-[#22c55e] cursor-default'
            }`}
            onClick={handleSave}
            disabled={saveState !== 'idle'}
          >
            {saveState === 'idle' && 'Save'}
            {saveState === 'saving' && (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Saving...</span>
              </>
            )}
            {saveState === 'saved' && (
              <>
                <Check size={14} strokeWidth={3} />
                <span>Saved</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Keyframe animation for toast */}
      <style>{`
        @keyframes slideInFade {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}

/* ─── Read-only Content ─── */

function ReadOnlyContent({ data }: { data: NodeDetailData }) {
  return (
    <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[24px]">
      {/* Properties */}
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Properties</p>
      <div className="relative rounded-[16px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] p-[16px] relative text-[#0a0a0a] text-[14px] tracking-[0.07px] w-full">
          <SectionRow label="Name" value={data.name} />
          <SectionRow label="Timeout" value={`${data.timeout} mins`} />
          <SectionRow label="Description" value={data.description} />
        </div>
      </div>

      {/* Processing */}
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Processing</p>
      <div className="relative rounded-[16px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#191919] text-[14px] whitespace-nowrap">{data.processing.type}</p>
              <HelpCircle size={16} color="#707070" fill="#707070" stroke="white" strokeWidth={1.5} />
            </div>
          </div>
          <SectionRow label="Cluster Name" value={data.processing.clusterName} />
          <SectionRow label="Database Name" value={data.processing.databaseName} />
          <SectionRow label="Table Name" value={data.processing.tableName} />

          <SectionDivider text="Upstream Dependency Info" />
          <SectionRow label="Frequency" value={data.upstreamDependency.frequency} />
          <SectionRow label="Interval" value={data.upstreamDependency.interval} />
          <SectionRow label="Latest DataReadiness" value={data.upstreamDependency.latestDataReadiness} />

          <SectionDivider text="Watch Mode" />
          <div className="content-stretch flex flex-wrap gap-y-[4px] items-center relative shrink-0 w-full">
            <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative text-[#191919] text-[14px]">{data.watchMode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Panel ─── */

const MIN_WIDTH = 280;
const MAX_WIDTH = 600;
const DEFAULT_WIDTH = 340;
const DEFAULT_WIDTH_EDIT = 480;

interface NodeDetailPanelProps {
  nodeKey: string;
  nodeType: string;
  nodeIcon?: React.ReactNode;
  onClose: () => void;
  isEditMode?: boolean;
  pipelineState?: string;
}

export default function NodeDetailPanel({ nodeKey, nodeType, nodeIcon, onClose, isEditMode = false, pipelineState = 'dev' }: NodeDetailPanelProps) {
  const data = NODE_DETAIL_DATA[nodeType] || DEFAULT_DATA;
  const canEdit = isEditMode && pipelineState === 'dev';
  const initialWidth = canEdit ? DEFAULT_WIDTH_EDIT : DEFAULT_WIDTH;
  const [panelWidth, setPanelWidth] = useState(initialWidth);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(initialWidth);

  // Adjust width when switching between edit / read-only
  const prevCanEdit = useRef(canEdit);
  if (prevCanEdit.current !== canEdit) {
    prevCanEdit.current = canEdit;
    const next = canEdit ? DEFAULT_WIDTH_EDIT : DEFAULT_WIDTH;
    setPanelWidth(next);
    startWidth.current = next;
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isResizing.current = true;
    startX.current = e.clientX;
    startWidth.current = panelWidth;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!isResizing.current) return;
      const delta = startX.current - ev.clientX;
      const newWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidth.current + delta));
      setPanelWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [panelWidth]);

  const handleSave = () => {
    onClose();
  };

  return (
    <div
      className="absolute right-[16px] z-[15] bg-white flex flex-col rounded-[16px] overflow-hidden"
      style={{
        top: 62,
        bottom: 16,
        width: panelWidth,
        boxShadow: '0px 0px 6.3px 0px rgba(0,0,0,0.1)',
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />

      {/* Left resize handle */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[6px] cursor-col-resize z-[20] group"
        onMouseDown={handleMouseDown}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[#0968F6] transition-colors duration-150" />
      </div>

      {/* Header */}
      <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 min-w-0 flex-1">
          {nodeIcon ? nodeIcon : (
            <div className="relative shrink-0 size-[24px]">
              <div className="w-full h-full rounded-[4px] bg-[#5E9178] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4L7 7L1 4L7 1Z" fill="white" opacity="0.8" />
                  <path d="M1 4V10L7 13V7L1 4Z" fill="white" opacity="0.6" />
                  <path d="M13 4V10L7 13V7L13 4Z" fill="white" opacity="0.4" />
                </svg>
              </div>
            </div>
          )}
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative text-[#0a0a0a] text-[14px] tracking-[0.07px] truncate">{data.name}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <button className="cursor-pointer hover:bg-[#f5f5f5] rounded-[4px] transition-colors p-[2px]">
            <MoreVertical size={16} color="#525252" />
          </button>
          <button className="cursor-pointer hover:bg-[#f5f5f5] rounded-[4px] transition-colors p-[2px]" onClick={onClose}>
            <X size={16} color="#525252" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0] border-t border-[#e5e5e5]" />
      </div>

      {/* Content: Edit or Read-only */}
      {canEdit ? (
        <EditableContent data={data} onSave={handleSave} />
      ) : (
        <ReadOnlyContent data={data} />
      )}
    </div>
  );
}