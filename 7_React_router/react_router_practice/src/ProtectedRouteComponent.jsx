import { Navigate } from 'react-router-dom';

// isAuth is a boolean to check login
const ProtectedRouteComponent = ({ isAuth, children }) => {
  if (!isAuth) {
    // Redirect to home if not logged in
    return <Navigate to="/NoAccess" replace />;
  }
  return children;
};

export default ProtectedRouteComponent;