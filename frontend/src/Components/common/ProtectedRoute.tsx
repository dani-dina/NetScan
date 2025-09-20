import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;