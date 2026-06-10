import { useState } from "react";
import duLieuMau from "./data";
import FormThem from "./components/FormThem";
import BangDanhSach from "./components/BangDanhSach";

function App() {
  // State lưu danh sách dữ liệu.
  // Ban đầu lấy dữ liệu từ file data.js.
  const [danhSach, setDanhSach] = useState(duLieuMau);

  // State lưu dữ liệu người dùng nhập trong form.
  // Mỗi input/select thường cần 1 state riêng.
  const [ten, setTen] = useState("");
  const [loai, setLoai] = useState("");
  const [gia, setGia] = useState("");
  const [trangThai, setTrangThai] = useState("Còn hàng");

  // Hàm này chạy khi bấm nút Thêm sản phẩm.
  // Vì form có onSubmit={xuLyThem}, nên hàm này nhận event.
  function xuLyThem(event) {
    // Chặn form reload trang.
    // Nếu quên dòng này, bấm submit sẽ tải lại trang.
    event.preventDefault();

    // Validate dữ liệu form.
    if (ten.trim() === "") {
      alert("Vui lòng nhập tên sản phẩm");
      return;
    }

    if (loai === "") {
      alert("Vui lòng chọn danh mục");
      return;
    }

    if (gia === "") {
      alert("Vui lòng nhập giá");
      return;
    }

    if (Number(gia) <= 0) {
      alert("Giá phải lớn hơn 0");
      return;
    }

    // Tạo object mới từ dữ liệu người dùng nhập.
    const doiTuongMoi = {
      id: danhSach.length + 1,
      ten: ten,
      loai: loai,
      gia: Number(gia),
      trangThai: trangThai,
    };

    // Thêm object mới vào mảng danhSach.
    // Không dùng push trực tiếp.
    // Phải dùng setDanhSach để React render lại giao diện.
    setDanhSach([...danhSach, doiTuongMoi]);

    // Reset form sau khi thêm.
    setTen("");
    setLoai("");
    setGia("");
    setTrangThai("Còn hàng");
  }

  return (
    <>
      {/* Trong React: class phải đổi thành className */}
      <div className="container-fluid py-4">
        <div className="bg-primary text-white rounded-3 p-4 mb-4">
          <h2 className="fw-bold text-start">Quản lý danh sách sản phẩm</h2>
          <p className="text-start">
            Giao diện nhập liệu và hiển thị danh sách sản phẩm một cách trực
            quan, rõ ràng.
          </p>
        </div>

        {/* Bootstrap grid: row chứa 2 cột trái/phải */}
        <div className="row g-4 align-items-stretch">
          {/* Cột trái: Form thêm */}
          <div className="col-md-5 d-flex">
            <div className="w-100">
              {/* Gọi component FormThem */}
              {/* Truyền state và hàm setState xuống component con bằng props */}
              <FormThem
                ten={ten}
                setTen={setTen}
                loai={loai}
                setLoai={setLoai}
                gia={gia}
                setGia={setGia}
                trangThai={trangThai}
                setTrangThai={setTrangThai}
                xuLyThem={xuLyThem}
              />
            </div>
          </div>

          {/* Cột phải: Bảng danh sách */}
          <div className="col-md-7 d-flex">
            <div className="w-100">
              {/* Gọi component BangDanhSach */}
              {/* Truyền danhSach xuống để component con dùng map() hiển thị bảng */}
              <BangDanhSach danhSach={danhSach} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
