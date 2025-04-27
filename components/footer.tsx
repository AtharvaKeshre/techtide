import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-teal-600">TechTide</span>
            <span className="text-xl font-medium">Private Ltd</span>
          </div>
          <p className="text-sm text-muted-foreground">Providing innovative engineering solutions since 2007</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-muted-foreground hover:text-teal-600">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-teal-600">
              About Us
            </Link>
            <Link href="/products" className="text-sm text-muted-foreground hover:text-teal-600">
              Products
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-teal-600">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/products" className="text-sm text-muted-foreground hover:text-teal-600">
              Industrial Machinery
            </Link>
            <Link href="/products" className="text-sm text-muted-foreground hover:text-teal-600">
              Installation & Commissioning
            </Link>
            <Link href="/products" className="text-sm text-muted-foreground hover:text-teal-600">
              Process Automation
            </Link>
            <Link href="/products" className="text-sm text-muted-foreground hover:text-teal-600">
              Technical Manpower
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-teal-600" />
              <span className="text-sm text-muted-foreground">
                LG-27 Cross Road Building, IDA Complex, Near Vijay Nagar Circle, Indore (MP), 452011
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-600" />
              <span className="text-sm text-muted-foreground">+91 9981635901</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-600" />
              <span className="text-sm text-muted-foreground">info@techtide.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} TechTide Private Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
