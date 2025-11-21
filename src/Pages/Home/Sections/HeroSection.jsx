import React from 'react';
import { Link } from 'react-router';
import { Package, MapPin, Truck, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import deliveryimg from '../../../assets/Logistics-bro.png'
const HeroSection = () => {
  return (
    <div className="bg-white mt-28 rounded-xl">

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-22 pt-10 pb-10 mb-14">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex mb-10 bg-green-300/20 items-center gap-2 px-4 py-2  rounded-full shadow-md border border-blue-100">
              <div className="w-2 h-2  bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700 ">Fast & Reliable Delivery</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl max-w-[700px]  font-black leading-tight">
              Your Parcel,             
              Our Promise,             
              <span className="primary-text"> Delivered </span>
                            Every Time
            </h1>

            {/* Description */}
            <p className="text-sm md:text-md text-gray-600 leading-relaxed max-w-xl">
              Fast, reliable, and stress-free delivery is what we do best. At <span className="font-bold text-gray-900">goParcel</span>, we understand that your packages matter, whether it's a gift for a loved one or an important business shipment.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Real-Time Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">100% Safe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/track" 
                className="group inline-flex items-center justify-center gap-2 primary-btn hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Package className="w-5 h-5" />
                Track Your Parcel
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/bearider" 
                className="inline-flex items-center justify-center gap-2 outline-btn hover:shadow-xl transition-all duration-300"
              >
                <Truck className="w-5 h-5" />
                Be A Rider
              </Link>
            </div>

           
          </div>

          {/* Right Image/Illustration */}
          <div className=" md:block hidden w-[500px]">
            <img src={deliveryimg} alt="" />
          </div>
        </div>

      
      </section>
    </div>
  );
};

export default HeroSection;