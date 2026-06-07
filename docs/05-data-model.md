# 05. Data Model - SonBarber Website

Tài liệu này đặc tả thiết kế cơ sở dữ liệu (Database Schema) trên hệ thống Supabase phục vụ website Sơn Barber.

---

## Sơ đồ Thực thể Liên kết (Entity Relationship Concept)
```
  +------------------+             +----------------------+
  |  service_group   |             |    products_group    |
  +------------------+             +----------------------+
  | - id (PK)        |             | - id (PK)            |
  | - name           |             | - name               |
  +--------+---------+             +----------+-----------+
           |                                  |
           | 1                                | 1
           |                                  |
           | N                                | N
  +--------v---------+             +----------v-----------+
  |     service      |             |       product        |
  +------------------+             +----------------------+
  | - id (PK)        |             | - id (PK)            |
  | - name           |             | - name               |
  | - group_id (FK)  |             | - group_id (FK)      |
  | - price          |             | - price              |
  | - image          |             | - image              |
  | - description    |             | - description        |
  | - status         |             | - status             |
  +------------------+             +----------------------+

  +------------------+             +----------------------+
  |      course      |             |     registration     |
  +------------------+             +----------------------+
  | - id (PK)        |             | - id (PK)            |
  | - name           |             | - name               |
  | - price          |             | - phone              |
  | - duration       |             | - course_name        |
  | - desc_details   |             | - note               |
  | - status         |             | - created_at         |
  +------------------+             +----------------------+

  +------------------+             +----------------------+
  |    blog_post     |             |        review        |
  +------------------+             +----------------------+
  | - id (PK)        |             | - id (PK)            |
  | - title          |             | - customer_name      |
  | - slug           |             | - rating             |
  | - content        |             | - comment            |
  | - cover_image    |             | - avatar             |
  | - status         |             | - is_approved        |
  | - created_at     |             | - created_at         |
  +------------------+             +----------------------+

  +------------------+             +----------------------+
  |   gallery_item   |             |       contact        |
  +------------------+             +----------------------+
  | - id (PK)        |             | - id (PK)            |
  | - title          |             | - name               |
  | - category       |             | - phone              |
  | - image_url      |             | - message            |
  | - created_at     |             | - status             |
  +------------------+             | - created_at         |
                                   +----------------------+
```

---

## Đặc tả các Bảng Dữ liệu (Table Specifications)

### 1. Bảng `shop` (Thông tin các chi nhánh)
* Lưu trữ thông tin địa chỉ, liên hệ của các cơ sở salon phục vụ hiển thị lên website.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất chi nhánh |
| `name` | `varchar` | Not Null | Tên chi nhánh (Cơ sở 1, 2, 3...) |
| `address` | `text` | Not Null | Địa chỉ chi tiết |
| `phone` | `varchar` | Not Null | Số điện thoại liên hệ chi nhánh |
| `fanpage` | `varchar` | Nullable | Link Fanpage Facebook của chi nhánh |
| `operating_hours` | `varchar` | Not Null | Giờ hoạt động (ví dụ: `08:00 - 19:00`) |
| `status` | `smallint` | Default `1` | Trạng thái (`1`: hoạt động, `0`: tạm đóng cửa) |
| `created_at` | `timestamp` | Default `now()` | Thời gian tạo bản ghi |

---

### 2. Bảng `service_group` (Nhóm Dịch vụ)
* Phân loại dịch vụ làm tóc (ví dụ: Cắt lẻ, Combo, Hóa chất, Dịch vụ lẻ...).

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất nhóm |
| `name` | `varchar` | Unique, Not Null | Tên nhóm dịch vụ |

---

### 3. Bảng `products_group` (Nhóm Sản phẩm)
* Phân loại các sản phẩm chăm sóc (Sáp/Wax, Gôm xịt, Dưỡng tóc, Thiết bị...).

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất nhóm |
| `name` | `varchar` | Unique, Not Null | Tên nhóm sản phẩm |

---

### 4. Bảng `service` (Danh sách Dịch vụ)
* Lưu chi tiết dịch vụ làm tóc kèm giá và mô tả.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất dịch vụ |
| `name` | `varchar` | Not Null | Tên gói dịch vụ |
| `group_id` | `uuid` | FK to `service_group.id` | Liên kết đến nhóm dịch vụ |
| `price` | `numeric` | Not Null | Giá tiền dịch vụ (VNĐ) |
| `image` | `text` | Nullable | URL hình ảnh dịch vụ lưu trên Storage |
| `description` | `text` | Nullable | Mô tả chi tiết các bước trong dịch vụ |
| `status` | `smallint` | Default `1` | Trạng thái (`1`: hoạt động, `0`: tạm ngưng) |
| `created_at` | `timestamp` | Default `now()` | Thời gian tạo bản ghi |

---

