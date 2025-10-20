import { Navigate, useSearchParams } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredParams: string[];
}

const ProtectedRoute = ({ children, requiredParams }: ProtectedRouteProps) => {
  const [searchParams] = useSearchParams();

  // Check if all required parameters exist and are not empty
  const hasAllParams = requiredParams.every((param) => {
    const value = searchParams.get(param);
    return value !== null && value.trim() !== "";
  });

  // If any required parameter is missing or empty, redirect to home
  if (!hasAllParams) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
