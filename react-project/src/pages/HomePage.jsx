import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";

const HomePage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    fetch("https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.error("API Error: ", err));
  }, []);

  const displayedUsers = isDisplayed ? allUsers : allUsers.slice(0, 8);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[16px] text-medium">Whats new?</p>
          <h2 className="text-[24px] font-bold text-[#003459]">
            Our Team Members
          </h2>
        </div>

        <button
          onClick={toggleDisplay}
          className="hidden md:block md:flex gap-2 border-[1.5px] border-[#003459] text-[#003459] text-[14px] px-7 py-3 rounded-[57px] font-medium hover:bg-[#003459] hover:text-white group"
        >
          {isDisplayed ? "View Less" : "View More"}{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group pt-[3px]"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              className="stroke-[#003459] group-hover:stroke-white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <CardList users={displayedUsers} />

      <div className="mt-8 md:hidden">
        <button
          onClick={toggleDisplay}
          className="w-full flex gap-2 justify-center border-[1.5px] border-[#003459] text-[#003459] text-[14px] px-7 py-3 rounded-[57px] font-medium hover:underline"
        >
          {isDisplayed ? "View Less" : "View More"}{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pt-[3px]"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              className="stroke-[#003459] group-hover:stroke-white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
