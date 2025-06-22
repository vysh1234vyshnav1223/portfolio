// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vyshnav | Portfolio',
  description: 'Digital Marketer • SEO • Automation • Growth',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <header className="z-50 fixed top-0 left-0 w-full p-5 shadow bg-accent">
          <nav className="flex justify-center max-w-4xl mx-auto">
            <div className="space-x-8 flex items-center">
              {['Home', 'About', 'Projects'].map((text, i) => (
                <a
                  key={i}
                  href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  className="relative group text-white font-medium"
                >
                  {text}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              ))}
            </div>

          </nav>
        </header>
        <main className="p-0">{children}</main>
      </body>
    </html>
  )
}
