import { useState } from "react";
import ShopDescription from "./tabs/ProductsDescription";
import ShopReviews from "./tabs/ProductsReviews";

const TABS = [
  { id: "description", label: "Product Description" },
  { id: "reviews", label: "Reviews (19)" },
];

const ShopTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-16">
      {/* Tabs header */}
      <div className="flex gap-8 border-b border-[#46A35880]">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative pb-3 text-[17px] leading-[16px] transition
                ${
                  isActive
                    ? "text-[#46A358] font-bold"
                    : "text-[#3D3D3D] hover:text-[#46A358]"
                }
              `}
            >
              {tab.label}

              {/* Active underline */}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#46A358]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tabs content */}
      <div className="pt-5">
        {activeTab === "description" && <ShopDescription />}
        {activeTab === "reviews" && <ShopReviews />}
      </div>
    </div>
  );
};

export default ShopTabs;
