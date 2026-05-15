import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
}
