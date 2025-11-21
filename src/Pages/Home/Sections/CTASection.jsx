import React from 'react';
import { MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <div className=" py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 rounded-3xl overflow-hidden">
          {/* Decorative wave pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <path d="M 0 50 Q 100 30 200 50 T 400 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-300"/>
              <path d="M 0 80 Q 100 60 200 80 T 400 80" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-300"/>
              <path d="M 0 110 Q 100 90 200 110 T 400 110" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-300"/>
              <path d="M 0 140 Q 100 120 200 140 T 400 140" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-300"/>
              <path d="M 0 170 Q 100 150 200 170 T 400 170" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal-300"/>
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between p-12 lg:p-16">
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Merchant and Customer Satisfaction<br />is Our First Priority
              </h2>
              <p className="text-teal-100 text-base mb-8 leading-relaxed">
                We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-teal-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Become a Merchant
                </button>
                <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full border-2 border-teal-300/50 hover:border-teal-300 transition-all duration-300">
                  Earn with goParcel Courier
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:block flex-shrink-0 ml-12">
              <svg viewBox="0 0 300 250" className="w-72 h-64">
                {/* Back package */}
                <g className="animate-float" style={{animationDelay: '0.2s'}}>
                  <rect x="40" y="100" width="100" height="70" rx="4" fill="none" stroke="#5eead4" strokeWidth="2"/>
                  <line x1="40" y1="135" x2="140" y2="135" stroke="#5eead4" strokeWidth="2"/>
                  <line x1="90" y1="100" x2="90" y2="170" stroke="#5eead4" strokeWidth="2"/>
                </g>

                {/* Front package with location pin */}
                <g className="animate-float">
                  <rect x="100" y="130" width="120" height="90" rx="4" fill="none" stroke="#34d399" strokeWidth="3"/>
                  <line x1="100" y1="175" x2="220" y2="175" stroke="#34d399" strokeWidth="3"/>
                  <line x1="160" y1="130" x2="160" y2="220" stroke="#34d399" strokeWidth="3"/>
                  
                  {/* Location pin */}
                  <g className="animate-bounce" style={{animationDelay: '0.5s', transformOrigin: '180px 90px'}}>
                    <ellipse cx="180" cy="110" rx="3" ry="1.5" fill="#34d399" opacity="0.3"/>
                    <path d="M 180 60 C 170 60, 162 68, 162 78 C 162 88, 180 110, 180 110 C 180 110, 198 88, 198 78 C 198 68, 190 60, 180 60 Z" 
                          fill="none" stroke="#34d399" strokeWidth="2.5"/>
                    <circle cx="180" cy="78" r="5" fill="#34d399"/>
                  </g>
                </g>

                {/* Delivery path line */}
                <path d="M 20 180 Q 80 160, 140 180 T 260 180" 
                      stroke="#5eead4" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="6 4"
                      className="animate-dash"/>
                
                {/* Dots on path */}
                <circle cx="20" cy="180" r="4" fill="#5eead4" className="animate-pulse"/>
                <circle cx="140" cy="180" r="4" fill="#5eead4" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                <circle cx="260" cy="180" r="4" fill="#34d399" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CTASection;