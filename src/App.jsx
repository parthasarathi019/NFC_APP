import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Private } from "./routes/Private";
import AdminProvider from "./context/Admin.auth";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="w-full relative min-h-screen overflow-hidden px-2">
      {/* background element */}
      <div className="bg-ball anim-float w-64 h-64 absolute -top-28 z-[-1] rounded-full"></div>
      <div className="bg-ball anim-float w-64 h-64 absolute top-[500px] z-[-1] rounded-full -right-20"></div>
      {/* background element */}
      <BrowserRouter>
        <AdminProvider>
          <ThemeProvider defaultTheme="light">
            <Theme
              accentColor="amber"
              appearance="inherit"
              grayColor="sand"
              radius="large"
              scaling="95%"
            >
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Private to="/login" />}>
                  {/* index route of Dashboard  */}
                  <Route index element={<p>hallo</p>} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Route>

                <Route path="*" element={<>page not exist</>} />
                <Route path="/signin" element={<Login />} />
                <Route path="/sighup" element={<h1>Login page</h1>} />
              </Routes>
            </Theme>
          </ThemeProvider>
        </AdminProvider>
      </BrowserRouter>
      {/* <div className="h-72"></div> */}
    </div>
  );
}

export default App;
