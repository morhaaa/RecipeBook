import { motion } from "framer-motion";

function LandingPage() {
  return (
    <main className="h-screen w-screen flex bg-slate-100 px-24">
      <div className="flex flex-col gap-y-2.5 justify-center items-start flex-1 h-full">
        <h1 className="font-bold text-6xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Everyone
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            Can Be a Chef
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            with Recipe<span className="text-primary-orange">Book</span>
          </motion.span>
        </h1>
        <motion.span
          className="bg-orange-300/40 rounded-md py-1 px-3 text-primary-orange font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          🔥 The largest site for food recipes
        </motion.span>
        <motion.p
          className="text-xl text-secondary pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Discover our
          <span className="text-primary-orange font-medium">
            {" "}
            1000+ recipes{" "}
          </span>
          and start sharing your delicious with us.
        </motion.p>
        <motion.button
          className="bg-btn-primary hover:bg-btn-primary-hovered w-60 py-3 rounded-md text-white font-bold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Explore
        </motion.button>
      </div>
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <img
          src={"/assets/placeholder.png"}
          alt={"Hero image"}
          className="w-full h-auto"
        />
      </motion.div>
    </main>
  );
}

export default LandingPage;
