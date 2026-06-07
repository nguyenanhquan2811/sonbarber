"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, GraduationCap, MapPin } from "lucide-react";

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
              Sơn Barber Academy
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
      <section className="section-padding px-4" style={{ background: "var(--dark-900)" }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
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
        </div>
      </section>
    </div>
  );
}
