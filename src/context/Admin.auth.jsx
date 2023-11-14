import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Apis from "../Link/Links";

export const AuthContext = createContext(null);

function AdminProvider({ children }) {
  const [Admin, SetAdmin] = useState();
  const [Load, SetLoad] = useState(true);
  const getAdmin = async () => {
    try {
      const { data } = await axios.get(Apis().auth_info);
      SetAdmin(data);
      SetLoad(false);
    } catch (error) {
      SetLoad(false);
      console.log("🚀 ~ file: Admin.auth.tsx:31 ~ getAdmin ~ error:", error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        admin: Admin || null,
        load: Load,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AdminProvider;
