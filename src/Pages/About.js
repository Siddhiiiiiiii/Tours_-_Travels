import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import packageImage from '../images/aboutusimg.png';
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
      <div class="bg-white py-6 sm:py-8 lg:py-12 ">
        <div class="mx-auto max-w-screen-lg px-4 md:px-8">

          <div class="mb-8 md:mb-12">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">At Sidhesh Tour and Travel, we believe in transforming your travel dreams into reality. Nestled in the heart of Bhusawal, our travel agency is more than just a destination management company; it's a passionate team of travel enthusiasts dedicated to curating extraordinary experiences for you.</p>
          </div>

          <div class="grid grid-cols-2 gap-6 rounded-lg bg-danger p-6 md:grid-cols-4 md:gap-8 md:p-8">

            <div class="flex flex-col items-center">
              <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">100</div>
              <div class="text-sm text-white sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
              <div class="text-sm text-white sm:text-base">People</div>
            </div>


            <div class="flex flex-col items-center">
              <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
              <div class="text-sm text-white sm:text-base">Customers</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
              <div class="text-sm text-white sm:text-base">Coffee breaks</div>
            </div>

          </div>
        </div>
      </div>

{/* What others say about us*/}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div class="grid gap-4 md:grid-cols-2 md:gap-8">

            <div class="flex flex-col items-center gap-4 rounded-lg bg-danger px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">“Sidhesh Tour and Travel exceeded my expectations in every way. The team's attention to detail and commitment to creating unique travel experiences truly set them apart. From seamless itinerary planning to personalized recommendations, they made my journey unforgettable. Kudos to the entire team at Sidhesh Tour and Travel!"”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-danger bg-gray-100 md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-dangersm:text-left md:text-base">Akshay Phalak</div>
                  <p class="text-center text-sm text-white sm:text-left md:text-sm">Customer</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 rounded-lg bg-danger px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">“Poonam checking in! Sidhesh Tour and Travel is my go-to travel agency for a reason. Their dedication to customer satisfaction is evident from the moment you start planning your trip. The team's friendly and knowledgeable approach, coupled with their local expertise, ensures a smooth and enriching travel experience. Highly recommend Sidhesh Tour and Travel for your next adventure!”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-danger bg-gray-100 md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-dangersm:text-left md:text-base">poonam Berg</div>
                  <p class="text-center text-sm text-white sm:text-left md:text-sm">CFO / Dashdash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/*FAQs*/}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">.</p>
          </div>


          <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">What makes Sidhesh Tour and Travel unique?</h3>
              <p class="text-gray-500">At Sidhesh Tour and Travel, we stand out for our personalized approach and commitment to creating extraordinary travel experiences. Our local expertise in Bhusawal and beyond ensures that every journey is crafted with attention to detail and a passion for exploration.</p>
            </div>

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">How can I contact Sidhesh Tour and Travel for assistance?</h3>
              <p class="text-gray-500">We are readily available for your inquiries. You can reach us through our contact page on the website, or feel free to give us a call at [782101608]. Our dedicated team is here to assist you with any questions or travel-related needs.</p>
            </div>

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">What destinations does Sidhesh Tour and Travel cover?</h3>
              <p class="text-gray-500"> We offer a diverse range of destinations, both within Bhusawal and globally. Whether you're looking for a local cultural experience or an international adventure, our team can tailor an itinerary to match your preferences.</p>
            </div>

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">How does Sidhesh Tour and Travel ensure the safety of travelers?</h3>
              <p class="text-gray-500"> Your safety is our top priority. We work with reputable partners, adhere to industry safety standards, and keep a close eye on travel advisories. Additionally, our team is well-equipped to handle any unforeseen circumstances, providing you with peace of mind throughout your journey.</p>
            </div>

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">What types of travel services does Sidhesh Tour and Travel offer?</h3>
              <p class="text-gray-500">We offer a comprehensive range of travel services, including itinerary planning, transportation arrangements, accommodation bookings, and guided tours. Whether you're planning a leisurely vacation, business trip, or special event, we have you covered.</p>
            </div>

            <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
              <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>

              <h3 class="mb-3 text-lg font-semibold text-danger md:text-xl">How can I stay updated on promotions and travel deals offered by Sidhesh Tour and Travel?</h3>
              <p class="text-gray-500">Stay informed about our latest promotions and travel deals by subscribing to our newsletter on the website. You can also follow us on social media platforms for real-time updates and exclusive offers.</p>
            </div>

          </div>
        </div>
      </div>

<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}
export default About
