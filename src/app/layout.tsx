import './globals.css';
import { ReactNode } from 'react';
import ReduxProvider from '../components/ReduxProvider'; // Import the client-side provider

export const metadata = {
  title: 'My Next.js Store',
  description: 'An e-commerce store using Next.js, Redux, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
