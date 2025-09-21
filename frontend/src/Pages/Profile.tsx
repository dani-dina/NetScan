import { useState } from 'react';

// User data type
type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  plan: string;
  memberSince: string;
  lastLogin: string;
};

// Scan history type
type ScanHistory = {
  id: string;
  target: string;
  status: 'completed' | 'failed' | 'in-progress';
  vulnerabilities: number;
  date: string;
  duration: string;
};

// API key type
type ApiKey = {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'billing' | 'history'>('profile');
  const [user, setUser] = useState<User>({
    id: 'user-12345',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'AJ',
    role: 'Security Administrator',
    plan: 'Professional',
    memberSince: 'Jan 15, 2022',
    lastLogin: 'Today at 09:23 AM'
  });

  const [scanHistory, setScanHistory] = useState<ScanHistory[]>([
    {
      id: 'scan-001',
      target: 'https://example.com',
      status: 'completed',
      vulnerabilities: 3,
      date: 'Oct 12, 2023',
      duration: '4m 23s'
    },
    {
      id: 'scan-002',
      target: 'https://testapp.io',
      status: 'completed',
      vulnerabilities: 0,
      date: 'Oct 10, 2023',
      duration: '2m 45s'
    },
    {
      id: 'scan-003',
      target: 'https://staging.example.com',
      status: 'failed',
      vulnerabilities: 0,
      date: 'Oct 8, 2023',
      duration: '1m 12s'
    },
    {
      id: 'scan-004',
      target: 'https://api.example.com',
      status: 'completed',
      vulnerabilities: 7,
      date: 'Oct 5, 2023',
      duration: '7m 38s'
    }
  ]);

  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: 'key-001',
      name: 'Production CI/CD',
      key: 'nsc_5x8j7d9k3m2p6q4r',
      created: 'Sep 1, 2023',
      lastUsed: 'Today at 08:45 AM'
    },
    {
      id: 'key-002',
      name: 'Development',
      key: 'nsc_2k4j8d7s9p3q6r5t',
      created: 'Aug 15, 2023',
      lastUsed: 'Oct 10, 2023'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);

  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: userName,
      email: userEmail
    });
    setIsEditing(false);
  };

  const generateNewApiKey = () => {
    const newKey: ApiKey = {
      id: `key-${Math.floor(Math.random() * 1000)}`,
      name: `New Key ${apiKeys.length + 1}`,
      key: `nsc_${Math.random().toString(36).substring(2, 18)}`,
      created: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      lastUsed: 'Never'
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const revokeApiKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-slate-400 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl font-bold mb-4">
                  {user.avatar}
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-slate-400">{user.role}</p>
                <div className="mt-2 px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                  {user.plan} Plan
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'security'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'history'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Scan History
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'billing'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Billing & Plan
                </button>
              </nav>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <div className="text-sm text-slate-400">
                  <p>Member since: {user.memberSince}</p>
                  <p className="mt-1">Last login: {user.lastLogin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  {isEditing ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-slate-600 rounded-lg text-slate-300 hover:border-slate-400 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveProfile}
                        className="px-4 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-slate-700 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="bg-slate-700/30 rounded-lg px-4 py-3">{user.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="bg-slate-700/30 rounded-lg px-4 py-3">{user.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Role</label>
                    <p className="bg-slate-700/30 rounded-lg px-4 py-3">{user.role}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Subscription Plan</label>
                    <p className="bg-slate-700/30 rounded-lg px-4 py-3">{user.plan}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
                  <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                    <p className="text-red-200 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="px-4 py-2 bg-red-700 rounded-lg text-white hover:bg-red-600 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                <h2 className="text-2xl font-bold mb-6">Security Settings</h2>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">2FA is currently disabled</p>
                        <p className="text-slate-400 text-sm mt-1">Add an extra layer of security to your account</p>
                      </div>
                      <button className="px-4 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600 transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">API Keys</h3>
                    <button 
                      onClick={generateNewApiKey}
                      className="px-4 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600 transition-colors"
                    >
                      Generate New Key
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {apiKeys.map((apiKey) => (
                      <div key={apiKey.id} className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{apiKey.name}</h4>
                            <p className="font-mono text-sm text-slate-400 mt-1">{apiKey.key}</p>
                            <div className="flex text-sm text-slate-500 mt-2">
                              <span className="mr-4">Created: {apiKey.created}</span>
                              <span>Last used: {apiKey.lastUsed}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => revokeApiKey(apiKey.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            Revoke
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-slate-400 text-sm mt-1">Chrome on Windows • New York, USA</p>
                      </div>
                      <button className="px-4 py-2 bg-slate-700 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors">
                        Log Out All Sessions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Scan History Tab */}
            {activeTab === 'history' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                <h2 className="text-2xl font-bold mb-6">Scan History</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="pb-3 text-left text-slate-400">Target</th>
                        <th className="pb-3 text-left text-slate-400">Date</th>
                        <th className="pb-3 text-left text-slate-400">Duration</th>
                        <th className="pb-3 text-left text-slate-400">Vulnerabilities</th>
                        <th className="pb-3 text-left text-slate-400">Status</th>
                        <th className="pb-3 text-left text-slate-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scanHistory.map((scan) => (
                        <tr key={scan.id} className="border-b border-slate-700/50">
                          <td className="py-4">
                            <div className="font-medium">{scan.target}</div>
                          </td>
                          <td className="py-4 text-slate-400">{scan.date}</td>
                          <td className="py-4 text-slate-400">{scan.duration}</td>
                          <td className="py-4">
                            <span className={scan.vulnerabilities > 0 ? 'text-amber-400' : 'text-green-400'}>
                              {scan.vulnerabilities} found
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              scan.status === 'completed' 
                                ? 'bg-green-900/30 text-green-400' 
                                : scan.status === 'in-progress'
                                ? 'bg-cyan-900/30 text-cyan-400'
                                : 'bg-red-900/30 text-red-400'
                            }`}>
                              {scan.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                              View Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-slate-400">Showing {scanHistory.length} scans</p>
                  <button className="px-4 py-2 bg-slate-700 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors">
                    Load More
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                <h2 className="text-2xl font-bold mb-6">Billing & Plan</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Current Plan</h3>
                    <p className="text-2xl font-bold text-cyan-400 mb-4">{user.plan}</p>
                    <p className="text-slate-400 mb-4">$149.00 per month</p>
                    <button className="w-full px-4 py-2 bg-slate-700 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors">
                      Change Plan
                    </button>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                    <p className="text-slate-400 mb-4">Visa ending in 4242</p>
                    <p className="text-slate-400 mb-4">Next billing date: Nov 15, 2023</p>
                    <button className="w-full px-4 py-2 bg-slate-700 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors">
                      Update Payment Method
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">October 2023</p>
                        <p className="text-slate-400 text-sm">Professional Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$149.00</p>
                        <p className="text-slate-400 text-sm">Paid Oct 15, 2023</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                      <div>
                        <p className="font-medium">September 2023</p>
                        <p className="text-slate-400 text-sm">Professional Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$149.00</p>
                        <p className="text-slate-400 text-sm">Paid Sep 15, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Usage Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-cyan-400">12</p>
                      <p className="text-slate-400">Scans this month</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-cyan-400">84%</p>
                      <p className="text-slate-400">Of monthly limit used</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-cyan-400">2</p>
                      <p className="text-slate-400">Days until reset</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;