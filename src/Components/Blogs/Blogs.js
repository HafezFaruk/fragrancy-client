import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../../Share/Contact/Contact";
import RecentPost from "./RecentPost/RecentPost";
import SingleBlog from "./SingleBlog/SingleBlog";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      name: "CLASSIC FRAGRANCE GIFTS",
      description:
        "Classic fragrances are ones that simply don’t go out of style, don’t age and can be worn for any occasion. In other words, you simply can’t go wrong, so if you’re struggling to make a decision, we’ve got a classic fragrance for him and her that will do perfectly.",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/vsjXWZj/1.jpg",
    },
    {
      id: 2,
      name: "Thierry Mugler – Alien (gift set)",
      description:
        "This amber-woody fragrance from Thierry Mugler was released in 2005 and has topped best-seller lists frequently since. Amber and jasmine laid over spicy woods gives a powerful yet feminine fragrance that will stay with you all day. The spicy woods in the base give this a real .",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/Y7cxsdz/2.jpg",
    },
    {
      id: 3,
      name: "FRAGRANCE BLACK FRIDAY DEALS",
      description:
        "At Fragrancy Direct we’ll be running a site-wide discount for the whole weekend. Yes, you heard that right! Get all of your favourite fragrances for even less during Black Friday weekend and take advantage of our discount, whether you’re stocking up on your favourite.",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/t2Wq2Z2/3.jpg",
    },
    {
      id: 4,
      name: "Gucci – Rush",
      description:
        "Released in 1999, Gucci Rush is a fragrance for women and has an intense and adult feel about it.As the name suggests, this is a very distinctive and intense fragrance which opens up softly, with peach, gardenia and freesia but quickly grows in intensity, as its heart of coriander.",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/KLY1Jw1/4.jpg",
    },
    {
      id: 5,
      name: "Tom Ford – Ombre Leather ",
      description:
        "This unisex fragrance, released in 2018, is a leather fragrance. Top notes of cardamom combined with middle notes of jasmine, warm spices and amber give it a warming vibe while the base of patchouli, moss and woody scents give a deep and earthy fragrance. .",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/tXG0qbM/5.jpg",
    },
    {
      id: 6,
      name: "Vera Wang – Rock Princess",
      description:
        "This darkly delightful, floral-fruity fragrance is one for the rebels. The base of musk, cashmere, wood and iris really sets the tone for this one. Though it is softened by the centre of heliotrope, lily, rose and jasmine, the tang of the peach and raspberry top notes y.",
      date: "12 Jul 2021",
      img: "https://i.ibb.co/zXj3GqF/6.jpg",
    },
  ];
  return (
    <Container>
      <div className="row my-4">
        <div className="col-md-9">
          <Row xs={1} md={2} className="g-4">
            {blogs.map((blog) => (
              <SingleBlog key={blog.id} blog={blog}></SingleBlog>
            ))}
          </Row>
        </div>
        <div className="col-md-3">
          <RecentPost></RecentPost>
        </div>
        <Contact></Contact>
      </div>
    </Container>
  );
};

export default Blogs;
