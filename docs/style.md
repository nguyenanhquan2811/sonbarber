# UX/UI Style Guide: Black & Gold Luxury

Tài liệu này được rút ra từ `app/globals.css` của SonBarber. Dùng nó như bộ quy chuẩn để dựng một website khác có phong cách tương đồng: sang trọng, tối, sắc nét, có điểm nhấn vàng kim và cảm giác premium.

## 1. Tinh thần thiết kế

Phong cách tổng thể là **black & gold luxury theme**: nền đen sâu, typography serif cổ điển, chi tiết vàng kim, component gọn và tương phản cao.

Website nên tạo cảm giác:

- Cao cấp, lịch lãm, có chiều sâu.
- Nam tính, tinh chỉnh, không quá màu mè.
- Rõ ràng trong hành động: đặt lịch, xem dịch vụ, xem chi nhánh, liên hệ.
- Sang nhưng vẫn thực dụng, ưu tiên đọc nhanh và thao tác nhanh.

Không nên biến website thành giao diện quá sáng, quá nhiều màu, nhiều bo tròn mềm hoặc phong cách playful. Vibe chính là **premium service brand**.

## 2. Bảng màu

### Màu chủ đạo

| Token | Giá trị | Cách dùng |
| --- | --- | --- |
| `--dark-950` | `#050505` | Nền chính, hero, vùng tối nhất |
| `--dark-900` | `#0d0d0d` | Section tối, footer, nền phụ |
| `--dark-800` | `#1a1a1a` | Card, input, table header |
| `--dark-700` | `#282828` | Border card, nền hover nhẹ |
| `--dark-600` | `#383838` | Border form, button dark |
| `--dark-300` | `#a0a0a0` | Body copy phụ, mô tả |
| `--dark-100` | `#e8e8e8` | Text chính trên nền đen |
| `--dark-50` | `#f8f8f8` | Heading nổi bật |

### Màu vàng kim

| Token | Giá trị | Cách dùng |
| --- | --- | --- |
| `--gold-400` | `#facc15` | Link hover, text accent, icon accent |
| `--gold-500` | `#d4a017` | CTA chính, focus, shadow |
| `--gold-600` | `#b8860b` | Gradient, border hover, underline |
| `--gold-700` | `#96700a` | Accent tối hơn, trạng thái ít nổi |

### Quy tắc dùng màu

- Nền chính luôn là `--dark-950` hoặc `--dark-900`.
- Card/input/table dùng `--dark-800` với border `--dark-700`.
- Vàng kim chỉ dùng làm điểm nhấn: CTA, link, line, price, badge, border hover.
- Tránh dùng vàng phủ quá nhiều diện tích. Vàng càng ít thì càng sang.
- Trạng thái semantic giữ rõ ràng: success `#22c55e`, warning `#f59e0b`, error `#ef4444`, info `#3b82f6`.

## 3. Typography

### Font

- Display font: `Playfair Display`, serif.
- Body font: `Inter`, sans-serif.

### Vai trò

- Heading, brand name, price lớn: dùng `Playfair Display`.
- Body text, nav, form, button, table: dùng `Inter`.

### Kích thước gợi ý

| Thành phần | Kích thước |
| --- | --- |
| `h1` | `clamp(2rem, 5vw, 3.5rem)` |
| Hero `h1` | `clamp(2.2rem, 8vw, 4.5rem)` |
| `h2` | `clamp(1.5rem, 3.5vw, 2.5rem)` |
| `h3` | `clamp(1.25rem, 2.5vw, 1.75rem)` |
| `h4` | `clamp(1.1rem, 2vw, 1.35rem)` |
| Body | `0.95rem` đến `1.05rem` |

### Quy tắc chữ

- Heading line-height khoảng `1.1` đến `1.2`.
- Body line-height `1.6`.
- Heading dùng màu `--dark-50`.
- Body chính dùng `--dark-100`, mô tả dùng `--dark-300` hoặc `--dark-400`.
- Các label nhỏ có thể uppercase với letter-spacing `0.05em` đến `0.1em`.

## 4. Spacing, radius và shadow

### Spacing scale

