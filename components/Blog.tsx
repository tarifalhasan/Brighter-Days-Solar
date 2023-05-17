import Image from 'next/image';
import blog1 from '../images/blog/1.png';
import blog2 from '../images/blog/2.png';
import Container from './Container';

const Blog = () => {
  const BlogData = [
    {
      image: blog1,
      date: 'MAY 19, 2023',
      title: 'Maximising Solar Panel Efficiency: Tips from the Pros',
    },
    {
      image: blog2,
      date: 'MAY 19, 2023',
      title: 'Insider Secrets for Optimizing Panel Efficiency',
    },
  ];

  return (
    <div className="bg-[#F9F9FF]">
      <Container height="auto">
        <div className="py-16">
          <div>
            <span className="section-title text-black  opacity-75">
              Our Process
            </span>
            <h2 className=" text-lg md:text-xl text-dark">
              We take a custom approach to designing and installing solar energy
              systems
            </h2>
          </div>
          <div className="grid gap-6 pt-10 lg:grid-cols-2">
            {BlogData.map((data, i) => (
              <div key={i} className="flex flex-col md:flex-row">
                <div className=" w-full  md:w-1/2">
                  <Image
                    className="w-full object-cover h-full"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <div className="px-5 space-y-2 w-full  md:w-1/2 bg-white py-6">
                  <span className="text-base text-primary opacity-60">
                    {data.date}
                  </span>
                  <h2 className="text-lg">{data.title}</h2>
                  <button className="text-base flex items-center gap-3  text-primary">
                    <span>Read More</span>
                    <svg
                      width="25"
                      height="8"
                      viewBox="0 0 25 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.3536 4.35356C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464468C20.9763 0.269206 20.6597 0.269206 20.4645 0.464468C20.2692 0.65973 20.2692 0.976313 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53554C20.6597 7.7308 20.9763 7.7308 21.1716 7.53554L24.3536 4.35356ZM-4.37114e-08 4.5L24 4.5L24 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#3A6451"
                      />
                    </svg>
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

export default Blog;
