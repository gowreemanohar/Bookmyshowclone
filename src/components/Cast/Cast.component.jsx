import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-left">
        <div className=" w-20 h-20 md:w-32 md:h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="cast and crew member"
            className="w-full h-full rounded-full object-center object-cover "
          />
        </div>
        <h1 className=" text-lg md:text-xl text-gray-800">{props.castName}</h1>
        <h5 className="text-sm text-gray-500"> as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
