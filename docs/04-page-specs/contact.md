# 04. Page Specs - Contact Page

Trang Liên hệ hiển thị thông tin kết nối xã hội, bản đồ đường đi và số điện thoại liên lạc trực tiếp của hệ thống các chi nhánh Sơn Barber và Học viện.

---

## 1. Cấu trúc Trang (Page Structure)

### A. Tiêu đề Trang (Header)
* **Navbar:** Thanh điều hướng chung.
* **Banner chính:** Hình ảnh bản đồ Nghệ An hoặc hình ảnh chi nhánh Sơn Barber mờ ảo dưới ánh đèn buổi tối, kèm tiêu đề: **LIÊN HỆ VỚI CHÚNG TÔI**.

### B. Nội dung Trang (Main Content)
1. **Thông tin liên hệ chung (General Contact Info):**
   * Hotline hỗ trợ toàn hệ thống: `0961202341`
   * Facebook Fanpage (chính): [Thái Sơn Barber](https://www.facebook.com/ThaiSonBarber)
   * Email hỗ trợ (nếu có): `contact@sonbarber.com`
2. **Thông tin chi tiết các chi nhánh (Branch Details Grid):**
   * Hiển thị dưới dạng Grid các card thông tin, mỗi card biểu diễn một cơ sở:
     * **Cơ sở 1:**
       * Địa chỉ: [89 Yên Lâm, TP Vinh](https://maps.app.goo.gl/wqoutcouXedBes3U6)
       * Điện thoại: `0985645872`
       * Giờ mở cửa: `08:00 - 19:00`
       * Fanpage riêng: [Cơ sở 1 Facebook](https://www.facebook.com/profile.php?id=100091936048068)
     * **Cơ sở 2:**
       * Địa chỉ: [76 Lý Thường Kiệt, TP Vinh](https://maps.app.goo.gl/YTN4auq3xWhJQ9jz5?g_st=ic)
       * Điện thoại: `0961202341`
       * Giờ mở cửa: `08:00 - 19:00`
       * Fanpage riêng: [Cơ sở 2 Facebook](https://www.facebook.com/profile.php?id=100064840806630)
     * **Cơ sở 3:**
       * Địa chỉ: [145 Hà Huy Tập, TP Vinh](https://maps.app.goo.gl/p3cqvvpLThjV7nRh9)
       * Điện thoại: `0971039937`
       * Giờ mở cửa: `08:00 - 19:00`
       * Fanpage riêng: Không có (None)
     * **Chi nhánh KTX Luxshare ICT:**
       * Địa chỉ: [KTX Luxshare ICT](https://maps.app.goo.gl/kA3yVD4Q5Rr8JTB9A)
       * Điện thoại: `0979783193`
       * Giờ mở cửa: `08:00 - 19:00`
       * Fanpage riêng: [Cơ sở Luxshare Facebook](https://www.facebook.com/profile.php?id=61566396022877)
     * **Học viện đào tạo (Academy):**
       * Địa chỉ: [76 Lý Thường Kiệt, TP Vinh](https://maps.app.goo.gl/YTN4auq3xWhJQ9jz5?g_st=ic)
       * Điện thoại: `0961202341`
       * Fanpage riêng: [Academy Facebook](https://www.facebook.com/profile.php?id=100089923515597)
   * Mỗi địa chỉ chi nhánh phải có liên kết (hyperlink) trỏ trực tiếp đến tọa độ Google Maps để người dùng dễ dàng tìm đường đi trên điện thoại.
3. **Form Liên hệ nhanh (Quick Contact Form):**
   * Form thu thập ý kiến đóng góp/phản hồi của khách hàng: *Họ tên, SĐT, Email, Nội dung tin nhắn*.
   * Gửi POST request tới `/api/contact` để ghi dữ liệu.

### C. Chân trang (Footer)
* Khối footer chung đồng bộ.

---

## 2. Thiết kế Giao diện (UI Specifications)
* Sử dụng kết hợp bản đồ Google Maps nhúng (Iframe) cho chi nhánh chính (Cơ sở 2/Academy tại 76 Lý Thường Kiệt) bên cạnh danh sách text.
* Các icon mạng xã hội (Facebook, Tiktok, Zalo) sử dụng màu vàng kim và có hiệu ứng hover phóng to nhẹ.
