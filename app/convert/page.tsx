import { Converter } from "@/components/converter";

export default function ConvertPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Convert SVG to PNG
      </h1>
      <Converter />
    </div>
  );
}
