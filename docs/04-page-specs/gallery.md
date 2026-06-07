# 04. Page Specs - Gallery & Blog Page

Trang Gallery & Blog là nơi trưng bày các tác phẩm mẫu tóc nghệ thuật thực hiện bởi Sơn Barber, hình ảnh thực tế của salon, đồng thời là không gian đăng tải các bài viết chia sẻ xu hướng tóc, cẩm nang chăm sóc tóc nam.

---

## 1. Cấu trúc Trang (Page Structure)

### A. Tiêu đề Trang (Header)
* **Navbar:** Thanh điều hướng chung.
* **Banner chính:** Một slider hoặc hình ảnh các mẫu tóc chất lượng cao mờ nghệ thuật, kèm tiêu đề: **TÁC PHẨM & CẨM NANG**.

### B. Nội dung Trang (Main Content)
1. **Phân mục Thư viện Ảnh (Gallery Section):**
   * Cho phép chọn bộ lọc (Tabs): **Tất cả**, **Kiểu tóc uốn**, **Kiểu tóc nhuộm thời trang**, **Không gian cơ sở**, **Hoạt động sự kiện**.
   * Hiển thị lưới hình ảnh (Grid 3 hoặc 4 cột tùy màn hình) dạng Masonry hoặc tỷ lệ đều đặn.
   * Mỗi ảnh khi click vào sẽ kích hoạt hiệu ứng **Lightbox** mở rộng ảnh full-screen trên nền đen để khách hàng xem chi tiết mẫu tóc.
2. **Phân mục Bài viết / Cẩm nang tóc (Blog Section):**
   * Hiển thị danh sách các bài viết (Blog posts) dưới dạng danh sách card tin tức.
   * Mỗi card bài viết gồm:
     * *Ảnh thumbnail* của bài viết.
     * *Tiêu đề bài viết* (ví dụ: "Top 5 kiểu tóc uốn nam phong cách Hàn Quốc hot nhất 2026").
     * *Tóm tắt ngắn* bài viết.
     * *Ngày đăng* và danh mục phân loại.
   * Nhấp vào card bài viết sẽ dẫn sang trang chi tiết bài viết (`/blog/[slug]`).
3. **Trang lỗi 404 (404 Page Spec):**
   * Dành cho trường hợp người dùng truy cập các đường dẫn bài viết hoặc hình ảnh không tồn tại.
   * Giao diện: Nền đen `--dark-950`, dòng chữ lớn "404 - Không Tìm Thấy Trang" dùng font `Playfair Display` màu vàng kim, kèm nút CTA **Quay lại Trang chủ** (Primary Gold button).

### C. Chân trang (Footer)
* Khối footer chung đồng bộ.

---

## 2. Quy chuẩn Thiết kế (UI Specifications)
* Ảnh gallery phải có bộ lọc tối ưu và lazy loading để tránh ảnh hưởng đến hiệu năng tải trang (LCP).
* Mỗi card bài viết khi hover sẽ có hiệu ứng zoom ảnh nhẹ (`scale(1.05)`) bên trong khung card mà không làm tràn viền card.
