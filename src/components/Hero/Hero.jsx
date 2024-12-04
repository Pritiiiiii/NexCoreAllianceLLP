import Link from "next/link";

const Hero = () => {
  return (
    <section
  className="bg-lightBlue text-white bg-cover bg-center relative min-h-screen"
  aria-labelledby="hero-heading"
>
  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="max-w-7xl mx-auto px-4 py-40 md:py-48 flex flex-col-reverse md:flex-row items-center relative z-10 hero-content">
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      {/* Center text on small screens */}
      <h1
        id="hero-heading"
        className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
      >
        Empowering Innovation, Education, and Technology
      </h1>
      <div className="flex justify-center md:justify-start">
        {/* Center button on small screens */}
        <Link
          href="/our-brands"
          className="bg-[#051D40] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-white hover:text-[#051D40] inline-block transition-colors duration-300 mb-4 md:mr-4"
        >
          Explore Our Brands
        </Link>
      </div>
    </div>
  </div>

  <style jsx>{`
    @media (min-width: 820px) {
      section {
        background-image: url("/images/desktop-hero.jpg"); /* Desktop image */
      }
    }

    @media (max-width: 819px) {
      section {
        background-image: url("/images/mobile-hero.jpg"); /* Mobile image */
      }

      .hero-content {
        justify-content: flex-start; /* Move content to the top in mobile view */
        padding-top: 100px; /* Adjust padding as per your preference */
        padding-bottom: 0; /* Remove bottom padding */
      }
    }

    @media (max-width: 912px) and (min-height: 1368px) {
      /* Surface Pro 7 (portrait) specific styles */
      section {
        background-image: url("/images/surface-portrait.jpg"); /* Optionally use a specific image for portrait mode */
        padding-top: 100px;
        padding-bottom: 100px;
      }

      .hero-content {
        flex-direction: column; /* Stack content vertically */
        align-items: center;
      }

      h1 {
        font-size: 4.5rem; /* Adjust font size for portrait view */
        line-height: 1.2; /* Ensure spacing between lines */
      }

      .hero-content .text-center {
        margin-bottom: 20px;
      }
    }

    @media (min-width: 912px) and (max-width: 1368px) {
      /* Surface Pro 7 (landscape) specific styles */
      section {
        background-image: url("/images/surface-landscape.jpg"); /* Optionally use a specific image for landscape mode */
        padding-top: 80px;
        padding-bottom: 80px;
      }

      .hero-content {
        flex-direction: row; /* Arrange content side by side */
        align-items: center;
      }

      h1 {
        font-size: 5rem; /* Adjust font size for readability */
      }

      .hero-content .text-center {
        margin-bottom: 10px;
      }

      .hero-content .text-center h1 {
        max-width: 70%; /* Restrict the width of the heading */
      }
    }

    section {
      background-size: cover;
      background-position: center;
    }
  `}</style>
</section>


  );
};

export default Hero;