| Token | Giá trị |
| --- | --- |
| `--space-xs` | `5px` |
| `--space-sm` | `10px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |
| `--space-4xl` | `96px` |

### Radius

- Button, input: `8px`.
- Card: `12px`.
- Badge/tab pill: `9999px`.
- Không dùng bo góc quá lớn cho card chính, để giao diện giữ nét sắc và nam tính.

### Shadow

- Shadow mặc định tối, sâu: `0 4px 12px rgba(0, 0, 0, 0.4)`.
- Shadow lớn: `0 8px 32px rgba(0, 0, 0, 0.5)`.
- Shadow vàng chỉ dùng khi cần nhấn CTA hoặc hover: `0 4px 20px rgba(212, 160, 23, 0.3)`.

## 5. Layout

### Container

- Max width: `1200px`.
- Center bằng `margin: 0 auto`.
- Padding ngang: `16px` trên mobile và desktop nhỏ.

### Section

- Section padding dọc lớn: `96px 0`.
- Xen kẽ nền `--dark-950` và `--dark-900`.
- Section header nên căn giữa, có mô tả max width `600px`.
- Dùng gold line dưới heading để tạo nhận diện.

### Grid

- Grid gap mặc định: `24px`.
- Desktop: dùng 2, 3 hoặc 4 cột tùy nội dung.
- Tablet: 3 hoặc 4 cột hạ xuống 2 cột.
- Mobile dưới `640px`: tất cả về 1 cột.

## 6. Component patterns

### Hero

Hero là vùng tạo cảm xúc chính:

- Chiều cao tối thiểu `100vh`.
- Nội dung căn giữa cả ngang và dọc.
- Nền đen sâu với radial gradient vàng rất nhẹ.
- Content max width khoảng `800px`.
- H1 thật lớn, dùng `Playfair Display`.
- Mô tả dưới H1 màu `--dark-300`, max width khoảng `600px`.
- CTA đặt thành hàng, có thể wrap trên mobile.

Nền hero nên có chiều sâu nhưng không được lấn át nội dung. Có thể dùng ảnh thật hoặc video nhẹ nếu website mới cần thể hiện sản phẩm/dịch vụ rõ hơn.

### Button

Button chung:

- Display `inline-flex`, align center.
- Gap icon/text: `10px`.
- Padding mặc định: `12px 28px`.
- Radius: `8px`.
- Font weight: `600`.
- Hover có lift nhẹ `translateY(-2px)`.

Các biến thể:

- Primary: gradient vàng `--gold-500` sang `--gold-600`, text đen `--dark-950`, có shadow vàng.
- Outline: nền trong suốt, border vàng, text vàng, hover chuyển nền vàng và text đen.
- Dark: nền `--dark-700`, border `--dark-600`, text sáng.

CTA chính nên dùng primary. CTA phụ dùng outline hoặc dark.

### Card

Card nên có:

- Background `--dark-800`.
- Border `1px solid --dark-700`.
- Radius `12px`.
- Hover lift `translateY(-4px)`.
- Hover border vàng `--gold-600`.
- Shadow vàng rất nhẹ `rgba(212, 160, 23, 0.15)`.

Ảnh trong card:

- Full width.
- Height khoảng `200px`.
- `object-fit: cover`.

Card phù hợp cho dịch vụ, chi nhánh, bài viết, barber, gói giá.

### Navbar

Navbar:

- Fixed top.
- Khi chưa scroll: trong suốt, thoáng.
- Khi scroll: nền `rgba(5, 5, 5, 0.95)`, blur `20px`, border bottom tối.
- Brand dùng `Playfair Display`, màu vàng, letter-spacing nhẹ.
- Link màu `--dark-200`, hover vàng.
- Link hover có underline vàng chạy từ trái sang phải.
- Mobile dùng menu dropdown nền đen blur.

### Forms

Form field:

- Background `--dark-800`.
- Border `--dark-600`.
- Radius `8px`.
- Text `--dark-100`.
- Focus border vàng `--gold-500`.
- Focus ring vàng mờ `rgba(212, 160, 23, 0.15)`.

Label:

- Font size khoảng `0.9rem`.
- Weight `500`.
- Màu `--dark-200`.

### Badge, tab và price

Badge:

- Pill radius.
- Font nhỏ `0.75rem`.
- Uppercase.
- Letter-spacing `0.05em`.
- Gold badge dùng nền vàng trong suốt `rgba(212, 160, 23, 0.15)`.

Tab:

- Pill shape.
- Inactive: nền `--dark-800`, text `--dark-300`, border `--dark-700`.
- Active: gradient vàng, text đen.

Price:

- Dùng `Playfair Display`.
- Weight `700`.
- Màu `--gold-400`.
- Giá cũ dùng `--dark-400`, gạch ngang.

### Table

Table dành cho bảng dịch vụ hoặc bảng giá:

- Header nền `--dark-800`.
- Header text vàng, uppercase, font size nhỏ.
- Border dưới header màu vàng tối.
- Row hover có nền vàng cực nhẹ `rgba(212, 160, 23, 0.05)`.

### Footer

Footer:

- Background `--dark-900`.
- Border top `--dark-800`.
- Padding trên lớn, padding dưới vừa.
- Grid desktop: cột brand rộng hơn, các cột link nhỏ hơn.
- Mobile: chuyển về 1 cột.
- Link footer màu `--dark-400`, hover vàng.

## 7. Motion và interaction

### Transition

- Fast: `150ms ease`.
- Base: `250ms ease`.
- Slow: `400ms ease`.

### Animation

Animation chính:

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

Dùng `fadeInUp 0.6s ease forwards` cho hero content, card hoặc section khi xuất hiện. Có thể stagger bằng delay `0.1s`, `0.2s`, `0.3s`, `0.4s`.

Quy tắc motion:

- Hover nên nhẹ, không phô.
- Button lift `-2px`.
- Card lift `-4px`.
- Dùng shimmer skeleton khi loading.
- Không dùng animation quá nhiều trên cùng một màn hình.

## 8. Hình ảnh và visual direction

Website mới nên dùng hình ảnh:

- Ánh sáng contrast cao, nền tối, chi tiết sắc.
- Chủ thể rõ: sản phẩm, dịch vụ, không gian, người thật, dụng cụ hoặc kết quả.
- Tone ảnh hợp với đen-vàng: ánh vàng, da tự nhiên, vật liệu kim loại, gỗ tối, da, đá, kính.
- Tránh ảnh stock quá sáng, pastel, màu neon hoặc nền trắng phẳng.

Nếu dùng overlay trên ảnh, ưu tiên gradient đen để text dễ đọc. Vàng chỉ nên là điểm nhấn nhỏ.

## 9. Content tone

Tone chữ nên:

- Ngắn, tự tin, có cảm giác premium.
- Tránh giải thích dài trong hero.
- CTA rõ hành động: "Đặt lịch", "Xem dịch vụ", "Liên hệ", "Chọn chi nhánh".
- Dịch vụ nên có tên rõ, mô tả ngắn, giá nổi bật.

Ví dụ cấu trúc section:

- Heading mạnh bằng `Playfair Display`.
- Gold line ngay dưới heading.
- Một đoạn mô tả ngắn dưới heading.
- Nội dung chính bằng card, table hoặc grid.

## 10. Responsive rules

- Dưới `1024px`: grid 3 hoặc 4 cột chuyển còn 2 cột.
- Dưới `768px`: navbar link chuyển thành mobile menu.
- Dưới `640px`: mọi grid chính chuyển về 1 cột.
- CTA trong hero được phép wrap.
- Section vẫn giữ khoảng thở, nhưng có thể giảm padding từ `96px` xuống khoảng `64px` trên mobile nếu cần.

## 11. CSS token starter

Dùng đoạn này làm nền cho website khác:

```css
:root {
  --gold-400: #facc15;
  --gold-500: #d4a017;
  --gold-600: #b8860b;
  --gold-700: #96700a;

  --dark-50: #f8f8f8;
  --dark-100: #e8e8e8;
  --dark-200: #d0d0d0;
  --dark-300: #a0a0a0;
  --dark-400: #707070;
  --dark-600: #383838;
  --dark-700: #282828;
  --dark-800: #1a1a1a;
  --dark-900: #0d0d0d;
  --dark-950: #050505;

  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  --space-xs: 5px;
  --space-sm: 10px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-gold: 0 4px 20px rgba(212, 160, 23, 0.3);

  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

## 12. Checklist khi dựng website mới

- Nền chính đã dùng đen sâu chưa?
- Vàng kim có đang là accent, không bị lạm dụng chưa?
- Heading đã dùng serif display chưa?
- CTA chính đã nổi rõ bằng gradient vàng chưa?
- Card có nền tối, border mảnh, hover lift chưa?
- Section có khoảng thở lớn và nhịp tối/sẫm xen kẽ chưa?
- Form có focus ring vàng chưa?
- Mobile navbar, grid và CTA đã responsive chưa?
- Ảnh có hợp tone premium, tối, sắc và thật chưa?
- Animation có tiết chế và thống nhất chưa?

