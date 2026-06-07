# 06. API Contract - SonBarber Website

Tài liệu này đặc tả thiết kế giao diện lập trình ứng dụng (API Endpoints) của hệ thống Next.js API Routes tương tác với cơ sở dữ liệu Supabase.

---

## 1. Các API Lấy Dữ liệu (GET Routes)

### A. Lấy Danh sách Chi nhánh (`GET /api/branches`)
* **Mô tả:** Trả về toàn bộ danh sách các cơ sở salon hoạt động.
* **Response (JSON - 200 OK):**
```json
[
  {
    "id": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    "name": "Cơ sở 1",
    "address": "89 Yên Lâm, TP Vinh",
    "phone": "0985645872",
    "fanpage": "https://www.facebook.com/profile.php?id=100091936048068",
    "operating_hours": "08:00 - 19:00",
    "status": 1
  }
]
```

### B. Lấy Danh sách Dịch vụ (`GET /api/services`)
* **Mô tả:** Trả về danh sách dịch vụ nhóm theo loại dịch vụ.
* **Query Parameters:** `group` (optional - lọc theo tên nhóm dịch vụ).
* **Response (200 OK):**
```json
[
  {
    "id": "s1d2f3g4-h5j6-7k8l-9m0n-1o2p3q4r5s6t",
    "name": "Cắt Tóc Nam",
    "service_group_name": "cắt lẻ",
    "price": 90000,
    "image": "https://supabase-url.com/storage/v1/object/public/services/cat-toc-nam.jpg",
    "description": "Combo cắt tỉa tạo dáng tóc tiêu chuẩn nam tính.",
    "status": 1
  }
]
```

### C. Lấy Danh sách Sản phẩm (`GET /api/products`)
* **Mô tả:** Trả về danh sách sản phẩm chăm sóc tóc.
* **Query Parameters:** `group` (optional - lọc theo nhóm như sáp, gôm...).
* **Response (200 OK):**
```json
[
  {
    "id": "p1o2i3u4-y5t6-7r8e-9w0q-1a2s3d4f5g6h",
    "name": "Sáp HairPlex Clay",
    "product_group_name": "Sáp / Wax",
    "price": 250000,
    "image": "https://supabase-url.com/storage/v1/object/public/products/hairplex-clay.jpg",
    "description": "Sản phẩm sáp tạo kiểu giữ nếp cao, không bóng.",
    "status": 1
  }
]
```

### D. Lấy Danh sách Khóa học (`GET /api/courses`)
* **Mô tả:** Lấy danh sách các khóa học đang mở tuyển sinh.
* **Response (200 OK):**
```json
[
  {
    "id": "c1v2b3n4-m5q6-7w8e-9r0t-1y2u3i4o5p6a",
    "name": "Khóa Đào Tạo Barber Chuyên Nghiệp",
    "price": 15000000,
    "duration": "3 tháng",
    "description_details": "Học viên được học từ lý thuyết cạo, cắt kéo, cắt tông đơ...",
    "status": 1
  }
]
```

### E. Lấy Hình ảnh Thư viện (`GET /api/gallery`)
* **Mô tả:** Trả về danh sách ảnh mẫu phục vụ hiển thị thư viện.
* **Response (200 OK):**
```json
[
  {
    "id": "g1h2j3k4-l5z6-7x8c-9v0b-1n2m3q4w5e6r",
    "title": "Mẫu tóc Side Part uốn phồng",
    "category": "Kiểu tóc uốn",
    "image_url": "https://supabase-url.com/storage/v1/object/public/gallery/sidepart-uon.jpg"
  }
]
```

### F. Lấy Danh sách Bài viết (`GET /api/blog`)
* **Mô tả:** Trả về danh sách bài viết blog.
* **Response (200 OK):**
```json
[
  {
    "id": "b1n2m3q4-w5e6-7r8t-9y0u-1i2o3p4a5s6d",
    "title": "Top 5 kiểu tóc uốn nam phong cách Hàn Quốc hot nhất 2026",
    "slug": "top-5-kieu-toc-uon-nam-han-quoc-2026",
    "cover_image": "https://supabase-url.com/storage/v1/object/public/blog/cover-uon-nam.jpg",
    "status": "published",
    "created_at": "2026-06-05T04:30:00Z"
  }
]
```

