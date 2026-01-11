import { forFooterLinks, socials } from '../../../data/footerData'
import methods from '../../../assets/img/payingmethods.png'

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-16 pt-8 pb-7 pr-[15px] pl-[34px] border-b border-[#46A35833] ">
      {forFooterLinks.map((data, index) => (
        <div className="" key={index}>
          <h4 className="text-[#3D3D3D] text-[18px] leading-4 font-bold mb-2">
            {data.title}
          </h4>
          <ul>
            {data.links.map((link, i) => (
              <li
                key={i}
                className="text-[#3D3D3D] text-[14px] hover:text-[#46A358] cursor-pointer transition leading-[30px]"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="">
        <div className="">
          <h4 className="text-[#3D3D3D] text-[18px] leading-4 font-bold mb-5">
            Social Media
          </h4>
          <div className="flex items-center gap-[10px]">
            {socials.map((data, index) => (
              <button
                className="border border-[#46A35833] rounded-[4px] w-[30px] h-[30px] flex items-center justify-center"
                key={index}
              >
                <img src={data.img} alt="sth" />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-[33px]">
          <h4 className="text-[#3D3D3D] text-[18px] leading-4 font-bold mb-4">
            We accept
          </h4>
          <div>
            <img src={methods} alt="Payment methods accepted" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks