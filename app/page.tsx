import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Engineering Excellence for Industrial Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                TechTide Private Ltd specializes in providing comprehensive solutions for industrial machinery, process
                automation, and technical services.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/products">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Industrial machinery"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechTide</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Established in 2007, TechTide Private Ltd focuses on providing solutions in preparation of high-protein
                systems, agro-processing machinery, and process automation for various industrial applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Industrial Machinery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We supply a wide range of industrial machinery for food processing, grain milling, and other
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our process automation solutions help optimize your operations and improve efficiency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Technical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide installation, commissioning, and technical support services for all our products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With our experienced team and commitment to quality, we deliver exceptional solutions tailored to your
                needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-teal-600" />
              <div>
                <h3 className="text-lg font-semibold">Experienced Team</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Our team consists of experts with 5 to 35 years of experience in their respective fields.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-teal-600" />
              <div>
                <h3 className="text-lg font-semibold">Quality Service</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We are committed to providing "QUALITY IN TIME" with every project we undertake.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-teal-600" />
              <div>
                <h3 className="text-lg font-semibold">Comprehensive Solutions</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  From supply to installation and commissioning, we provide end-to-end solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-teal-600" />
              <div>
                <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Our goal is to exceed the expectations of every customer by providing outstanding services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or need more information? Contact us today.
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
