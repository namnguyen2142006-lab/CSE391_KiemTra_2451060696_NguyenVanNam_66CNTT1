function BangDanhSach({ danhSach }) {
  function dinhDangGia(gia) {
    return gia.toLocaleString("vi-VN") + " đ";
  }

  return (
    <div className="card border-0 rounded-4 h-100 shadow-sm">
      <div className="card-header bg-white">
        <h5 className="fw-bold text-start">Danh sách sản phẩm</h5>
        <p className="text-muted small text-start">
          Danh sách sản phẩm được hiển thị từ dữ liệu hệ thống.
        </p>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Trạng thái</th>
              </tr>
            </thead>

            <tbody>
              {/* Trong HTML Câu 1, mình viết nhiều <tr> tĩnh.
                  Sang React thì thay bằng map().
                  map() duyệt mảng danhSach và tạo ra từng dòng bảng. */}
              {danhSach.map(function (item, index) {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    {/* item.ten lấy từ data.js */}
                    <td>{item.ten}</td>

                    {/* item.loai lấy từ data.js */}
                    <td>{item.loai}</td>

                    {/* item.gia lấy từ data.js rồi định dạng tiền */}
                    <td>{dinhDangGia(item.gia)}</td>

                    {/* item.trangThai lấy từ data.js */}
                    <td>
                      <span
                        className={
                          item.trangThai === "Còn hàng"
                            ? "badge bg-success-subtle text-success p-2"
                            : "badge bg-danger-subtle text-danger p-2"
                        }
                      >
                        {item.trangThai}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BangDanhSach;
