// data.js dùng để giả lập CSDL.
// Mỗi object là 1 dòng dữ liệu trong bảng.

// Nên đặt tên trường chung, dễ dùng lại cho nhiều bài:
// id         → mã / số thứ tự
// ten        → tên đối tượng
// loai       → danh mục / lớp / loại
// gia        → giá / điểm / số lượng
// trangThai  → trạng thái

const duLieuMau = [
  {
    id: 1,
    ten: "Điện thoại iPhone 15",
    loai: "Điện thoại",
    gia: 24990000,
    trangThai: "Còn hàng",
  },
  {
    id: 2,
    ten: "Máy tính bảng Samsung Galaxy Tab S9",
    loai: "Máy tính bảng",
    gia: 18500000,
    trangThai: "Còn hàng",
  },
  {
    id: 3,
    ten: "Chuột Logitech MX Master 3S",
    loai: "Phụ kiện",
    gia: 2490000,
    trangThai: "Hết hàng",
  },
  {
    id: 4,
    ten: "Máy tính xách tay MacBook Air M3",
    loai: "Laptop",
    gia: 31990000,
    trangThai: "Còn hàng",
  },
  {
    id: 5,
    ten: "Tai nghe Sony WH-1000XM5",
    loai: "Tai nghe",
    gia: 7990000,
    trangThai: "Còn hàng",
  },
];

// Phải export thì App.jsx mới import được.
export default duLieuMau;
