// @flow
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGaurdContext } from '../context/AuthContext';

type Props = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(AuthGaurdContext);
  if (!user) return <Navigate to="/admin/login" />;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return children;
};

export default ProtectedRoute;
