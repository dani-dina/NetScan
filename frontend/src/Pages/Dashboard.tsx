import { useState, useEffect } from 'react';

// Types
type Scan = {
  id: string;
  target: string;
  status: 'completed' | 'failed' | 'in-progress';
  vulnerabilities: number;
  date: string;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
};

type Stat = {
  name: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
};

type Activity = {
  id: string;
  action: string;
  target: string;
  time: string;
  user: string;
};

const NetscanDashboard = () => {
  const [scans, setScans] = useState<Scan[]>([
    {
      id: 'scan-001',
      target: 'https://example.com',
      status: 'completed',
      vulnerabilities: 3,
      date: 'Just now',
      duration: '4m 23s',
      riskLevel: 'medium'
    },
    {
      id: 'scan-002',
      target: 'https://api.example.com',
      status: 'in-progress',
      vulnerabilities: 0,
      date: '2 minutes ago',
      duration: '1m 12s',
      riskLevel: 'low'
    },
    {
      id: 'scan-003',
      target: 'https://testapp.io',
      status: 'completed',
      vulnerabilities: 0,
      date: 'Today, 09:45 AM',
      duration: '2m 45s',
      riskLevel: 'low'
    },
    {
      id: 'scan-004',
      target: 'https://staging.example.com',
      status: 'failed',
      vulnerabilities: 0,
      date: 'Today, 09:15 AM',
      duration: '0m 53s',
      riskLevel: 'low'
    },
    {
      id: 'scan-005',
      target: 'https://client-prod.com',
      status: 'completed',
      vulnerabilities: 7,
      date: 'Yesterday, 03:20 PM',
      duration: '7m 38s',
      riskLevel: 'high'
    }
  ]);

  const [stats, setStats] = useState<Stat[]>([
    {
      name: 'Total Scans',
      value: '142',
      change: '+12%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Vulnerabilities Found',
      value: '28',
      change: '-5%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: 'Websites Monitored',
      value: '18',
      change: '+2',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      name: 'Avg. Scan Time',
      value: '3m 42s',
      change: '+12s',
      changeType: 'negative',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]);

  const [recentActivity, setRecentActivity] = useState<Activity[]>([
    {
      id: 'activity-001',
      action: 'Scan completed',
      target: 'https://example.com',
      time: '2 minutes ago',
      user: 'You'
    },
    {
      id: 'activity-002',
      action: 'Scan started',
      target: 'https://api.example.com',
      time: '5 minutes ago',
      user: 'You'
    },
    {
      id: 'activity-003',
      action: 'New API key generated',
      target: 'Production CI/CD',
      time: 'Yesterday, 06:45 PM',
      user: 'You'
    },
    {
      id: 'activity-004',
      action: 'Scan scheduled',
      target: 'https://client-prod.com',
      time: 'Yesterday, 05:30 PM',
      user: 'Sarah Johnson'
    },
    {
      id: 'activity-005',
      action: 'Vulnerability fixed',
      target: 'XSS issue on login page',
      time: 'Yesterday, 04:15 PM',
      user: 'Michael Chen'
    }
  ]);

  const [isScanning, setIsScanning] = useState(false);
  const [scanTarget, setScanTarget] = useState('');

  const startScan = () => {
    if (!scanTarget) return;
    
    setIsScanning(true);
    const newScan: Scan = {
      id: `scan-${Math.floor(Math.random() * 1000)}`,
      target: scanTarget,
      status: 'in-progress',
      vulnerabilities: 0,
      date: 'Just now',
      duration: '0m 00s',
      riskLevel: 'low'
    };
    
    setScans([newScan, ...scans]);
    setScanTarget('');
    
    // Simulate scan completion after 5 seconds
    setTimeout(() => {
      setScans(prevScans => 
        prevScans.map(scan => 
          scan.id === newScan.id 
            ? { 
                ...scan, 
                status: 'completed', 
                vulnerabilities: Math.floor(Math.random() * 5),
                riskLevel: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
                duration: `${Math.floor(Math.random() * 5)}m ${Math.floor(Math.random() * 60)}s`
              } 
            : scan
        )
      );
      setIsScanning(false);
    }, 5000);
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'in-progress': return 'bg-cyan-500/20 text-cyan-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-slate-400 mt-2">Welcome back! Here's what's happening with your scans.</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors duration-200 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Scan
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className={`text-xs mt-2 ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Scans */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Scans</h2>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {scans.slice(0, 5).map((scan) => (
                  <div key={scan.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        scan.status === 'completed' ? 'bg-green-400' : 
                        scan.status === 'in-progress' ? 'bg-cyan-400 animate-pulse' : 
                        'bg-red-400'
                      }`}></div>
                      <div>
                        <div className="font-medium">{scan.target}</div>
                        <div className="text-sm text-slate-400">{scan.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">{scan.vulnerabilities} vulnerabilities</div>
                        <div className="text-sm text-slate-400">{scan.duration}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs ${getRiskLevelColor(scan.riskLevel)}`}>
                        {scan.riskLevel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Scan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              <h2 className="text-xl font-bold mb-6">Quick Scan</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={scanTarget}
                  onChange={(e) => setScanTarget(e.target.value)}
                  placeholder="Enter URL or IP address"
                  className="flex-grow bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  disabled={isScanning}
                />
                <button
                  onClick={startScan}
                  disabled={isScanning || !scanTarget}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isScanning ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scanning...
                    </>
                  ) : 'Start Scan'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity & Stats */}
          <div className="lg:col-span-1">
            {/* Recent Activity */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-3 bg-slate-700/30 rounded-lg border border-slate-700/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-slate-400">{activity.target}</p>
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-xs text-cyan-400 mt-2">By {activity.user}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vulnerability Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              <h2 className="text-xl font-bold mb-6">Vulnerability Distribution</h2>
              <div className="space-y-4">
                {[
                  { type: 'Critical', count: 2, color: 'bg-red-500', width: 'w-1/12' },
                  { type: 'High', count: 5, color: 'bg-orange-500', width: 'w-1/4' },
                  { type: 'Medium', count: 8, color: 'bg-yellow-500', width: 'w-1/3' },
                  { type: 'Low', count: 13, color: 'bg-green-500', width: 'w-1/2' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{item.type}</span>
                      <span className="text-sm text-slate-400">{item.count}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className={`${item.color} ${item.width} h-2 rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetscanDashboard;