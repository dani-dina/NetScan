import React, { useState, useMemo } from 'react';
import { DOCUMENTATION_CATEGORIES, SEARCH_PLACEHOLDER, DOCUMENTATION_TITLE, DOCUMENTATION_SUBTITLE } from '../Constants/constants';
import type { DocumentationCategory } from '../types/index';
import * as Icons from '../assets/svg/index';
import { Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['getting-started'])
  );
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return DOCUMENTATION_CATEGORIES;

    return DOCUMENTATION_CATEGORIES.map(category => ({
      ...category,
      sections: category.sections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(section.content).toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.sections.length > 0);
  }, [searchQuery]);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />;
  };

  const renderContent = () => {
    for (const category of DOCUMENTATION_CATEGORIES) {
      const section = category.sections.find(s => s.id === activeSection);
      if (section) {
        return (
          <div className="prose prose-blue max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h1>
            <div className="text-gray-700 leading-7">
              {section.content}
            </div>
          </div>
        );
      }
    }
    return <div>Select a section to view content</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{DOCUMENTATION_TITLE}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {DOCUMENTATION_SUBTITLE}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-700 rounded-lg shadow-sm p-6 sticky top-8">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={SEARCH_PLACEHOLDER}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Categories */}
              <nav className="space-y-2">
                {filteredCategories.map((category: DocumentationCategory) => (
                  <div key={category.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between text-left font-semibold text-gray-900 hover:text-blue-600 py-2"
                    >
                      <span>{category.title}</span>
                      {expandedCategories.has(category.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedCategories.has(category.id) && (
                      <div className="ml-4 space-y-2 mt-2">
                        {category.sections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center space-x-2 text-left py-2 px-3 rounded-lg transition-colors ${
                              activeSection === section.id
                                ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-700'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {getIconComponent(section.icon)}
                            <span className="text-sm">{section.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;