import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { useContext } from 'react';
import Loading from '../Components/Loading';
import { AuthContext } from '../Provider/AuthContext';

const MainLayout = () => {
  const { loading } = useContext(AuthContext); 

  if (loading) {
    return <Loading />;
  }

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
