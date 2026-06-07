# 02. Information Architecture - SonBarber Website

Tài liệu này đặc tả cấu trúc thông tin (Sitemap) và hệ thống điều hướng (Navigation System) của website.

---

## 1. Bản đồ Trang (Sitemap)

```
Khách Hàng (User UI)
├── Trang chủ (Home)
├── Barber Shop (Dịch vụ & Sản phẩm)
├── Academy (Giới thiệu & Tuyển sinh)
│   └── Đăng ký học (Registration)
├── Gallery & Blog (Thư viện ảnh & Bài viết)
├── Liên hệ (Contact)
└── Đăng nhập Admin (Login)

Quản Trị Viên (Admin UI) - Yêu cầu Đăng nhập
├── Dashboard Quản trị (Manager Overview)
├── Quản lý Barber Shop (Quản lý Dịch vụ & Sản phẩm)
├── Quản lý Academy (Quản lý Khóa học & Đơn đăng ký học viên)
├── Quản lý Đánh giá (Review Management)
├── Quản lý Thư viện ảnh (Gallery Management)
├── Quản lý Bài viết (Blog/News Management)
└── Cấu hình tài khoản (Account Reset Password)
```

---

## 2. Hệ thống Điều hướng & Layout Chung (Navigation & Common Layout)

### A. Thanh điều hướng (Navbar)
Navbar được ghim cố định ở phía trên (Fixed Top), có hiệu ứng chuyển đổi khi cuộn trang (khi cuộn sẽ chuyển nền đen mờ và blur `20px` với viền dưới tối).

* **Thành phần trên Navbar:**
  * Logo thương hiệu **Sơn Barber** (bên trái).
  * Danh sách liên kết điều hướng (ở giữa/phải):
    * **Trang chủ**
    * **Barber Shop**
    * **Academy**
    * **Gallery**
    * **Liên hệ**
  * Nút Call To Action (CTA): **Đặt lịch ngay** (Dẫn link trực tiếp sang EasySalon).
* **Responsive Mobile:** Trên màn hình nhỏ dưới `768px`, danh sách liên kết sẽ ẩn vào nút Menu Hamburger, khi click sẽ xổ xuống menu dạng dropdown nền đen mờ (backdrop-blur).

### B. Chân trang (Footer)
Footer xuất hiện đồng bộ ở chân tất cả các trang người dùng.

* **Nội dung Footer:**
  * **Cột 1: Brand & Slogan**
    * Logo Sơn Barber.
    * Slogan: *"Hệ thống cắt tóc nam cao cấp & đào tạo nghề barber số 1 Nghệ An. Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật."*
  * **Cột 2: Về chúng tôi (About Us)**
    * Giới thiệu ngắn về Sơn Barber.
    * Thông tin về Founder Nguyễn Thái Sơn.
  * **Cột 3: Liên kết nhanh**
    * Điều hướng đến các trang con: Barber Shop, Academy, Gallery, Liên hệ.
  * **Cột 4: Thông tin liên hệ**
    * Hotline: `0961202341`
    * Facebook Fanpage (chính): [Thái Sơn Barber](https://www.facebook.com/ThaiSonBarber)
    * Kênh TikTok: [@sonbarbershop](https://www.tiktok.com/@sonbarbershop?_r=1&_d=secCgYIASAHKAESPgo8YTgdg8gIe8SiGijQxfXfo7Fc5AFqQBnR9M2Vds6VMlVNjMP4DaBtKqH%2FezfLl6BCh26huwFf74bIZPIIGgA%3D&_svg=1&checksum=1778f098904d33feb23c9b6847e0e6776c8974c9b9b3e95ce295576e19a67de2&item_author_type=1&reflow_sign_scene=7&rgssign=8.1.Jjkigi_uAWlvsouzcr4e-A&sec_uid=MS4wLjABAAAAgtwh0KlLw_RO7GiznOCbw0n_owNySz0kMn80xeRWzRWBXN8EmkK-Ju4H9yBXFDTR&sec_user_id=MS4wLjABAAAAgtwh0KlLw_RO7GiznOCbw0n_owNySz0kMn80xeRWzRWBXN8EmkK-Ju4H9yBXFDTR&share_app_id=1180&share_author_id=7183654472126858267&share_link_id=5258D9A0-DE5B-4EA8-AED2-761C58AA0142&share_region=VN&share_scene=1&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1778772943&tt_from=copy&u_code=e5ia430h69mila&ug_btm=b8727%2Cb0&user_id=7183654472126858267&utm_campaign=client_share&utm_medium=ios&utm_source=copy)
  * **Hàng cuối cùng:** Thông tin bản quyền (Copyright).
* **Responsive Mobile:** Tự động thu về bố cục 1 cột dọc thẳng đứng trên màn hình mobile.
