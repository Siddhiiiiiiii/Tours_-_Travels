import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import packageImage from '../images/aboutusimg.png';
import '../CSS/About.css';

const About = () => {
  return (
    <>
      <div className="container-fluid bg-image">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h1 className="text-white">About Us</h1>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      {/*our team by numbers.*/}
      <div className="bg-white py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">

          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">At Sidhesh Tour and Travel, we believe in transforming your travel dreams into reality. Nestled in the heart of Bhusawal, our travel agency is more than just a destination management company; it's a passionate team of travel enthusiasts dedicated to curating extraordinary experiences for you.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 rounded-lg bg-danger p-6 md:grid-cols-4 md:gap-8 md:p-8">

            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">100</div>
              <div className="text-sm text-white sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
              <div className="text-sm text-white sm:text-base">People</div>
            </div>


            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
              <div className="text-sm text-white sm:text-base">Customers</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
              <div className="text-sm text-white sm:text-base">Coffee breaks</div>
            </div>

          </div>
        </div>
      </div>

      {/* What others say about us*/}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">

            <div className="flex flex-col items-center gap-4 rounded-lg bg-danger px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">“Sidhesh Tour and Travel exceeded my expectations in every way. The team's attention to detail and commitment to creating unique travel experiences truly set them apart. From seamless itinerary planning to personalized recommendations, they made my journey unforgettable. Kudos to the entire team at Sidhesh Tour and Travel!"”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-danger bg-gray-100 md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-danger sm:text-left md:text-base">Akshay Phalak</div>
                  <p className="text-center text-sm text-white sm:text-left md:text-sm">Customer</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-lg bg-danger px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">“Poonam checking in! Sidhesh Tour and Travel is my go-to travel agency for a reason. Their dedication to customer satisfaction is evident from the moment you start planning your trip. The team's friendly and knowledgeable approach, coupled with their local expertise, ensures a smooth and enriching travel experience. Highly recommend Sidhesh Tour and Travel for your next adventure!”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-danger bg-gray-100 md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-danger sm:text-left md:text-base">Poonam Berg</div>
                  <p className="text-center text-sm text-white sm:text-left md:text-sm">CFO / Dashdash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">.</p>
          </div>


          <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">

            <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>

              <h3 className="mb-3 text-lg font-semibold text-danger md:text-xl">What makes Sidhesh Tour and Travel unique?</h3>
              <p className="text-gray-500">At Sidhesh Tour and Travel, we stand out for our personalized approach and commitment to creating extraordinary travel experiences. Our local expertise in Bhusawal and beyond ensures that every journey is crafted with attention to detail and a passion for exploration.</p>
            </div>

            {/* Add other FAQs here */}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            {/* Add footer links here */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* Add social media icons here */}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
