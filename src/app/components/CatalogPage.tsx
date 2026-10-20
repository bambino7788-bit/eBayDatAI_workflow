import { useState } from 'react';
import { Search, ChevronRight, ExternalLink, Database, Users, Calendar, Box, Key, Ratio, ScrollText, BarChart3, Layers, Briefcase, Zap, ArrowRightLeft, CloudDownload, Trash2, ShieldCheck, BrainCircuit, FileSpreadsheet, Activity, X } from 'lucide-react';
import { 
  IconAll, IconLogicalDataModel, IconWorkspace, IconDataset, IconSourceContract, 
  IconEbaySignal, IconPipeline, IconBatchPipeline, IconStreamingPipeline, 
  IconZeroETL, IconOracleLanding, IconTask, IconDataRetention, IconDataQuality, 
  IconInferenceService, IconNotebook, IconSparkSQL, IconFlinkSQL 
} from './CatalogSidebarIcons';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { cn } from './ui/utils';
import domainSvgPaths from '../../imports/svg-mhju4vjsi1';
import toolbarSvgPaths from '../../imports/svg-ruvbf3ay6u';
import typeIconSvgPaths from '../../imports/svg-0a9anl5pr3';

// Domain icon from Figma design
function DomainIcon({ size = 16 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={domainSvgPaths.p494f700} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
          <path d={domainSvgPaths.p17ebcfa0} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
          <path d={domainSvgPaths.p8c2da00} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
          <path d={domainSvgPaths.p36c864e0} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

interface SubResourceType {
  id: string;
  name: string;
  count: number;
}

interface ResourceType {
  id: string;
  name: string;
  count: number;
  isExpanded: boolean;
  children?: SubResourceType[];
}

interface ResourceInstance {
  id: string;
  name: string;
  description: string;
  type: string;         // matches sidebar child id: 'dataset', 'logical-data-model', etc.
  typeLabel: string;    // display label: 'Dataset', 'Logical Data Model', etc.
  domain: string;       // domain name: 'Search & SEO', 'Selling', 'Payments', etc.
  team: string;
  extraField?: { icon: 'box' | 'key' | 'ratio' | 'zap' | 'layers'; label: string };
  version?: string;
  dateUpdated: string;
  tags: string[];
  status: 'active' | 'inactive';
}

const ICON_MAP: Record<string, React.ComponentType> = {
  'all': IconAll,
  'logical-data-model': IconLogicalDataModel,
  'workspace': IconWorkspace,
  'dataset': IconDataset,
  'source-contract': IconSourceContract,
  'ebay-signal': IconEbaySignal,
  'pipeline': IconPipeline,
  'batch-pipeline': IconBatchPipeline,
  'streaming-pipeline': IconStreamingPipeline,
  'zero-etl': IconZeroETL,
  'oracle-landing': IconOracleLanding,
  'task': IconTask,
  'data-retention': IconDataRetention,
  'data-quality': IconDataQuality,
  'inference-service': IconInferenceService,
  'notebook': IconNotebook,
  'spark-sql': IconSparkSQL,
  'flink-sql': IconFlinkSQL
};

// Color mapping for card icon boxes — cool-toned tech palette
const TYPE_COLOR_MAP: Record<string, { bg: string; icon: string }> = {
  'dataset':             { bg: '#DBEAFE', icon: '#2563EB' },   // blue
  'logical-data-model':  { bg: '#E0E7FF', icon: '#4F46E5' },   // indigo
  'workspace':           { bg: '#CFFAFE', icon: '#0891B2' },   // cyan
  'source-contract':     { bg: '#D1FAE5', icon: '#059669' },   // emerald
  'ebay-signal':         { bg: '#E0F2FE', icon: '#0284C7' },   // sky
  'batch-pipeline':      { bg: '#DBEAFE', icon: '#3B82F6' },   // blue
  'streaming-pipeline':  { bg: '#CCFBF1', icon: '#0D9488' },   // teal
  'zero-etl':            { bg: '#EDE9FE', icon: '#7C3AED' },   // violet
  'oracle-landing':      { bg: '#E0E7FF', icon: '#6366F1' },   // indigo
  'task':                { bg: '#DBEAFE', icon: '#2563EB' },   // blue
  'data-retention':      { bg: '#CFFAFE', icon: '#0E7490' },   // cyan
  'data-quality':        { bg: '#D1FAE5', icon: '#047857' },   // emerald
  'inference-service':   { bg: '#F3E8FF', icon: '#9333EA' },   // purple
  'notebook':            { bg: '#EDE9FE', icon: '#6D28D9' },   // violet
  'spark-sql':           { bg: '#E0F2FE', icon: '#0369A1' },   // sky
  'flink-sql':           { bg: '#E0E7FF', icon: '#4338CA' },   // indigo
};

const getTypeColor = (type: string) => TYPE_COLOR_MAP[type] || { bg: '#ececf0', icon: '#717182' };

// Card icon mapping: type -> lucide icon component used in the card's 36x36 icon box
const CARD_ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'dataset': Database,
  'logical-data-model': Layers,
  'workspace': Briefcase,
  'source-contract': ScrollText,
  'ebay-signal': BarChart3,
  'batch-pipeline': ArrowRightLeft,
  'streaming-pipeline': Zap,
  'zero-etl': CloudDownload,
  'oracle-landing': CloudDownload,
  'data-retention': Trash2,
  'data-quality': ShieldCheck,
  'inference-service': BrainCircuit,
  'spark-sql': FileSpreadsheet,
  'flink-sql': Activity,
};

const MOCK_RESOURCE_TYPES: ResourceType[] = [
  {
    id: 'all',
    name: 'All',
    count: 0,
    isExpanded: true,
    children: [
      { id: 'logical-data-model', name: 'Logical Data Model', count: 11 },
      { id: 'workspace', name: 'Workspace', count: 8 },
      { id: 'dataset', name: 'Dataset', count: 12 },
      { id: 'source-contract', name: 'Source Contract', count: 6 },
      { id: 'ebay-signal', name: 'eBay Signal', count: 7 }
    ]
  },
  {
    id: 'pipeline',
    name: 'Pipeline',
    count: 0,
    isExpanded: true,
    children: [
      { id: 'batch-pipeline', name: 'Batch Pipeline', count: 6 },
      { id: 'streaming-pipeline', name: 'Streaming Pipeline', count: 10 },
      { id: 'zero-etl', name: 'ZeroETL', count: 8 },
      { id: 'oracle-landing', name: 'Oracle Landing', count: 10 }
    ]
  },
  {
    id: 'task',
    name: 'Task',
    count: 0,
    isExpanded: true,
    children: [
      { id: 'data-retention', name: 'Data Retention', count: 7 },
      { id: 'data-quality', name: 'Data Quality', count: 5 },
      { id: 'inference-service', name: 'Inference Service', count: 8 }
    ]
  },
  {
    id: 'notebook',
    name: 'Notebook',
    count: 0,
    isExpanded: true,
    children: [
      { id: 'spark-sql', name: 'Spark SQL', count: 7 },
      { id: 'flink-sql', name: 'Flink SQL', count: 10 }
    ]
  }
];

const MOCK_RESOURCES: ResourceInstance[] = [
  // ===== Original 4 items (matching Figma exactly) =====
  {
    id: '1',
    name: 'Search & SEO',
    description: 'Search engine optimization and discovery domain',
    type: 'dataset',
    typeLabel: 'Dataset',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    extraField: { icon: 'box', label: 'Global' },
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Platform', 'Search', 'Core'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Seller Performance Scorer',
    description: 'Scores seller performance metrics',
    type: 'inference-service',
    typeLabel: 'Model',
    domain: 'Search & SEO',
    team: 'Trust & Safety Team',
    version: 'v1.1.2',
    extraField: { icon: 'key', label: 'item_id' },
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Platform', 'Search', 'Core'],
    status: 'active'
  },
  {
    id: '3',
    name: 'item-ulp-source',
    description: 'Scores seller performance metrics',
    type: 'source-contract',
    typeLabel: 'Source Contract',
    domain: 'Selling',
    team: 'Trust & Safety Team',
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Platform', 'Search', 'Core'],
    status: 'inactive'
  },
  {
    id: '4',
    name: 'item-new-listing',
    description: 'Scores seller performance metrics',
    type: 'ebay-signal',
    typeLabel: 'eBay Signal',
    domain: 'Selling',
    team: 'Trust & Safety Team',
    extraField: { icon: 'ratio', label: 'Item' },
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Platform', 'Search', 'Core'],
    status: 'active'
  },

  // ===== Logical Data Model =====
  {
    id: '5',
    name: 'User Transaction Model',
    description: 'Defines the canonical schema for buyer and seller transactions',
    type: 'logical-data-model',
    typeLabel: 'Logical Data Model',
    domain: 'Payments',
    team: 'Data Governance Team',
    extraField: { icon: 'key', label: 'txn_id' },
    dateUpdated: 'Updated 2024-11-02',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '6',
    name: 'Product Catalog Schema',
    description: 'Canonical product listing and category hierarchy model',
    type: 'logical-data-model',
    typeLabel: 'Logical Data Model',
    domain: 'Search & SEO',
    team: 'Catalog Team',
    extraField: { icon: 'layers', label: 'Multi-level' },
    dateUpdated: 'Updated 2024-09-28',
    tags: ['Platform', 'Search'],
    status: 'active'
  },
  {
    id: '7',
    name: 'Seller Rating Framework',
    description: 'Logical model for seller trust scores and rating dimensions',
    type: 'logical-data-model',
    typeLabel: 'Logical Data Model',
    domain: 'Selling',
    team: 'Trust & Safety Team',
    extraField: { icon: 'key', label: 'seller_id' },
    dateUpdated: 'Updated 2024-10-20',
    tags: ['Core', 'Search'],
    status: 'active'
  },

  // ===== Workspace =====
  {
    id: '8',
    name: 'Search Analytics Workspace',
    description: 'Collaborative workspace for search ranking and CTR analysis',
    type: 'workspace',
    typeLabel: 'Workspace',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    extraField: { icon: 'box', label: 'Global' },
    dateUpdated: 'Updated 2024-10-30',
    tags: ['Platform', 'Search'],
    status: 'active'
  },
  {
    id: '9',
    name: 'Fraud Detection Lab',
    description: 'Experimentation workspace for fraud detection models',
    type: 'workspace',
    typeLabel: 'Workspace',
    domain: 'Payments',
    team: 'Trust & Safety Team',
    dateUpdated: 'Updated 2024-11-05',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '10',
    name: 'Pricing Intelligence Hub',
    description: 'Workspace for competitive pricing analysis and dynamic pricing models',
    type: 'workspace',
    typeLabel: 'Workspace',
    domain: 'Selling',
    team: 'Pricing Team',
    dateUpdated: 'Updated 2024-09-15',
    tags: ['Platform'],
    status: 'inactive'
  },

  // ===== More Datasets =====
  {
    id: '11',
    name: 'User Behavior Analytics',
    description: 'Clickstream and session data for user behavior analysis',
    type: 'dataset',
    typeLabel: 'Dataset',
    domain: 'Search & SEO',
    team: 'Data Science Team',
    extraField: { icon: 'key', label: 'session_id' },
    dateUpdated: 'Updated 2024-10-25',
    tags: ['Platform', 'Search', 'Core'],
    status: 'active'
  },
  {
    id: '12',
    name: 'Transaction History',
    description: 'Historical transaction records with payment and shipping details',
    type: 'dataset',
    typeLabel: 'Dataset',
    domain: 'Payments',
    team: 'Payments Team',
    extraField: { icon: 'box', label: 'Global' },
    dateUpdated: 'Updated 2024-11-01',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '13',
    name: 'Product Listing Feed',
    description: 'Real-time product listing data including pricing and availability',
    type: 'dataset',
    typeLabel: 'Dataset',
    domain: 'Selling',
    team: 'Catalog Team',
    extraField: { icon: 'ratio', label: 'Item' },
    dateUpdated: 'Updated 2024-10-18',
    tags: ['Platform', 'Search'],
    status: 'active'
  },

  // ===== Source Contract =====
  {
    id: '14',
    name: 'payment-gateway-events',
    description: 'Source contract for payment gateway webhook events',
    type: 'source-contract',
    typeLabel: 'Source Contract',
    domain: 'Payments',
    team: 'Payments Team',
    extraField: { icon: 'key', label: 'payment_id' },
    dateUpdated: 'Updated 2024-10-22',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '15',
    name: 'seller-activity-stream',
    description: 'Tracks seller listing, pricing, and inventory changes',
    type: 'source-contract',
    typeLabel: 'Source Contract',
    domain: 'Selling',
    team: 'Seller Experience Team',
    dateUpdated: 'Updated 2024-09-30',
    tags: ['Platform', 'Core'],
    status: 'active'
  },

  // ===== eBay Signal =====
  {
    id: '16',
    name: 'price-alert-signal',
    description: 'Real-time signal for price drop and competitive pricing alerts',
    type: 'ebay-signal',
    typeLabel: 'eBay Signal',
    domain: 'Selling',
    team: 'Pricing Team',
    extraField: { icon: 'ratio', label: 'Price' },
    dateUpdated: 'Updated 2024-11-03',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '17',
    name: 'buyer-intent-signal',
    description: 'Captures buyer purchase intent from search and browse patterns',
    type: 'ebay-signal',
    typeLabel: 'eBay Signal',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    extraField: { icon: 'key', label: 'buyer_id' },
    dateUpdated: 'Updated 2024-10-28',
    tags: ['Search', 'Core'],
    status: 'active'
  },

  // ===== Batch Pipeline =====
  {
    id: '18',
    name: 'daily-sales-aggregation',
    description: 'Aggregates daily sales data across all categories and regions',
    type: 'batch-pipeline',
    typeLabel: 'Batch Pipeline',
    domain: 'Selling',
    team: 'Data Engineering Team',
    extraField: { icon: 'zap', label: 'Daily' },
    dateUpdated: 'Updated 2024-10-29',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '19',
    name: 'weekly-seller-metrics',
    description: 'Computes weekly seller performance and compliance metrics',
    type: 'batch-pipeline',
    typeLabel: 'Batch Pipeline',
    domain: 'Selling',
    team: 'Trust & Safety Team',
    extraField: { icon: 'zap', label: 'Weekly' },
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Core', 'Search'],
    status: 'active'
  },
  {
    id: '20',
    name: 'monthly-revenue-report',
    description: 'Monthly revenue reconciliation and financial reporting pipeline',
    type: 'batch-pipeline',
    typeLabel: 'Batch Pipeline',
    domain: 'Payments',
    team: 'Finance Data Team',
    extraField: { icon: 'zap', label: 'Monthly' },
    dateUpdated: 'Updated 2024-11-01',
    tags: ['Payments'],
    status: 'active'
  },

  // ===== Streaming Pipeline =====
  {
    id: '21',
    name: 'realtime-bid-processing',
    description: 'Processes auction bids in real-time with sub-second latency',
    type: 'streaming-pipeline',
    typeLabel: 'Streaming Pipeline',
    domain: 'Selling',
    team: 'Auction Platform Team',
    extraField: { icon: 'zap', label: 'Real-time' },
    dateUpdated: 'Updated 2024-11-04',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '22',
    name: 'live-search-analytics',
    description: 'Streams search query analytics for real-time dashboard updates',
    type: 'streaming-pipeline',
    typeLabel: 'Streaming Pipeline',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    extraField: { icon: 'zap', label: 'Real-time' },
    dateUpdated: 'Updated 2024-10-20',
    tags: ['Platform', 'Search'],
    status: 'active'
  },
  {
    id: '23',
    name: 'click-stream-processor',
    description: 'Processes user clickstream data for session analysis and recommendations',
    type: 'streaming-pipeline',
    typeLabel: 'Streaming Pipeline',
    domain: 'Search & SEO',
    team: 'Data Science Team',
    extraField: { icon: 'key', label: 'session_id' },
    dateUpdated: 'Updated 2024-10-12',
    tags: ['Search', 'Core'],
    status: 'inactive'
  },

  // ===== ZeroETL =====
  {
    id: '24',
    name: 'cassandra-to-bigquery-sync',
    description: 'Zero-ETL replication from Cassandra to BigQuery for analytics',
    type: 'zero-etl',
    typeLabel: 'ZeroETL',
    domain: 'Search & SEO',
    team: 'Data Engineering Team',
    extraField: { icon: 'layers', label: 'Multi-table' },
    dateUpdated: 'Updated 2024-11-02',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '25',
    name: 'mysql-replication',
    description: 'Near real-time MySQL to data lake replication pipeline',
    type: 'zero-etl',
    typeLabel: 'ZeroETL',
    domain: 'Payments',
    team: 'Payments Team',
    dateUpdated: 'Updated 2024-10-18',
    tags: ['Core', 'Payments'],
    status: 'active'
  },

  // ===== Oracle Landing =====
  {
    id: '26',
    name: 'oracle-sales-extract',
    description: 'Daily extract from Oracle Sales Cloud to data warehouse',
    type: 'oracle-landing',
    typeLabel: 'Oracle Landing',
    domain: 'Selling',
    team: 'Data Engineering Team',
    extraField: { icon: 'zap', label: 'Daily' },
    dateUpdated: 'Updated 2024-10-25',
    tags: ['Platform'],
    status: 'active'
  },
  {
    id: '27',
    name: 'oracle-inventory-sync',
    description: 'Synchronizes inventory levels from Oracle ERP to analytics layer',
    type: 'oracle-landing',
    typeLabel: 'Oracle Landing',
    domain: 'Selling',
    team: 'Supply Chain Team',
    dateUpdated: 'Updated 2024-10-10',
    tags: ['Platform', 'Core'],
    status: 'inactive'
  },
  {
    id: '28',
    name: 'oracle-user-data-landing',
    description: 'Lands Oracle user profile and preference data for personalization',
    type: 'oracle-landing',
    typeLabel: 'Oracle Landing',
    domain: 'Search & SEO',
    team: 'Data Governance Team',
    extraField: { icon: 'key', label: 'user_id' },
    dateUpdated: 'Updated 2024-11-05',
    tags: ['Core', 'Search'],
    status: 'active'
  },

  // ===== Data Retention =====
  {
    id: '29',
    name: 'pii-data-cleanup',
    description: 'Automated PII data purging per GDPR and CCPA compliance policies',
    type: 'data-retention',
    typeLabel: 'Data Retention',
    domain: 'Payments',
    team: 'Data Governance Team',
    extraField: { icon: 'zap', label: 'Daily' },
    dateUpdated: 'Updated 2024-10-30',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '30',
    name: 'log-rotation-policy',
    description: 'Manages application log retention and archival schedules',
    type: 'data-retention',
    typeLabel: 'Data Retention',
    domain: 'Search & SEO',
    team: 'SRE Team',
    extraField: { icon: 'zap', label: 'Weekly' },
    dateUpdated: 'Updated 2024-09-20',
    tags: ['Platform'],
    status: 'active'
  },
  {
    id: '31',
    name: 'archive-old-listings',
    description: 'Archives expired product listings older than 90 days',
    type: 'data-retention',
    typeLabel: 'Data Retention',
    domain: 'Selling',
    team: 'Catalog Team',
    dateUpdated: 'Updated 2024-10-05',
    tags: ['Platform', 'Core'],
    status: 'inactive'
  },

  // ===== Data Quality =====
  {
    id: '32',
    name: 'address-validation',
    description: 'Validates and normalizes shipping addresses across all orders',
    type: 'data-quality',
    typeLabel: 'Data Quality',
    domain: 'Payments',
    team: 'Data Quality Team',
    extraField: { icon: 'box', label: 'Global' },
    dateUpdated: 'Updated 2024-11-01',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '33',
    name: 'product-data-integrity',
    description: 'Checks product listings for missing fields, duplicates, and anomalies',
    type: 'data-quality',
    typeLabel: 'Data Quality',
    domain: 'Selling',
    team: 'Data Quality Team',
    extraField: { icon: 'ratio', label: 'Item' },
    dateUpdated: 'Updated 2024-10-22',
    tags: ['Platform', 'Search'],
    status: 'active'
  },

  // ===== Inference Service =====
  {
    id: '34',
    name: 'Search Ranking Model',
    description: 'ML model for search result ranking and relevance scoring',
    type: 'inference-service',
    typeLabel: 'Inference Service',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    version: 'v3.2.0',
    extraField: { icon: 'key', label: 'query_id' },
    dateUpdated: 'Updated 2024-11-04',
    tags: ['Platform', 'Search', 'Core'],
    status: 'active'
  },
  {
    id: '35',
    name: 'Fraud Detection Service',
    description: 'Real-time fraud scoring for transactions and account activities',
    type: 'inference-service',
    typeLabel: 'Inference Service',
    domain: 'Payments',
    team: 'Trust & Safety Team',
    version: 'v2.0.1',
    extraField: { icon: 'key', label: 'txn_id' },
    dateUpdated: 'Updated 2024-10-28',
    tags: ['Core', 'Payments'],
    status: 'active'
  },
  {
    id: '36',
    name: 'Image Recognition Service',
    description: 'Classifies and tags product images for search optimization',
    type: 'inference-service',
    typeLabel: 'Inference Service',
    domain: 'Search & SEO',
    team: 'AI/ML Team',
    version: 'v1.5.3',
    dateUpdated: 'Updated 2024-10-15',
    tags: ['Platform', 'Search'],
    status: 'active'
  },

  // ===== Spark SQL =====
  {
    id: '37',
    name: 'seller-revenue-analysis',
    description: 'Spark SQL notebook for seller revenue trends and forecasting',
    type: 'spark-sql',
    typeLabel: 'Spark SQL',
    domain: 'Selling',
    team: 'Data Science Team',
    extraField: { icon: 'key', label: 'seller_id' },
    dateUpdated: 'Updated 2024-10-30',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '38',
    name: 'search-ctr-analytics',
    description: 'Analyzes search click-through rates and conversion funnels',
    type: 'spark-sql',
    typeLabel: 'Spark SQL',
    domain: 'Search & SEO',
    team: 'Search Platform Team',
    dateUpdated: 'Updated 2024-10-20',
    tags: ['Search', 'Core'],
    status: 'active'
  },
  {
    id: '39',
    name: 'category-performance-report',
    description: 'Generates category-level GMV and listing performance metrics',
    type: 'spark-sql',
    typeLabel: 'Spark SQL',
    domain: 'Selling',
    team: 'Catalog Team',
    dateUpdated: 'Updated 2024-09-25',
    tags: ['Platform'],
    status: 'inactive'
  },

  // ===== Flink SQL =====
  {
    id: '40',
    name: 'realtime-price-monitoring',
    description: 'Flink SQL job for real-time price change detection and alerting',
    type: 'flink-sql',
    typeLabel: 'Flink SQL',
    domain: 'Selling',
    team: 'Pricing Team',
    extraField: { icon: 'zap', label: 'Real-time' },
    dateUpdated: 'Updated 2024-11-05',
    tags: ['Platform', 'Core'],
    status: 'active'
  },
  {
    id: '41',
    name: 'live-auction-analytics',
    description: 'Real-time analytics for active auction bidding patterns',
    type: 'flink-sql',
    typeLabel: 'Flink SQL',
    domain: 'Selling',
    team: 'Auction Platform Team',
    extraField: { icon: 'zap', label: 'Real-time' },
    dateUpdated: 'Updated 2024-10-22',
    tags: ['Core', 'Search'],
    status: 'active'
  },
  {
    id: '42',
    name: 'session-window-aggregator',
    description: 'Aggregates user sessions in tumbling windows for behavior analysis',
    type: 'flink-sql',
    typeLabel: 'Flink SQL',
    domain: 'Search & SEO',
    team: 'Data Science Team',
    extraField: { icon: 'key', label: 'session_id' },
    dateUpdated: 'Updated 2024-10-18',
    tags: ['Search', 'Platform'],
    status: 'active'
  },
];

// Extra field icon component
function ExtraFieldIcon({ icon }: { icon: string }) {
  const size = 12;
  const cls = "text-[#717182]";
  switch (icon) {
    case 'box': return (
      <div className="relative group/box">
        <Box size={size} className={cls} />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover/box:opacity-100 transition-opacity duration-150 z-50">
          Namespace
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
        </div>
      </div>
    );
    case 'key': return (
      <div className="relative group/key">
        <Key size={size} className={cls} />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover/key:opacity-100 transition-opacity duration-150 z-50">
          Primary Key
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
        </div>
      </div>
    );
    case 'ratio': return (
      <div className="relative group/ratio">
        <Ratio size={size} className={cls} />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover/ratio:opacity-100 transition-opacity duration-150 z-50">
          Entity
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
        </div>
      </div>
    );
    case 'zap': return (
      <div className="relative group/zap">
        <Zap size={size} className={cls} />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover/zap:opacity-100 transition-opacity duration-150 z-50">
          Scheduled Run Time
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
        </div>
      </div>
    );
    case 'layers': return <Layers size={size} className={cls} />;
    default: return <Box size={size} className={cls} />;
  }
}

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [resourceTypes, setResourceTypes] = useState(MOCK_RESOURCE_TYPES);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagSearch, setTagSearch] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  // Derived state for unique values
  const uniqueTags = Array.from(new Set(MOCK_RESOURCES.flatMap(r => r.tags)));
  const uniqueDomains = Array.from(new Set(MOCK_RESOURCES.map(r => r.domain))).sort();
  const uniqueProjects = Array.from(new Set(MOCK_RESOURCES.map(r => r.team))).sort();

  // Tag count map
  const tagCountMap = uniqueTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = MOCK_RESOURCES.filter(r => r.tags.includes(tag)).length;
    return acc;
  }, {});

  // Tags sorted by popularity descending
  const sortedTags = [...uniqueTags].sort((a, b) => (tagCountMap[b] ?? 0) - (tagCountMap[a] ?? 0));

  // Toggle functions for multi-select filters
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev =>
      prev.includes(domain)
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };

  const toggleProject = (project: string) => {
    setSelectedProjects(prev =>
      prev.includes(project)
        ? prev.filter(p => p !== project)
        : [...prev, project]
    );
  };

  const toggleResourceType = (id: string) => {
    setResourceTypes(prev =>
      prev.map(type =>
        type.id === id ? { ...type, isExpanded: !type.isExpanded } : type
      )
    );
  };

  // Multi-select: toggle a single child type
  const toggleChildType = (childId: string) => {
    setSelectedTypes(prev =>
      prev.includes(childId)
        ? prev.filter(t => t !== childId)
        : [...prev, childId]
    );
  };

  // Multi-select: toggle all children of a parent
  const toggleParentType = (parentId: string) => {
    const parent = MOCK_RESOURCE_TYPES.find(t => t.id === parentId);
    if (!parent?.children) return;
    const childIds = parent.children.map(c => c.id);
    const allSelected = childIds.every(id => selectedTypes.includes(id));
    if (allSelected) {
      // Deselect all children
      setSelectedTypes(prev => prev.filter(t => !childIds.includes(t)));
    } else {
      // Select all children
      setSelectedTypes(prev => [...new Set([...prev, ...childIds])]);
    }
  };

  // Check parent checkbox state
  const getParentCheckState = (parentId: string): 'checked' | 'indeterminate' | 'unchecked' => {
    const parent = MOCK_RESOURCE_TYPES.find(t => t.id === parentId);
    if (!parent?.children) return 'unchecked';
    const childIds = parent.children.map(c => c.id);
    const selectedCount = childIds.filter(id => selectedTypes.includes(id)).length;
    if (selectedCount === 0) return 'unchecked';
    if (selectedCount === childIds.length) return 'checked';
    return 'indeterminate';
  };

  // Remove a single type from selection
  const removeSelectedType = (typeId: string) => {
    setSelectedTypes(prev => prev.filter(t => t !== typeId));
  };

  // Clear all type filters
  const clearAllFilters = () => {
    setSelectedTypes([]);
  };

  // Get display name for a child type id
  const getTypeName = (typeId: string): string => {
    for (const parent of MOCK_RESOURCE_TYPES) {
      if (parent.children) {
        const child = parent.children.find(c => c.id === typeId);
        if (child) return child.name;
      }
    }
    return typeId;
  };

  const getIcon = (id: string) => {
    const IconComponent = ICON_MAP[id];
    return IconComponent ? <IconComponent /> : null;
  };

  // Filter Logic
  const filteredResources = MOCK_RESOURCES.filter(resource => {
    // Search Filter
    const matchesSearch = 
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Type Filter (multi-select)
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(resource.type);

    // Domain Filter
    const matchesDomain = selectedDomains.length === 0 || selectedDomains.includes(resource.domain);

    // Project/Team Filter
    const matchesProject = selectedProjects.length === 0 || selectedProjects.includes(resource.team);

    // Tag Filter
    const matchesTags = 
      selectedTags.length === 0 || 
      resource.tags.some(tag => selectedTags.includes(tag));

    return matchesSearch && matchesType && matchesDomain && matchesProject && matchesTags;
  });

  return (
    <div className="flex h-full bg-white">
      {/* Left Sidebar - Filters */}
      <div className="w-[320px] bg-[#fafafa] border-r border-[#ebebeb] flex flex-col">
        {/* Header */}
        <div className="border-b border-[#ebebeb] flex flex-col gap-[2px] px-[16px] py-[12px]">
          <h3 className="font-['Geist:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#252525] tracking-[-0.3125px]">
            Resource Types
          </h3>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
            Select types to filter
          </p>
        </div>

        {/* Resource Type List */}
        <div className="flex-1 overflow-y-auto px-[12px] pt-[12px]">
          <div className="flex flex-col gap-[2px]">
            {resourceTypes.map((type) => {
              const parentState = getParentCheckState(type.id);
              return (
                <div key={type.id} className="flex flex-col gap-[2px]">
                  {/* Main Type (parent category) */}
                  <div
                    className={cn(
                      "w-full flex items-center gap-[8px] px-[8px] h-[32px] rounded-[8px] hover:bg-[#f5f5f5] transition-colors group cursor-pointer shrink-0",
                      parentState !== 'unchecked' && "bg-[#f0f0f3]"
                    )}
                  >
                    {type.children && (
                      <div
                        onClick={() => toggleResourceType(type.id)}
                        className="shrink-0 flex items-center"
                      >
                        <ChevronRight
                          size={14}
                          className={`text-[#717182] transition-transform shrink-0 ${type.isExpanded ? 'rotate-90' : ''}`}
                        />
                      </div>
                    )}
                    {!type.children && <div className="w-[14px] shrink-0" />}
                    <Checkbox
                      checked={parentState === 'checked' ? true : parentState === 'indeterminate' ? 'indeterminate' : false}
                      onCheckedChange={() => toggleParentType(type.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 size-[18px] rounded-[4px] border-[rgba(0,0,0,0.1)] data-[state=checked]:bg-[#0968F6] data-[state=checked]:border-[#0968F6] data-[state=indeterminate]:bg-[#0968F6] data-[state=indeterminate]:border-[#0968F6] cursor-pointer"
                    />
                    <div
                      onClick={() => { if (type.children) toggleResourceType(type.id); }}
                      className="flex-1 flex items-center gap-[8px] cursor-pointer"
                    >
                      {getIcon(type.id)}
                      <span className="flex-1 text-left font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#252525] tracking-[-0.1504px]">
                        {type.name}
                      </span>
                    </div>
                    {type.count > 0 && (
                      <span className="bg-[#f2f2f5] rounded-[10px] px-[7px] py-px font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#030213] shrink-0">
                        {type.count}
                      </span>
                    )}
                  </div>

                  {/* Children */}
                  {type.children && type.isExpanded && (
                    <div className="w-full pl-[48px] flex flex-col gap-[2px]">
                      {type.children.map((child) => (
                        <div
                          key={child.id}
                          onClick={() => toggleChildType(child.id)}
                          className={cn(
                            "w-full flex items-center gap-[8px] px-[8px] h-[26px] rounded-[8px] hover:bg-[#f5f5f5] transition-colors cursor-pointer shrink-0",
                            selectedTypes.includes(child.id) && "bg-[#e8e8ec]"
                          )}
                        >
                          {/* Checkbox */}
                          <Checkbox
                            checked={selectedTypes.includes(child.id)}
                            onCheckedChange={() => toggleChildType(child.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 size-[18px] rounded-[4px] border-[rgba(0,0,0,0.1)] data-[state=checked]:bg-[#0968F6] data-[state=checked]:border-[#0968F6] cursor-pointer"
                          />
                          {getIcon(child.id)}
                          <span className="flex-1 text-left font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#252525]">
                            {child.name}
                          </span>
                          <span className="bg-[#f2f2f5] rounded-[10px] px-[7px] py-px font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#030213] shrink-0">
                            {child.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear All Filters */}
        {selectedTypes.length > 0 && (
          <div className="border-t border-[#ebebeb] px-[12px] pt-[13px] pb-[12px]">
            <button
              onClick={clearAllFilters}
              className="w-full h-[32px] bg-white rounded-[8px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center gap-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            >
              <X size={16} strokeWidth={1.33} className="text-[#252525]" />
              <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#252525] tracking-[-0.1504px]">
                Clear All Filters
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-6 pb-4">
          <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] leading-[1.5] text-[#0a0a0a] tracking-[0.12px] mb-1">
            Catalog
          </h1>
          <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
            Browse and discover {filteredResources.length} resource instances
          </p>
        </div>

        {/* Search and Filters */}
        <div className="px-8 pb-4">
          <div className="flex flex-col gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resource instances... (e.g., 'search ranking model', 'user transaction tables')"
                className="w-full bg-[#f3f3f5] rounded-[10px] pl-10 pr-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#252525] tracking-[-0.1504px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[#0968F6] placeholder:text-[#717182]"
              />
            </div>

            {/* Filter Row */}
            <div className="flex items-center gap-[16px] flex-wrap">
              {/* All Domains - Multi-select Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="bg-[#f3f3f5] h-[36px] rounded-[10px] flex items-center gap-[8px] pl-[13px] pr-[13px] relative hover:bg-[#eaeaee] transition-colors cursor-pointer shrink-0">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] inset-0 pointer-events-none rounded-[10px]" />
                    <DomainIcon size={16} />
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#252525] tracking-[-0.1504px]">
                      {selectedDomains.length > 0 ? `Domains (${selectedDomains.length})` : 'All Domains'}
                    </span>
                    <svg className="block shrink-0 size-[16px] opacity-50" fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3" align="start">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#e5e5e5]">
                      <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#252525]">Domains</h4>
                      {selectedDomains.length > 0 && (
                        <button onClick={() => setSelectedDomains([])} className="font-['Geist:Regular',sans-serif] text-[12px] text-[#0968F6] hover:underline cursor-pointer">
                          Clear all
                        </button>
                      )}
                    </div>
                    <div className="space-y-1 max-h-[240px] overflow-y-auto">
                      {uniqueDomains.map(domain => (
                        <div
                          key={domain}
                          onClick={() => toggleDomain(domain)}
                          className="flex items-center gap-[8px] px-[4px] h-[30px] rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                        >
                          <Checkbox
                            checked={selectedDomains.includes(domain)}
                            onCheckedChange={() => toggleDomain(domain)}
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 size-[16px] rounded-[4px] border-[rgba(0,0,0,0.1)] data-[state=checked]:bg-[#0968F6] data-[state=checked]:border-[#0968F6] cursor-pointer"
                          />
                          <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] leading-[20px] text-[#252525] cursor-pointer">
                            {domain}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* All Projects - Multi-select Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="bg-[#f3f3f5] h-[36px] rounded-[10px] flex items-center gap-[8px] pl-[13px] pr-[13px] relative hover:bg-[#eaeaee] transition-colors cursor-pointer shrink-0">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] inset-0 pointer-events-none rounded-[10px]" />
                    <svg className="block shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={toolbarSvgPaths.p1c647980} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={toolbarSvgPaths.p13d22180} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#252525] tracking-[-0.1504px]">
                      {selectedProjects.length > 0 ? `Projects (${selectedProjects.length})` : 'All Projects'}
                    </span>
                    <svg className="block shrink-0 size-[16px] opacity-50" fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3" align="start">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#e5e5e5]">
                      <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#252525]">Projects</h4>
                      {selectedProjects.length > 0 && (
                        <button onClick={() => setSelectedProjects([])} className="font-['Geist:Regular',sans-serif] text-[12px] text-[#0968F6] hover:underline cursor-pointer">
                          Clear all
                        </button>
                      )}
                    </div>
                    <div className="space-y-1 max-h-[240px] overflow-y-auto">
                      {uniqueProjects.map(project => (
                        <div
                          key={project}
                          onClick={() => toggleProject(project)}
                          className="flex items-center gap-[8px] px-[4px] h-[30px] rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                        >
                          <Checkbox
                            checked={selectedProjects.includes(project)}
                            onCheckedChange={() => toggleProject(project)}
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 size-[16px] rounded-[4px] border-[rgba(0,0,0,0.1)] data-[state=checked]:bg-[#0968F6] data-[state=checked]:border-[#0968F6] cursor-pointer"
                          />
                          <span className="font-['Geist:Regular',sans-serif] font-normal text-[13px] leading-[20px] text-[#252525] cursor-pointer">
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Filter by Tags - Multi-select Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="bg-[#f3f3f5] h-[36px] rounded-[10px] flex items-center gap-[8px] pl-[13px] pr-[13px] relative hover:bg-[#eaeaee] transition-colors cursor-pointer shrink-0">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] inset-0 pointer-events-none rounded-[10px]" />
                    <svg className="block shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip_tag)">
                        <path d={toolbarSvgPaths.p9bc8e70} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={toolbarSvgPaths.p8247300} fill="#717182" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                      <defs>
                        <clipPath id="clip_tag">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#252525] tracking-[-0.1504px]">
                      {selectedTags.length > 0 ? `Tags (${selectedTags.length})` : 'Filter by Tags'}
                    </span>
                    <svg className="block shrink-0 size-[16px] opacity-50" fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3" align="start">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2">
                      <h4 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#252525]">Popular Tags</h4>
                      {selectedTags.length > 0 && (
                        <button onClick={() => setSelectedTags([])} className="font-['Geist:Regular',sans-serif] text-[12px] text-[#0968F6] hover:underline cursor-pointer">
                          Clear all
                        </button>
                      )}
                    </div>
                    {/* Search bar */}
                    <div className="relative">
                      <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search tags..."
                        value={tagSearch}
                        onChange={e => setTagSearch(e.target.value)}
                        className="w-full pl-[26px] pr-2 py-1.5 text-[12px] font-['Geist:Regular',sans-serif] text-[#0a0a0a] placeholder:text-[#737373] bg-white border border-[#e5e5e5] rounded-[6px] outline-none focus:border-[#0968F6] transition-colors"
                      />
                    </div>
                    <div className="space-y-0.5 max-h-[220px] overflow-y-auto">
                      {sortedTags.filter(tag => tag.toLowerCase().includes(tagSearch.toLowerCase())).map(tag => (
                        <div
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className="flex items-center gap-[8px] px-[4px] h-[30px] rounded-[6px] hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                        >
                          <Checkbox
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 size-[16px] rounded-[4px] border-[rgba(0,0,0,0.1)] data-[state=checked]:bg-[#0968F6] data-[state=checked]:border-[#0968F6] cursor-pointer"
                          />
                          <span className="flex-1 font-['Geist:Regular',sans-serif] font-normal text-[13px] leading-[20px] text-[#252525] cursor-pointer truncate">
                            {tag}
                          </span>
                          <span className="bg-[#f2f2f5] rounded-[10px] px-[7px] py-px font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#030213] shrink-0">
                            {tagCountMap[tag] ?? 0}
                          </span>
                        </div>
                      ))}
                      {sortedTags.filter(tag => tag.toLowerCase().includes(tagSearch.toLowerCase())).length === 0 && (
                        <p className="text-center text-[12px] font-['Geist:Regular',sans-serif] text-[#737373] py-3">No tags found</p>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Active type filter chips */}
              {selectedTypes.length > 0 && (
                <div className="flex items-center gap-[6px] flex-wrap">
                  <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182] shrink-0">
                    Types:
                  </span>
                  <div className="w-px h-[11px] bg-[rgba(0,0,0,0.1)] shrink-0" />
                  {selectedTypes.map((typeId) => (
                    <button
                      key={typeId}
                      onClick={() => removeSelectedType(typeId)}
                      className="flex items-center gap-[4px] bg-[#f2f2f5] rounded-[10px] px-[8px] py-[3px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#030213] border border-transparent hover:bg-[#eaeaee] transition-colors cursor-pointer"
                    >
                      {getTypeName(typeId)}
                      <X size={12} strokeWidth={1} className="text-[#030213]" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resource List */}
        <div className="flex-1 overflow-y-auto px-8 pb-6">
          {filteredResources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-[#737373]">
              <p className="font-['Geist:Medium',sans-serif] mb-2">No resources found</p>
              <p className="font-['Geist:Regular',sans-serif] text-sm">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredResources.map((resource) => {
                const CardIcon = CARD_ICON_MAP[resource.type] || Database;
                const typeColor = getTypeColor(resource.type);
                return (
                  <div
                    key={resource.id}
                    className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[12px] px-[17px] pt-[17px] pb-[14px] hover:shadow-sm transition-shadow"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Type Icon Box */}
                      <div
                        className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0"
                        style={{ backgroundColor: typeColor.bg }}
                      >
                        <div
                          className="size-[20px] [&>div]:size-full [&>div>svg]:size-full [&_path[stroke]]:stroke-current [&_path[fill]]:fill-current"
                          style={{ color: typeColor.icon }}
                        >
                          {getIcon(resource.type)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col gap-2">
                        {/* Row 1: Title + Status + Link */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            {/* Title + Version */}
                            <div className="flex items-center gap-2">
                              <h3 className="font-['Geist:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#252525] tracking-[-0.3125px] truncate">
                                {resource.name}
                              </h3>
                              {resource.version && (
                                <span className="shrink-0 rounded-[10px] border border-[rgba(0,0,0,0.1)] px-[9px] py-[3px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#252525]">
                                  {resource.version}
                                </span>
                              )}
                            </div>
                            {/* Description */}
                            <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#717182] tracking-[-0.1504px] truncate mt-1">
                              {resource.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-4 shrink-0">
                            <span className={cn(
                              "rounded-[10px] px-[9px] py-[3px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px]",
                              resource.status === 'active'
                                ? 'bg-[rgba(0,201,80,0.1)] text-[#00a63e] border border-[rgba(0,201,80,0.2)]'
                                : 'bg-[rgba(106,114,130,0.1)] text-[#4a5565] border border-[rgba(106,114,130,0.2)]'
                            )}>
                              {resource.status}
                            </span>
                            <button className="p-1 hover:bg-[#f5f5f5] rounded-md transition-colors cursor-pointer">
                              <ExternalLink size={16} className="text-[#717182]" />
                            </button>
                          </div>
                        </div>

                        {/* Row 2: Metadata inline */}
                        <div className="flex items-center gap-4 flex-wrap">
                          {/* Type */}
                          <div className="flex items-center gap-1">
                            <div className="relative group">
                              <div className="shrink-0" style={{ width: 12, height: 12 }}>
                                <div className="size-full [&>div]:size-full [&>div>svg]:size-full">
                                  {getIcon(resource.type)}
                                </div>
                              </div>
                              {/* Tooltip */}
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                                Type
                                {/* Arrow */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#0a0a0a]" />
                              </div>
                            </div>
                            <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                              {resource.typeLabel}
                            </span>
                          </div>
                          {/* Domain */}
                          <div className="flex items-center gap-1">
                            <div className="relative group">
                              <DomainIcon size={12} />
                              {/* Tooltip */}
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                                Domain
                                <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#0a0a0a]" />
                              </div>
                            </div>
                            <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                              {resource.domain}
                            </span>
                          </div>
                          {/* Team */}
                          <div className="flex items-center gap-1">
                            <div className="relative group">
                              <Users size={12} className="text-[#717182]" />
                              {/* Tooltip */}
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                                Team
                                <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-[#0a0a0a]" />
                              </div>
                            </div>
                            <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                              {resource.team}
                            </span>
                          </div>
                          {/* Extra Field */}
                          {resource.extraField && (
                            <div className="flex items-center gap-1">
                              <ExtraFieldIcon icon={resource.extraField.icon} />
                              <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                                {resource.extraField.label}
                              </span>
                            </div>
                          )}
                          {/* Date */}
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#717182]" />
                            <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                              {resource.dateUpdated}
                            </span>
                          </div>
                        </div>

                        {/* Row 3: Tags */}
                        {resource.tags.length > 0 && (
                          <div className="flex items-center gap-[8px]">
                            {resource.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[#f2f2f5] rounded-[10px] px-[9px] py-[3px] font-['Geist:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#030213] border border-[rgba(0,0,0,0)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}