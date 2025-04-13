import React from "react";
import { useParams } from "react-router-dom";

const Province = () => {
  const { name } = useParams();
  return (
    <div className="pt-28 mx-8">
       <h1 className="text-3xl font-bold">Welcome to {name}</h1>
       <p className="mt-4">Ini adalah halaman khusus untuk {name}.</p>
    </div>
  );
};

export default Province;
