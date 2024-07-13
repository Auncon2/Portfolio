import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">I m showcasing my work and skills with Next.js and Tailwind CSS.</p>
            <button className="mt-8 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-lg transition duration-300 ease-in-out">View Portfolio</button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-full">
              <Image
                src="/portfolio-image.jpg"
                alt="Portfolio Image"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
