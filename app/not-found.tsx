import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-950 text-center px-4 pt-20">
      <div className="animate-[fadeInUp_1s_ease-out_forwards]">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-gold-500 mb-6 tracking-widest drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
          Không Tìm Thấy Trang
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
          Rất tiếc, đường dẫn bạn vừa truy cập không tồn tại hoặc đã bị gỡ bỏ.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
        >
          <ArrowLeft size={20} />
          Quay lại Trang chủ
        </Link>
      </div>
    </div>
  );
}
