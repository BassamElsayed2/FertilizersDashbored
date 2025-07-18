"use client";

import React from "react";
import Image from "next/image"; 

const Agent: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] rounded-md">
        <div
          className="h-[120px] rounded-t-md"
          style={{
            background: "linear-gradient(101deg, #FE7A36 0%, #FD5812 100%)",
          }}
        >
          <Image
            src="/images/icons/4dot.svg"
            className="rtl:-scale-x-100"
            alt="4dot-image"
            width={64}
            height={66}
          />
        </div>

        <div className="trezo-card-content px-[20px] md:px-[25px] pb-[20px] md:pb-[25px] text-center">
          <Image
            src="/images/users/user13.jpg"
            className="inline-block rounded-full w-[167px] h-[167px] mb-[16px] -mt-[83px]"
            alt="user-image"
            width={167}
            height={167}
          />

          <h3 className="!text-md !mb-[3px]">Harold Cook</h3>

          <span className="block">Owner</span>

          <div className="my-[15px] md:my-[20px] flex items-center justify-center gap-[10px]">
            <a
              href="#"
              className="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#3a559f]"
              target="_blank"
            >
              <i className="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"></i>
            </a>
            <a
              href="#"
              className="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#03a9f4]"
              target="_blank"
            >
              <i className="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"></i>
            </a>
            <a
              href="#"
              className="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#007ab9]"
              target="_blank"
            >
              <i className="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"></i>
            </a>
          </div>

          <ul>
            <li className="flex items-center justify-between mb-[11px] last:mb-0">
              <span className="block text-black dark:text-white">
                Property ID:
              </span>
              <span className="block">P1001</span>
            </li>
            <li className="flex items-center justify-between mb-[11px] last:mb-0">
              <span className="block text-black dark:text-white">
                Year Built:
              </span>
              <span className="block">2010</span>
            </li>
            <li className="flex items-center justify-between mb-[11px] last:mb-0">
              <span className="block text-black dark:text-white">
                Property Type:
              </span>
              <span className="block">Residential</span>
            </li>
            <li className="flex items-center justify-between mb-[11px] last:mb-0">
              <span className="block text-black dark:text-white">
                Listing Date:
              </span>
              <span className="block">Sep 15, 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Agent;
