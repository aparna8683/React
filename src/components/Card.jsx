import React from "react";

const Card = ({ company, logo, role, tag, salary, location, posted }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer">
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 object-contain rounded-full border"
        />
        <div>
          <h1 className="text-lg font-semibold text-gray-800">{company}</h1>
          <p className="text-sm text-gray-500">{posted}</p>
        </div>
      </div>

      {/* Role */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">{role}</h2>

      {/* Tag */}
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
        {tag}
      </span>

      {/* Details */}
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p>💰 {salary}</p>
        <p>📍 {location}</p>
      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
        Apply Now
      </button>
    </div>
  );
};

export default Card;
