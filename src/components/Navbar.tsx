import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 p-6 flex justify-between">
      <div>
        <h1 className="font-bold text-4xl">
          <span className="text-3xl text-accent font-medium">&lt;</span>
          Pradyumna D{" "}
          <span className="text-3xl text-accent font-medium">/&gt;</span>
        </h1>
      </div>
      <div className="lg:flex gap-5 hidden">
        <div>
          <h1 className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer">
            <span className="text-xl text-accent font-medium">&lt;</span>
            Home <span className="text-lg text-accent font-medium">/&gt;</span>
          </h1>
        </div>{" "}
        <div>
          <h1 className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer">
            <span className="text-xl text-accent font-medium">&lt;</span>
            About <span className="text-lg text-accent font-medium">/&gt;</span>
          </h1>
        </div>{" "}
        <div>
          <h1 className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer">
            <span className="text-xl text-accent font-medium">&lt;</span>
            Skills{" "}
            <span className="text-lg text-accent font-medium">/&gt;</span>
          </h1>
        </div>{" "}
        <div>
          <h1 className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer">
            <span className="text-xl text-accent font-medium">&lt;</span>
            Work <span className="text-lg text-accent font-medium">/&gt;</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
