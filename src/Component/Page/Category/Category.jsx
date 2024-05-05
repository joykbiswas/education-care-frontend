// import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import { useState } from "react";

const Category = ({ setSelectedCategory }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleButtonClick = (filter) => {
    setActiveFilter(filter);
    setSelectedCategory(filter);
  };

  return (
    <div className="space-x-4 my-4">
      <button
        onClick={() => handleButtonClick("all")}
        className={`text-xl  ${
          activeFilter === "all" ? "underline text-blue-500" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleButtonClick("EducationalConferences")}
        className={`text-xl ${
          activeFilter === "EducationalConferences"
            ? "underline text-blue-500"
            : ""
        }`}
      >
        EducationalConferences
      </button>
      <button
        onClick={() => handleButtonClick("TrainingPrograms")}
        className={`text-xl ${
          activeFilter === "TrainingPrograms" ? "underline text-blue-500" : ""
        }`}
      >
        TrainingPrograms
      </button>
      <button
        onClick={() => handleButtonClick("Webinars")}
        className={`text-xl ${
          activeFilter === "Webinars" ? "underline text-blue-500" : ""
        }`}
      >
        Webinars
      </button>
    </div>
  );
};

export default Category;

Category.propTypes = {
  setSelectedCategory: PropTypes.func,
};
