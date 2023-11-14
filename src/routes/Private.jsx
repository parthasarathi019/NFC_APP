import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function Private({ to }) {
  const { admin, load } = useAuth();
  return !load ? (
    !admin ? (
      <Navigate to={to} replace={true} />
    ) : (
      <Outlet />
    )
  ) : (
    "hello"
  );
}
