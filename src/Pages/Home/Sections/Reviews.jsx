import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaTrophy,
  FaHeart,
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    average: 0,
    total: 0,
    fiveStar: 0,
  });

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);

        const avgRating =
          data.reduce((acc, review) => acc + review.ratings, 0) / data.length;
        const fiveStarCount = data.filter((r) => r.ratings >= 4.5).length;

        setStats({
          average: avgRating.toFixed(1),
          total: data.length,
          fiveStar: Math.round((fiveStarCount / data.length) * 100),
        });
      })
      .catch((error) => console.error('Error loading reviews:', error));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className="text-yellow-400 drop-shadow-sm animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 drop-shadow-sm" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="text-yellow-400 drop-shadow-sm"
        />
      );
    }

    return stars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get badge based on rating
  const getBadge = (rating) => {
    if (rating >= 4.8) {
      return {
        icon: FaTrophy,
        text: 'Top Reviewer',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
      };
    } else if (rating >= 4.5) {
      return {
        icon: FaHeart,
        text: 'Loved It',
        color: 'text-red-500',
        bg: 'bg-red-50',
      };
    }
    return null;
  };

  return (
    <section className="py-4   overflow-hidden">
   

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 animate-fade-in-down">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#34d399] to-[#2bb57d] text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
            ⭐ TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            What Our Customers Says
          </h2>
          <p className="text-gray-600 text-lg  max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust goParcel
          </p>
        </div>

        {/* Statistics Cards with Animation */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          <div className="bg-white  rounded-2xl shadow-xl p-8 text-center transform hover:scale-110 hover:-rotate-2 transition-all duration-300 border-2 border-transparent hover:border-[#34d399]">
            <div className="text-6xl   font-black bg-gradient-to-r from-[#34d399] to-[#2bb57d] bg-clip-text text-transparent my-3">
              {stats.average}
            </div>
            <div className="flex justify-center gap-1 mb-3">
              {renderStars(parseFloat(stats.average))}
            </div>
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
              Average Rating
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#34d399] to-[#2bb57d] rounded-2xl shadow-xl p-8 text-center transform hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="text-6xl font-black text-white mb-3">
                {stats.total}+
              </div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider">
                Happy Customers
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 border-2 border-transparent hover:border-[#34d399]">
            <div className="text-6xl font-black bg-gradient-to-r from-[#34d399] to-[#2bb57d] bg-clip-text text-transparent mb-3">
              {stats.fiveStar}%
            </div>
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
              5-Star Reviews
            </p>
          </div>
        </div> */}

        {/* Swiper Carousel */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {reviews.map((review, index) => {
              const badge = getBadge(review.ratings);
              return (
                <SwiperSlide key={review.id}>
                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full my-10 border-2 border-gray-100 hover:border-[#34d399] relative overflow-hidden transform hover:-translate-y-2">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>

                    {/* Badge */}
                    {badge && (
                      <div
                        className={`absolute top-4 right-4 ${badge.bg} ${badge.color} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                      >
                        <badge.icon className="text-sm" />
                        {badge.text}
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-6 relative">
                        <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-[#34d399] to-[#2bb57d] opacity-20 rounded-full blur-xl"></div>
                        <FaQuoteLeft className="text-[#34d399] text-5xl relative z-10 transform group-hover:scale-125 transition-transform duration-300" />
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 text-lg mb-2 leading-relaxed min-h-[100px] font-medium">
                        "{review.review}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2 bg-gray-50 rounded-full px-4 py-2 w-fit">
                        <div className="flex gap-1">{renderStars(review.ratings)}</div>
                        <span className="ml-1 text-gray-900 font-black text-lg">
                          {review.ratings.toFixed(1)}
                        </span>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                        <div className="relative">
                          <img
                            src={review.user_photoURL}
                            alt={review.userName}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#34d399] ring-offset-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-[#34d399] rounded-full p-1.5 shadow-md">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">
                            {review.userName}
                          </h4>
                          <p className="text-xs text-gray-500 flex items-center gap-2 flex-wrap">
                            <span>{formatDate(review.date)}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-[#34d399] font-semibold">
                              ✓ Verified Customer
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="swiper-button-prev-custom w-14 h-14 rounded-full bg-gradient-to-r from-[#34d399] to-[#2bb57d] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110 active:scale-95">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-14 h-14 rounded-full bg-gradient-to-r from-[#34d399] to-[#2bb57d] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110 active:scale-95">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles & Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .swiper-pagination-bullet {
          background: #d1d5db;
          width: 12px;
          height: 12px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #34d399, #2bb57d);
          width: 32px;
          border-radius: 6px;
        }

        .swiper-button-disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Reviews;