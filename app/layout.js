import Header from '@/components/Header';
import './globals.css';

export const metadata = {
   title: 'Robin Dev',
   description: 'Protfolio website of robin web developer',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={'font-openSauce'}>{children}</body>
      </html>
   );
}
