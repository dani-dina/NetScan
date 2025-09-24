import { useState, useEffect } from 'react';

const Hero = () => {
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    if (scanning) {
      progressInterval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setScanning(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [scanning]);

  const startScan = () => {
    setScanning(true);
    setScanProgress(0);
  };

  return (
    <section className=" text-white min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column  Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Scan Your Web Applications
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  With Precision
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Netscan provides powerful web application scanning capabilities right in your browser. 
                Identify vulnerabilities, analyze networks, and secure your applications with ease.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={startScan}
                disabled={scanning}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:transform-none"
              >
                {scanning ? 'Scanning...' : 'Start New Scan'}
              </button>
              <button className="border border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                View Documentation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">10K+</div>
                <div className="text-slate-400">Scans Performed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                <div className="text-slate-400">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-slate-400">Vulnerability Tests</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-slate-400">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="relative">
            {/* Scan visualization */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Scan Progress</h3>
                <div className="text-sm px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full">
                  {scanning ? 'Active' : 'Ready'}
                </div>
              </div>

              <div className="space-y-2">
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{scanProgress}% Complete</span>
                  <span>{scanning ? 'Scanning...' : 'Scan Ready'}</span>
                </div>
              </div>

              {/* Scan details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="text-slate-400">Target</div>
                  <div className="font-mono text-sm">https://example.com</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="text-slate-400">Ports</div>
                  <div className="font-mono text-sm">80, 443, 8080</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="text-slate-400">Status</div>
                  <div className={`text-sm ${scanning ? 'text-amber-400' : 'text-green-400'}`}>
                    {scanning ? 'In Progress' : 'Completed'}
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="text-slate-400">Vulnerabilities</div>
                  <div className="text-sm">{scanProgress > 90 ? '3 Detected' : 'Scanning...'}</div>
                </div>
              </div>

              {/* Network visualization */}
              <div className="pt-4">
                <div className="text-slate-400 mb-2">Network Activity</div>
                <div className="flex space-x-1 h-4">
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-slate-700 rounded overflow-hidden"
                    >
                      <div 
                        className="h-full bg-cyan-500/60 transition-all duration-300"
                        style={{ 
                          height: scanning ? `${Math.random() * 100}%` : '0%',
                          transitionDelay: `${i * 0.05}s`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-xl blur-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;