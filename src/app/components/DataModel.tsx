import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Pencil, Copy, FileText, SlidersHorizontal, Search, Plus } from 'lucide-react';

// Sample data for data models
const dataModels = [
  {
    tableName: 'test_acro_create_table',
    description: 'Test table for ACRO creation',
    cluster: ['apollorno', 'hubblelvs'],
    database: 'DATA_ASSET_TEST',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'NaocolAu',
    updatedTime: '2026-07-29 01:10:40 GMT+7'
  },
  {
    tableName: 'test6_table_add_cluster',
    description: '',
    cluster: ['hubblelvs'],
    database: 'DATA_ASSET_TEST',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '16.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'NaocolAu',
    updatedTime: '2026-07-09 02:29:31 GMT+7'
  },
  {
    tableName: 'Samay_Table_Testing_1',
    description: 'Testing table for data validation',
    cluster: ['hubblelvs'],
    database: 'DLSTESTDB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'samaung',
    updatedTime: '2026-01-31 19:38:07 GMT+7'
  },
  {
    tableName: 'TEST_Hans_auto',
    description: '',
    cluster: ['hubblelvs'],
    database: 'DLS_DB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'INACTIVE',
    lastUpdatedBy: 'huhun',
    updatedTime: '2026-01-04 23:43:18 GMT+7'
  },
  {
    tableName: 'TEST_Hans_auto',
    description: '',
    cluster: ['hubblelvs'],
    database: 'DLS_DB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'huhun',
    updatedTime: '2026-01-03 23:53:41 GMT+7'
  },
  {
    tableName: 'TEST_Hans_auto',
    description: '',
    cluster: ['apollorno', 'hubblelvs'],
    database: 'DLS_DB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'huhun',
    updatedTime: '2026-01-03 21:25:33 GMT+7'
  },
  {
    tableName: 'samaung_test_1',
    description: '',
    cluster: ['hubblelvs'],
    database: 'DLSTESTDB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'samaung',
    updatedTime: '2026-01-03 19:24:04 GMT+7'
  },
  {
    tableName: 'samaung_test_table_local',
    description: 'Local test table for development',
    cluster: ['hubblelvs'],
    database: 'DLSTESTDB',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '1.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'samaung',
    updatedTime: '2026-12-30 01:34:58 GMT+7'
  },
  {
    tableName: 'test_final_table',
    description: '',
    cluster: ['hubblelvs'],
    database: 'DATA_ASSET_TEST',
    type: 'ICEBERG',
    domain: 'Unified Data Plat',
    batchAccount: 'b_dls',
    version: '2.0.0',
    status: 'ACTIVE',
    lastUpdatedBy: 'admin',
    updatedTime: '2026-02-11 10:30:00 GMT+7'
  }
];

type SortKey = 'tableName' | 'cluster' | 'database' | 'type' | 'domain' | 'batchAccount' | 'version' | 'status' | 'lastUpdatedBy' | 'updatedTime';
type SortDirection = 'asc' | 'desc' | null;

function DataModel() {
  const [activeTab, setActiveTab] = useState<'myModels' | 'myDrafts' | 'allModels'>('myModels');
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      // Toggle direction or reset
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return dataModels;
    
    return [...dataModels].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortKey, sortDirection]);

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return (
        <div className="flex flex-col ml-1 opacity-30">
          <ChevronUp className="size-3 -mb-1" />
          <ChevronDown className="size-3" />
        </div>
      );
    }
    
    if (sortDirection === 'asc') {
      return <ChevronUp className="size-3 ml-1" />;
    }
    
    return <ChevronDown className="size-3 ml-1" />;
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-6 pb-3">
        <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] leading-[1.5] tracking-[0.12px] text-[#0a0a0a]">
          Data Model
        </h1>
        <button className="flex items-center gap-2 px-4 min-h-[36px] bg-[#0968F6] text-[#fafafa] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#0858d6] transition-colors">
          <Plus size={13} className="text-[#fafafa]" />
          <span>New</span>
        </button>
      </div>

      {/* Tabs, Filters, and Search */}
      <div className="flex items-center justify-between px-8 pt-3">
        {/* Left: Tabs */}
        <div className="inline-flex bg-[#f5f5f5] rounded-[10px] p-[3px] gap-[2px]">
          <button
            onClick={() => setActiveTab('myModels')}
            className={`px-4 py-[7px] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] transition-all ${
              activeTab === 'myModels'
                ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                : 'bg-transparent text-[#737373]'
            }`}
          >
            My Data Models
          </button>
          <button
            onClick={() => setActiveTab('myDrafts')}
            className={`px-4 py-[7px] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] transition-all ${
              activeTab === 'myDrafts'
                ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                : 'bg-transparent text-[#737373]'
            }`}
          >
            My Data Model Drafts
          </button>
          <button
            onClick={() => setActiveTab('allModels')}
            className={`px-4 py-[7px] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] transition-all ${
              activeTab === 'allModels'
                ? 'bg-white text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                : 'bg-transparent text-[#737373]'
            }`}
          >
            All Data Models
          </button>
        </div>

        {/* Right: Filters and Search */}
        <div className="flex gap-4 items-center">
          {/* Filters Button */}
          <button className="bg-white border border-[#e5e5e5] rounded-[8px] px-4 min-h-[36px] flex items-center gap-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <SlidersHorizontal size={14} className="text-[#0a0a0a]" />
            <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">Filters</span>
          </button>

          {/* Search Input */}
          <div className="bg-white border border-[#e5e5e5] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[320px] min-h-[36px] flex items-center px-3 py-[7.5px]">
            <Search size={20} className="text-[#737373] mr-2" />
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] bg-transparent border-none outline-none placeholder:text-[#0a0a0a]"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        <div className="border border-[#e5e5e5] rounded-[12px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full relative">
              <thead>
                <tr className="bg-[#fafafa] border-b border-[#e5e5e5]">
                  <th className="sticky left-0 z-20 bg-[#fafafa] px-6 py-3 text-left border-r border-[#e5e5e5]">
                    <button
                      onClick={() => handleSort('tableName')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Table Name
                      <SortIcon columnKey="tableName" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('cluster')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Cluster
                      <SortIcon columnKey="cluster" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('database')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Database
                      <SortIcon columnKey="database" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('type')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Type
                      <SortIcon columnKey="type" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('domain')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Domain
                      <SortIcon columnKey="domain" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('batchAccount')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Batch Account
                      <SortIcon columnKey="batchAccount" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('version')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Version
                      <SortIcon columnKey="version" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('status')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Status
                      <SortIcon columnKey="status" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('lastUpdatedBy')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Last Updated By
                      <SortIcon columnKey="lastUpdatedBy" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left w-[140px] min-w-[140px]">
                    <button
                      onClick={() => handleSort('updatedTime')}
                      className="flex items-center font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase hover:text-[#0a0a0a] transition-colors"
                    >
                      Updated Time
                      <SortIcon columnKey="updatedTime" />
                    </button>
                  </th>
                  <th className="sticky right-0 z-20 bg-[#fafafa] px-6 py-3 text-left border-l border-[#e5e5e5]">
                    <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.48px] text-[#737373] uppercase">
                      Actions
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((model, index) => (
                  <tr
                    key={index}
                    className="group border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
                  >
                    <td className="sticky left-0 z-10 bg-white group-hover:bg-[#fafafa] px-6 py-4 border-r border-[#e5e5e5] transition-colors">
                      <div className="flex flex-col gap-1">
                        <button className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0968F6] hover:underline text-left">
                          {model.tableName}
                        </button>
                        {model.description && (
                          <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] tracking-[0.06px] text-[#737373]">
                            {model.description}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-[6px]">
                        {model.cluster.map((clusterName, idx) => (
                          <div 
                            key={idx}
                            className="bg-[#f5f5f5] flex items-center justify-center px-[8px] py-[3px] rounded-[8px]"
                          >
                            <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.18px] text-[#171717] whitespace-nowrap">
                              {clusterName}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
                        {model.database}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
                        {model.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
                        {model.domain}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#737373]">
                        {model.batchAccount || '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
                        {model.version}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-[10px] py-1 rounded-full font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[1.5] tracking-[0.06px] ${
                          model.status === 'ACTIVE'
                            ? 'bg-[#d1fae5] text-[#065f46]'
                            : 'bg-[#fee2e2] text-[#991b1b]'
                        }`}
                      >
                        {model.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a]">
                        {model.lastUpdatedBy}
                      </span>
                    </td>
                    <td className="px-6 py-4 w-[140px] min-w-[140px]">
                      <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] tracking-[0.07px] text-[#0a0a0a] break-words">
                        {model.updatedTime}
                      </span>
                    </td>
                    <td className="sticky right-0 z-10 bg-white group-hover:bg-[#fafafa] px-6 py-4 border-l border-[#e5e5e5] transition-colors">
                      <div className="flex items-center gap-3">
                        <button 
                          className="text-[#0a0a0a] hover:text-[#0968F6] hover:bg-[#e6f2ff] transition-colors p-1.5 rounded-[6px]"
                          title="Edit"
                        >
                          <Pencil className="size-4" />
                        </button>
                        <button 
                          className="text-[#0a0a0a] hover:text-[#0968F6] hover:bg-[#e6f2ff] transition-colors p-1.5 rounded-[6px]"
                          title="Clone"
                        >
                          <Copy className="size-4" />
                        </button>
                        <button 
                          className="text-[#0a0a0a] hover:text-[#0968F6] hover:bg-[#e6f2ff] transition-colors p-1.5 rounded-[6px]"
                          title="Audit Log"
                        >
                          <FileText className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataModel;