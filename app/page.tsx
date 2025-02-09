import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Image, Droplet } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Logo } from "@/components/logo";
import { FloatingIcon } from "@/components/floating-icon";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Background Effects */}
      <section className="relative w-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Hero Content */}
        <AnimatedSection className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Logo className="w-20 h-20 mb-4" />
              <AnimatedSection className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Convert SVGs to PNGs.
                  <br />
                  No sign-up needed.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  A dead-simple converter that just works. Free forever, no
                  strings attached.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Link href="/convert">
                  <Button
                    variant="default"
                    size="lg"
                    className="group bg-black text-white hover:bg-gray-800"
                  >
                    Start Converting
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why use QuickPic?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection
              className="flex flex-col items-center space-y-2 p-4"
              delay={0.1}
            >
              <FloatingIcon>
                <Zap className="w-10 h-10 mb-2 text-black" />
              </FloatingIcon>
              <h3 className="text-xl font-semibold">Quick & Easy</h3>
              <p className="text-center text-gray-600">
                Drop your SVG, pick a size, done. No account needed.
              </p>
            </AnimatedSection>
            <AnimatedSection
              className="flex flex-col items-center space-y-2 p-4"
              delay={0.2}
            >
              <FloatingIcon>
                <Image className="w-10 h-10 mb-2 text-black" />
              </FloatingIcon>
              <h3 className="text-xl font-semibold">Crystal Clear</h3>
              <p className="text-center text-gray-600">
                Get pixel-perfect PNGs at any size you want.
              </p>
            </AnimatedSection>
            <AnimatedSection
              className="flex flex-col items-center space-y-2 p-4"
              delay={0.3}
            >
              <FloatingIcon>
                <Droplet className="w-10 h-10 mb-2 text-black" />
              </FloatingIcon>
              <h3 className="text-xl font-semibold">100% Free</h3>
              <p className="text-center text-gray-600">
                No hidden fees. No watermarks. Just convert and go.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              Ready when you are
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start converting now
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
              Join thousands of designers and developers who use QuickPic daily.
              Free forever, just like it should be.
            </p>
            <AnimatedSection delay={0.2}>
              <Link href="/convert">
                <Button
                  variant="default"
                  size="lg"
                  className="mt-4 group bg-black text-white hover:bg-gray-800"
                >
                  Convert SVG to PNG
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
