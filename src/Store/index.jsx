/* allows use of State without needing to repeat useContext hook,
 also allows for easier testing */
import { useContext } from "react";
import { Store } from './Context'

export function useStore() {
  const store = useContext(Store);
  if (!store) throw new Error("Cannot `getStore` outside a context provider");
  return store;
}
