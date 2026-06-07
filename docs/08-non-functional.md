# 08. Non-Functional - Non-Functional Requirements

Tài liệu này xác định các yêu cầu phi chức năng bao gồm tiêu chuẩn lập trình, hiệu năng, khả năng đáp ứng thiết bị (Responsive) và tối ưu hóa SEO/GEO của website Sơn Barber.

---

## 1. Yêu cầu Lập trình & Clean Code (Coding Guidelines)
* **Phong cách Lập trình:**
  * Toàn bộ mã nguồn phải tuân thủ triết lý **Clean Code** (mã nguồn sạch, dễ đọc, dễ hiểu).
  * Viết code theo phong cách **Module** rõ ràng để dễ bảo trì, cập nhật và mở rộng hệ thống sau này.
  * Mọi hàm xử lý logic phức tạp, API Route, hoặc component đều cần có bình luận (Comments) giải thích chi tiết mục đích và hoạt động.
* **Đảm bảo tính toàn vẹn của tài liệu:**
  * Giữ nguyên các bình luận cũ không liên quan đến thay đổi của mình để bảo toàn lịch sử dự án.

---

## 2. Quy chuẩn Responsive thiết bị (Responsive Rules)
Giao diện website phải hiển thị tối ưu trên mọi kích thước màn hình từ điện thoại, máy tính bảng đến máy tính để bàn:
* **Quy tắc chuyển đổi màn hình (Breakpoints):**
  * **Dưới `1024px`:** Các lưới dữ liệu (Grid) hiển thị 3 hoặc 4 cột tự động chuyển về bố cục 2 cột.
  * **Dưới `768px`:** Thanh điều hướng (Navbar) ẩn các link trực tiếp và chuyển đổi sang dạng nút Menu rút gọn (Hamburger menu).
  * **Dưới `640px` (Màn hình mobile dọc):**
    * Mọi lưới dữ liệu (Grid) chính chuyển hoàn toàn về bố cục 1 cột dọc xếp chồng.
    * Nút kêu gọi hành động (CTA) trong phần Hero được phép tự động xuống hàng (Wrap).
    * Khoảng cách căn lề trên dưới (Padding dọc) của các Section được giảm từ `96px` xuống `64px` để tối ưu diện tích hiển thị trên điện thoại.

---

## 3. Tối ưu hóa SEO & định vị GEO (Search Engine Optimization)
* **SEO (Tối ưu công cụ tìm kiếm):**
  * Đặt mục tiêu khẳng định thương hiệu **Sơn Barber là số 1 tại Nghệ An** về dịch vụ barber shop và đào tạo học viên.
  * Bổ sung các bài viết trích dẫn, liên kết từ báo chí lớn viết về Sơn Barber (như *Dân Trí, VNExpress, Giáo dục Thời đại...* xem chi tiết tại [sonbarber_info.md](file:///Users/anhquannguyen/Desktop/SonBarberProject/development_sonbarber_website/description/data_Sonbarber/sonbarber_info.md#L40-L49)) nhằm nâng cao độ tin cậy và xếp hạng của website (Backlinks/PageRank).
  * Tự động triển khai các thẻ tiêu đề (Title tags) và thẻ mô tả (Meta descriptions) độc đáo, mô tả chính xác cho từng trang con.
  * Đảm bảo cấu trúc heading chuẩn: Mỗi trang chỉ có duy nhất 1 thẻ `<h1>` làm tiêu đề chính, các thẻ `<h2>`, `<h3>` được phân bổ phân cấp logic.
* **GEO (Định vị địa lý):**
  * Tập trung tối ưu công cụ tìm kiếm theo vùng địa lý tại **Nghệ An** (đặc biệt là TP Vinh).
  * Sử dụng Schema dữ liệu cấu trúc doanh nghiệp địa phương (Local Business Schema) khai báo đầy đủ các cơ sở của Sơn Barber để hỗ trợ Google hiển thị chính xác địa chỉ và số điện thoại trên Google Search & Google Maps.

---

## 4. Hiệu năng & Tốc độ tải trang (Performance & Core Web Vitals)
* **Tốc độ phản hồi:** Đảm bảo tốc độ tải trang nhanh và mượt mà.
* **Image Optimization:** Sử dụng các thẻ hình ảnh tối ưu của Next.js (`next/image`) để tự động nén, resize ảnh, chuyển định dạng WebP, áp dụng Lazy Loading cho hình ảnh trong Gallery và danh sách dịch vụ nhằm giảm thiểu chỉ số **LCP (Largest Contentful Paint)**.
* **Tránh giật lag giao diện (CLS):** Xác định trước kích thước chiều rộng, chiều cao cho ảnh và video để tránh hiện tượng xê dịch layout khi tải trang (**Cumulative Layout Shift**).
