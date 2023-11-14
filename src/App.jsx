import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Private } from "./routes/Private";
import AdminProvider from "./context/Admin.auth";

function App() {
  return (
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
              <Route path="/signin" element={<h1>Login page</h1>} />
              <Route path="/sighup" element={<h1>Login page</h1>} />
            </Routes>
          </Theme>
        </ThemeProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
