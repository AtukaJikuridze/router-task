import React from "react";
import { IBoxInfo } from "../../../api";

const Box = ({ id, title, description }: IBoxInfo) => {
  return (
    <div className="w-[24%] h-[400px] bg-amber-500 text-center py-5">
      <h1 className="text-white w-10 h-10 bg-red-400 m-auto flex justify-center items-center rounded-full">
        {id}
      </h1>
      <h1 className="text-white py-5">{title}</h1>
      <p className="text-white"> {description}</p>
    </div>
  );
};

export default Box;
