"use client";

import { useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Check } from "lucide-react";
import { convertSvgToPng } from "@/utils/svg-to-png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

const MAX_SCALE = 10;
const MAX_DIMENSION = 5000; // 5000px max dimension

export function Converter() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState("1");
  const [customScale, setCustomScale] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      toast.success(`${acceptedFiles[0].name} is ready for conversion.`);
    } else if (fileRejections.length > 0) {
      toast.error("Invalid file type. Please upload an SVG file.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/svg+xml": [".svg"],
    },
    multiple: false,
    onDropRejected: (fileRejections) => {
      toast.error("Invalid file type. Please upload an SVG file.");
    },
  });

  const handleConvert = async () => {
    if (file) {
      try {
        setIsConverting(true);
        const svgString = await file.text();
        let scaleValue: number;

        if (scale === "custom") {
          if (customScale) {
            scaleValue = Number.parseFloat(customScale);
          } else {
            const originalWidth = 100; // Assuming 100px as base width
            scaleValue = Number.parseFloat(width) / originalWidth;
          }
        } else {
          scaleValue = Number.parseFloat(scale);
        }

        if (isNaN(scaleValue) || scaleValue <= 0 || scaleValue > MAX_SCALE) {
          throw new Error(
            `Invalid scale value. Please enter a number between 0 and ${MAX_SCALE}.`
          );
        }

        if (
          width &&
          (Number.parseFloat(width) > MAX_DIMENSION ||
            Number.parseFloat(width) <= 0)
        ) {
          throw new Error(
            `Invalid width. Please enter a number between 1 and ${MAX_DIMENSION}.`
          );
        }

        if (
          height &&
          (Number.parseFloat(height) > MAX_DIMENSION ||
            Number.parseFloat(height) <= 0)
        ) {
          throw new Error(
            `Invalid height. Please enter a number between 1 and ${MAX_DIMENSION}.`
          );
        }

        const pngDataUrl = await convertSvgToPng(svgString, scaleValue);
        setConvertedImage(pngDataUrl);

        toast.success(`Conversion successful`);
      } catch (error) {
        console.error(error);
        toast.error(
          "There was an error converting your SVG. Please try again."
        );
      } finally {
        setIsConverting(false);
      }
    }
  };

  const updateDimensions = (newWidth: string, newHeight: string) => {
    setWidth(newWidth);
    setHeight(newHeight);
    if (newWidth && !isNaN(Number.parseFloat(newWidth))) {
      setCustomScale((Number.parseFloat(newWidth) / 100).toString());
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-black bg-gray-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="flex items-center justify-center space-x-2">
            <Check className="w-5 h-5 text-green-500" />
            <p>{file.name}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Upload className="w-8 h-8 mb-2 text-gray-400" />
            <p className="text-gray-500">
              Drag & drop an SVG file here, or click to select one
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="scale" className="text-sm font-medium text-gray-700">
            Scale Factor
          </Label>
          <Select value={scale} onValueChange={setScale}>
            <SelectTrigger id="scale">
              <SelectValue placeholder="Select scale factor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1x</SelectItem>
              <SelectItem value="2">2x</SelectItem>
              <SelectItem value="4">4x</SelectItem>
              <SelectItem value="8">8x</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {scale === "custom" && (
          <div className="space-y-4">
            <Tabs defaultValue="scale" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="scale">Scale Factor</TabsTrigger>
                <TabsTrigger value="resolution">Resolution</TabsTrigger>
              </TabsList>
              <TabsContent value="scale">
                <div className="pt-2">
                  <Label
                    htmlFor="customScale"
                    className="text-sm font-medium text-gray-700"
                  >
                    Custom Scale Factor (max {MAX_SCALE})
                  </Label>
                  <Input
                    id="customScale"
                    type="number"
                    min="0.1"
                    max={MAX_SCALE}
                    step="0.1"
                    value={customScale}
                    onChange={(e) => {
                      setCustomScale(e.target.value);
                      updateDimensions(
                        (Number.parseFloat(e.target.value) * 100).toString(),
                        ""
                      );
                    }}
                    placeholder="Enter custom scale factor"
                    className="mt-1"
                  />
                </div>
              </TabsContent>
              <TabsContent value="resolution">
                <div className="pt-2 space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Dimensions (px) (max {MAX_DIMENSION}x{MAX_DIMENSION})
                  </Label>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Label htmlFor="width" className="sr-only">
                        Width
                      </Label>
                      <Input
                        id="width"
                        type="number"
                        min="1"
                        max={MAX_DIMENSION}
                        step="1"
                        value={width}
                        onChange={(e) =>
                          updateDimensions(e.target.value, height)
                        }
                        placeholder="Width"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="height" className="sr-only">
                        Height
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        min="1"
                        max={MAX_DIMENSION}
                        step="1"
                        value={height}
                        onChange={(e) =>
                          updateDimensions(width, e.target.value)
                        }
                        placeholder="Height"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        <Button
          onClick={handleConvert}
          disabled={!file || isConverting}
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          {isConverting ? "Converting..." : "Convert to PNG"}
        </Button>
      </div>

      {convertedImage && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Converted Image:</h2>
          <img
            src={convertedImage || "/placeholder.svg"}
            alt="Converted PNG"
            className="max-w-full h-auto rounded-lg border border-gray-200"
          />
          <Button
            asChild
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            <a href={convertedImage} download="converted.png">
              Download PNG
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
