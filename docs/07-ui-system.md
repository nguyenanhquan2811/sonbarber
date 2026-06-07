# 07. UI System - SonBarber Style Guide

Tài liệu này rút ra từ thiết kế thực tế của thương hiệu Sơn Barber để thiết lập bộ quy chuẩn giao diện (UI/UX Design System).

---

## 1. Định hướng Thiết kế (Design Direction)
* **Giao diện Người dùng (User Public UI):** Phong cách **Black & Gold Luxury + Premium Barber Vibe**. Nền tối sâu lắng, chữ có chân cổ điển sang trọng, chi tiết điểm xuyết vàng kim tinh xảo. Tạo cảm xúc lịch lãm, cao cấp, nam tính và sắc nét.
* **Giao diện Quản trị (Admin Panel UI):** Phong cách **White & Blue Admin Style**. Bố cục sáng sủa, thanh lịch, ưu tiên trực quan, tối giản giúp quản trị viên dễ dàng thao tác dữ liệu.

---

## 2. Bảng màu (Color Palettes)

### A. Màu chủ đạo tối (Dark Shades - Cho User UI)
* `--dark-950` (`#050505`): Nền chính, vùng hero, các section tối nhất.
* `--dark-900` (`#0d0d0d`): Nền section phụ, chân trang (Footer).
* `--dark-800` (`#1a1a1a`): Nền các thẻ Card, các ô Input, tiêu đề bảng (Table header).
* `--dark-700` (`#282828`): Đường viền (Border) của Card, nền khi hover nhẹ.
* `--dark-600` (`#383838`): Viền các ô form, màu nút đen mặc định.
* `--dark-300` (`#a0a0a0`): Chữ mô tả phụ, nội dung phụ.
* `--dark-100` (`#e8e8e8`): Chữ hiển thị chính trên nền tối.
* `--dark-50`  (`#f8f8f8`): Tiêu đề chính, đề mục nổi bật nhất.

### B. Vàng kim cao cấp (Gold Accents - Điểm nhấn User UI)
* `--gold-400` (`#facc15`): Trạng thái hover liên kết, văn bản/icon nhấn mạnh.
* `--gold-500` (`#d4a017`): Nút kêu gọi hành động (CTA) chính, tiêu điểm (Focus), bóng đổ nhấn.
* `--gold-600` (`#b8860b`): Màu của các đường kẻ trang trí, gradient viền khi hover.
* `--gold-700` (`#96700a`): Vàng tối cho các trạng thái ít nổi bật.

> [!IMPORTANT]
> **Quy tắc dùng màu vàng:** Chỉ sử dụng màu vàng kim làm điểm nhấn tinh tế (nút bấm chính, đường kẻ gạch chân, huy hiệu badge, giá tiền). Không sử dụng mảng màu vàng lớn để tránh làm mất đi nét tinh tế, sang trọng.

### C. Trạng thái phản hồi (Semantic Colors)
* Thành công (Success): `#22c55e`
* Cảnh báo (Warning): `#f59e0b`
* Lỗi (Error): `#ef4444`
* Thông tin (Info): `#3b82f6`

---

## 3. Typography (Hệ thống Chữ)
* **Font chữ Tiêu đề (Display Font):** `Playfair Display`, Serif (Chữ có chân cổ điển, sang trọng). Dùng cho Heading chính, tên thương hiệu, hiển thị giá combo lớn.
* **Font chữ Nội dung (Body Font):** `Inter`, Sans-serif (Chữ không chân sắc nét, hiện đại). Dùng cho văn bản nội dung, thanh điều hướng, các ô điền form, chữ trên nút bấm.
* **Quy chuẩn kích thước:**
  * `h1`: `clamp(2rem, 5vw, 3.5rem)`
  * Hero `h1`: `clamp(2.2rem, 8vw, 4.5rem)`
  * `h2`: `clamp(1.5rem, 3.5vw, 2.5rem)`
  * Tiêu chuẩn chữ nội dung (Body): `0.95rem` đến `1.05rem` (Line-height: `1.6` để dễ đọc).

---

## 4. Spacing, Bo góc (Radius) & Shadow (Bóng đổ)
* **Spacing Scale:**
  * `--space-xs`: `5px` | `--space-sm`: `10px` | `--space-md`: `16px` | `--space-lg`: `24px` | `--space-xl`: `32px` | `--space-2xl`: `48px` | `--space-3xl`: `64px` | `--space-4xl`: `96px`
* **Bo góc (Radius):**
  * Nút bấm (Button) & Ô nhập liệu (Input): `8px`
  * Thẻ hiển thị (Card): `12px`
  * Huy hiệu (Badge) / Tab tròn: `9999px`
* **Bóng đổ (Shadow):**
  * Bóng mặc định: `0 4px 12px rgba(0, 0, 0, 0.4)`
  * Bóng đổ vàng kim (chỉ dùng khi hover nút bấm chính): `0 4px 20px rgba(212, 160, 23, 0.3)`

---

## 5. Quy tắc các Component chính

### A. Thẻ hiển thị (Card)
* Nền card: `--dark-800` | Viền card: `1px solid --dark-700`.
* Hover: Dịch chuyển lên trên (`transform: translateY(-4px)`), viền đổi sang màu vàng `--gold-600` và đổ bóng vàng mờ.

### B. Nút bấm (Button)
* **Primary Gold:** Gradient từ `--gold-500` sang `--gold-600`, chữ màu đen đậm `--dark-950`.
* **Outline Gold:** Nền trong suốt, viền vàng kim, chữ vàng kim. Khi hover chuyển nền vàng và chữ đen.
* **Dark Button:** Nền xám đậm `--dark-700`, viền `--dark-600`, chữ trắng `--dark-100`.

### C. Hoạt họa & Chuyển động (Motion & Animation)
* Hiệu ứng chuyển cảnh xuất hiện nội dung:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
* Tốc độ Transition mặc định: `250ms ease` cho tất cả các tương tác hover thông thường.