### G. Lấy Chi tiết Bài viết (`GET /api/blog/[slug]`)
* **Mô tả:** Lấy chi tiết nội dung của một bài viết theo slug để tối ưu SEO.
* **Response (200 OK):**
```json
{
  "id": "b1n2m3q4-w5e6-7r8t-9y0u-1i2o3p4a5s6d",
  "title": "Top 5 kiểu tóc uốn nam phong cách Hàn Quốc hot nhất 2026",
  "slug": "top-5-kieu-toc-uon-nam-han-quoc-2026",
  "content": "<p>Nội dung chi tiết bài viết dưới dạng HTML/Rich Text...</p>",
  "cover_image": "https://supabase-url.com/storage/v1/object/public/blog/cover-uon-nam.jpg",
  "status": "published",
  "created_at": "2026-06-05T04:30:00Z"
}
```

### H. Lấy Danh sách Đánh giá (`GET /api/reviews`)
* **Mô tả:** Trả về danh sách ý kiến đánh giá của khách hàng (chỉ lấy những đánh giá đã được duyệt `is_approved = true`).
* **Response (200 OK):**
```json
[
  {
    "id": "r1e2w3q4-t5y6-7u8i-9o0p-1a2s3d4f5g6h",
    "customer_name": "Nguyễn Hoàng Nam",
    "rating": 5,
    "comment": "Cắt tóc rất đẹp và tư vấn cực kỳ nhiệt tình, giá cả hợp lý!",
    "avatar": "https://supabase-url.com/storage/v1/object/public/avatars/user-avatar.jpg",
    "created_at": "2026-06-01T10:15:00Z"
  }
]
```

---

## 2. Các API Gửi Dữ liệu từ Người dùng (POST Routes)

### A. Đăng ký Học viên (`POST /api/registration`)
* **Mô tả:** Tiếp nhận đơn đăng ký khóa học từ học viên tiềm năng.
* **Request Body (JSON):**
```json
{
  "name": "Nguyễn Văn A",
  "phone": "0987654321",
  "course_name": "Khóa Đào Tạo Barber Chuyên Nghiệp",
  "note": "Tôi muốn đăng ký học lớp ca tối"
}
```
* **Response Success (201 Created):**
```json
{
  "success": true,
  "message": "Đăng ký khóa học thành công!",
  "data": {
    "id": "reg-uuid-12345",
    "name": "Nguyễn Văn A",
    "phone": "0987654321",
    "course_name": "Khóa Đào Tạo Barber Chuyên Nghiệp",
    "note": "Tôi muốn đăng ký học lớp ca tối",
    "status": "pending",
    "created_at": "2026-06-05T04:30:00Z"
  }
}
```
* **Response Error (400 Bad Request):**
```json
{
  "success": false,
  "message": "Số điện thoại không hợp lệ."
}
```

### B. Lưu log Đặt lịch (`POST /api/booking` - optional)
* **Mô tả:** Ghi nhận thống kê lượt bấm Đặt lịch sang EasySalon từ website.
* **Request Body (JSON):**
```json
{
  "branch_id": "branch-uuid-12345",
  "source_page": "home"
}
```
* **Response (200 OK):**
```json
{
  "success": true
}
```

### C. Form Liên hệ (`POST /api/contact`)
* **Mô tả:** Nhận thông tin gửi lời nhắn/phản hồi từ người dùng.
* **Request Body (JSON):**
```json
{
  "name": "Trần Thị B",
  "phone": "0912345678",
  "message": "Cửa hàng có dịch vụ phục hồi chuyên sâu không?"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Tin nhắn của bạn đã được gửi thành công!"
}
```

---

## 3. Các API Quản trị dành cho Admin (Admin Management API Routes)
> [!IMPORTANT]
> Toàn bộ các API thuộc nhóm này phải đi qua Middleware kiểm tra đăng nhập (JWT Token / Supabase Session). Nếu không có quyền sẽ trả về mã lỗi `401 Unauthorized`.

