import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db, storage } from '../firebase'; 
const TourPackages = () => {
  const [formData, setFormData] = useState({
    PackageName: '',
    itineraryDetails: '',
    price: '',
    startDate: '',
    endDate: '',
    duration: '',
    accommodation: '',
    description: '',
    itineraryDayWise: '', 
    image: null, 
    imageURL: '' 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0], 
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
      
        // const imageRef = storage.ref().child(formData.image.name);
        // await imageRef.put(formData.image);
        // const imageURL = await imageRef.getDownloadURL();

      
        // setFormData((prevFormData) => ({
        //   ...prevFormData,
        //   imageURL: imageURL,
        // }));

      
        const docRef = await addDoc(collection(db, 'tourPackages'), formData);
        console.log('Form data stored successfully with ID: ', docRef.id);
      
        setFormData({
          PackageName: '',
          itineraryDetails: '',
          price: '',
          startDate: '',
          endDate: '',
          duration: '',
          accommodation: '',
          description: '',
          itineraryDayWise: '', 
          image: null,
          imageURL: ''
        });
      } catch (error) {
        console.error('Error storing form data: ', error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.PackageName.trim()) {
      errors.PackageName = 'Package Name is required';
      isValid = false;
    }


    setErrors(errors);
    return isValid;
  };

  return (
    <div className="container mx-auto">
      <div className="border border-gray-300 rounded p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="PackageName">Package Name</label>
            <input
              type="text"
              id="PackageName"
              name="PackageName"
              value={formData.PackageName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.PackageName && <p className="text-red-500">{errors.PackageName}</p>}
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

          <div className="mb-4">
            <label className="block mb-1" htmlFor="itineraryDayWise">Itinerary Day Wise</label>
            <textarea
              id="itineraryDayWise"
              name="itineraryDayWise"
              value={formData.itineraryDayWise}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            ></textarea>
            {errors.itineraryDayWise && <p className="text-red-500">{errors.itineraryDayWise}</p>}
          </div>

          {/* <div className="mb-4">
            <label className="block mb-1" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*" 
              className="w-full border rounded px-3 py-2"
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div> */}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TourPackages;
