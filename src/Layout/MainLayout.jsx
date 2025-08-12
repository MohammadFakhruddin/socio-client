import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
         <div className="flex flex-col min-h-screen">
      <div className="mb-6">
        <Navbar />
      </div>

      <main className="flex-grow my-6">
        <Outlet />
      </main>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
    );
};

export default MainLayout;