### A. Quản lý Dịch vụ (`POST`, `PUT`, `DELETE` `/api/admin/services`)
* **POST /api/admin/services** (Thêm dịch vụ):
  * **Payload:** `{ name, group_id, price, image, description, status }`
  * **Response:** `201 Created`
* **PUT /api/admin/services** (Sửa dịch vụ):
  * **Payload:** `{ id, name, group_id, price, image, description, status }`
  * **Response:** `200 OK`
* **DELETE /api/admin/services** (Xóa dịch vụ):
  * **Payload:** `{ id }`
  * **Response:** `200 OK`

### B. Quản lý Sản phẩm (`POST`, `PUT`, `DELETE` `/api/admin/products`)
* **POST /api/admin/products** (Thêm sản phẩm):
  * **Payload:** `{ name, group_id, price, image, description, status }`
* **PUT /api/admin/products** (Sửa sản phẩm):
  * **Payload:** `{ id, name, group_id, price, image, description, status }`
* **DELETE /api/admin/products** (Xóa sản phẩm):
  * **Payload:** `{ id }`

### C. Quản lý Khóa học (`POST`, `PUT`, `DELETE` `/api/admin/courses`)
* **POST /api/admin/courses** (Thêm khóa học):
  * **Payload:** `{ name, price, duration, description_details, status }`
* **PUT /api/admin/courses** (Sửa khóa học):
  * **Payload:** `{ id, name, price, duration, description_details, status }`
* **DELETE /api/admin/courses** (Xóa khóa học):
  * **Payload:** `{ id }`

### D. Quản lý Học viên đăng ký (`GET`, `PUT`, `DELETE` `/api/admin/registrations`)
* **GET /api/admin/registrations** (Lấy danh sách tất cả các đơn đăng ký học):
  * **Response:** `200 OK` danh sách đơn đăng ký.
* **PUT /api/admin/registrations** (Cập nhật trạng thái đơn):
  * **Payload:** `{ id, status }` (status: `'pending'`, `'called'`, `'done'`, `'cancelled'`).
* **DELETE /api/admin/registrations** (Xóa đơn đăng ký):
  * **Payload:** `{ id }`

### E. Quản lý Đánh giá (`GET`, `PUT`, `DELETE` `/api/admin/reviews`)
* **GET /api/admin/reviews** (Lấy toàn bộ danh sách đánh giá bao gồm cả chưa duyệt):
  * **Response:** `200 OK`
* **PUT /api/admin/reviews** (Phê duyệt hoặc Ẩn đánh giá):
  * **Payload:** `{ id, is_approved }`
* **DELETE /api/admin/reviews** (Xóa đánh giá):
  * **Payload:** `{ id }`

### F. Quản lý Thư viện ảnh (`POST`, `DELETE` `/api/admin/gallery`)
* **POST /api/admin/gallery** (Thêm ảnh mới):
  * **Payload:** `{ title, category, image_url }`
* **DELETE /api/admin/gallery** (Xóa ảnh):
  * **Payload:** `{ id }`

### G. Quản lý Tin tức / Blog (`POST`, `PUT`, `DELETE` `/api/admin/blog`)
* **POST /api/admin/blog** (Thêm bài viết mới):
  * **Payload:** `{ title, slug, content, cover_image, status }`
* **PUT /api/admin/blog** (Cập nhật bài viết):
  * **Payload:** `{ id, title, slug, content, cover_image, status }`
* **DELETE /api/admin/blog** (Xóa bài viết):
  * **Payload:** `{ id }`

### H. Quản lý Ý kiến liên hệ (`GET`, `PUT`, `DELETE` `/api/admin/contact`)
* **GET /api/admin/contact** (Lấy danh sách tin nhắn gửi từ form liên hệ):
  * **Response:** `200 OK`
* **PUT /api/admin/contact** (Cập nhật trạng thái đã đọc):
  * **Payload:** `{ id, status }` (status: `'unread'`, `'read'`)
* **DELETE /api/admin/contact** (Xóa tin nhắn liên hệ):
  * **Payload:** `{ id }`
