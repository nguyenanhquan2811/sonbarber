"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Trophy, Users, BookOpen, Link } from "lucide-react";

import { supabase } from "@/lib/supabase";

interface CourseItem {
  name: string;
  duration: string;
  price: string;
  desc: string;
  features: string[];
}

export default function AcademyPage() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [formData, setFormData] = useState({ name: "", phone: "", course_name: "", note: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from('course').select('*');
      if (data) {
        const parsedCourses = data.map((c: any) => {
          let details = { desc: "", features: [] };
          try {
            details = JSON.parse(c.description_details);
          } catch (e) { }
          return {
            name: c.name,
            duration: c.duration,
            price: Number(c.price) === 0 ? "Liên hệ" : Number(c.price).toLocaleString("vi-VN") + "đ",
            desc: details.desc,
            features: details.features || [],
          };
        });
        setCourses(parsedCourses);
        if (parsedCourses.length > 0) {
          setFormData(prev => ({ ...prev, course_name: parsedCourses[0].name }));
        }
      }
    }
    fetchCourses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setMessage("Vui lòng điền đầy đủ Họ tên và Số điện thoại hợp lệ.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Đăng ký thành công! Chúng tôi sẽ sớm liên hệ tư vấn.");
        setFormData({ name: "", phone: "", course_name: "Khóa Đào Tạo Barber Cơ Bản", note: "" });
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

  const scrollToForm = (courseName: string) => {
    setFormData(prev => ({ ...prev, course_name: courseName }));
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black pt-20">
      {/* Banner */}
      {/* <section className="relative py-24 px-4 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593702288056-cc3dc679cbce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_forwards]">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 uppercase tracking-widest drop-shadow-lg" style={{ color: "var(--gold-500)" }}>
            Sơn Academy
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto">
            Đam mê dẫn lối thành công.
          </p>
        </div>
      </section> */}
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
            Sơn Academy
          </h1>
          <p
            className="italic max-w-[600px] mx-auto"
            style={{ fontFamily: "var(--font-display)", color: "var(--dark-300)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            "Đam mê dẫn lối thành công."
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white border-b-2 border-gold-600 pb-2 inline-block">
              Về Sơn Barber Academy
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Được thành lập từ năm 2017, Sơn Barber Academy tự hào là cái nôi đào tạo ra những Barber chuyên nghiệp, có tâm và có tầm tại khu vực miền Trung.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                <Trophy className="text-gold-500 mb-4" size={32} />
                <h4 className="text-3xl font-bold text-white mb-2">{new Date().getFullYear() - 2017}+</h4>
                <p className="text-zinc-500 text-sm">Năm Kinh Nghiệm</p>
              </div>
              <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                <Users className="text-gold-500 mb-4" size={32} />
                <h4 className="text-3xl font-bold text-white mb-2">30+</h4>
                <p className="text-zinc-500 text-sm">Khóa Học Viên</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder images for training */}
            <div className="bg-dark-800 aspect-[3/4] rounded-lg overflow-hidden border border-white/10"></div>
            <div className="bg-dark-800 aspect-[3/4] rounded-lg overflow-hidden border border-white/10 mt-8"></div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-dark-900 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Các Khóa Đào Tạo</h2>
            <p className="text-zinc-400">Lộ trình học bài bản, giáo trình tâm huyết độc quyền chỉ có tại Sơn Barber.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-black flex flex-col p-8 rounded-2xl border border-white/10 hover:border-gold-500/50 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition-all duration-300">
                <div className="mb-6">
                  <BookOpen className="text-gold-500 mb-4" size={32} />
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{course.name}</h3>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                    <span className="text-zinc-500">{course.duration}</span>
                    <span className="font-serif text-2xl font-bold text-gold-500">{course.price}</span>
                  </div>
                  <p className="text-zinc-400 mb-6 min-h-[80px]">{course.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle size={18} className="text-gold-500 shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => scrollToForm(course.name)}
                  className="mt-auto w-full bg-transparent hover:bg-gold-500 text-gold-500 hover:text-black border-2 border-gold-500 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  Đăng ký khóa này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {/* chi tiết khoá học vui lòng liên hệ fanpage chính của Sơn Barber shop. */}
      <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-500/10 blur-[100px] -z-10 rounded-full"></div>
        <div className="max-w-2xl mx-auto bg-dark-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Đăng Ký Khóa Học Barber</h2>
            <p className="text-zinc-400">Để biết thêm chi tiết về khóa học, vui lòng liên hệ <Link href="https://www.facebook.com/ThaiSonBarber" target="_blank" className="text-gold-500 hover:text-gold-400 underline transition-colors">fanpage chính thức của Sơn Barber shop</Link> nhé!</p>
          </div>
        </div>
      </section>
      {/* <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-500/10 blur-[100px] -z-10 rounded-full"></div>
        <div className="max-w-2xl mx-auto bg-dark-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Đăng Ký Khóa Học Barber</h2>
            <p className="text-zinc-400">Hãy để lại thông tin, Sơn Barber Academy sẽ liên hệ tư vấn trực tiếp lộ trình học cho bạn trong vòng 24h.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Họ và tên *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Số điện thoại *</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="09xx xxx xxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Khóa học mong muốn</label>
              <select
                value={formData.course_name}
                onChange={e => setFormData({ ...formData, course_name: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
              >
                {courses.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Ghi chú thêm</label>
              <textarea
                value={formData.note}
                onChange={e => setFormData({ ...formData, note: e.target.value })}
                rows={4}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Ví dụ: Tôi muốn học ca tối..."
              ></textarea>
            </div>

            {status === "success" && (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg text-sm text-center">
                {message}
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-sm text-center">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold text-lg py-4 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all disabled:opacity-50 flex justify-center items-center gap-2"
            >
              {loading ? "Đang gửi..." : "Gửi thông tin đăng ký"}
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
}
