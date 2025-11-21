import React from 'react';
import Marquee from 'react-fast-marquee';

const Brands = () => {
  const brands = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',

  ];

  return (
    <section className=" mb-20">
      <div className="">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Trusted by Leading Brands
        </h2> */}

        <Marquee speed={40} direction="left" pauseOnHover={true} gradient={false}>
          {brands.map((logo, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center h-16 w-30"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;