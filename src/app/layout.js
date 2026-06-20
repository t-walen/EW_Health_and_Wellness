import './globals.css'
import { cx } from ".//utils/index.js"
import { Inter, Manrope } from 'next/font/google'
import Header from ".//components/Header/index.js"
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], display: "swap", variable:"--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable:"--font-mr"  })


export const metadata = {
  title: 'EW Health & Wellness',
  description: 'A low tox life, after a thyroid cancer diagnosis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={cx(inter.variable, manrope.variable, "font-mr bg-light " )}
     >
      <Header />
      {children}
      <Footer/>
      </body>
    </html>
  );
}
