"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Adjust path to your Sanity client
import { serviceLocationsQuery } from "../../sanity/lib/queries"; // Adjust path to your queries
import Image from "next/image";
import ServiceForm from "../components/ServiceForm";

// Define the type for the service location data
interface ServiceLocation {
  _id: string;
  location: string;
  contact: number;
}

const HomePage = () => {
  // Set the correct type for the locations state
  const [locations, setLocations] = useState<ServiceLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter locations based on the search query
  const filteredLocations = locations.filter(location =>
    location.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await client.fetch(serviceLocationsQuery);
        setLocations(data);
      } catch (error) {
        console.error("Error fetching service locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleSearch = () => {
    // This function will be triggered when the search button is clicked
    // For now, filtering is handled as the user types
  };

  return (
    <div className="bg-[#e7e7e7] ">
      {/* Hero Section */}
      <div className="relative mb-12 object-cover w-full h-[500px]  lg:h-[750px] 2xl:h-[900px] bg-[#1C7940] mt-7">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center items-center pb-6 md:pb-0 md:w-1/2">
            <h1 className="text-white text-5xl sm:text-4xl md:text-6xl font-bold pt-20 md:pt-0">
              Contact Us
            </h1>
          </div>
          <div className="flex-1 flex justify-center md:bottom-0 items-center px-4 ">
            <div className=" sm:w-auto">
              <Image
                src="/images/service-man.svg"
                alt="Banner"
                className=" object-fit w-full "
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Form Section */}
      <div className="container mx-auto px-4 sm:px-12 py-8">
        <div className="relative mb-3 p-5 ">
          <ServiceForm />
        </div>
        {/* Service Locations Section */}
        <div className="container mx-auto px-4 py-4 mt-24 mb-12">
          <h3 className="text-black text-2xl md:text-4xl font-semibold font-['Montserrat'] mb-8">
            Service Locations
          </h3>

          {/* Search Input */}
          <div className="mb-4 w-full md:w-3/5 flex flex-col md:flex-row md:space-x-9 items-center ">
            <input
              type="text"
              placeholder="Search for a location"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#e7e7e7]"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="flex-1">
              <button
                onClick={handleSearch}
                className="bg-[#006a33] text-white py-2 px-9 rounded-2xl mt-2 md:mt-0 md:ml-2 w-full md:w-auto"
              >
                Search
              </button>
            </div>
          </div>

          {/* Locations List & Map */}
          {loading
            ? <p className="text-gray-500">Loading service locations...</p>
            : <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Service Locations List */}
                <ul className="space-y-4 flex-1 h-[480px] overflow-y-auto pr-2 ">
                  {filteredLocations.length > 0
                    ? filteredLocations.map(location =>
                        <li
                          key={location._id}
                          className="bg-gray-100 p-4 rounded-lg shadow-md border-[#d9d9d9] bg-[#d9d9d9]"
                        >
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {location.location}
                          </h4>
                          <p className="text-gray-600">
                            📞 {location.contact}
                          </p>
                        </li>
                      )
                    : <p className="text-gray-500">
                        No service locations available.
                      </p>}
                </ul>

                {/* Google Maps Iframe (always shown) */}
                <div className="flex-1">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1Vp5TqZEeylTOW4O4J_fEDsdWVqaF9Zg&ehbc=2E312F"
                    width="100%"
                    height="480"
                    className="rounded-lg shadow-lg"
                  />{" "}
                </div>
              </div>}
        </div>
        {/* Buy Parts & Accessories Section */}
        <div className="relative mb-12 p-3 container mx-auto px-4 sm:px-12 bg-[#d9d9d9] rounded-[25px]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="text-black text-2xl  md:text-3xl font-semibold font-['Montserrat']">
                Buy Parts & Accessories{" "}
              </div>
              <div className="text-black text-base font-normal font-['Montserrat']">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <div className="h-11 px-[30px] py-2.5 bg-[#006a33] rounded-[40px] inline-flex justify-center items-center gap-2.5 cursor-pointer">
                <span className="text-white text-xl font-semibold font-['Montserrat']">
                  Learn More
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 h-auto flex justify-center mt-3 md:mt-0">
              <Image
                src="/images/Parts-Accs.svg"
                alt="Accessories Image"
                className="object-contain p-2 w-full h-auto"
                width={350}
                height={350}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
