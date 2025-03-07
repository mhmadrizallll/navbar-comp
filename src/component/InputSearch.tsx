import { motion, AnimatePresence } from "framer-motion";
import React from "react";
// import { useSearch } from "../context/SearchContext";
// import { useNavigate } from "react-router";

interface Props {
  openSearch: boolean;
  setSearchQuery: (query: string) => void;
}

const InputSearch: React.FC<Props> = ({ openSearch, setSearchQuery }) => {
  // const { setSearchQuery } = useSearch();
  const [searchTerm, setSearchTems] = React.useState("");
  // const navigate = useNavigate();
  //   const handleSearch = (input: string) => {
  //     setResult(input);
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
    setSearchTems("");
  };
  return (
    <AnimatePresence mode="wait">
      {openSearch && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full top-36 md:top-39 left-0 z-40"
        >
          <div className="container-fluid md:container mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 w-[70%] mx-auto">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={searchTerm}
                  className="block min-w-0 grow md:py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="search..."
                  onChange={(e) => setSearchTems(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-second px-5 md:px-10 py-1 text-white rounded-lg"
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
