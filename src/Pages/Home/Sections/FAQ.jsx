import React, { useEffect, useState, useRef } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "animate.css";
import faqData from "../../../../public/faq.json";

const FAQ = () => {
  const [animate, setAnimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const faqRef = useRef(null);

  // Show only first 5 FAQs initially
  const displayedFAQs = showAll ? faqData : faqData.slice(0, 5);

  // Trigger animation only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) observer.observe(faqRef.current);
    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    // Optionally scroll to FAQ section when showing less
    if (showAll && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={faqRef}
      className="py-16"
    >
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about goParcel.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                animate ? "animate__animated animate__fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
                  openIndex === index
                    ? "bg-[#34d399] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <FaQuestionCircle
                    className={`text-2xl ${
                      openIndex === index ? "text-white" : "text-[#34d399]"
                    }`}
                  />
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                </div>
                <FaChevronDown
                  className={`text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More / Show Less Button */}
        {faqData.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#34d399] text-white font-semibold rounded-lg hover:bg-[#2bb57d] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
            >
              <span>{showAll ? "Show Less" : "See More Questions"}</span>
              {showAll ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </button>
          
          </div>
        )}

      
      </div>
    </section>
  );
};

export default FAQ;