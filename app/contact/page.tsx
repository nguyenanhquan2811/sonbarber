"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

// Mock Data
const branches = [
  {
    name: "Cơ sở 1",
    address: "89 Yên Lâm, TP Vinh",
    phone: "0985 645 872",
    hours: "08:00 - 19:00",
    map: "https://maps.app.goo.gl/wqoutcouXedBes3U6",
    fanpage: "https://www.facebook.com/profile.php?id=100091936048068"
  },
  {
    name: "Cơ sở 2 & Academy",
    address: "76 Lý Thường Kiệt, TP Vinh",
    phone: "0961 202 341",
    hours: "08:00 - 19:00",
    map: "https://maps.app.goo.gl/YTN4auq3xWhJQ9jz5",
    fanpage: "https://www.facebook.com/profile.php?id=100064840806630"
  },
  {
    name: "Cơ sở 3",
    address: "145 Hà Huy Tập, TP Vinh",
    phone: "0971 039 937",
    hours: "08:00 - 19:00",
    map: "https://maps.app.goo.gl/p3cqvvpLThjV7nRh9"
  },
  {
    name: "Chi nhánh KTX",
    address: "KTX Luxshare ICT",
    phone: "0979 783 193",
    hours: "08:00 - 19:00",
    map: "https://maps.app.goo.gl/kA3yVD4Q5Rr8JTB9A",
    fanpage: "https://www.facebook.com/profile.php?id=61566396022877"
  }
];

const FacebookIcon = ({ size = 24, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công.");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        const err = await res.json();
        setStatus("error");
        setMessage(err.message || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Mất kết nối mạng. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black pt-20">
      {/* Banner */}
      <section className="relative py-24 px-4 text-center" style={{ borderBottom: "1px solid var(--dark-700)" }}>
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse at center, rgba(212, 160, 23, 0.06) 0%, var(--dark-950) 70%)" }}
        ></div>
        <div className="max-w-[800px] mx-auto animate-fade-in-up">
          <h1
            className="font-bold mb-5 text-gradient-gold"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            Kết Nối Với Chúng Tôi
          </h1>
          <p
            className="italic max-w-[600px] mx-auto"
            style={{ fontFamily: "var(--font-display)", color: "var(--dark-300)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Sơn Barber luôn sẵn sàng lắng nghe và phục vụ bạn.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Info & Form */}
          <div className="space-y-12 animate-[fadeInUp_0.5s_ease-out_forwards]">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Thông tin hỗ trợ</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="bg-gold-500/10 p-3 rounded-full"><Phone className="text-gold-500" /></div>
                  <div>
                    <p className="text-sm text-zinc-500">Hotline toàn hệ thống</p>
                    <a href="tel:0961202341" className="font-bold text-xl text-white">0961 202 341</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="bg-gold-500/10 p-3 rounded-full"><FacebookIcon className="text-gold-500" /></div>
                  <div>
                    <p className="text-sm text-zinc-500">FanPage</p>
                    <a href="https://www.facebook.com/ThaiSonBarber" target="_blank" className="font-bold text-lg text-white">Sơn Barber Shop</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-900 p-8 rounded-2xl border border-white/10">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Gửi lời nhắn cho chúng tôi</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                    placeholder="Họ và tên của bạn"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div>
                  <textarea
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                    placeholder="Nội dung lời nhắn..."
                  ></textarea>
                </div>

                {status === "success" && <div className="text-green-400 text-sm text-center">{message}</div>}
                {status === "error" && <div className="text-red-400 text-sm text-center">{message}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {loading ? "Đang gửi..." : "Gửi tin nhắn"}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Branches */}
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]" style={{ animationFillMode: 'forwards', opacity: 0 }}>
            <h2 className="font-serif text-3xl font-bold text-white mb-6">Hệ thống Chi nhánh</h2>

            <div className="w-full h-64 bg-dark-800 rounded-2xl mb-8 overflow-hidden border border-white/10 relative">
              {/* Iframe Google Maps (Cơ sở 2) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.80556093551!2d105.66668741489626!3d18.6727221873199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce67098491bb%3A0xc6eb91b5c46d3e8e!2s76%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20L%C3%AA%20L%E1%BB%A3i%2C%20Th%C3%A0nh%20ph%E1%BB%91%20Vinh%2C%20Ngh%E1%BB%87%20An!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branches.map((branch, i) => (
                <div key={i} className="bg-dark-900 p-5 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-2">{branch.name}</h4>
                  <p className="text-zinc-400 text-sm mb-1 flex items-start gap-2">
                    <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="text-zinc-400 text-sm mb-1 flex items-center gap-2">
                    <Phone size={16} className="text-gold-500" />
                    <span>{branch.phone}</span>
                  </p>
                  <p className="text-zinc-500 text-xs mt-3 mb-3">Mở cửa: {branch.hours}</p>

                  <div className="flex gap-3">
                    <a href={branch.map} target="_blank" rel="noopener noreferrer" className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded text-white flex items-center gap-1 transition-colors">
                      <MapPin size={12} />  Chỉ đường
                    </a>
                    {branch.fanpage && (
                      <a href={branch.fanpage} target="_blank" rel="noopener noreferrer" className="text-xs bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                        <FacebookIcon size={12} />Fanpage
                      </a>
                    )}
                    <a href={`tel:${branch.phone}`} rel="noopener noreferrer" className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded text-white flex items-center gap-1 transition-colors">
                      <Phone size={12} />Gọi ngay
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
