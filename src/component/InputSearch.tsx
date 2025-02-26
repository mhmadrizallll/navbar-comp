import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface Props {
  openSearch: boolean;
  setResult: (result: string) => void;
}

const InputSearch: React.FC<Props> = ({ openSearch, setResult }) => {
  const [searchTerm, setSearchTems] = React.useState("");
  //   const handleSearch = (input: string) => {
  //     setResult(input);
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(searchTerm);
  };
  return (
    <AnimatePresence mode="wait">
      {openSearch && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full top-29 left-0 z-200"
        >
          <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="search..."
                  onChange={(e) => setSearchTems(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-second px-10 py-1 text-white rounded-lg"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InputSearch;
