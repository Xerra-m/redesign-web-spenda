import { useState } from "react";
import { gallery } from "../data/galeryData";

function GalleryCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="mx-auto w-full h-full px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.slice(0, 6).map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={card.image}
                alt={card.name}
                className="cursor-pointer w-full h-32 object-cover rounded-lg"
                onClick={() => setSelectedImage(card)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.image}
            alt={selectedImage.name}
            className="max-h-[65vh] max-w-full shadow-2xl rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default GalleryCard;
