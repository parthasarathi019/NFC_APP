import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import UserLayout from "../Layout/User/User";

export function Private({ to }) {
  const { admin, load } = useAuth();
  return !load ? (
    !admin ? (
      <Navigate to={to} replace={true} />
    ) : (
      <UserLayout>
        <Outlet />
      </UserLayout>
    )
  ) : (
    "hello"
  );
}
