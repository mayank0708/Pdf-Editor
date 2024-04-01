// HomePage.js
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 ">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center ">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to <span className=" text-orange-700">PDF Editor</span>
          </h1>
          {/* <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Login</button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">Register</button>
          </div> */}
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-semibold leading-6 text-gray-900">
                Edit PDFs Effortlessly
              </h2>
              <p className="mt-2 max-w-2xl text-base text-gray-600">
                Edit text, images, and links in your PDF documents with ease.
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-8 sm:px-10">
              <h2 className="text-xl font-semibold leading-6 text-gray-900">
                Secure and Reliable
              </h2>
              <p className="mt-2 max-w-2xl text-base text-gray-600">
                Your documents are safe with us. We prioritize security and reliability.
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-8 sm:px-10">
              <h2 className="text-xl font-semibold leading-6 text-gray-900">
                Cross-Platform Compatibility
              </h2>
              <p className="mt-2 max-w-2xl text-base text-gray-600">
                Access PDF Forge on any device, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-lg ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; 2024 PDF Forge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
