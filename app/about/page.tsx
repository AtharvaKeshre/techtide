import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechTide</h1>
              <p className="text-muted-foreground md:text-xl">
                Established in 2007, TechTide Private Ltd has grown to become one of the fastest growing companies in
                Madhya Pradesh.
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="TechTide office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                TechTide Private Ltd was established in 2007 with a focus on providing solutions in preparation of
                high-protein systems, soya dal mill, soya untoasted flakes, soya grits and flour section in solvent
                extraction plant, marketing, servicing & engineering of process automation and process instrumentations.
              </p>
              <p className="text-muted-foreground">
                We are one of the fastest growing companies located in Madhya Pradesh with an office in Indore. We are
                engaged in providing technical solutions in solvent extraction plant & Erection, Installation,
                Commissioning, and process improvements in soya field for Process.
              </p>
              <p className="text-muted-foreground">
                From October 2019, we have been supplying Highly Skilled & Technical Manpower for solvent extraction
                plant. We have very broad experience in processing of Hypro, Edible (UNTOASTED), Soya dal, Soya Grit,
                Soya flour, Soya chunks, Soya Granule and other value-added products related to Soya.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Vision & Principles</h2>
              <p className="text-muted-foreground">
                Serve industrial services as per their suitability by team of TechTide experts having experience in the
                range of 5 to 35 years and everybody is leader in their fields, with such a "TEAM" we very well assure
                our customer to serve the best service "QUALITY IN TIME".
              </p>
              <p className="text-muted-foreground">
                Our vision is to be the leading provider for total solution & services in all type of food processing
                plant. Our goal is to exceed the expectation of every customer by providing outstanding services,
                including increased flexibility and greater value, which optimized systems functionality and improving
                operation efficiency.
              </p>
              <p className="text-muted-foreground">
                We assured that our customer receives the most effective and professional services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a comprehensive range of services to meet your industrial needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Supply of Industrial Machineries</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We supply all types of industrial machineries for food processing and other applications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Installation & Commissioning</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We provide installation, erection & commissioning services for all types of industrial machinery.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Preparation of Hypro Systems</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We specialize in the preparation of high-protein systems for various applications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Process Instrumentation</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We provide process instrumentation and improvement services to optimize your operations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Skilled Manpower Supply</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We supply highly skilled and technical manpower for various industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
