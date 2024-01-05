"use client"

import React, { useState } from "react";
import Link from 'next/link'

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true before fetch

    const formData = new FormData(e.target);
    try {
      const res = await fetch('https://clothingidentifier-backend.onrender.com/api/predict', {
        method: 'POST',
        body: formData
      });
      console.log(res)
      if (res.ok) {
        const data = await res.json();
        setPrediction(data.prediction);
      } else {
        console.error('Error fetching data:', res.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetch completes
    }
  };

  const inputHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
      setPrediction("");
    }
  };

  return (
    <div className="w-full h-full flex flex-row justify-center items-center align-middle">
      <form
        onSubmit={handleSubmit}
        className="bg-green-200 w-1/2 h-full flex flex-col justify-center items-center align-middle"
      >
        <label
          className="block text-3xl font-bold text-gray-900 dark:text-white mb-10"
          htmlFor="image"
        >
          Upload an image with a clear background
        </label>
        <input
          onChange={inputHandler}
          className="block w-[70%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="image"
          name="file"
          accept="image/*"
          type="file"
        />
        <button
          type="submit"
          className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? 'Uploading...' : 'Upload...'}
        </button>
        <div className="mt-10 text-sm">
          <p>Your image will go into a simple CNN using the Tiny VGG architecture... <br/> 
          Hopefully the prediction is correct when you click upload </p>
        </div>
      </form>

      <div className="bg-gray-200 w-1/2 h-full flex flex-col justify-center items-center align-middle overflow-hidden">
        {file !== null ? (
          <img src={file} className="w-2/3 max-w-[400px] max-h-[400px]" alt="Uploaded" />
        ) : (
          <p>Your Image will Load here after upload...</p>
        )}
        <h1 className="my-6 ">The image prediction is: {prediction}</h1>
        {prediction !== "" && (
          <h2 className="text-sm mx-1 text-center">
            if the prediction doesn't match it may be because of the background.
            The model has an ~88% accuracy with the Fashion MNIST dataset. if
            you are curious about how the model work then check out my{" "}
            <Link className="underline decoration-sky-500" href="https://github.com/dkeum/Backend_forClothesIdentifer.git">
              github
            </Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;