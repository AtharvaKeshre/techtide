import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ProductModal from "@/components/product-modal"

export default function ProductsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products & Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive range of industrial machinery and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Industrial Machinery</h2>
            <p className="text-muted-foreground">
              We supply a wide range of industrial machinery for food processing and other applications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/PLMFY ROLLER MILL-0.png"
                  alt="Soya Processing Machinery"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                
                <CardTitle>Flour Milling Equipment</CardTitle>
                <CardDescription className="mt-2">
                  Complete range of machinery for soya processing, including dal mill, flakes, grits, and flour section.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal
                  title="PLMFY ROLLER MILL"
                  images={["/PLMFY ROLLER MILL-1.png", "/PLMFY ROLLER MILL-2.png", "/PLMFY ROLLER MILL-3.png", "/PLMFY ROLLER MILL-4.png", "/PLMFY ROLLER MILL-5.png", "/PLMFY ROLLER MILL-6.png", "/Purifier-1.png", "/Purifier-2.png", "/Purifier-3.png", "/Purifier-4.png", "/Purifier-5.png", "/Purifier-6.png"]}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Rice Milling Machines"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>PLQF Purifier</CardTitle>
                <CardDescription className="mt-2">
                  State-of-the-art rice milling machines for efficient and high-quality rice processing.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal title="Rice Milling Machines" images={["/placeholder.jpg", "/placeholder-user.jpg"]} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Grain Processing Equipment"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Grain Processing Equipment</CardTitle>
                <CardDescription className="mt-2">
                  Equipment for processing grains and seeds, including cleaning, grading, and sorting machinery.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal title="Grain Processing Equipment" images={["/placeholder.jpg", "/placeholder-user.jpg"]} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Flour Milling Solutions"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Flour Milling Solutions</CardTitle>
                <CardDescription className="mt-2">
                  Process technology for transforming raw materials into high-grade flour and semolina products.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal title="Flour Milling Solutions" images={["/flour-mill.jpeg", "/placeholder.jpg"]} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Conveyor Systems"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Conveyor Systems</CardTitle>
                <CardDescription className="mt-2">
                  Efficient conveyor systems for material handling in various industrial applications.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal title="Conveyor Systems" images={["/placeholder.jpg", "/placeholder.jpg"]} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sortex Machines"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Sortex Machines</CardTitle>
                <CardDescription className="mt-2">
                  Advanced sorting machines for efficient and accurate sorting of various grains and products.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <ProductModal title="Sortex Machines" images={["/placeholder.jpg", "/placeholder.jpg"]} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Technical Services</h2>
            <p className="text-muted-foreground">
              We provide a comprehensive range of technical services to support your industrial operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <CardTitle>Installation & Commissioning</CardTitle>
                  <CardDescription className="mt-2">
                    Professional installation, erection, and commissioning services for all types of industrial
                    machinery.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <CardTitle>Process Automation</CardTitle>
                  <CardDescription className="mt-2">
                    Advanced process automation solutions to optimize your operations and improve efficiency.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle>Technical Manpower</CardTitle>
                  <CardDescription className="mt-2">
                    Supply of highly skilled and technical manpower for various industrial applications.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" y1="22" x2="12" y2="12" />
                    </svg>
                  </div>
                  <CardTitle>Process Improvement</CardTitle>
                  <CardDescription className="mt-2">
                    Expert process improvement services to enhance your production efficiency and product quality.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <CardTitle>Technical Consultation</CardTitle>
                  <CardDescription className="mt-2">
                    Expert technical consultation services to help you make informed decisions for your industrial
                    operations.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  </div>
                  <CardTitle>Maintenance Services</CardTitle>
                  <CardDescription className="mt-2">
                    Comprehensive maintenance services to ensure the optimal performance of your machinery and
                    equipment.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Custom Solutions?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your specific requirements and how we can help you achieve your goals.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild className="w-full" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
