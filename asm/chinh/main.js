document.addEventListener('DOMContentLoaded', function () {
  // Lấy các phần tử  cần sử dụng
  const formAdd = document.querySelector('#form-add'); // Form thêm sản phẩm
  const tableContent = document.querySelector('#content'); // Bảng hiển thị sản phẩm
  const productList = []; // Tạo mảng rỗng để chứa danh sách sản phẩm

  // Hàm lấy và xử lý sự kiện cho các nút xoá
  const getButton = () => {
    const btns = tableContent.querySelectorAll('.btn'); // Chọn tất cả các nút "Xóa"
    for (let btn of btns) {
      const id = btn.dataset.id; // Lấy giá trị của thuộc tính "data-id" từ nút
      btn.addEventListener('click', function () {
        deleteProduct(id); // Gọi hàm xóa sản phẩm khi nút được nhấn
      });
    }
  };

  // Xử lý sự kiện khi form thêm sản phẩm được submit
  formAdd.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định (tránh reload trang)
    addProduct(); // Gọi hàm thêm sản phẩm
  });

  // Hàm thêm sản phẩm vào mảng và hiển thị trên bảng

  const addProduct = () => {
    // Tạo một object để lưu thông tin từ các trường input trong form
    const product = {
      id: productList.length + 1, // Tạo ID cho sản phẩm mới
      name: document.querySelector('#name').value, // Lấy giá trị tên từ trường input
      price: document.querySelector('#price').value, // Lấy giá trị giá từ trường input
    };
    productList.push(product); // Thêm object sản phẩm vào mảng
    showProduct(productList); // Hiển thị danh sách sản phẩm lên trang
    getButton(); // Gắn sự kiện cho các nút xóa trong danh sách mới
  };

  // Hàm hiển thị danh sách sản phẩm lên trang HTML
  const showProduct = (data) => {
    tableContent.innerHTML = data
      .map(
        (item) => `<tr>
					<th scope="row">${item.id}</th>
					<td>${item.name}</td>
					<td>${item.price}</td>
					<td>
						<button class="btn btn-danger" data-id="${item.id}">Xóa</button>
					</td>
				</tr>`,
      )
      .join(''); // Chuyển mảng thành chuỗi và gắn vào nội dung của bảng
  };

  // Hàm xóa sản phẩm khỏi danh sách
  function deleteProduct(id) {
    const newProducts = productList.filter((item) => item.id !== parseInt(id)); // Lọc ra danh sách mới không chứa sản phẩm cần xóa
    productList.length = 0; // Xóa tất cả phần tử trong mảng hiện tại
    productList.push(...newProducts); // Thêm danh sách mới vào mảng
    showProduct(productList); // Hiển thị danh sách mới lên trang
  }
});
