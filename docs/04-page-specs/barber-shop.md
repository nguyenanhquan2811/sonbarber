# 04. Page Specs - Barber Shop Page

Trang Barber Shop hiển thị chi tiết bảng giá các gói dịch vụ làm tóc, danh sách sản phẩm chăm sóc tóc chuyên dụng và hỗ trợ đặt lịch hẹn trực tiếp qua EasySalon.

---

## 1. Cấu trúc Trang (Page Structure)

### A. Tiêu đề Trang (Header)
* **Navbar:** Thanh điều hướng đồng bộ.
* **Banner chính:** Hình ảnh không gian salon cao cấp với ánh đèn trầm ấm hoặc dụng cụ barber sắc nét, phủ một lớp gradient tối để làm nổi bật dòng chữ tiêu đề: **DỊCH VỤ & SẢN PHẨM**.

### B. Nội dung Trang (Main Content)
1. **Giới thiệu dịch vụ (Introduction):**
   * Giới thiệu ngắn về triết lý dịch vụ tại Sơn Barber: *"Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật, được trau chuốt tỉ mỉ bởi các Master Barber."*
2. **Bộ lọc danh mục (Tabs Filter):**
   * Cho phép chuyển đổi nhanh giữa các nhóm nội dung: **Dịch vụ làm tóc** và **Sản phẩm chăm sóc**.
3. **Danh sách Dịch vụ (Service List):**
   * Hiển thị dưới dạng bảng giá (Table) hoặc các card lưới (Grid Cards) sang trọng.
   * Phân loại theo nhóm:
     * **Cắt lẻ:** Cắt tóc nam (90k), Cắt trẻ em (60k/100k), Cắt Master (120k), Boss Cắt (200k).
     * **Combo:** Các gói combo làm đẹp đa bước theo từng chi nhánh (Cơ sở 1, Cơ sở 2, Cơ sở 3).
     * **Dịch vụ lẻ:** Gội đầu, massage vai gáy, rửa mặt, hút mụn, lột mụn, lấy ráy tai, cạo mặt, đánh mí mắt.
     * **Hóa chất:** Nhóm dịch vụ nhuộm đen/thời trang, uốn tóc (thường, wavy, con sâu, ruffled, chữ S...), duỗi thẳng, ép side, tẩy tóc, nâng tông và hấp/ủ phục hồi tóc.
   * Mỗi dịch vụ gồm: *Tên dịch vụ, giá bán (nổi bật màu vàng kim), mô tả ngắn, ảnh minh họa*.
4. **Danh sách Sản phẩm (Product List):**
   * Hiển thị dưới dạng lưới (Grid 3 hoặc 4 cột tùy thiết bị).
   * Phân loại theo nhóm:
     * **Sáp / Wax:** HairPlex Clay, Colmav, Reuzel, Cin Plus...
     * **Gôm / Keo xịt:** Reuzel, Butterfly, Cin Plus, Karseell...
     * **Xịt / Dưỡng / Tinh dầu:** Saryyam, Xịt mọc tóc, Surf Tonic, Grooming Tonic...
     * **Thiết bị / Dụng cụ:** Máy cạo râu, máy sấy tóc, lược tròn, bộ lấy tai...
     * **Sản phẩm học viên:** Túi đồ nghề, kéo đen, dao cạo, tông đơ Kemei/VGR/MRD...
     * **Khác:** Sữa rửa mặt nam, dầu gội Antisol, tẩy da chết...
   * Mỗi sản phẩm gồm: *Tên sản phẩm, giá bán, ảnh sản phẩm, dung tích/đơn vị, xuất xứ, nút xem chi tiết*.
5. **Nút Kêu gọi Hành động (Booking CTA):**
   * Nút **Đặt lịch hẹn ngay** (Floating button ở góc màn hình hoặc nút nổi bật ở cuối trang).
   * Khi click, hệ thống tự động chuyển hướng qua liên kết EasySalon: `https://booking.easysalon.vn/son-barbershop`.

### C. Chân trang (Footer)
* Khối footer chung đồng bộ.

---

## 2. Quy chuẩn Thiết kế (UI Specifications)
* **Card dịch vụ/sản phẩm:**
  * Nền card dùng `--dark-800` với đường viền mảnh `--dark-700`.
  * Bo góc card `12px` (tạo nét cứng cáp, nam tính).
  * Hover: Card dịch chuyển nhẹ lên trên (`transform: translateY(-4px)`), đường viền chuyển sang màu vàng `--gold-600`, đồng thời xuất hiện một bóng mờ màu vàng mờ xung quanh card (`rgba(212, 160, 23, 0.15)`).
* **Giá cả (Price tag):**
  * Sử dụng font chữ serif `Playfair Display`, định dạng in đậm, màu vàng `--gold-400` để tăng cảm giác cao cấp.
  * Nếu có giá cũ và giá ưu đãi (ví dụ ở các combo dịch vụ), hiển thị giá cũ nhỏ hơn, màu xám `--dark-400` và có đường gạch ngang ở giữa.
