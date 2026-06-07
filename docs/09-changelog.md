# 09. Changelog - Project Changelog

Tài liệu ghi lại lịch sử cập nhật cấu trúc và đặc tả hệ thống website Sơn Barber.

---

## [1.1.0] - 2026-06-05

### Added
* Bổ sung chi tiết các bảng dữ liệu còn thiếu phục vụ tính năng Admin (`blog_post`, `review`, `gallery_item`, `contact`) vào tài liệu `05-data-model.md`.
* Bổ sung đầy đủ đặc tả API cho hoạt động Admin CRUD (POST, PUT, DELETE cho dịch vụ, sản phẩm, khóa học, blog, đánh giá, thư viện và liên hệ) vào tài liệu `06-api-contract.md`.

### Changed
* Chuẩn hóa phương thức đăng nhập Admin sang sử dụng **Email & Mật khẩu** trong tài liệu `04-page-specs/admin.md` nhằm đồng nhất với cơ chế xác thực mặc định của Supabase Auth.
* Chuẩn hóa quan hệ khóa ngoại (`group_id`) thay vì so khớp chuỗi văn bản cho bảng `service` và `product`.

---

## [1.0.0] - 2026-06-05

### Added
* Khởi tạo bộ tài liệu quy chuẩn `docs/` theo dạng module để chia nhỏ và thay thế cho cấu trúc tài liệu cũ tại thư mục `website_structure`:
  * `00-overview.md`: Tổng quan dự án, đối tượng người dùng và kiến trúc hệ thống.
  * `01-scope.md`: Phạm vi tính năng chi tiết của các phân hệ User và Admin.
  * `02-information-architecture.md`: Sitemap toàn trang và sơ đồ hoạt động của Navbar, Footer.
  * `03-user-flows.md`: Bản đồ luồng đi của người dùng đối với các chức năng chính như Đặt lịch, Đăng ký học và Quản trị.
  * `04-page-specs/`: Thư mục đặc tả chi tiết giao diện và dữ liệu cho các trang Home, Barber Shop, Academy, Contact, Gallery và Admin.
  * `05-data-model.md`: Thiết kế lược đồ bảng dữ liệu chi tiết trên cơ sở dữ liệu Supabase.
  * `06-api-contract.md`: Đặc tả chi tiết các API GET/POST của hệ thống API Routes Next.js.
  * `07-ui-system.md`: Bộ quy chuẩn phong cách thiết kế Black & Gold Luxury, bảng màu, kiểu chữ, khoảng cách và các component mẫu.
  * `08-non-functional.md`: Tiêu chuẩn Clean Code, yêu cầu Responsive, tối ưu hóa SEO địa lý (GEO) tại Nghệ An và hiệu năng tải trang.

