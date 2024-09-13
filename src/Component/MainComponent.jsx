import React from "react";
import TabsWidget from "./TabsWidget";
import GalleryWidget from "./GalleryWidget";

const MainComponent = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center pt-8 pb-8">
      {/* Left half empty */}

      {/* Right half widgets */}
      <div className="flex flex-col lg:flex-col  space-y-6">
        <TabsWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default MainComponent;
