import { motion } from "framer-motion";
import Header from "../components/UI/Header";
import ActionButtons from "../components/UI/ActionButtons";
import InstallGuide from "../components/UI/InstallGuide";
import ProjectList from "../components/Projects/ProjectList";
import { projects } from "../data/projects";

const HomePage = () => {
  return (
    <>
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <ActionButtons />
      </motion.div>

      <InstallGuide />

      <ProjectList projects={projects} />
    </>
  );
};


export default HomePage;