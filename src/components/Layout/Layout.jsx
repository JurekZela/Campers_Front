import { Suspense } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}