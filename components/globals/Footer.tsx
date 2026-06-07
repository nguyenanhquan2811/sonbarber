

import Link from "next/link";
import { Phone, MapPin, Info } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "var(--dark-900)",
        borderTop: "1px solid var(--dark-800)",
        color: "var(--dark-400)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div className="space-y-5 lg:pr-8">
            <h2
              className="text-4xl font-bold tracking-[0.08em] text-gradient-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sơn Barber
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--dark-300)" }}>
              Hệ thống tóc nam cao cấp & đào tạo nghề barber chuyên nghiệp tại Nghệ An. Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật.
            </p>
          </div>

          {/* Col 2: About Us */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--dark-50)" }}>
              Về chúng tôi
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--dark-400)" }}>
              <li>Lịch sử hình thành</li>
              <li>Đội ngũ Master Barber</li>
              <li>Triết lý dịch vụ</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--dark-50)" }}>
              Dịch vụ
            </h3>
            <ul className="space-y-4 text-sm flex flex-col" style={{ color: "var(--dark-400)" }}>
              {[
                { href: "/barber-shop", label: "Dịch vụ & Sản phẩm" },
                { href: "/academy", label: "Học viện" },
                { href: "/gallery", label: "Bộ sưu tập" },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-[250ms] hover:text-[var(--gold-400)]"
                  style={{ color: "var(--dark-400)" }}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--dark-50)" }}>
              Liên hệ
            </h3>
            <ul className="space-y-4 text-sm" style={{ color: "var(--dark-400)" }}>
              <li className="flex items-start gap-3">
                <Info size={16} style={{ color: "var(--gold-500)" }} className="shrink-0 mt-0.5" />
                <a href="/contact">Thông tin</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "var(--gold-500)" }} className="shrink-0" />
                <a href="tel:0961202341" className="transition-colors duration-[250ms] hover:text-[var(--gold-400)]" style={{ color: "var(--dark-400)" }}>0961 202 341
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FacebookIcon size={16} style={{ color: "var(--gold-500)" }} className="shrink-0" />
                <a
                  href="https://www.facebook.com/ThaiSonBarber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-[250ms] hover:text-[var(--gold-400)]"
                  style={{ color: "var(--dark-400)" }}
                >
                  Sơn Barber Shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs"
          style={{ borderTop: "1px solid var(--dark-800)", color: "var(--dark-400)" }}
        >
          <p>&copy; {new Date().getFullYear()} Sơn Barber. All rights reserved.</p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="transition-colors duration-[250ms] hover:text-dark-200">Privacy Policy</Link>
            <Link href="#" className="transition-colors duration-[250ms] hover:text-dark-200">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
