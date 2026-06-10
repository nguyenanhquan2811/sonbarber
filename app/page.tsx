"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, GraduationCap, MapPin, Phone } from "lucide-react";

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
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TiktokIcon = ({ size = 24, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}>
    <path d="M14 2v10.2a4.2 5.2 0 1 1-2.6-3.9V5.1c-3.9.4-6.9 3.6-6.9 7.6A6.8 7.5 0 1 0 19.1 13V7.2c1.2.9 2.5 1.5 3.9 1.6V6.1c-2.5-.5-4.6-2.4-5.3-4.1H14z" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-bg"></div>

        {/* Decorative ambient glows */}
        <div className="hero-deco hero-deco-1"></div>
        <div className="hero-deco hero-deco-2"></div>

        <div className="hero-content animate-fade-in-up flex flex-col items-center">
          <Image
            src="/graphics/logoson.png"
            alt="Sơn Barber Logo"
            width={200}
            height={200}
            className="mb-10 drop-shadow-2xl"
            priority
          />
          <h1 className="font-bold flex flex-col gap-2">
            <span className="text-gradient-gold text-5xl sm:text-7xl md:text-8xl">
              Sơn Barber
            </span>
            <span className="italic text-3xl sm:text-5xl md:text-7xl" style={{ color: "#cfcfcf" }}>
              Phong Cách Đẳng Cấp
            </span>
          </h1>
          <p className="italic">
            "Hệ thống cắt tóc nam cao cấp & đào tạo nghề barber hàng đầu tại Nghệ An. Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật."
          </p>
          <div className="hero-buttons">
            <a
              href="https://booking.easysalon.vn/son-barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-[250ms] hover:-translate-y-[2px]"
              style={{
                // background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                width: "100%",
                maxWidth: "300px",
                border: "2px solid var(--gold-500)",
                color: "var(--gold-500)",
                padding: "14px 32px",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-gold)",
                fontSize: "1rem",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-500)";
                e.currentTarget.style.color = "var(--dark-950)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold-500)";
              }}
            >
              Đặt lịch cắt tóc
            </a>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-[250ms] hover:-translate-y-[2px]"
              style={{
                width: "100%",
                maxWidth: "300px",
                border: "2px solid var(--gold-500)",
                color: "var(--gold-500)",
                padding: "14px 32px",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-gold)",
                fontSize: "1rem",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-500)";
                e.currentTarget.style.color = "var(--dark-950)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold-500)";
              }}
            >
              Tìm hiểu khóa học
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FOUNDER INTRODUCTION ====== */}
      <section className="section-padding px-4" style={{ background: "var(--dark-900)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image with gold offset */}
          <div className="order-2 md:order-1 relative group">
            <div
              className="absolute inset-0 transform translate-x-3 translate-y-3 transition-transform duration-[400ms] group-hover:translate-x-5 group-hover:translate-y-5"
              style={{ background: "var(--gold-600)", borderRadius: "var(--radius-lg)", zIndex: 0 }}
            ></div>
            <Image
              src="/graphics/founder_sonbarber.jpeg"
              alt="Founder Nguyễn Thái Sơn"
              width={600}
              height={800}
              className="relative z-10 w-full h-auto object-cover"
              style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6">
            <h2
              className="gold-line font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--dark-50)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              }}
            >
              Founder
              <span className="font-bold inline-block ml-2" style={{ color: "var(--gold-500)" }}>Nguyễn Thái Sơn</span>
            </h2>
            {/* <h3
              className="font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--gold-500)", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
            >
              Founder Nguyễn Thái Sơn
            </h3> */}
            <p style={{ color: "var(--dark-300)", lineHeight: 1.6, fontSize: "1rem" }}>
              Bắt đầu hành trình "cầm đầu thiên hạ" từ năm 2013 với hai bàn tay trắng, Barber Nguyễn Thái Sơn đã không ngừng nỗ lực rèn luyện để trở thành một tay kéo chuyên nghiệp.
            </p>
            <p style={{ color: "var(--dark-300)", lineHeight: 1.6, fontSize: "1rem" }}>
              Năm 2017, thương hiệu <strong style={{ color: "var(--dark-100)" }}>Sơn Barber</strong> chính thức ra đời. Trải qua hơn {new Date().getFullYear() - 2017} năm phát triển, Sơn Barber không chỉ là nơi mang lại những kiểu tóc nam tính, đẳng cấp mà còn là cái nôi đào tạo ra hàng trăm barber chuyên nghiệp tại khu vực miền Trung.
            </p>
            <div className="pt-4">
              <Link
                href="https://www.facebook.com/son201093"
                target="_blank"
                className="inline-flex items-center font-semibold group transition-colors duration-[250ms]"
                style={{ color: "var(--gold-500)", fontSize: "1rem" }}
              >
                Tìm hiểu thêm
                <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-[250ms]" size={18} />
              </Link>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="bg-gold-500/10 p-3 rounded-full"><FacebookIcon className="text-gold-500" /></div>
              <div>
                <p className="text-sm text-zinc-500">Facebook</p>
                <a href="https://www.facebook.com/son201093" target="_blank" className="font-bold text-lg text-white">Nguyễn Thái Sơn</a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="bg-gold-500/10 p-3 rounded-full"><TiktokIcon className="text-gold-500" /></div>
                <div>
                  <p className="text-sm text-zinc-500">Tiktok</p>
                  <a href="https://www.tiktok.com/@sonbarbershop?_r=1&_d=secCgYIASAHKAESPgo8YTgdg8gIe8SiGijQxfXfo7Fc5AFqQBnR9M2Vds6VMlVNjMP4DaBtKqH%2FezfLl6BCh26huwFf74bIZPIIGgA%3D&_svg=1&checksum=1778f098904d33feb23c9b6847e0e6776c8974c9b9b3e95ce295576e19a67de2&item_author_type=1&reflow_sign_scene=7&rgssign=8.1.Jjkigi_uAWlvsouzcr4e-A&sec_uid=MS4wLjABAAAAgtwh0KlLw_RO7GiznOCbw0n_owNySz0kMn80xeRWzRWBXN8EmkK-Ju4H9yBXFDTR&sec_user_id=MS4wLjABAAAAgtwh0KlLw_RO7GiznOCbw0n_owNySz0kMn80xeRWzRWBXN8EmkK-Ju4H9yBXFDTR&share_app_id=1180&share_author_id=7183654472126858267&share_link_id=5258D9A0-DE5B-4EA8-AED2-761C58AA0142&share_region=VN&share_scene=1&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1778772943&tt_from=copy&u_code=e5ia430h69mila&ug_btm=b8727%2Cb0&user_id=7183654472126858267&utm_campaign=client_share&utm_medium=ios&utm_source=copyktok.com/@barber_thai_son" target="_blank" className="font-bold text-xl text-white">Sơn Barber Shop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BARBER SHOP + ACADEMY OVERVIEW ====== */}
      <section className="section-padding px-4" style={{ background: "var(--dark-950)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Barber Shop Card */}
          <div
            className="p-10 transition-all duration-[250ms] hover:-translate-y-1 group"
            style={{
              background: "var(--dark-800)",
              border: "1px solid var(--dark-700)",
              borderRadius: "var(--radius-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-600)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(212, 160, 23, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--dark-700)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mb-6"
              style={{ background: "rgba(212, 160, 23, 0.15)", borderRadius: "var(--radius-md)" }}
            >
              <Scissors style={{ color: "var(--gold-500)" }} size={28} />
            </div>
            <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--dark-50)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              Sơn Barber Shop
            </h2>
            <p className="mb-8" style={{ color: "var(--dark-300)", lineHeight: 1.6 }}>
              Trải nghiệm dịch vụ cắt tóc nam tiêu chuẩn, gội đầu thư giãn, uốn nhuộm tạo kiểu thời trang với các dòng sản phẩm tạo kiểu cao cấp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/barber-shop"
                className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-[250ms] hover:-translate-y-[2px]"
                style={{
                  background: "var(--dark-700)",
                  border: "1px solid var(--dark-600)",
                  color: "var(--dark-100)",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Xem Bảng giá
              </Link>
              <a
                href="https://booking.easysalon.vn/son-barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-[250ms] hover:-translate-y-[2px]"
                style={{
                  background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                  color: "var(--dark-950)",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Đặt lịch ngay
              </a>
            </div>
          </div>

          {/* Academy Card */}
          <div
            className="p-10 transition-all duration-[250ms] hover:-translate-y-1 group"
            style={{
              background: "var(--dark-800)",
              border: "1px solid var(--dark-700)",
              borderRadius: "var(--radius-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-600)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(212, 160, 23, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--dark-700)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mb-6"
              style={{ background: "rgba(212, 160, 23, 0.15)", borderRadius: "var(--radius-md)" }}
            >
              <GraduationCap style={{ color: "var(--gold-500)" }} size={28} />
            </div>
            <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--dark-50)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              Sơn Academy
            </h2>
            <p className="mb-8" style={{ color: "var(--dark-300)", lineHeight: 1.6 }}>
              Khóa học đào tạo nghề barber chuyên nghiệp trọn gói không giấu nghề. Hơn 30 khóa học viên đã tốt nghiệp và tự tin mở tiệm.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-[250ms] hover:-translate-y-[2px]"
                style={{
                  background: "var(--dark-700)",
                  border: "1px solid var(--dark-600)",
                  color: "var(--dark-100)",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Chi tiết Khóa học
              </Link>
              <Link
                href="/academy#register"
                className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-[250ms] hover:-translate-y-[2px]"
                style={{
                  background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                  color: "var(--dark-950)",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Đăng ký học ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BRANCHES ====== */}
      {/* <section className="section-padding px-4" style={{ background: "var(--dark-900)" }}> */}
      <section className="section-padding px-4" style={{ background: "var(--dark-900)" }}>
        {/* <div className="max-w-[1200px] mx-auto">
        {/* Section Header
          <div className="text-center mb-16">
            <h2
              className="gold-line font-bold inline-block"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--dark-50)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              }}
            >
              Hệ Thống Chi Nhánh
            </h2>
            <p className="mt-5 max-w-[600px] mx-auto" style={{ color: "var(--dark-300)" }}>
              Sơn Barber tự hào phục vụ khách hàng tại 4 cơ sở khang trang, hiện đại bậc nhất tại Nghệ An.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cơ sở 1", address: "89 Yên Lâm, TP Vinh", phone: "0985 645 872", map: "https://maps.app.goo.gl/wqoutcouXedBes3U6" },
              { name: "Cơ sở 2", address: "76 Lý Thường Kiệt, TP Vinh", phone: "0961 202 341", map: "https://maps.app.goo.gl/YTN4auq3xWhJQ9jz5" },
              { name: "Cơ sở 3", address: "145 Hà Huy Tập, TP Vinh", phone: "0971 039 937", map: "https://maps.app.goo.gl/p3cqvvpLThjV7nRh9" },
              { name: "Chi nhánh KTX", address: "KTX Luxshare ICT", phone: "0979 783 193", map: "https://maps.app.goo.gl/kA3yVD4Q5Rr8JTB9A" },
            ].map((branch, idx) => (
              <a
                key={idx}
                href={branch.map}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 transition-all duration-[250ms] hover:-translate-y-1"
                style={{
                  background: "var(--dark-800)",
                  border: "1px solid var(--dark-700)",
                  borderRadius: "var(--radius-lg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-600)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(212, 160, 23, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--dark-700)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin style={{ color: "var(--gold-500)" }} size={20} />
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--dark-50)" }}>
                    {branch.name}
                  </h3>
                </div>
                <p className="mb-2 text-sm" style={{ color: "var(--dark-300)" }}>{branch.address}</p>
                <p className="font-semibold text-sm" style={{ color: "var(--gold-500)" }}>Hotline: {branch.phone}</p>
              </a>
            ))}
          </div>
        </div> */}
        <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] max-w-[1200px] mx-auto" style={{ animationFillMode: 'forwards', opacity: 0, marginTop: '50px' }}>
          <h2 className="font-serif text-3xl font-bold text-white mb-6">Hệ thống Chi nhánh</h2>

          {/* Iframe Google Maps (Cơ sở 2) */}
          <p>Cơ sở chính toạ lạc tại 76 Lý Thường Kiệt, phường Thành Vinh, tỉnh Nghệ An:</p>
          <div className="w-full h-64 bg-dark-800 rounded-2xl mb-8 overflow-hidden border border-white/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.643176364686!2d105.670439!3d18.6800015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce6955144e0b%3A0xc90e5e7e5700327!2zNzYgTMO9IFRoxrDhu51uZyBLaeG7h3QsIFRow6BuaCBWaW5oLCBOZ2jhu4cgQW4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1780815491338!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 contrast-125 opacity-80"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {branches.map((branch, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors" style={{ background: "var(--dark-950)" }}>
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
      </section >
    </div >
  );
}
