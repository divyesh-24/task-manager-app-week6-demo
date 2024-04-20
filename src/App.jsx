import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AddTask from "./pages/AddTask";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },

    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/add",
      element: (
        <Layout>
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        </Layout>
      ),
    },
    {
      path: "/edit/:id",
      element: (
        <Layout>
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          <h1>Error</h1>
        </Layout>
      ),
    },
  ]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
