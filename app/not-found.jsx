import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F7F6] text-center px-4">
      <h1 className="text-6xl font-extrabold text-[#007f5f]">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="mt-6 inline-flex items-center gap-2 bg-[#007f5f] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#365951] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
