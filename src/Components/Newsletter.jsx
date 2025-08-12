import Lottie from 'lottie-react';
import animationData from '../../Lottie/mailbox.json';

const Newsletter = () => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Lottie Section */}
        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={animationData}
            style={{ height: "300px", width: "300px" }}
          />
        </div>

        {/* Text + Form Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Stay Connected with Socio
          </h2>
          <p className="text-base md:text-lg mb-6 text-primary">
            Subscribe to our newsletter to get updates on upcoming social development events near you!
          </p>
          <form className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:max-w-xs text-black"
            />
            <button className="btn bg-primary text-white hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
