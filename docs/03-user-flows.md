# 03. User Flows - SonBarber Website

Tài liệu này chi tiết hóa các luồng hành vi của người dùng trên website Sơn Barber.

---

## 1. Luồng Đặt lịch Cắt tóc (Booking Flow)
Khách hàng muốn đặt lịch hẹn làm tóc tại các cơ sở của Sơn Barber.

```mermaid
sequenceDiagram
    actor Customer as Khách hàng
    participant Home as Giao diện Web (Home / Barber Shop)
    participant EasySalon as Hệ thống EasySalon (External)

    Customer->>Home: Click nút "Đặt lịch ngay" hoặc "Booking"
    Note over Home: Hệ thống nhận diện hành động
    Home->>EasySalon: Chuyển hướng (Redirect) qua link: https://booking.easysalon.vn/son-barbershop
    Customer->>EasySalon: Thực hiện chọn cơ sở, chọn thợ cắt, chọn dịch vụ và thời gian đặt lịch
    EasySalon-->>Customer: Gửi thông báo xác nhận lịch đặt thành công
```

---

## 2. Luồng Đăng ký Học nghề (Academy Course Registration Flow)
Học viên tìm hiểu khóa học và gửi đơn đăng ký nhập học trực tuyến.

```mermaid
sequenceDiagram
    actor Student as Học viên
    participant Web as Giao diện Web (Academy Page)
    participant RegForm as Form Đăng ký học (Registration)
    participant DB as Supabase DB (Table registration)
    participant Admin as Admin Panel

    Student->>Web: Truy cập trang Academy và xem thông tin khóa học
    Student->>Web: Click nút "Đăng ký ngay"
    Web->>RegForm: Hiển thị Form Đăng ký học (Họ tên, SĐT, Khóa học, Ghi chú)
    Student->>RegForm: Nhập thông tin & Submit Form
    Note over RegForm: Client-side Validation (Kiểm tra SĐT và Tên hợp lệ)
    RegForm->>DB: Gửi POST request `/api/registration` để lưu vào table `registration`
    DB-->>RegForm: Trả về kết quả Thành công
    RegForm-->>Student: Hiển thị popup "Đăng ký thành công! Sơn Barber sẽ sớm liên hệ tư vấn"
    DB->>Admin: Đơn đăng ký mới xuất hiện trong trang quản lý học viên của Admin
```

---

## 3. Luồng Quản trị của Admin (Admin Authentication & Management Flow)
Quản trị viên đăng nhập và thực hiện thao tác quản lý dữ liệu trên website.

```mermaid
sequenceDiagram
    actor AdminUser as Admin (Founder/Manager)
    participant Login as Trang Login Admin
    participant Layout as Admin Layout (Auth Guard)
    participant Manager as Admin Manager Pages
    participant DB as Supabase DB

    AdminUser->>Login: Nhập Số điện thoại (username) & Mật khẩu
    Login->>DB: Kiểm tra thông tin đăng nhập qua Supabase Auth
    alt Đăng nhập Thất bại
        DB-->>Login: Trả về lỗi Auth
        Login-->>AdminUser: Hiển thị cảnh báo sai tài khoản / mật khẩu
    else Đăng nhập Thành công
        DB-->>Login: Trả về Session Token hợp lệ
        Login->>Layout: Lưu Session và chuyển hướng vào trang quản lý
        Note over Layout: Check Auth: Session hợp lệ
        Layout->>Manager: Hiển thị giao diện Dashboard tương ứng thiết bị
        AdminUser->>Manager: Thực hiện Thêm / Sửa / Xóa (Dịch vụ, Sản phẩm, Khóa học)
        Manager->>DB: Thực hiện các API GET/POST cập nhật cơ sở dữ liệu
        DB-->>Manager: Trả về trạng thái thành công
        Manager-->>AdminUser: Hiển thị Toast thông báo cập nhật dữ liệu thành công
    end
```
