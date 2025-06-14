import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full bg-primary py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="text-white space-y-6 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join the Movement for a Better Society
          </h1>
          <p className="text-lg md:text-xl">
            Empower your community by participating in events, campaigns, and actions that make a real difference.
          </p>
          <motion.button
            className="btn bg-white text-primary font-semibold hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.img
            src="https://i.ibb.co/jP3Sz6SW/1.png"
            className="rounded-2xl shadow-lg"
            alt="Banner 1"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://i.ibb.co/SXrP7mtB/2.png"
            className="rounded-2xl shadow-lg"
            alt="Banner 2"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://i.ibb.co/23dQgLsK/3.png"
            className="rounded-2xl shadow-lg"
            alt="Banner 3"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://i.ibb.co/VcW0kGm4/4.png"
            className="rounded-2xl shadow-lg"
            alt="Banner 4"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
