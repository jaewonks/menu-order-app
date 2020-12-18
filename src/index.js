import { members, menus, drinks } from './data.js';

window.onload = () => {
  document.getElementById('name-add-button').addEventListener('click', e => {
    e.preventDefault();
    const newMember = document.getElementById('name').value;
    if (newMember !== '') {
      members.push(newMember);
      localStorage.setItem('addMember', JSON.stringify(members));
      app.innerHTML = contents.render();
    }
  });
  
  const setOrder = [];
  const setOrderInfo = {};
  const menuArray = Array.from(document.getElementsByClassName('menu-list'));
    menuArray.map((menu, index) => menu.addEventListener('change', async (e) => {
    e.preventDefault();
    // setOrderInfo.memu = menu.value;
    const orderMenu = menu.value;
    setOrderInfo.id = index;
    setOrderInfo.memu = orderMenu;
    console.log(setOrderInfo);
  }))

  const drinkArray = Array.from(document.getElementsByClassName('drink-list'));
    drinkArray.map( drink => drink.addEventListener('change', async (e) => {
    e.preventDefault();
    const orderDrink = drink.value;
    setOrderInfo.drink = orderDrink;
    setOrder.push(setOrderInfo);
    console.log(setOrder);  
  }))
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
          ${memberArray.map( member => 
            `
          <tr>
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
          </tr>`
          ).join('\n')}
        </table>
        <br>
        </div>
        <div><button type='submit'>제출</buttion></div>
        <br>
        <hr/>
    `;
  }
}

const app = document.getElementById('menu-order');
app.innerHTML = contents.render();



  










