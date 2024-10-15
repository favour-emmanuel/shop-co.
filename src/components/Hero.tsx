const Hero = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto my-10 lg:py-20 px-10 flex flex-col lg:flex-row justify-between">
      <div className="w-full max-w-[]">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>
        <section className="flex items-center gap-6">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
