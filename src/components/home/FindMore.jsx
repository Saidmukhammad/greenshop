import Container from  "../common/Container"
import img1 from "../../assets/img/forfindmoreplant.png"
import img2 from "../../assets/img/forfindmoreplant2.png"

const FindMore = () => {
  const cardInfo = [
    {
        img: img1,
        title: 'Summer cactus & succulents',
        desc: "We are an online plant shop offering a wide range of cheap and trendy plants",
    },
    {
        img: img2,
        title: 'Styling Trends & much more',
        desc: "We are an online plant shop offering a wide range of cheap and trendy plants",
    }
  ]

  return (
    <section className="mt-[146px]">
        <Container>
            <div className="grid grid-cols-2 gap-7">
                {cardInfo.map ((card, index) => (
                    <div key={index} className="relative">
                        {/* Картинка вынесена за пределы карточки */}
                        <img src={card.img} alt={card.title} className="absolute -left-1 -top-14 z-10"/>
                        
                        {/* Карточка с overflow-hidden */}
                        <div className="bg-[#FBFBFB] pt-11 px-[30px] pb-[46px] flex relative overflow-hidden">
                            <div className="flex flex-col items-end w-full">
                                <h3 className="text-[#3D3D3D] font-black text-lg leading-6 w-[160px] text-right uppercase">{card.title}</h3>
                                <p className="text-right text-[#727272] text-sm mt-4 mb-[30px] max-w-[290px] w-full leading-6">{card.desc}</p>
                                <button className="bg-[#46A358] text-white text-sm px-8 py-3 rounded-md font-medium hover:bg-[#3d8e4f] transition">Find more →</button>
                            </div>
                            
                            {/* Круги внутри карточки */}
                            <div className="absolute -left-[170px] -bottom-[150px] z-0">
                                <div className="relative">
                                    <div className="h-[256px] w-[256px] border border-[#46A358] rounded-full"></div>
                                    <div className="h-[256px] w-[256px] border-2 border-[#46A358] rounded-full absolute left-2 top-[5px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default FindMore