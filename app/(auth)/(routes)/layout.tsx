import { FC } from 'react'

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* height making problem */}
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default AuthLayout;

