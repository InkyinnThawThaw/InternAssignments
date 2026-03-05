import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`} className="block">
      <div className="p-2 bg-[#FDFDFD] rounded-xl shadow-md h-full">
        <div>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="p-2">
          <h3 className="font-bold text-[#00171F] text-[16px]">
            {user.id} - {user.name}
          </h3>

          <div className="text-[12px] font-medium text-[#667479] mt-2">
            <p>
              Gender: <span className="font-bold">{user.gender}</span> &nbsp; <span className="font-bold">.</span> &nbsp;
              Age: <span className="font-bold">{user.age}</span>
            </p>  
          </div>

          <p className="font-bold text-[14px] mt-2 text-[#00171F]">
            {user.price} VND
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
