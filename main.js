import { menuList } from './data.js';
import { listItem } from './data.js';
import { productList } from './data.js';
let result = '';
const menuElement = document.querySelector('#main-menu');
for (let i = 0; i < menuList.length; i++) {
  const nameCategory = menuList[i];
  result += `
            <li class="block">
              <a href="${nameCategory.link}" class="text-base hover:font-bold font-normal md:pr-6">${nameCategory.category}</a>
            </li>
    `;
}
if (menuElement) menuElement.innerHTML = result;
// =====================
let solution = '';
for (let a = 0; a < listItem.length; a++) {
  const name = listItem[a];
  solution += `
            <li class="block" data-id="${name.id}">
            <a class="text-sm font-semibold hover:text-red-700" href="">${name.listItemName}</a>
            </li>  
  `;
}
const menuListElement = document.querySelector('#menu-list');
if (menuListElement) menuListElement.innerHTML = solution;
//========================

// ================= DETAIL PRODUCT ======================
// chọn đến div để đổ dữ liệu ra ngoài
const productDetailElement = document.querySelector('#product-detail');

// lấy tham số id trên url khi vào page detail
const idUrl = new URLSearchParams(window.location.search).get('id');
// Tìm trong mảng productList, nếu có id nào trong mảng trùng với id trên url thì trả về object đấy
const foundProdutByIdUrl = productList.find((item) => {
  return item.id == idUrl;
});
// hiển thị ra ngoài màn hình
productDetailElement.innerHTML = `
    <div>${foundProdutByIdUrl.productName}</div>
    			<div class="grid lg:grid-cols-[66%,1fr] gap-[55px]">
				<div>
					<a href=""><img src="${foundProdutByIdUrl.img}" alt="" /></a>
				</div>
				<div>
					<a class="border border-solid border-[1px] text-[#73726E] py-1 px-2 hover:text-white hover:bg-black"
						href="">Sản phẩm mới</a>
					<h2 class="text-[30px] font-semibold leading-8 pt-4">
						Nốt trầm ẩn sau không gian tĩnh lặng
					</h2>
					<p class="leading-5 tracking-wide pt-5">
						Ikay Concept được sinh ra tại Herning vào năm 1952 và đã phát triển từ một công ty nhỏ
						trở thành thương hiệu đồ nội thất toàn cầu nhất Đan Mạch, với hơn 300 cửa hàng tại hơn
						60 quốc gia - và đang tiếp tục tăng lên.
						<span class="block pt-5">
							Thông qua sự sáng tạo và tay nghề thủ công của Đan Mạch, chúng tôi nâng tầm không
							gian với thiết kế mang tính biểu tượng mang lại niềm vui và cảm hứng, hợp tác với
							một số nhà thiết kế được kính trọng nhất ở Đan Mạch và xa hơn nữa là bắt kịp xu
							hướng.</span>
					</p>
				</div>
			</div>
`;
