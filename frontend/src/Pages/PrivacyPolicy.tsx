import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, Database, User, Mail, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const privacySections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: <Database size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            At Netscan, we collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create an account or update your profile information</li>
            <li>Use our security scanning services</li>
            <li>Contact our support team or provide feedback</li>
            <li>Subscribe to our newsletters or marketing communications</li>
          </ul>
          <p>
            The types of information we collect include your name, email address, 
            company information, scan results, and any other information you choose to provide.
          </p>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Eye size={20} />,
      content: (
        <div className="space-y-4">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our security scanning services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: <Lock size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal data against unauthorized or unlawful processing, accidental loss, 
            destruction, or damage.
          </p>
          <p>Our security measures include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit and at rest using industry-standard protocols</li>
            <li>Regular security assessments and vulnerability testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular backups and disaster recovery procedures</li>
            <li>Employee training on data protection and security best practices</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: <User size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            We do not sell your personal data to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors (lawyers, bankers, auditors, etc.)</li>
            <li>Law enforcement, regulators, or other parties when required by law</li>
            <li>Third parties in connection with a business transaction (merger, acquisition, etc.)</li>
          </ul>
          <p>
            All third-party service providers are required to maintain the confidentiality 
            and security of your personal data.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: <Globe size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            We use cookies and similar tracking technologies to track activity on our 
            service and hold certain information.
          </p>
          <p>Types of cookies we use:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the operation of our website</li>
            <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors</li>
            <li><strong>Functionality cookies:</strong> Enable us to personalize content</li>
            <li><strong>Targeting cookies:</strong> Record your visit and pages you visit</li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-4">
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> The right to request copies of your personal data</li>
            <li><strong>Rectification:</strong> The right to request correction of inaccurate information</li>
            <li><strong>Erasure:</strong> The right to request deletion of your personal data</li>
            <li><strong>Restriction:</strong> The right to request limiting the processing of your data</li>
            <li><strong>Data portability:</strong> The right to request transfer of your data to another organization</li>
            <li><strong>Objection:</strong> The right to object to processing of your personal data</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at privacy@netscan.com.
          </p>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <Database size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            We will retain your personal data only for as long as is necessary for the purposes 
            set out in this Privacy Policy, or as required to comply with our legal obligations, 
            resolve disputes, and enforce our agreements.
          </p>
          <p>Retention periods by data type:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information: Until account deletion request</li>
            <li>Scan results: 12 months from date of scan</li>
            <li>Communication records: 3 years from last contact</li>
            <li>Payment information: 7 years for accounting purposes</li>
          </ul>
        </div>
      )
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: <Mail size={20} />,
      content: (
        <div className="space-y-4">
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p>
            We will also notify you via email and/or a prominent notice on our service, 
            prior to the change becoming effective, if the changes are material.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. 
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-600">
                At Netscan, we take your privacy seriously. This Privacy Policy describes how we collect, 
                use, process, and protect your personal information when you use our security scanning services.
              </p>
            </div>

            <div className="space-y-4">
              {privacySections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-600">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    {activeSection === section.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact our Data Protection Officer:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@netscan.com
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Security Lane, Tech City, TC 12345
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;