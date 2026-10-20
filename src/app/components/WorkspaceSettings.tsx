import { useState } from 'react';
import { X, ChevronDown, Pencil } from 'lucide-react';

// Mock user data
const MOCK_USERS = [
  {
    id: '1',
    name: 'Kathryn Murphy',
    email: 'kathryn@ebay.com',
    avatar: '',
    initials: 'KM',
    color: '#FFB4D1',
    role: 'Admin' as const
  },
  {
    id: '2',
    name: 'Jacob Jones',
    email: 'jacobjo@ebay.com',
    avatar: '',
    initials: 'JJ',
    color: '#84B4FB',
    role: 'Developer' as const
  },
  {
    id: '3',
    name: 'Emily Warner',
    email: 'ewarner@ebay.com',
    avatar: '',
    initials: 'EW',
    color: '#FFD4C0',
    role: 'Developer' as const
  },
  {
    id: '4',
    name: 'Emillio Tsy',
    email: 'etsy@ebay.com',
    avatar: '',
    initials: 'ET',
    color: '#D1FAE5',
    role: 'Developer' as const
  },
  {
    id: '5',
    name: 'Ralph Edwards',
    email: 'ralphed@ebay.com',
    avatar: '',
    initials: 'RE',
    color: '#84B4FB',
    role: 'Developer' as const
  },
  {
    id: '6',
    name: 'Ronald Richards',
    email: 'ronaldr@ebay.com',
    avatar: '',
    initials: 'RR',
    color: '#FFB4D1',
    role: 'Developer' as const
  },
  {
    id: '7',
    name: 'Arlene McCoy',
    email: 'arlenemc@ebay.com',
    avatar: '',
    initials: 'AM',
    color: '#D1FAE5',
    role: 'Developer' as const
  },
  {
    id: '8',
    name: 'Jacob Jones',
    email: 'jacobjo@ebay.com',
    avatar: '',
    initials: 'JJ',
    color: '#FFD4C0',
    role: 'Developer' as const
  }
];

interface SettingsFormData {
  name: string;
  dl: string;
  domain: string;
  dedicatedTeam: string;
  jira: string;
  description: string;
}

