"use client";

import React, { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(e.target.formData.data)

    const formData = new FormData(e.target);
    const Upload = async () => {
      // await fetch("https://clothingidentifier-backend.onrender.com/api/predict", {
      //   method: "GET",
      // })  .then(async (res) => {

      //   const data = await res.json()
      //   console.log("this is data: ")
      //   console.log(data)
      //   return data;
      // })
      //    .then( (data) => {
      //     setPrediction(data.prediction);
      //     console.log(data);
      // });

      await fetch('https://clothingidentifier-backend.onrender.com/api/predict', {
        method: 'POST',
        body: formData
      }).then(async (res) => {

            const data = await res.json()
            console.log("this is data: ")
            console.log(data)
            return data;
          })
             .then( (data) => {
              setPrediction(data.prediction);
              console.log(data);
          });
    };


    Upload();
  }

  const inputHandler = (event) => {
    // Placeholder function for getting prediction
    // Replace this with your actual prediction logic

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
        {/* <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4 text-3xl my-5 font-bold">Image :  </label>
          <input onChange={inputHandler}  className="w-[105px]" id="image" name="file" accept="image/*"  type="file" /> */}
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        >
          Upload...
        </button>
      </form>
      <div className="bg-gray-200 w-1/2 h-full flex flex-col justify-center items-center align-middle overflow-hidden">
        {file !== null ? (
          <img src={file} className="w-2/3" alt="Uploaded" />
        ) : (
          <p>Your Image will Load here after upload...</p>
        )}
        <h1 className="my-6 ">The image prediction is: {prediction}</h1>
        {prediction !== "" && (
          <h2 className="text-sm mx-1 text-center">
            if the prediction doesn't match it may be because of the background.
            The model has an ~88% accuracy with the Fashion MNIST dataset. if
            you are curious about how the model work then check out my{" "}
            <a href="https://github.com/dkeum/Backend_forClothesIdentifer.git">
              github
            </a>
          </h2>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
