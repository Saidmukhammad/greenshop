import Container from "../common/Container"
import post1 from "../../assets/img/post1.png"
import post2 from "../../assets/img/post2.png"
import post3 from "../../assets/img/post3.png"
import post4 from "../../assets/img/post4.png" 

const  BlogPosts = () => {
  const blogData = [
    {
      title: "Cactus & Succulent Care Tips",
      desc: "Cacti are succulents are easy care plants for any home or patio. ",
      date: "September 12",
      time: "6",
      img: post1
    },
    {
      title: "Top 10 Succulents for Your Home",
      desc: "Best in hanging baskets. Prefers medium to high light. ",
      date: "September 13",
      time: "2",
      img: post2
    },
    {
      title: "Cacti & Succulent Care Tips",
      desc: "Cacti and succulents thrive in containers and because most are..",
      date: "September 15",
      time: "3",
      img: post3
    },
    {
      title: "Best Houseplants Room by Room",
      desc: "The benefits of houseplants are endless. In addition to.. ",
      date: "September 15",
      time: "2",
      img: post4
    },
  ];
    

  return (
    <div className="mt-[138px] mb-[100px]">
      <div className=""></div>
      <Container>
        <div className="">
          <div className="text-center ">
            <h2 className="text-[#3D3D3D] text-3xl leading-[16px] font-bold mb-12">
              Our Blog Posts
            </h2>
            <p className="text-sm text-[#727272] leading-4 mb-[35px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-11">
            {blogData.map((data, index) => (
              <div className="" key={data.id}>
                <img src={data.img} alt={data.title} />
                <div className="bg-[#FBFBFB] pt-[9px] pr-[9px] pb-3 pl-[15px]">
                  <p className="text-[#46A358] font-medium text-sm leading-4 mb-1">
                    {data.date} | Read in {data.time} min
                  </p>
                  <h3 className="text-[#3D3D3D] text-[22px] leading-[26px] font-bold mb-1">
                    {data.title}
                  </h3>
                  <p className="text-[#3D3D3D] text-sm leading-[22px] mb-2">{data.desc}</p>
                  <button 
                    type="button"
                    className="text-[#46A358] hover:underline font-medium"
                    onClick={() => {
                      // TODO: Navigate to blog post detail page
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPosts;
