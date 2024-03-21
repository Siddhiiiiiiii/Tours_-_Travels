import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions for adding documents
import { db } from '../firebase'; // Import your firebase configuration

const TourPackages = () => {
  const [formData, setFormData] = useState({
    heading: '',
    itineraryDetails: '',
    price: '',
    startDate: '',
    endDate: '',
    duration: '',
    accommodation: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const docRef = await addDoc(collection(db, 'tourPackages'), formData);
        console.log('Form data stored successfully with ID: ', docRef.id);
        // Clear form fields after submission
        setFormData({
          heading: '',
          itineraryDetails: '',
          price: '',
          startDate: '',
          endDate: '',
          duration: '',
          accommodation: '',
          description: ''
        });
      } catch (error) {
        console.error('Error storing form data: ', error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.heading.trim()) {
      errors.heading = 'Heading is required';
      isValid = false;
    }
    // Add similar validation for other fields

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="container mx-auto">
       <div className="border border-gray-300 rounded p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="heading">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.heading && <p className="text-red-500">{errors.heading}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="itineraryDetails">Itinerary Details</label>
          <textarea
            id="itineraryDetails"
            name="itineraryDetails"
            value={formData.itineraryDetails}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.itineraryDetails && <p className="text-red-500">{errors.itineraryDetails}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>

        {/* Add other form fields similarly */}
        {/* Start Date, End Date, Duration, Accommodation */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.duration && <p className="text-red-500">{errors.duration}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="accommodation">Accommodation</label>
          <input
            type="text"
            id="accommodation"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.accommodation && <p className="text-red-500">{errors.accommodation}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default TourPackages;
