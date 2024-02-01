import { productList } from './data.js';

let product_item = '';
for (let n = 0; n < productList.length; n++) {
  const product = productList[n];
  product_item += `
        <div>
            <div class="pb-[26px]">
                <a href="chitietsanpham1.html?id=${product.id}"><img class="" src="${product.img}" alt="" /></a>
            </div>
            <div>
                <a class="hover:text-red-700" href="chitietsanpham1.html?id=${product.id}">
                <h3 class="text-xl lg:text-2xl font-semibold">
                ${product.productName}
                </h3>
                </a>
                <p class="font-normal py-3">Thanh lịch: tinh xảo từng góc cạnh</p>
                <p>Giá chỉ từ: <span class="font-semibold"> ${product.price}</span></p>
            </div>
        </div>
  
  `;
}
const productListElement = document.querySelector('#product-list');
if (productListElement) productListElement.innerHTML = product_item;