export function WorkspaceSettings() {
  const [generalForm, setGeneralForm] = useState<SettingsFormData>({
    name: 'Workspace name',
    dl: 'dl-name',
    domain: 'Domain name',
    dedicatedTeam: 'Dedicated Team',
    jira: 'Jira',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  });
  const [isGeneralEditing, setIsGeneralEditing] = useState(false);
  const [generalFormDraft, setGeneralFormDraft] = useState<SettingsFormData>({ ...generalForm });

  const [rolePermission, setRolePermission] = useState<string>('viewer');
  const [rolePermissionDraft, setRolePermissionDraft] = useState<string>('viewer');
  const [isRoleEditing, setIsRoleEditing] = useState(false);

  const [users, setUsers] = useState(MOCK_USERS);
  const [usersDraft, setUsersDraft] = useState(MOCK_USERS);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'Admin' | 'Developer'>('Admin');
  const [selectedUsers, setSelectedUsers] = useState<string[]>(['1']);
  const [isAdminEditing, setIsAdminEditing] = useState(false);
  const [isAdminExpanded, setIsAdminExpanded] = useState(true);

  const handleGeneralChange = (field: keyof SettingsFormData, value: string) => {
    setGeneralForm(prev => ({ ...prev, [field]: value }));
  };

  const handleGeneralDraftChange = (field: keyof SettingsFormData, value: string) => {
    setGeneralFormDraft(prev => ({ ...prev, [field]: value }));
  };

  const handleGeneralSave = () => {
    setGeneralForm(generalFormDraft);
    setIsGeneralEditing(false);
  };

  const handleGeneralCancel = () => {
    setGeneralFormDraft(generalForm);
    setIsGeneralEditing(false);
  };

  const handleRoleSave = () => {
    setRolePermission(rolePermissionDraft);
    setIsRoleEditing(false);
  };

  const handleRoleCancel = () => {
    setRolePermissionDraft(rolePermission);
    setIsRoleEditing(false);
  };

  const handleUserRoleChange = (userId: string, newRole: 'Admin' | 'Developer') => {
    setUsersDraft(prev => prev.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const handleAdminSave = () => {
    setUsers(usersDraft);
    setIsAdminEditing(false);
  };

  const handleAdminCancel = () => {
    setUsersDraft(users);
    setNewUserEmail('');
    setIsAdminEditing(false);
  };

  const removeSelectedUser = (userId: string) => {
    setSelectedUsers(prev => prev.filter(id => id !== userId));
  };

  const roleLabel: Record<string, string> = {
    viewer: 'Viewer',
    editor: 'Editor',
    admin: 'Admin',
    '': '—',
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* General Information Card */}
      <div className="bg-white rounded-[12px] border border-[rgba(0,0,0,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        {/* Card Header */}
        <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)] flex items-start justify-between">
          <div>
            <h3 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] mb-1">
              General Information
            </h3>
            <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
              Basic workspace settings and information.
            </p>
          </div>
          {!isGeneralEditing ? (
            <button
              onClick={() => { setGeneralFormDraft(generalForm); setIsGeneralEditing(true); }}
              className="flex items-center gap-1.5 bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <Pencil size={14} className="text-[#737373]" />
              Edit
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleGeneralCancel}
                className="bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleGeneralSave}
                className="bg-[#0968F6] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-white tracking-[0.07px] hover:bg-[#0757d4] transition-colors cursor-pointer"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                {isGeneralEditing && <span className="text-red-500">*</span>} Name
              </label>
              {isGeneralEditing ? (
                <input
                  type="text"
                  value={generalFormDraft.name}
                  onChange={(e) => handleGeneralDraftChange('name', e.target.value)}
                  placeholder="(Workspace name)"
                  className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] placeholder:text-[#737373]"
                />
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.name || <span className="text-[#737373]">(Workspace name)</span>}
                </p>
              )}
            </div>

            {/* DL */}
            <div className="flex flex-col gap-1">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                {isGeneralEditing && <span className="text-red-500">*</span>} DL
              </label>
              {isGeneralEditing ? (
                <input
                  type="text"
                  value={generalFormDraft.dl}
                  onChange={(e) => handleGeneralDraftChange('dl', e.target.value)}
                  placeholder="(dl-name)"
                  className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] placeholder:text-[#737373]"
                />
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.dl || <span className="text-[#737373]">(dl-name)</span>}
                </p>
              )}
            </div>

            {/* Domain */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                {isGeneralEditing && <span className="text-red-500">*</span>} Domain
              </label>
              {isGeneralEditing ? (
                <div className="relative">
                  <select
                    value={generalFormDraft.domain}
                    onChange={(e) => handleGeneralDraftChange('domain', e.target.value)}
                    className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] appearance-none cursor-pointer pr-10"
                  >
                    <option>(Domain name)</option>
                    <option>Search</option>
                    <option>Recommendations</option>
                    <option>Analytics</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] opacity-50 pointer-events-none" />
                </div>
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.domain || <span className="text-[#737373]">(Domain name)</span>}
                </p>
              )}
            </div>

            {/* Dedicated Team */}
            <div className="flex flex-col gap-1">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Dedicated Team
              </label>
              {isGeneralEditing ? (
                <input
                  type="text"
                  value={generalFormDraft.dedicatedTeam}
                  onChange={(e) => handleGeneralDraftChange('dedicatedTeam', e.target.value)}
                  placeholder="(Dedicated Team)"
                  className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] placeholder:text-[#737373]"
                />
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.dedicatedTeam || <span className="text-[#737373]">(Dedicated Team)</span>}
                </p>
              )}
            </div>

            {/* Jira */}
            <div className="flex flex-col gap-1">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Jira
              </label>
              {isGeneralEditing ? (
                <input
                  type="text"
                  value={generalFormDraft.jira}
                  onChange={(e) => handleGeneralDraftChange('jira', e.target.value)}
                  placeholder="(Jira)"
                  className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] placeholder:text-[#737373]"
                />
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.jira || <span className="text-[#737373]">(Jira)</span>}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Description
              </label>
              {isGeneralEditing ? (
                <textarea
                  value={generalFormDraft.description}
                  onChange={(e) => handleGeneralDraftChange('description', e.target.value)}
                  rows={4}
                  className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] resize-none"
                />
              ) : (
                <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                  {generalForm.description || <span className="text-[#737373]">No description provided.</span>}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Role Permission Card */}
      <div className="bg-white rounded-[12px] border border-[rgba(0,0,0,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        {/* Card Header */}
        <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)] flex items-start justify-between">
          <div>
            <h3 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] mb-1">
              Role Permission
            </h3>
            <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
              Configure role-based access control.
            </p>
          </div>
          {!isRoleEditing ? (
            <button
              onClick={() => { setRolePermissionDraft(rolePermission); setIsRoleEditing(true); }}
              className="flex items-center gap-1.5 bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <Pencil size={14} className="text-[#737373]" />
              Edit
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleRoleCancel}
                className="bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleRoleSave}
                className="bg-[#0968F6] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-white tracking-[0.07px] hover:bg-[#0757d4] transition-colors cursor-pointer"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="px-6 py-6">
          {isRoleEditing ? (
            <div className="flex flex-col gap-2">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Role Permission
              </label>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <select
                    value={rolePermissionDraft}
                    onChange={(e) => setRolePermissionDraft(e.target.value)}
                    className="w-full bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] appearance-none cursor-pointer pr-10"
                  >
                    <option value="">Please select...</option>
                    <option value="viewer">Viewer</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] opacity-50 pointer-events-none" />
                </div>
                <button className="text-[#0968F6] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] tracking-[0.07px] hover:underline whitespace-nowrap cursor-pointer">
                  Unbind
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <label className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Role Permission
              </label>
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                {roleLabel[rolePermission] || <span className="text-[#737373]">—</span>}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Admins & Developers Card */}
      <div className="bg-white rounded-[12px] border border-[rgba(0,0,0,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        {/* Card Header */}
        <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)] flex items-start justify-between">
          <button
            onClick={() => setIsAdminExpanded(!isAdminExpanded)}
            className="flex items-center gap-2 flex-1 text-left"
          >
            <ChevronDown
              size={16}
              className={`text-[#0a0a0a] transition-transform shrink-0 ${isAdminExpanded ? '' : '-rotate-90'}`}
            />
            <div>
              <h3 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] mb-1">
                Admins & Developers ({users.length})
              </h3>
              <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                Manage workspace members and their roles.
              </p>
            </div>
          </button>
          {!isAdminEditing ? (
            <button
              onClick={() => { setUsersDraft(users); setIsAdminEditing(true); }}
              className="flex items-center gap-1.5 bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer shrink-0"
            >
              <Pencil size={14} className="text-[#737373]" />
              Edit
            </button>
          ) : (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleAdminCancel}
                className="bg-white border border-[#e5e5e5] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] hover:bg-[#fafafa] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleAdminSave}
                className="bg-[#0968F6] rounded-[8px] px-3 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-white tracking-[0.07px] hover:bg-[#0757d4] transition-colors cursor-pointer"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Card Content */}
        {isAdminExpanded && (
          <div className="px-6 py-6">
            {/* Add User Input — edit mode only */}
            {isAdminEditing && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 flex items-center gap-2 bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] border border-transparent focus-within:border-[#0968F6] flex-wrap">
                  {selectedUsers.map(userId => {
                    const user = usersDraft.find(u => u.id === userId);
                    if (!user) return null;
                    return (
                      <div key={userId} className="flex items-center gap-1 bg-white rounded-[6px] px-2 py-1 border border-[rgba(0,0,0,0.1)]">
                        <div className="relative size-[20px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" fill={user.color} r="10" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center font-['Geist:SemiBold',sans-serif] font-semibold text-[10px] text-[#002a69]">
                            {user.initials}
                          </div>
                        </div>
                        <span className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#0a0a0a] tracking-[0.06px]">
                          {user.name}
                        </span>
                        <button
                          onClick={() => removeSelectedUser(userId)}
                          className="hover:bg-[#f5f5f5] rounded-[4px] p-0.5 transition-colors cursor-pointer"
                        >
                          <X size={12} className="text-[#737373]" />
                        </button>
                      </div>
                    );
                  })}
                  <input
                    type="text"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="Search by email..."
                    className="flex-1 min-w-[100px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] bg-transparent border-none outline-none placeholder:text-[#737373]"
                  />
                </div>
                <div className="relative">
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as 'Admin' | 'Developer')}
                    className="bg-[#f3f3f5] rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-transparent focus:outline-none focus:border-[#0968F6] appearance-none cursor-pointer pr-10"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#717182] opacity-50 pointer-events-none" />
                </div>
                <button className="bg-[#0968F6] rounded-[8px] px-4 min-h-[36px] font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[1.5] text-white tracking-[0.07px] hover:bg-[#0757d4] transition-colors whitespace-nowrap cursor-pointer">
                  Add
                </button>
              </div>
            )}

            {/* Users Grid */}
            <div className="grid grid-cols-2 gap-3">
              {(isAdminEditing ? usersDraft : users).map(user => (
                <div
                  key={user.id}
                  className="bg-white rounded-[10px] px-4 py-3 flex items-center justify-between border border-[rgba(0,0,0,0.1)] hover:bg-[#fafafa] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative size-[32px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" fill={user.color} r="16" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] text-[#002a69]">
                        {user.initials}
                      </div>
                    </div>
                    <div>
                      <p className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px]">
                        {user.name}
                      </p>
                      <p className="font-['Geist:Regular',sans-serif] font-normal text-[12px] leading-[1.5] text-[#737373] tracking-[0.06px]">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {isAdminEditing ? (
                    <div className="relative">
                      <select
                        value={user.role}
                        onChange={(e) => handleUserRoleChange(user.id, e.target.value as 'Admin' | 'Developer')}
                        className="bg-white rounded-[10px] px-3 py-2 min-h-[36px] font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#0a0a0a] tracking-[0.07px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[#0968F6] appearance-none cursor-pointer pr-10"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#717182] opacity-50 pointer-events-none" />
                    </div>
                  ) : (
                    <span className="font-['Geist:Regular',sans-serif] font-normal text-[14px] leading-[1.5] text-[#737373] tracking-[0.07px]">
                      {user.role}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}