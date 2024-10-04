import './globals.css';
import { ReactNode } from 'react';
import ReduxProvider from '../components/ReduxProvider'; // Import the client-side provider
// import Header from '@/components/Header';

export const metadata = {
  title: 'E-commerce-site',
  description: 'An e-commerce store using Next.js, Redux, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {/* <Header/> */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
