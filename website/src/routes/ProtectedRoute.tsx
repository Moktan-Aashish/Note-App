import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
