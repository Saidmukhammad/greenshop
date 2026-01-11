import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm text-[#A5A5A5] mb-6">
      <ul className="flex items-center gap-1">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index !== items.length - 1 ? (
              <>
                <Link
                  to={item.path}
                  className="hover:text-[#46A358] transition text-[#3D3D3D] text-[15px] leading-[16px] font-bold"
                >
                  {item.label}
                </Link>
                <span>/</span>
              </>
            ) : (
              <span className="text-[#3D3D3D]">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
