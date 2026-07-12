import GalleryCard from "../components/GalleryCard";

function Gallery() {
  return (
    <section
      className="flex flex-col items-center justify-center bg-slate-50 scroll-mt-24 px-4 py-6 md:px-10 md:py-6 border-t border-gray-200"
      id="gallery"
    >
      <h1 className="text-slate-800 text-xl md:text-2xl font-semibold underline decoration-blue-800 decoration-2 underline-offset-6 mb-6">
        Gallery Kegiatan
      </h1>
      <GalleryCard />
    </section>
  );
}

export default Gallery;
