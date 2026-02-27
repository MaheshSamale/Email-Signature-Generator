export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') 
    image.src = url
  })

export function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

export default async function getCroppedImg(
  imageSrc,
  pixelCrop,
  flip = { horizontal: false, vertical: false },
  circular = false
) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  // set canvas size to match the bounding box
  canvas.width = image.width
  canvas.height = image.height

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(image.width / 2, image.height / 2)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  const croppedCanvas = document.createElement('canvas')
  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
    return null
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // Return base64 string
  return new Promise((resolve) => {
    if (circular) {
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = pixelCrop.width;
      finalCanvas.height = pixelCrop.height;
      const finalCtx = finalCanvas.getContext('2d');
      // Create a circular clipping path
      finalCtx.beginPath();
      finalCtx.arc(pixelCrop.width / 2, pixelCrop.height / 2, pixelCrop.width / 2, 0, 2 * Math.PI);
      finalCtx.closePath();
      finalCtx.clip();
      // Draw the cropped image into the circle
      finalCtx.drawImage(croppedCanvas, 0, 0);
      resolve(finalCanvas.toDataURL('image/png'));
    } else {
      resolve(croppedCanvas.toDataURL('image/jpeg'));
    }
  });
}
