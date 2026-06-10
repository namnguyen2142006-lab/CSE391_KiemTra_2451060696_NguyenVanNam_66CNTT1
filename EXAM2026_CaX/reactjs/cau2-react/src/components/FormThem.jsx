// Component FormThem nhận dữ liệu từ App.jsx qua props.
// Props trong React là object, nên nhận bằng dấu { }.
// Không dùng dấu [ ], nếu dùng [ ] sẽ lỗi: object is not iterable.

function FormThem({
  ten,
  setTen,
  loai,
  setLoai,
  gia,
  setGia,
  trangThai,
  setTrangThai,
  xuLyThem,
}) {
  return (
    <div className="card border-0 rounded-4 h-100 shadow-sm">
      <div className="card-header bg-white">
        <h5 className="fw-bold text-start">Thêm sản phẩm mới</h5>
        <p className="text-muted small text-start">
          Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
        </p>
      </div>

      <div className="card-body">
     
        <form onSubmit={xuLyThem}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>

        
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên sản phẩm"
              value={ten}
              onChange={function (event) {
                setTen(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Danh mục</label>

         
            <select
              className="form-select"
              value={loai}
              onChange={function (event) {
                setLoai(event.target.value);
              }}
            >
              <option value="">-- Chọn danh mục --</option>
              <option value="Điện thoại">Điện thoại</option>
              <option value="Máy tính bảng">Máy tính bảng</option>
              <option value="Phụ kiện">Phụ kiện</option>
              <option value="Laptop">Laptop</option>
              <option value="Tai nghe">Tai nghe</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Giá</label>

            <input
              type="number"
              className="form-control"
              placeholder="Nhập giá"
              value={gia}
              onChange={function (event) {
                setGia(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Trạng thái còn hàng</label>

            <select
              className="form-select"
              value={trangThai}
              onChange={function (event) {
                setTrangThai(event.target.value);
              }}
            >
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
          </div>

          <div className="d-flex gap-3">
     
            <button type="submit" className="btn btn-primary flex-fill">
              Thêm sản phẩm
            </button>

            <button type="reset" className="btn btn-light flex-fill">
              Làm mới form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormThem;
