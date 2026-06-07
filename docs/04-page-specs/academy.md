# 04. Page Specs - Academy Page & Registration

Trang Academy giới thiệu về trung tâm đào tạo nghề Sơn Barber Academy, danh sách khóa học tuyển sinh và biểu mẫu đăng ký học trực tuyến dành cho các học viên tiềm năng.

---

## 1. Cấu trúc Trang (Page Structure)

### A. Tiêu đề Trang (Header)
* **Navbar:** Thanh điều hướng chung.
* **Banner chính:** Hình ảnh lớp học thực tế hoặc quá trình đào tạo học viên trực quan, kèm dòng chữ tiêu đề: **HỌC VIỆN SƠN BARBER**.

### B. Nội dung Trang (Main Content)
1. **Giới thiệu Học viện (Introduction of Academy):**
   * Lịch sử thành lập học viện từ năm 2017.
   * Tính đến năm 2026, học viện đã tổ chức và đào tạo thành công hơn 30 khóa học viên tốt nghiệp vững tay nghề.
   * Sứ mệnh đào tạo: Truyền nghề thực tế, cam kết ra nghề làm việc được ngay, đào tạo trọn gói không giấu nghề (kèm các bài báo viết về hoạt động thiện nguyện, đào tạo của Sơn Barber).
2. **Danh sách Khóa học (Course List):**
   * Hiển thị danh sách khóa học dưới dạng Grid.
   * Các khóa học chính: Khóa Cơ Bản, Khóa Nâng Cao, Khóa học Master/Boss.
   * Mỗi khóa học bao gồm:
     * **Tên khóa học:** (ví dụ: Khóa Đào tạo Barber Chuyên nghiệp Từ Cơ bản).
     * **Thời lượng khóa học:** (ví dụ: 3 tháng, 6 tháng).
     * **Học phí / Giá:** (hiển thị nổi bật bằng màu vàng kim).
     * **Mô tả nội dung học:** (học cắt, cạo, gội, sử dụng hóa chất uốn/nhuộm, kỹ năng giao tiếp và vận hành tiệm).
     * **Hình ảnh thực tế:** hình ảnh showcase khóa học.
     * Nút action: **Đăng ký khóa học này** (Dẫn cuộn xuống Form đăng ký phía dưới).

---

## 2. Biểu mẫu Đăng ký Nhập học (Registration Form Spec)
Form đăng ký nằm ở phần cuối của trang Academy hoặc mở ra một phân mục đăng ký riêng.

### A. Giao diện & Các trường dữ liệu (Form Fields)
* **Tiêu đề Form:** **ĐĂNG KÝ KHÓA HỌC BARBER**
* **Mô tả ngắn:** *"Hãy để lại thông tin, Sơn Barber Academy sẽ liên hệ tư vấn trực tiếp lộ trình học cho bạn trong vòng 24h."*
* **Các ô nhập liệu (Inputs):**
  1. **Họ và tên học viên (`name`):** Dạng Text input, bắt buộc nhập.
  2. **Số điện thoại (`phone`):** Dạng Number/Tel input, bắt buộc nhập, giới hạn 10 chữ số hợp lệ.
  3. **Khóa học mong muốn (`course_name`):** Dạng Dropdown select (chọn Khóa Cơ bản, Khóa Nâng cao, Khóa Master).
  4. **Ghi chú thêm (`note`):** Dạng Textarea, không bắt buộc nhập.
* **Nút bấm:** **Gửi thông tin đăng ký** (Nút Primary Gold lớn).

### B. Logic xử lý Form (Form Logic)
* **Client-side validation:**
  * Kiểm tra họ tên không được để trống.
  * Kiểm tra số điện thoại phải đủ 10 số và bắt đầu bằng số `0`.
* **Database submission:**
  * Khi bấm nút Gửi, form thực hiện gửi request POST tới `/api/registration` để ghi dữ liệu vào bảng `registration` trên Supabase.
  * Trạng thái gửi: Hiển thị loading spinner mờ trong thời gian chờ API phản hồi.
  * Khi thành công: Reset form và hiển thị thông báo cảm ơn nổi bật dạng Toast màu xanh lá (`--success`).
  * Khi lỗi: Hiển thị Toast lỗi màu đỏ (`--error`) và giữ nguyên thông tin để người dùng gửi lại.
