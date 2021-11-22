import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex font-sans text-white bg-gray-900'>
      <div className="flex flex-col min-h-screen w-80">
        <div className="px-8 py-8">
          <h1 className="text-xl font-semibold">skateboard</h1>
        </div>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full pl-5 pr-14 py-7'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
