import React from "react";

const MyDescoundOnListProducts = () => {
  const value = [
    {
      id: "1",
      descound: "20",
    },
  ];
  return (
    <>
      {value?.map((item) => (
        <div
          key={item.id}
          className="bg-red-700 font-medium rounded-br-2xl italic text-white py-1 px-3 "
        >
          <p> - ${item.descound}</p>
        </div>
      ))}
    </>
  );
};

export default MyDescoundOnListProducts;
