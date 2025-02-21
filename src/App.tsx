import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { useEffect } from "react"

function App() {

  const title = import.meta.env.PROD ? 'Pagination example' : 'Pagination example - Dev mode';

  useEffect(() => {
    document.title = title;
  }, []);

  return <RouterProvider router={router}/>
}

export default App
