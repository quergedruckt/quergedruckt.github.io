// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-600 py-4 mt-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} Quergedruckt. All rights reserved.
        </div>
      </footer>
    )
  }
  
export default Footer
  