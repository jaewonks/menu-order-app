import { members, menus, drinks } from './data.js';

window.onload = () => {
  document.getElementById('name-add-btn').addEventListener('click', () => {
    const newMember = document.getElementById('name').value;
    if (newMember !== '') {
      members.push(newMember);
      localStorage.setItem('addMember', JSON.stringify(members));
      app.innerHTML = contents.render();
    }
  });
  
const deleteBtns = Array.from(document.getElementsByClassName('delete-btn'));
  deleteBtns.map(btn => btn.addEventListener('click', () => {
  console.log(btn.id); 
  members.splice(btn.id, 1);
  localStorage.removeItem('addMember');
  app.innerHTML = contents.render();
  })); 

  const setOrder = [];

  document.getElementById('submit-btn').addEventListener('click', () => {
    const orderInfo = Array.from(document.getElementsByClassName('order-info'));
    orderInfo.map((oi, index) => {
      console.log(oi)
      const menuList = Array.from(document.getElementsByClassName('menu-list'));
      const drinkList = Array.from(document.getElementsByClassName('drink-list'));
      const setOrderInfo = {};
      setOrderInfo.id = index; 
      setOrderInfo.menu = menuList[index].value;
      setOrderInfo.drink = drinkList[index].value;
      console.log(setOrderInfo);  
      setOrder.push(setOrderInfo);
      console.log(setOrder);
      localStorage.setItem('orderInfo', JSON.stringify(setOrder));
      location.reload();
    })
  })
}  

const contents = {
  render: () => {  
    let memberArray = localStorage.getItem('addMember') ? 
    JSON.parse(localStorage.getItem('addMember')) : members;
    return `
      <br>
      <div>
        <table class='first'>
          <th>이름</th>
          <th>음식</th>
          <th>음료수</th>
          ${memberArray.map((member, index) => 
            `
          <tr class='order-info'>
          <td>${member}</td>
              <td>
                <select class="menu-list">
                  <option selected>메뉴를 선택하세요</option>
                  ${menus.map((menu, index) => 
                  `<option value=${index} >${menu}</option>`
                  )}
                </select>
              </td>
              <td>
                <select name="list" class="drink-list">
                  <option selected>음료를 선택하세요</option>
                  ${drinks.map((drink, index) => 
                    `<option value=${index}>${drink}</option>`
                    )}
                </select>
            </td>
            <td>
              <input type='text' placeholder='기타 요구 사항' />      
            </td>
            <td>
              <button type='button' id='${index}' class='delete-btn' >X</button>      
            </td>
          </tr>`
          ).join('\n')}
        </table>
        <br>
        </div>
        <div><button type='button' id='submit-btn' >제출</buttion></div>
       
        <br>
        <hr/>
    `;
  }
}

const app = document.getElementById('menu-order');
app.innerHTML = contents.render();



  










