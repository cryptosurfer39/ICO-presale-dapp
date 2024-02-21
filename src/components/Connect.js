import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="font-semibold uppercase lg:text-2xl text-xl hover:text-trumpos-fontLight text-center border-green-300 px-2 mx-auto lg:mx-0 my-auto py-2 bg-gray-200/[0.3] hover:bg-gradient-to-r hover:from-white-500 hover:via-blue-500 hover:to-green-500 text-black-300 items-center"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
