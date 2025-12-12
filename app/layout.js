import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Panaderia Trigo de oro',
  description: 'Calidad y sabor en cada bocado',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}