import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  //   const [breedList, setBreedList] = useState([]);
  //   const [status, setStatus] = useState("unloaded");
  //   const localCache = [""];

  //   useEffect(() => {
  //     if (!animal) {
  //       setBreedList([]);
  //     } else if (localCache[animal]) {
  //       setBreedList(localCache[animal]);
  //     } else {
  //       requestBreedList();
  //     }

  //     async function requestBreedList() {
  //       setBreedList([]);
  //       setStatus("loading");
  //       const res = await fetch(
  //         `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //       );

  //       const json = await res.json();
  //       localCache[animal] = json.breeds || [];
  //       setBreedList(localCache[animal]);
  //       setStatus("loaded");
  //     }
  //   }, [animal]);

  return [results?.data?.breeds ?? [], results.status];
}