### 5. Bảng `product` (Danh sách Sản phẩm)
* Lưu danh sách sản phẩm bày bán trên website.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất sản phẩm |
| `name` | `varchar` | Not Null | Tên sản phẩm |
| `group_id` | `uuid` | FK to `products_group.id` | Liên kết đến nhóm sản phẩm |
| `price` | `numeric` | Not Null | Giá bán sản phẩm |
| `image` | `text` | Nullable | URL ảnh sản phẩm |
| `description` | `text` | Nullable | Mô tả công dụng, cách dùng, nguồn gốc |
| `status` | `smallint` | Default `1` | Trạng thái hoạt động |
| `created_at` | `timestamp` | Default `now()` | Thời gian tạo bản ghi |

---

### 6. Bảng `course` (Khóa học Academy)
* Lưu thông tin các khóa đào tạo tuyển sinh tại học viện Sơn Barber.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh duy nhất khóa học |
| `name` | `varchar` | Not Null | Tên khóa học |
| `price` | `numeric` | Not Null | Học phí khóa học (VNĐ) |
| `duration` | `varchar` | Not Null | Thời gian diễn ra khóa học (ví dụ: `3 tháng`) |
| `description_details`| `text` | Nullable | Nội dung chương trình học chi tiết |
| `status` | `smallint` | Default `1` | Trạng thái tuyển sinh (`1`: tuyển sinh, `0`: đóng) |
| `created_at` | `timestamp` | Default `now()` | Thời gian tạo bản ghi |

---

### 7. Bảng `registration` (Đơn đăng ký học viên)
* Lưu thông tin học viên gửi từ Form đăng ký.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh đơn đăng ký |
| `name` | `varchar` | Not Null | Họ và tên học viên |
| `phone` | `varchar` | Not Null | Số điện thoại liên hệ |
| `course_name` | `varchar` | Not Null | Tên khóa học muốn đăng ký |
| `note` | `text` | Nullable | Ghi chú thêm từ học viên |
| `status` | `varchar` | Default `'pending'` | Trạng thái xử lý (`pending`, `called`, `done`, `cancelled`) |
| `created_at` | `timestamp` | Default `now()` | Thời gian nộp đơn đăng ký |

---

### 8. Bảng `blog_post` (Bài viết / Blog)
* Lưu trữ các bài viết, cẩm nang chăm sóc tóc trên website.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh bài viết |
| `title` | `varchar` | Not Null | Tiêu đề bài viết |
| `slug` | `varchar` | Unique, Not Null | Đường dẫn tĩnh thân thiện (SEO slug) |
| `content` | `text` | Not Null | Nội dung chi tiết bài viết (Rich Text/HTML) |
| `cover_image` | `text` | Nullable | URL hình ảnh đại diện bài viết |
| `status` | `varchar` | Default `'draft'` | Trạng thái (`draft`: nháp, `published`: xuất bản) |
| `created_at` | `timestamp` | Default `now()` | Thời gian đăng bài viết |

---

### 9. Bảng `review` (Ý kiến / Đánh giá khách hàng)
* Lưu trữ các bình luận và phản hồi từ khách hàng để hiển thị làm Social Proof.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh ý kiến đánh giá |
| `customer_name`| `varchar` | Not Null | Tên khách hàng |
| `rating` | `smallint` | Check (1-5), Not Null| Số sao đánh giá (từ 1 đến 5 sao) |
| `comment` | `text` | Not Null | Bình luận của khách hàng |
| `avatar` | `text` | Nullable | URL ảnh đại diện của khách hàng |
| `is_approved` | `boolean` | Default `false` | Quyết định hiển thị (`true`: hiển thị, `false`: ẩn) |
| `created_at` | `timestamp` | Default `now()` | Thời gian tạo đánh giá |

---

### 10. Bảng `gallery_item` (Thư viện hình ảnh)
* Lưu trữ ảnh các mẫu tóc, hoạt động và chi nhánh.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh hình ảnh |
| `title` | `varchar` | Nullable | Tiêu đề hoặc tên mô tả hình ảnh |
| `category` | `varchar` | Not Null | Danh mục ảnh (`Kiểu tóc uốn`, `Nhuộm`, `Không gian`...) |
| `image_url` | `text` | Not Null | URL hình ảnh trên Supabase Storage |
| `created_at` | `timestamp` | Default `now()` | Thời gian đăng tải |

---

### 11. Bảng `contact` (Ý kiến đóng góp / Liên hệ nhanh)
* Lưu trữ thông tin người dùng gửi qua Form liên hệ tại trang Contact.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|------------|--------------|-----------|-------|
| `id` | `uuid` | Primary Key | Định danh liên hệ |
| `name` | `varchar` | Not Null | Họ tên người gửi |
| `phone` | `varchar` | Not Null | Số điện thoại người liên hệ |
| `message` | `text` | Not Null | Nội dung lời nhắn/thắc mắc |
| `status` | `varchar` | Default `'unread'` | Trạng thái xử lý (`unread`: chưa đọc, `read`: đã đọc/xử lý) |
| `created_at` | `timestamp` | Default `now()` | Thời gian gửi liên hệ |
