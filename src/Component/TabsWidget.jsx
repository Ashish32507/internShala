import React, { useState } from "react";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="w-[760px] h-[316px] bg-[#363C43] p-6 rounded-lg space-y-6 flex flex-col items-center">
      <div className="w-[650px] h-[62px] flex justify-evenly items-center space-x-4 bg-black rounded-[23px] py-1">
        {["About Me", "Experiences", "Recommended"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-[195px] h-[49px]  rounded-full text-white text-[18px] font-semibold ${
              activeTab === tab
                ? "bg-gray-600 txt-[#FFFFFF]"
                : "bg-black text-[#A3ADB2]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-[#969696]">
        {activeTab === "About Me" && (
          <div>
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now. I was born and
              raised in Albany, NY, and have been living in Santa Carla for the
              past 10 years with my wife Tiffany and my 4-year-old twin
              daughters - Emma and Ella. Both of them are just starting school,
              so my calendar is usually blocked between 9–10 AM. This is a...
            </p>
          </div>
        )}
        {activeTab === "Experiences" && (
          <div>
            <p>
              My experiences include working with multiple teams across various
              regions, coordinating with sales and technical teams to deliver
              exceptional client solutions. I specialize in enterprise software,
              focusing on cloud and CRM systems...
            </p>
          </div>
        )}
        {activeTab === "Recommended" && (
          <div>
            <p>
              Based on your needs, I highly recommend exploring Salesforce's
              latest integrations with AI-driven analytics, which would
              significantly enhance your team's productivity...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsWidget;
