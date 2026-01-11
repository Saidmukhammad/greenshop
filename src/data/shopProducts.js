import shopslide1 from "../assets/img/shopslide1.png";
import shopmain from "../assets/img/shopmain.png";
import shopslide3 from "../assets/img/shopslide3.png";
import shopslide4 from "../assets/img/shopslide4.png";

export const shopProduct = {
  id: 1,
  name: "Barberton Daisy",
  price: 119,
  rating: 4,
  reviewsCount: 19,
  sku: "1995751877966",
  categories: ["Potter Plants"],
  tags: ["Home", "Garden", "Plants"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    shopslide1,
    shopmain,
    shopslide3,
    shopslide4,
  ],
  description: {
    main: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    livingRoom: "Perfect for living rooms, adding freshness and a natural look.",
    diningRoom: "Improves mood, reduces stress and enhances the atmosphere.",
    office: "Creates a calm and productive workspace.",
  },
}
