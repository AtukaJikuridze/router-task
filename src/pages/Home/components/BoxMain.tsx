import React from "react";
import { BoxInfoAPI, IBoxInfo } from "../../../api";
import Box from "./Box";
const BoxMain = () => {
  return (
    <div className="flex flex-wrap gap-2 py-6">
      {BoxInfoAPI.map(({ id, title, description }: IBoxInfo) => (
        <Box description={description} id={id} title={title} />
      ))}
    </div>
  );
};

export default BoxMain;
