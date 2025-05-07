import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4">
      <h1 className="text-2xl font-bold">UI Modules Demo</h1>
      <Link to="/theme-picker" className="text-blue-500 underline">
        Go to Theme Picker
      </Link>
      <Link to="/dropdown" className="text-blue-500 underline">
        Go to Dropdown Animation
      </Link>
    </div>
  );
}
