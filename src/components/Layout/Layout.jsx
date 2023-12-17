import { Suspense } from 'react';
import {Toaster} from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {

  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};



// export const Layout = () => {
//   return (
//     <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
//       <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };

// export const Layout = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <div>
//       <header>
//         <MainNav />
//         {isLoggedIn ? <UserMenu /> : <AuthNav />}
//       </header>
//       <main>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Outlet />
//         </Suspense>
//       </main>
//     </div>
//   );
// };
