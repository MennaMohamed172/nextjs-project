// import Link from 'next/link'
import './globals.css'
// import styles from './Home.module.css';

import { Inter } from 'next/font/google'
import Sidebar from './Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'دكتور عيون ',
  description: 'مركز مشهور خبراء العيون',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
      <Sidebar />
        {children}</body>
    </html>
  )
}
