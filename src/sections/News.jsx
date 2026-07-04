import { Newspaper } from "lucide-react";
import NewsCard from "../components/NewsCard";

function News() {
  return (
    <section
      className="bg-slate-50 px-5 py-8 md:px-10 md:py-14 scroll-mt-24"
      id="news"
    >
      <h1 className="text-slate-800 text-xl md:text-2xl font-semibold border-l-3 md:border-l-4 border-blue-800 px-2">
        Artikel & Berita Sekolah
      </h1>
      <NewsCard />
    </section>
  );
}

export default News;
