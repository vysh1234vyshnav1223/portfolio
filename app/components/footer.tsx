'use client'

export default function Footer() {
  return (
    <>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-sm py-6 text-center">
        <div className="max-w-4xl mx-auto px-4">
          © {new Date().getFullYear()} Vyshnav Nair. All rights reserved.
        </div>
      </footer>
    </>
  )
}
