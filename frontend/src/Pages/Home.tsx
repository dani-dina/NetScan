import { useState } from 'react';

const Home= () => {
  const [activeTab, setActiveTab] = useState('vulnerabilities');

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-950 text-white">
      {/* Section 1: Features Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Web Application Scanning</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Netscan provides comprehensive security scanning capabilities for modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vulnerability Detection',
                description: 'Identify security weaknesses in your web applications before they become problems.',
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Network Mapping',
                description: 'Discover all devices and services on your network with detailed topology mapping.',
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: 'Compliance Reporting',
                description: 'Generate detailed reports for security compliance standards like OWASP, PCI DSS, and more.',
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Netscan Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple three-step process to secure your web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-cyan-500/30 z-0"></div>
            
            {[
              { step: '1', title: 'Configure Scan', description: 'Set up your target and scanning parameters' },
              { step: '2', title: 'Run Analysis', description: 'Netscan performs comprehensive security checks' },
              { step: '3', title: 'Review Results', description: 'Get detailed reports and remediation guidance' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Vulnerability Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Vulnerability Detection</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Identify and remediate security risks across your web applications
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <div className="flex flex-wrap gap-2 mb-8">
              {['vulnerabilities', 'configuration', 'authentication', 'data'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'SQL Injection',
                'Cross-Site Scripting (XSS)',
                'Cross-Site Request Forgery (CSRF)',
                'Security Misconfigurations',
                'Sensitive Data Exposure',
                'Broken Authentication',
                'Insecure Direct Object References',
                'Missing Function Level Access Control'
              ].map((vuln, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{vuln}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Security Teams</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See what security professionals are saying about Netscan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Security Lead',
                company: 'TechCorp Inc.',
                content: 'Netscan has transformed our security posture. We can now identify vulnerabilities before they become critical issues.',
                avatar: 'SJ'
              },
              {
                name: 'Michael Chen',
                role: 'DevOps Engineer',
                company: 'CloudSolutions',
                content: 'The detailed reports and remediation guidance have saved our team countless hours of manual security testing.',
                avatar: 'MC'
              },
              {
                name: 'Alex Rodriguez',
                role: 'CTO',
                company: 'StartUp Ventures',
                content: 'As a growing company, Netscan gives us enterprise-grade security scanning at a fraction of the cost.',
                avatar: 'AR'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$49',
                period: 'per month',
                features: ['5 Scans per Month', 'Basic Vulnerability Detection', 'Email Support', 'PDF Reports'],
                highlighted: false
              },
              {
                name: 'Professional',
                price: '$149',
                period: 'per month',
                features: ['Unlimited Scans', 'Advanced Vulnerability Detection', 'Priority Support', 'API Access', 'Scheduled Scanning'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: ['Unlimited Everything', 'Dedicated Instance', 'Custom Integrations', '24/7 Support', 'SLA Guarantee'],
                highlighted: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border ${
                  plan.highlighted 
                    ? 'border-cyan-500/50 relative ring-2 ring-cyan-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-400 ml-2">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-slate-700/50 hover:bg-slate-700 text-slate-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Your Workflow</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Netscan integrates seamlessly with your development and security processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">CI/CD Integration</h3>
              </div>
              <p className="text-slate-400">
                Automate security scanning in your development pipeline. Catch vulnerabilities before they reach production with seamless integration into your CI/CD workflow.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Compliance Auditing</h3>
              </div>
              <p className="text-slate-400">
                Meet regulatory requirements with comprehensive compliance reporting. Generate detailed audit trails for standards like PCI DSS, HIPAA, and GDPR.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Penetration Testing</h3>
              </div>
              <p className="text-slate-400">
                Simulate real-world attacks with advanced penetration testing capabilities. Identify exploitable vulnerabilities and prioritize remediation efforts.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Performance Monitoring</h3>
              </div>
              <p className="text-slate-400">
                Track security performance over time with detailed metrics and trends. Measure improvement and demonstrate ROI to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Works With Your Tools</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Netscan integrates with the development and security tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'GitHub', logo: 'GH' },
              { name: 'GitLab', logo: 'GL' },
              { name: 'Jenkins', logo: 'J' },
              { name: 'JIRA', logo: 'JIRA' },
              { name: 'Slack', logo: 'S' },
              { name: 'AWS', logo: 'AWS' },
              { name: 'Azure', logo: 'AZ' },
              { name: 'Google Cloud', logo: 'GCP' }
            ].map((tool, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 flex items-center justify-center hover:border-cyan-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-slate-700/50 flex items-center justify-center text-xl font-bold text-cyan-400 mb-2 mx-auto">
                    {tool.logo}
                  </div>
                  <span className="text-slate-300">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Web Applications?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers and security professionals who trust Netscan to protect their applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">
              Get Started for Free
            </button>
            <button className="border border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
          <p className="text-slate-400 mt-6">No credit card required. Free plan includes 3 scans per month.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;