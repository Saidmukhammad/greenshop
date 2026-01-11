import { forFooterContacts } from '../../../data/footerData'

const FooterContacts = () => {
  return (
    <div className="flex items-center gap-[73px] bg-[#46A3581A] pt-[25px] pr-[15px] pb-5 pl-[34px] border-y border-[rgba(70,163,89,0.2)]">
      {forFooterContacts.map(({ id, img, text }) => (
        <div className="w-[205px]" key={id}>
          <div
            className="flex items-center text-sm leading-[22px] text-[#3D3D3D] gap-2"
          >
            <img src={img} alt={text || 'Contact info'} className="" />
            {text && <span>{text}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterContacts