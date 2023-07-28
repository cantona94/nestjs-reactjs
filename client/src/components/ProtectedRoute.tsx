import { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import img from '../assets/protected-icon.png';

interface IProps {
  children: JSX.Element;
}

export const ProtectedRoute: FC<IProps> = ({ children }) => {
  const isAuth = useAuth();
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className="mt-5 flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl">To view this page you must be logged in</h1>
          <img className="w-1/2" src={img} alt="img" />
        </div>
      )}
    </>
  );
};
