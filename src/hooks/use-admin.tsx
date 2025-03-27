
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

export const useAdmin = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  const isAdmin = isAuthenticated && user?.role === 'admin';
  
  return {
    isAdmin,
    isLoading,
  };
};

export const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, isLoading } = useAdmin();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAdmin) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <>{children}</>;
};
