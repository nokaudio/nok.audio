import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
