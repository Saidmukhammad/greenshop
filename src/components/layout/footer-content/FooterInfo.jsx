import { forFooterInfo } from '../../../data/footerData'
import Input from '../../ui/Input'

const FooterInfoCard = ({ data }) => (
  <div className="w-[204px] relative after:content-[''] after:absolute after:top-[8px] after:-right-[30px] after:w-[1px] after:h-[90%] after:bg-[#46A3581A] last:after:hidden after:ml-6">
    <img src={data.img} alt={data.title} className="" />
    <h3 className="text-[#3D3D3D] font-bold text-[17px] leading-4 mt-[17px] mb-[9px]">
      {data.title}
    </h3>
    <p className="text-[#727272] text-sm leading-[22px]">{data.text}</p>
  </div>
)

const FooterInfo = () => {
  return (
    <div className="bg-[#FBFBFB] pt-[25px] pr-[15px] pb-[23px] pl-[34px] flex items-center justify-between">
      <div className="flex gap-[68px]">
        {forFooterInfo.map((data) => (
          <FooterInfoCard key={data.id} data={data} />
        ))}
      </div>
      <div className="max-w-[354px]">
        <h3 className="text-[#3D3D3D] font-bold text-[18px] leading-4 mb-[18px]">
          Would you like to join newsletters?
        </h3>
        <Input placeholder="enter your email address..." buttonText="Join" />
        <p className="mt-[18px] text-[13px] leading-[22px] tracking-wide text-[#727272]">
          We usually post offers and challenges in newsletter. We're your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  )
}

export default FooterInfo
