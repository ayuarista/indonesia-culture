import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm xl:text-[16px] text-gray-600 flex items-center gap-2 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index !== 0 && <IoMdArrowDropright className="w-4 h-4 text-gray-400" />}
          {item.path ? (
            <Link to={item.path} className="hover:underline hover:text-light-red">
              {item.label}
            </Link>
          ) : (
            <span className="text-light-red font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
