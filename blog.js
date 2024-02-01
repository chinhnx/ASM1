import { posts } from './data.js';
let postContent = '';
for (let s = 0; s < posts.length; s++) {
  const content = posts[s];
  postContent += ` <div
  class="grid grid-cols-1 sm:grid-cols-[35%,60%] gap-[55px] pt-[55px] border-t-[1px] border-[#BABABA]">
  <div>
    <img src="${content.postImage}" alt="" />
  </div>
  <div>
    <h3 class="text-2xl font-semibold">${content.postTitle}</h3>
    <p class="text-xl pt-5 pb-10">
      IKay concep tồn tại để biến không gian thành những nơi đặc biệt
      hơn và chúng tôi ở đây để giúp bạn tạo ra ngôi nhà mơ ước của
      mình. Chúng tôi cung cấp cho mọi khách hàng dịch vụ Thiết kế Nội
      thất toàn diện tại nhà, ảo hoặc tại cửa hàng, để cập nhật nhỏ
      hoặc thay đổi lớn.
    </p>
    <a class="inline-block py-4 px-8 border-black border-[1px] rounded-[40px] text-sm font-semibold hover:bg-red-700 hover:text-white"
      href="${content.postLink}">
      Xem bài viết</a>
  </div>
  </div>`;
}
const postElement = document.querySelector('#post');
if (postElement) postElement.innerHTML = postContent;
