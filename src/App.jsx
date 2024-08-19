import { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DarkModeContextWrapper from './contexts/DarkModeContextWrapper'
import AdoptedPetContext from './contexts/AdoptedPetContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Details = lazy(() => import('./components/Details'))
const SearchParams = lazy(() => import('./components/SearchParams'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <DarkModeContextWrapper>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="my-10 flex content-center items-center justify-center p-4">
              <h2 className="animate-spin text-8xl">🌀</h2>
            </div>
          }
        >
          <AdoptedPetContext.Provider value={adoptedPet}>
            <Navbar />
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
          <Footer />
        </Suspense>
      </QueryClientProvider>
    </DarkModeContextWrapper>
  )
}

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

export default App
