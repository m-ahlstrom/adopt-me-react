import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import AdoptedPetContext from "./contexts/AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Satori",
//       animal: "Cat",
//       breed: "European Shorthair",
//     }),
//     React.createElement(Pet, {
//       name: "Freyja",
//       animal: "Cat",
//       breed: "European Shorthair",
//     }),
//     React.createElement(Pet, {
//       name: "Skadi",
//       animal: "Cat",
//       breed: "European Shorthair",
//     }),
//   ]);
// };

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
