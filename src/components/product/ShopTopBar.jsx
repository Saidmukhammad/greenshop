const ShopTopBar = ({ activeTab, setActiveTab, sortType, setSortType }) => {
  const tabConfig = [
    { id: "all", label: "All Plants" },
    { id: "new", label: "New Arrivals" },
    { id: "sale", label: "Sale" }
  ];

  const sortOptions = [
    { value: "default", label: "Default sorting" },
    { value: "low", label: "Price: low to high" },
    { value: "high", label: "Price: high to low" }
  ];

  return (
    <div className="flex items-center justify-between mb-6">

      {/* Tabs */}
      <div className="flex gap-8 text-[#3D3D3D] text-base">
        {tabConfig.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-1 transition-colors ${
              activeTab === tab.id
                ? "text-[#46A358] font-bold border-b-2 border-[#46A358]"
                : "hover:text-[#46A358]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="text-sm text-[#3D3D3D]">
        Sort by:&nbsp;
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="outline-none cursor-pointer"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default ShopTopBar