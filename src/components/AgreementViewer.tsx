import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Globe } from 'lucide-react';
import { PRIVACY_POLICY, USER_AGREEMENT } from '../data/agreements';

interface AgreementViewerProps {
  type: 'privacy' | 'terms';
  lang: 'zh' | 'en';
  onClose: () => void;
  onChangeLang: (lang: 'zh' | 'en') => void;
  onSwitchType: (type: 'privacy' | 'terms') => void;
}

export const AgreementViewer: React.FC<AgreementViewerProps> = ({
  type,
  lang,
  onClose,
  onChangeLang,
  onSwitchType,
}) => {
  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [type, lang]);

  const doc = type === 'privacy' ? PRIVACY_POLICY[lang] : USER_AGREEMENT[lang];

  return (
    <div className="min-h-screen bg-[#04010d] text-gray-200 font-sans relative pb-24 overflow-x-hidden">
      {/* Decorative blurry background circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#9d53ff]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[140px] pointer-events-none" />

      {/* Navigation Top Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#04010d]/80 border-b border-white/5 py-4 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            <span>{lang === 'zh' ? '返回首页' : 'Back to Home'}</span>
          </button>

          {/* Inline switcher */}
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-full text-xs">
            <button
              onClick={() => onSwitchType('terms')}
              className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                type === 'terms'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '用户协议' : 'User Agreement'}
            </button>
            <button
              onClick={() => onSwitchType('privacy')}
              className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                type === 'privacy'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '隐私政策' : 'Privacy Policy'}
            </button>
          </div>

          {/* Language Switch */}
          <button
            onClick={() => onChangeLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-purple-400" />
            <span>{lang === 'zh' ? 'English' : '简体中文'}</span>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 mt-12 relative z-10">
        
        {/* Document Header Panel */}
        <div className="bg-gradient-to-br from-[#0c081c] to-[#04010d] border border-white/5 rounded-3xl p-8 md:p-12 mb-10 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              {type === 'privacy' ? (
                <Shield className="w-6 h-6 text-purple-400" />
              ) : (
                <FileText className="w-6 h-6 text-purple-400" />
              )}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                {type === 'privacy' ? 'Legal Document' : 'User Terms'}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mt-0.5">
                {doc.title}
              </h1>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-gray-400 border-t border-white/5 pt-4 mt-6">
            <span>{doc.updateDate}</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span>{doc.effectiveDate}</span>
          </div>
        </div>

        {/* Document Body Viewport rendered beautifully */}
        <div className="bg-gradient-to-b from-[#0a0718] to-[#06040f] border border-white/5 rounded-3xl p-6 md:p-12 shadow-inner">
          <div 
            className="prose prose-invert max-w-none text-left leading-relaxed text-sm md:text-base text-gray-300
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-2
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-purple-300
              prose-p:mb-5 prose-p:text-gray-300 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-bold
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-1
              prose-li:text-gray-300 prose-li:my-1
              prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-a:transition-colors prose-a:underline
              prose-table:w-full prose-table:my-8 prose-table:border-collapse
              prose-th:bg-purple-950/20 prose-th:p-3 prose-th:border prose-th:border-white/10 prose-th:text-left prose-th:text-xs prose-th:font-bold prose-th:text-purple-300
              prose-td:p-3 prose-td:border prose-td:border-white/5 prose-td:text-xs prose-td:text-gray-300 prose-td:align-top
            "
            dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
          />
        </div>

        {/* Back to top row footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 mt-12">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">© 2024-2026 KiraHub. All rights reserved.</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold shadow-lg shadow-purple-950/50 hover:shadow-purple-500/30 hover:scale-[1.02] transition-all cursor-pointer"
          >
            {lang === 'zh' ? '我已阅读并返回首页' : 'I have parsed and go back'}
          </button>
        </div>

      </div>
    </div>
  );
};
