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
          <div className="min-h-[86vh]  border rounded-xl p-10">
            <div className="flex items-center justify-center h-full bg-white px-4">
              <h1 className="uppercase border tracking-widest text-gray-500">
                404 | Not Found
              </h1>
            </div>
          </div>
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
