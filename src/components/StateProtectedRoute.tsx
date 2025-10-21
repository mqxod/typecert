import { Navigate, useLocation } from "react-router-dom";

interface StateProtectedRouteProps {
  children: React.ReactNode;
  requiredStateKeys: string[];
}

const StateProtectedRoute = ({
  children,
  requiredStateKeys,
}: StateProtectedRouteProps) => {
  const location = useLocation();
  const state = location.state as Record<string, any> | null;

  // Check if all required state keys exist
  const hasAllStateKeys = requiredStateKeys.every((key) => {
    return state && state[key] !== undefined && state[key] !== null;
  });

  // If any required state key is missing, redirect to home
  if (!hasAllStateKeys) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default StateProtectedRoute;
