import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="h-screen w-screen flex flex-col gap-y-8 md:flex-row p-6 md:p-10 lg:p-20 xl:p-24">
      <div className="flex flex-col gap-y-2.5 justify-center items-center text-center md:items-start md:text-start flex-1 h-full">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Everyone
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Can Be a Chef
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 1 }}
          >
            with Recipe<span className="text-primary-orange">Book</span>
          </motion.span>
        </h1>
        <motion.span
          className="bg-orange-200/40 border border-orange-200 rounded-md py-1 px-3 text-primary-orange font-medium shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 1 }}
        >
          🔥 The largest site for food recipes
        </motion.span>
        <motion.p
          className="text-lg md:text-xl text-secondary md:py-2 lg:py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 1 }}
        >
          Discover our
          <span className="text-primary-orange font-medium">
            {" "}
            1000+ recipes{" "}
          </span>
          and start sharing your delicious with us.
        </motion.p>
        <Link to={"/recipes"}>
          <motion.button
            className="bg-btn-primary hover:bg-btn-primary-hovered w-48 md:w-60 py-1.5 md:py-2 lg:py-3 rounded-md text-white font-bold shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 1 }}
          >
            Explore
          </motion.button>
        </Link>
      </div>
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 1 }}
      >
        <img
          src={"/assets/hero_image.png"}
          alt={"Hero image"}
          className="w-full h-auto max-w-md md:max-w-full"
        />
      </motion.div>
    </main>
  );
}

export default LandingPage;
