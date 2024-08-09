import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sun, Moon, Code, Rocket, Twitter, Github, Zap } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateBackground = async () => {
      await controls.start({
        background: [
          'linear-gradient(to bottom, #FFA07A, #FFA500)',
          'linear-gradient(to bottom, #FF6347, #FF4500)',
          'linear-gradient(to bottom, #FF69B4, #FF1493)',
          'linear-gradient(to bottom, #FFA07A, #FFA500)',
        ],
        transition: { duration: 10, repeat: Infinity, ease: 'linear' },
      });
    };
    animateBackground();
  }, [controls]);

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  };

  const sections = [
    {
      title: "Building AGI in Europe",
      content: "Former CERN and Sana Labs engineer, now working on the future of AI.",
      icon: <Code className="w-12 h-12 text-orange-500" />,
    },
    {
      title: "GPT-Engineer",
      content: "The world's most popular codegen project. One prompt generates an entire codebase.",
      icon: <Rocket className="w-12 h-12 text-pink-500" />,
    },
    {
      title: "Reducing Barriers",
      content: "Our mission is to make building and deploying web apps accessible to everyone through plain English instructions.",
      icon: <Sun className="w-12 h-12 text-yellow-500" />,
    },
  ];

  const tweets = [
    "Introducing gpt-engineer App👶 since gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english",
    "👶🤖 Introducing `gpt-engineer` ▸ One prompt generates a codebase ▸ Asks clarifying questions ▸ Generates technical spec ▸ Writes all necessary code",
    "Insane. It is possible to train a model that beats GPT3.5 in code generation with only: - Cloud pod (8 GPUs) - OpenAI API access (for synthetic data) - $6.5k to spend",
  ];

  return (
    <motion.div 
      className="min-h-screen text-gray-800"
      animate={controls}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-orange-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GPT-Engineer
          </motion.h1>
          <div className="flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#tweets" className="text-gray-600 hover:text-orange-500 transition-colors">Tweets</a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="hero min-h-screen flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-orange-600">Welcome to GPT-Engineer</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Revolutionizing software development with AI-powered code generation. Build entire applications with just a prompt!</p>
            <motion.button
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-orange-500">About Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-50 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex justify-center mb-4">{section.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-orange-600">{section.title}</h4>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gradient-to-r from-orange-200 to-pink-200">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-orange-600">Features</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-orange-500">One Prompt, Full Codebase</h4>
                <p className="text-gray-600">Generate an entire codebase from a single prompt, streamlining your development process.</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-orange-500">AI-Powered Clarification</h4>
                <p className="text-gray-600">Our AI asks clarifying questions to ensure it understands your requirements perfectly.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="tweets" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-orange-500">Latest Tweets</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {tweets.map((tweet, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-50 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Twitter className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-600">{tweet}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-600 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 GPT-Engineer. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-200 transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-orange-200 transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      <motion.div
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full cursor-pointer"
        style={{ rotate: scrollY }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Sun className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="fixed top-1/2 left-4 bg-pink-500 text-white p-3 rounded-full"
        animate={bounceAnimation}
      >
        <Zap className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default Index;
