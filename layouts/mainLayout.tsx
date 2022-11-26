import { NextPage } from 'next';

type LayoutProps = {
  title?: string;
}

const MainLayout: NextPage<LayoutProps> = ({ children }) => (
    <div>
      <main>
        {children}
      </main>
    </div>
);

export default MainLayout;
