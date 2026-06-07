# 04. Page Specs - Admin Dashboard

Trang quản trị (Admin Panel) được thiết kế theo phong cách **White & Blue** (nền sáng thanh lịch, trực quan) nhằm mục đích quản lý toàn bộ nội dung hiển thị và dữ liệu của website Sơn Barber.

---

## 1. Cơ chế Bảo mật & Xác thực (Authentication & Guard)
* **Check Auth (Bộ lọc quyền đăng nhập):**
  * Toàn bộ các trang con trong phân hệ quản trị đều được bảo vệ bởi middleware xác thực.
  * Nếu người dùng chưa đăng nhập (`session` không hợp lệ/đã hết hạn) -> Tự động chuyển hướng về trang đăng nhập Admin (`/login`).
  * Nếu đã đăng nhập thành công -> Hiển thị nội dung trang quản trị và hiển thị nút **Đăng xuất (Logout)** trên góc phải màn hình.

---

## 2. Giao diện Đăng nhập Quản trị (`/login`)
* **Mỹ thuật:** Nền xám nhẹ sáng, form đăng nhập nổi bật màu trắng tinh tế với điểm nhấn xanh dương làm chủ đạo.
* **Thành phần:**
  * Logo Sơn Barber ở vị trí trung tâm phía trên form.
  * Ô nhập liệu **Địa chỉ Email** (`email`).
  * Ô nhập liệu **Mật khẩu** (`password`).
  * Nút bấm **Đăng nhập** (Blue button).

---

## 3. Bố cục Giao diện Quản trị (Responsive Admin Layout)
Bố cục quản trị tự động thay đổi theo kích thước màn hình để đảm bảo trải nghiệm quản lý trên mọi thiết bị:
* **Màn hình lớn (Desktop Screen):** Hiển thị Sidebar cố định bên trái (chứa menu điều hướng nhanh), bảng dữ liệu dạng đầy đủ thông tin (Full Dashboard).
* **Màn hình trung bình (Tablet Screen):** Sidebar thu nhỏ thành dạng icon, bảng dữ liệu rút gọn cột thông tin (Compact Dashboard/Table).
* **Màn hình nhỏ (Phone Screen):** Sidebar ẩn hoàn toàn (sử dụng menu trượt Hamburger vuốt từ mép trái), bảng dữ liệu hiển thị dạng tối giản, xếp chồng thẻ dọc (Minimal Dashboard).

---

## 4. Các phân hệ Quản lý chính (Management Modules)

### A. Quản lý Barber Shop
* **Quản lý Dịch vụ (Service Manager):**
  * Giao diện danh sách dịch vụ kèm chức năng tìm kiếm & bộ lọc nhóm.
  * **Thêm mới / Sửa dịch vụ:** Nhập tên dịch vụ, chọn nhóm (Cắt lẻ, Combo, Hóa chất, Dịch vụ lẻ), nhập giá, tải lên hình ảnh minh họa, nhập mô tả chi tiết, bật/tắt hoạt động (`status`).
  * **Xóa dịch vụ:** Nút xóa có popup xác nhận xác thực.
* **Quản lý Sản phẩm (Product Manager):**
  * Danh sách sản phẩm kèm ảnh thumbnail, giá và xuất xứ.
  * **Thêm mới / Sửa sản phẩm:** Tên, chọn nhóm sản phẩm, giá bán, tải ảnh lên, dung tích/đơn vị, xuất xứ, mô tả chi tiết, bật/tắt hoạt động (`status`).
  * **Xóa sản phẩm:** Có cảnh báo xác nhận.

### B. Quản lý Academy
* **Quản lý Khóa học (Course Manager):**
  * Thêm, Sửa, Xóa thông tin các khóa học (tên, học phí, thời lượng, mô tả, trạng thái hoạt động).
* **Quản lý Đơn đăng ký học viên (Registration Manager):**
  * Danh sách học viên đăng ký qua form trên website.
  * Các chức năng:
    * Xem chi tiết thông tin đơn hàng (Tên học viên, SĐT, Khóa học đăng ký, Ghi chú, Thời gian gửi đơn).
    * Cập nhật trạng thái xử lý (Chưa liên hệ, Đang tư vấn, Đã đăng ký học, Đã hủy).
    * Xóa đơn đăng ký cũ hoặc không hợp lệ.

### C. Quản lý Nội dung bổ sung
* **Đặt lịch (Booking):** Một liên kết ngoài dẫn nhanh sang hệ thống quản trị của EasySalon: https://my.easysalon.vn/auth/login
* **Quản lý Đánh giá (Review Manager):**
  * Danh sách các bình luận/đánh giá từ khách hàng.
  * Hỗ trợ chức năng Phê duyệt (Approve) để hiển thị đánh giá công khai lên trang chủ hoặc Ẩn/Xóa đánh giá không hợp lệ.
* **Quản lý Thư viện ảnh (Gallery Manager):**
  * Đăng tải ảnh mẫu tóc mới lên thư viện, chỉnh sửa tiêu đề/phân loại ảnh hoặc xóa ảnh cũ khỏi hệ thống.
* **Quản lý Tin tức/Blog (Blog Manager):**
  * Công cụ viết bài viết mới tích hợp Rich Text Editor (soạn thảo văn bản, căn chỉnh chữ, chèn hình ảnh).
  * Chỉnh sửa thông tin bài viết cũ và xóa bài viết khỏi trang tin tức.

### D. Cài đặt Tài khoản (Account Settings)
* Trang cấu hình cho phép Admin đổi mật khẩu đăng nhập hiện tại bằng cách nhập: *Mật khẩu cũ, Mật khẩu mới, Nhập lại mật khẩu mới*.
