# 04. Page Specs - Home Page

Trang chủ là trang chính giới thiệu tổng quan về thương hiệu Sơn Barber, dẫn dắt khách hàng tới các dịch vụ, sản phẩm, tuyển sinh và điều hướng đặt lịch cắt tóc.

---

## 1. Cấu trúc Trang (Page Structure)

### A. Tiêu đề Trang (Header & Hero Section)
* **Thanh điều hướng (Navbar):** Cố định ở đầu trang (Fixed top), logo thương hiệu Sơn Barber, liên kết điều hướng và nút CTA "Đặt lịch ngay".
* **Banner Hero:**
  * Hiệu ứng nền tối sâu kết hợp với một lớp phủ gradient vàng kim rất nhẹ tạo chiều sâu không gian.
  * Logo Sơn Barber hiển thị lớn ở trung tâm.
  * Slogan thương hiệu: *"Hệ thống cắt tóc nam cao cấp & đào tạo nghề barber số 1 Nghệ An. Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật."*
  * Nút CTA kép:
    * Nút chính: **Đặt lịch cắt tóc** (Primary Gold button - liên kết thẳng sang EasySalon).
    * Nút phụ: **Tìm hiểu khóa học** (Outline Gold button - cuộn xuống hoặc liên kết sang trang Academy).

### B. Nội dung Trang (Main Content)
1. **Giới thiệu thương hiệu (Introduction):**
   * Giới thiệu về quá trình phát triển của Sơn Barber từ khi thành lập năm 2017.
   * Giới thiệu về chân dung của Founder Nguyễn Thái Sơn: Hành trình từ hai bàn tay trắng trở thành một thợ cắt tóc chuyên nghiệp từ năm 2013 và câu chuyện dẫn dắt thương hiệu.
   * Chèn ảnh Founder (sử dụng ảnh từ folder `graphics/founder_sonbarber.jpeg`).
2. **Tổng quan Barber Shop (Barber Shop Overview):**
   * Tóm tắt các dịch vụ nổi bật (cắt tóc tiêu chuẩn, gội đầu, uốn/nhuộm).
   * Nút liên kết xem bảng dịch vụ chi tiết (dẫn sang trang Barber Shop).
   * Nút liên kết xem danh sách sản phẩm bán lẻ (dẫn sang trang Barber Shop).
   * Nút CTA **Đặt lịch ngay** (Redirect qua link đặt lịch EasySalon).
3. **Tổng quan tuyển sinh Academy (Academy Overview):**
   * Giới thiệu về Sơn Barber Academy (đã đào tạo hơn 30 khóa học viên tính đến năm 2026).
   * Nút liên kết xem chi tiết danh sách khóa học (dẫn sang trang Academy).
   * Nút **Đăng ký học ngay** (Chuyển hướng qua trang Academy -> mục Registration form).
4. **Hệ thống chi nhánh (Branch List):**
   * Bản đồ hoặc danh sách các chi nhánh của Sơn Barber tại TP Vinh & vùng lân cận:
     * **Cơ sở 1:** 89 Yên Lâm, TP Vinh (Hotline: `0985645872`).
     * **Cơ sở 2:** 76 Lý Thường Kiệt, TP Vinh (Hotline: `0961202341`).
     * **Cơ sở 3:** 145 Hà Huy Tập, TP Vinh (Hotline: `0971039937`).
     * **Chi nhánh KTX Luxshare ICT:** KTX Luxshare ICT (Hotline: `0979783193`).
   * Các chi nhánh hiển thị dưới dạng card thông tin bao gồm: Địa chỉ (kèm link Google Maps), SĐT liên hệ, giờ mở cửa, fanpage riêng (nếu có).
5. **Thư viện ảnh mẫu (Gallery Preview):**
   * Grid hiển thị 6 - 8 kiểu tóc hoặc tác phẩm tóc ấn tượng nhất của tiệm.
   * Nút **Xem tất cả tác phẩm** (Liên kết sang trang Gallery).

### C. Chân trang (Footer)
* Bố cục đầy đủ các thông tin của khối footer chung.

---

## 2. Yêu cầu Giao diện & Hiệu ứng (UI & Effects)
* Sử dụng màu nền mặc định tối nhất `--dark-950`.
* Tiêu đề các Section sử dụng font chữ `Playfair Display`, màu chữ `--dark-50` kèm một đường kẻ vàng kim (`--gold-600`) ở chân chữ để tạo điểm nhấn nhận diện thương hiệu.
* Hiệu ứng chuyển động: Áp dụng hiệu ứng `fadeInUp` có độ trễ (delay stagger) khi các phần nội dung cuộn vào vùng hiển thị của người dùng (Viewport).
* Các card dịch vụ, chi nhánh sử dụng hiệu ứng hover nổi lên nhẹ (translateY -4px) và đổi màu viền sang vàng kim nhạt.
