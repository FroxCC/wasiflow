import Image from "next/image"
import { ArrowRight, FileText, Database, MessageSquare } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Automate Your Business with WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Connect WhatsApp Business API with Google Sheets and automatically generate PDF quotes for your customers
              in seconds.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
              Try Now <ArrowRight size={18} />
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <Image
                src="/image-app.png"
                alt="WhatsApp conversation demo"
                width={400}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FileText size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant PDF Quotes</h3>
              <p className="text-gray-600">
                Generate professional PDF quotes automatically based on customer requests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Database size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Automatic Data Storage</h3>
              <p className="text-gray-600">Save customer data directly into Google Sheets without manual entry.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <MessageSquare size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Real-time Responses</h3>
              <p className="text-gray-600">Automate WhatsApp responses in real-time to keep customers engaged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 relative">
                1
              </div>
              <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 -z-10"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Message</h3>
              <p className="text-gray-600">Customer sends a message via WhatsApp requesting information.</p>
            </div>

            <div className="relative">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 relative">
                2
              </div>
              <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 -z-10"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Saved to CRM</h3>
              <p className="text-gray-600">Information is automatically saved in Google Sheets.</p>
            </div>

            <div className="relative">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 relative">
                3
              </div>
              <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 -z-10"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">PDF Creation</h3>
              <p className="text-gray-600">A professional PDF quote is generated automatically.</p>
            </div>

            <div>
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Auto-Response</h3>
              <p className="text-gray-600">Customer receives the quote via WhatsApp in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses already saving time and increasing sales with WasiFlow.
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-lg transition-all text-lg">
            Request a Free Demo
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                WasiFlow has transformed how we handle customer inquiries. We now respond with quotes in seconds
                instead of hours.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Juan Pérez</h4>
                  <p className="text-gray-500 text-sm">Tienda El Alto</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                The automatic data entry into Google Sheets has eliminated errors and saved us countless hours of
                manual work.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">María González</h4>
                  <p className="text-gray-500 text-sm">Distribuidora MG</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                Our customers are impressed by how quickly they receive professional quotes. Its given us a
                competitive edge.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Carlos Rodríguez</h4>
                  <p className="text-gray-500 text-sm">Ferretería Central</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
