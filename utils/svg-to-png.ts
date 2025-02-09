export async function convertSvgToPng(svgString: string, scale = 1): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) {
        reject(new Error("Could not get canvas context"))
        return
      }

      // Set dimensions
      const width = img.width * scale
      const height = img.height * scale
      canvas.width = width
      canvas.height = height

      // Scale and draw
      ctx.scale(scale, scale)
      ctx.drawImage(img, 0, 0)

      // Convert to PNG
      resolve(canvas.toDataURL("image/png"))
    }

    img.onerror = () => {
      reject(new Error("Failed to load SVG"))
    }

    // Create SVG blob URL
    const blob = new Blob([svgString], { type: "image/svg+xml" })
    img.src = URL.createObjectURL(blob)
  })
}

