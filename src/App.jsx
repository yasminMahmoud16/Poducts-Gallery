import { createHashRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./layout/RouterLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import { store } from "./Redux/store.js";
import ThemeProvider from "./Theme/ThemeProvider.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function App() {

  const queryClient = new QueryClient();

  const route = createHashRouter([
    {
      path: '', element: <RouterLayout />, children: [
        { index: true, element:<Home/>}
      ]
    }
  ])

  return <>
    

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={route} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>

  </>
}




