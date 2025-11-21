import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Package, MapPin, Truck, CheckCircle } from "lucide-react";

const HowitWorks = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/howitworks.json")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error(err));
  }, []);

  // Framer motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-22">
      {/* Header */}
      <div className=" mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-3xl  font-bold text-gray-900">
            How It <span className="primary-text">Works</span>
          </h2>
          <p className="text-gray-600 text-lg  ">
            Send your parcel in just 4 simple steps. Fast, secure, and reliable delivery at your fingertips.
          </p>
        </motion.div>
      </div>

      {/* Steps Grid */}
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <motion.div
          className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-[#34d399]"
          style={{ width: "calc(100% - 120px)", left: "60px" }}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#34d399] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[primary-text] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Arrow (Desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 primary-text">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HowitWorks;