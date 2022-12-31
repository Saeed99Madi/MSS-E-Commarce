import { ReactNode, FC } from 'react';
import './style.css';

type Props = { children: ReactNode };
const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="main__layout">
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
