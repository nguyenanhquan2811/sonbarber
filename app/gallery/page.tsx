"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar, ArrowRight } from "lucide-react";

// Mock Data
const galleryImages = [
  { id: 1, category: "Kiểu tóc uốn", src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Kiểu tóc nhuộm thời trang", src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Không gian cơ sở", src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Kiểu tóc uốn", src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Hoạt động sự kiện", src: "https://images.unsplash.com/photo-1593702288056-cc3dc679cbce?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Không gian cơ sở", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" },
];

const blogPosts = [
  {
    slug: "top-5-kieu-toc-uon-nam-han-quoc-2026",
    title: "Top 5 kiểu tóc uốn nam phong cách Hàn Quốc hot nhất 2026",
    summary: "Điểm qua 5 kiểu tóc uốn nam đang làm mưa làm gió trong năm nay, từ uốn con sâu cá tính đến uốn phồng nhẹ nhàng thanh lịch.",
    date: "05/06/2026",
    category: "Xu hướng",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "huong-dan-tu-vuot-sap-tai-nha",
    title: "Hướng dẫn cách tự vuốt sáp tạo kiểu chuẩn Salon tại nhà",
    summary: "Chỉ với 5 phút mỗi sáng và một chút sáp HairPlex Clay, bạn hoàn toàn có thể tự tạo cho mình một mái tóc lịch lãm như vừa bước ra khỏi tiệm.",
    date: "01/06/2026",
    category: "Cẩm nang",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "su-kien-cat-toc-mien-phi-bv-y-hoc",
    title: "Sơn Barber tổ chức cắt tóc 0 đồng tại Bệnh viện Y học Cổ truyền",
    summary: "Hành trình mang niềm vui nhỏ bé đến với các bệnh nhân khó khăn qua hoạt động thiện nguyện hàng tháng của Sơn Barber.",
    date: "15/05/2026",
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1593702288056-cc3dc679cbce?q=80&w=600&auto=format&fit=crop"
  }
];

export default function GalleryBlogPage() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filterTabs = ["Tất cả", "Kiểu tóc uốn", "Kiểu tóc nhuộm thời trang", "Không gian cơ sở", "Hoạt động sự kiện"];

  const filteredGallery = activeTab === "Tất cả" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-black pt-20">
      {/* Banner */}
      <section className="relative py-24 px-4 text-center border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_forwards]">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold-500 mb-4 uppercase tracking-widest drop-shadow-lg">
            Tác Phẩm & Cẩm Nang
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-serif italic max-w-2xl mx-auto">
            Không gian lưu giữ những khoảnh khắc đẹp và chia sẻ kiến thức hữu ích về chăm sóc tóc nam.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-white mb-8 border-b-2 border-gold-600 pb-2 inline-block">
          Thư Viện Hình Ảnh
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab 
                  ? "bg-gold-500 text-black" 
                  : "bg-dark-900 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeInUp_0.5s_ease-out_forwards]">
          {filteredGallery.map((img) => (
            <div 
              key={img.id} 
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer border border-white/5"
              onClick={() => setLightboxImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm border-l-2 border-gold-500 pl-2">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl font-bold text-white border-b-2 border-gold-600 pb-2 inline-block">
            Cẩm Nang & Tin Tức
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link href={`/blog/${post.slug}`} key={idx} className="group flex flex-col bg-dark-900 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/30 transition-colors">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
                <div className="mt-auto flex items-center text-gold-500 text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Đọc tiếp <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImg(null)}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 rounded-full p-2 transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl max-h-[90vh] aspect-[4/3]" onClick={e => e.stopPropagation()}>
            <Image
              src={lightboxImg}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
