"use client";

import { useState, useEffect } from "react";
import { Scissors, Package, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface ServiceItem {
  name: string;
  price: string;
  desc?: string;
}

interface ServiceGroup {
  category: string;
  items: ServiceItem[];
}

interface ProductItem {
  name: string;
  price: string;
  origin?: string;
  weight?: string;
}

interface ProductGroup {
  category: string;
  items: ProductItem[];
}

export default function BarberShopPage() {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");
  const [services, setServices] = useState<ServiceGroup[]>([]);
  const [products, setProducts] = useState<ProductGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Services
        const { data: sGroups } = await supabase.from("service_group").select("*").order("name");
        const { data: sItems } = await supabase.from("service").select("*");

        if (sGroups && sItems) {
          const formattedServices = sGroups.map((group) => ({
            category: group.name,
            items: sItems
              .filter((item) => item.group_id === group.id)
              .map((item) => ({
                name: item.name,
                price: Number(item.price).toLocaleString("vi-VN") + "đ",
                desc: item.description || undefined,
              })),
          })).filter(g => g.items.length > 0);
          setServices(formattedServices);
        }

        // Fetch Products
        const { data: pGroups } = await supabase.from("products_group").select("*").order("name");
        const { data: pItems } = await supabase.from("product").select("*");

        if (pGroups && pItems) {
          const formattedProducts = pGroups.map((group) => ({
            category: group.name,
            items: pItems
              .filter((item) => item.group_id === group.id)
              .map((item) => {
                const descParts = item.description ? item.description.split(" - ") : [];
                return {
                  name: item.name,
                  price: Number(item.price).toLocaleString("vi-VN") + "đ",
                  weight: descParts[0] || "",
                  origin: descParts[1] || "",
                };
              }),
          })).filter(g => g.items.length > 0);
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20" style={{ background: "var(--dark-950)" }}>
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
            Sơn Barber Shop
          </h1>
          <p
            className="italic max-w-[600px] mx-auto"
            style={{ fontFamily: "var(--font-display)", color: "var(--dark-300)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            "Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật, được trau chuốt tỉ mỉ bởi các Barber chuyên nghiệp."
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section
        className="py-6 px-4 sticky top-[60px] z-40"
        style={{
          background: "rgba(5, 5, 5, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--dark-700)",
        }}
      >
        <div
          className="max-w-md mx-auto flex p-1"
          style={{ background: "var(--dark-800)", borderRadius: "var(--radius-full)", border: "1px solid var(--dark-700)" }}
        >
          {(["services", "products"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 font-semibold text-sm transition-all duration-[250ms]"
              style={{
                borderRadius: "var(--radius-full)",
                ...(activeTab === tab
                  ? {
                    background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                    color: "var(--dark-950)",
                    boxShadow: "var(--shadow-gold)",
                  }
                  : {
                    color: "var(--dark-300)",
                    background: "transparent",
                  }),
              }}
            >
              {tab === "services" ? <Scissors size={18} /> : <Package size={18} />}
              {tab === "services" ? "Dịch Vụ" : "Sản Phẩm"}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding px-4 max-w-[1200px] mx-auto w-full">
        {activeTab === "services" && (
          <div className="space-y-16 animate-fade-in-up">
            {services.map((group, idx) => (
              <div key={idx}>
                <h2
                  className="font-bold pb-4 mb-8"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--dark-50)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    borderBottom: "1px solid rgba(184, 134, 11, 0.3)",
                  }}
                >
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 flex justify-between items-center transition-all duration-[250ms] hover:-translate-y-1 group cursor-default"
                      style={{
                        background: "var(--dark-800)",
                        border: "1px solid var(--dark-700)",
                        borderRadius: "var(--radius-lg)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--gold-600)";
                        e.currentTarget.style.boxShadow = "0 9px 40px rgba(212, 160, 23, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--dark-700)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div>
                        <h3 className="text-base font-bold transition-colors duration-[250ms]" style={{ color: "var(--dark-50)" }}>
                          {item.name}
                        </h3>
                        <p className="text-sm mt-1" style={{ color: "var(--dark-400)" }}>{item.desc}</p>
                      </div>
                      <div className="text-right pl-4">
                        <span
                          className="font-bold whitespace-nowrap"
                          style={{ fontFamily: "var(--font-display)", color: "var(--gold-400)", fontSize: "1.15rem" }}
                        >
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-16 animate-fade-in-up">
            {products.map((group, idx) => (
              <div key={idx}>
                <h2
                  className="font-bold pb-4 mb-8"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--dark-50)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    borderBottom: "1px solid rgba(184, 134, 11, 0.3)",
                  }}
                >
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-6 transition-all duration-[250ms] hover:-translate-y-1 group"
                      style={{
                        background: "var(--dark-800)",
                        border: "1px solid var(--dark-700)",
                        borderRadius: "var(--radius-lg)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--gold-600)";
                        e.currentTarget.style.boxShadow = "0 9px 40px rgba(212, 160, 23, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--dark-700)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="w-full aspect-square mb-6 flex items-center justify-center overflow-hidden"
                        style={{ background: "var(--dark-900)", borderRadius: "var(--radius-md)", border: "1px solid var(--dark-700)" }}
                      >
                        <Package className="w-12 h-12 opacity-30" style={{ color: "var(--dark-600)" }} />
                      </div>
                      <h3 className="text-base font-bold flex-1" style={{ color: "var(--dark-50)" }}>
                        {item.name}
                      </h3>
                      <div className="mt-4">
                        <p className="text-xs mb-1" style={{ color: "var(--dark-400)" }}>{item.origin} &bull; {item.weight}</p>
                        <p className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--gold-400)", fontSize: "1.15rem" }}>
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Floating Booking CTA - subtle pulse instead of bounce */}
      <div className="fixed bottom-8 right-8 z-50" style={{ animation: "goldPulse 2.5s ease-in-out infinite" }}>
        <a
          href="https://booking.easysalon.vn/son-barbershop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold transition-all duration-[250ms] hover:-translate-y-[2px]"
          style={{
            background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
            color: "var(--dark-950)",
            padding: "14px 24px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-gold)",
          }}
        >
          Đặt lịch hẹn
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
