import { createHashRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./layout/RouterLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import { store } from "./Redux/store.js";
import ThemeProvider from "./Theme/ThemeProvider.jsx";
import { Provider } from "react-redux";


export default function App() {


  const route = createHashRouter([
    {
      path: '', element: <RouterLayout />, children: [
        { index: true, element:<Home/>}
      ]
    }
  ])

  return <>
    

    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={route} />
      </ThemeProvider>
    </Provider>

  </>
}




