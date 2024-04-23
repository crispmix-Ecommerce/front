import { useState } from 'react';

interface ProductImageComponentProps {
  images: { imageUrl: string }[];
}

export function ProductImageComponent({ images }: ProductImageComponentProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const selectedImageUrl = images[selectedImageIndex]?.imageUrl;

  return (
    <section className="w-full flex p-2">
      <div className="pr-2 lg:pr-0 md:pr-2 mr-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-16 h-16 lg:w-18 lg:h-18 mb-4 mr-4 relative overflow-hidden"
          >
            <img
              src={image.imageUrl}
              alt={`Product Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full rounded-lg border-4 border-custom-gray ${
                selectedImageIndex === index ? 'border-custom-blue' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      <div>
        <img
          src={selectedImageUrl}
          alt="Product"
          width={376}
          height={376}
          className="w-94 h-94  rounded-lg border-4 border-custom-gray"
        />
      </div>
    </section>
  );
}
