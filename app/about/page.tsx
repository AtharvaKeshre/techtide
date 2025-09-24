import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechTide</h1>
              <p className="text-muted-foreground md:text-xl">
                Established in 2007, TechTide Private Ltd has grown into a trusted leader in industrial machinery,
                flour milling, process automation, and technical services — proudly serving clients across India and
                beyond.
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/mill-worker.jpg"
                alt="TechTide office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Since its founding, TechTide has specialized in agro-processing solutions including high-protein systems,
                soya dal mills, untoasted flakes, grits, and flour sections for solvent extraction plants. Over the years,
                we have expanded into marketing, engineering, and process automation across a wide range of industries.
              </p>
              <p className="text-muted-foreground">
                Headquartered in Indore, Madhya Pradesh, we support clients with end-to-end technical services covering
                installation, commissioning, and continuous process improvements.
              </p>
              <p className="text-muted-foreground">
                Since 2019, we have also been a trusted supplier of highly skilled technical manpower, serving solvent
                extraction plants and food processing industries with unmatched expertise in soya-based products and
                beyond.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Vision & Principles</h2>
              <p className="text-muted-foreground">
                At TechTide, we believe in delivering <strong>Quality in Time</strong>. With a team of experts
                possessing 5–35 years of experience, we ensure that every project benefits from deep domain knowledge
                and leadership in execution.
              </p>
              <p className="text-muted-foreground">
                Our vision is to be the leading provider of complete solutions for food processing and industrial plants.
                We strive to exceed customer expectations by combining flexibility, innovation, and value-driven results.
              </p>
              <p className="text-muted-foreground">
                Every service we provide is backed by a commitment to professionalism, efficiency, and long-term customer
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We deliver end-to-end industrial solutions — from supplying world-class machinery to providing
                technical expertise that keeps your operations running smoothly.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Flour Milling Equipment</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Official distributor of <strong>Pingle</strong>, offering advanced milling equipment designed for
                efficiency, precision, and durability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Installation & Commissioning</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Complete support for erection, installation, and commissioning of industrial plants and machinery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Process Automation</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Smart automation and instrumentation solutions that improve efficiency, reduce downtime, and ensure
                consistent quality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Spare Parts Supply</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Reliable supply of genuine spare parts to minimize downtime and extend equipment lifecycle.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Skilled Manpower</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Supply of highly trained and experienced technical professionals for plant operations and maintenance.
              </p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Technical Support</h3>
              <p className="text-sm text-muted-foreground mt-2">
                End-to-end technical assistance, including training, troubleshooting, and long-term operational support.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
