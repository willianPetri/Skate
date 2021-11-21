import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex font-sans text-white bg-gray-900'>
      <div className="flex flex-col min-h-screen 2-80">
        <div className="px-8 py-8">
          <h1 className="text-xl font-semibold">skateboard</h1>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
