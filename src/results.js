import { members, menus, drinks } from './data.js';
const orderMenuList = []; 
const orderDrinkList = [];
let countIf;

window.onload = () => {
  const menuArray = Array.from(document.getElementsByClassName('menu-list'));
  menuArray.map( menu => menu.addEventListener('change', async (e) => {
    e.preventDefault();
    const orderMenu = menu.value;
    orderMenuList.push(orderMenu);
    countIf = orderMenuList.reduce((t, i) => { 
      t[i] = (t[i] || 0) + 1 
      return t }, {}); 
      console.log(countIf);
      console.log(new Set(orderList));;
      localStorage.setItem('ordermenus', JSON.stringify(countIf));
      result.innerHTML = lists.render();
  }));

  const drinkArray = Array.from(document.getElementsByClassName('drink-list'));
  drinkArray.map( drink => drink.addEventListener('change', async (e) => {
    e.preventDefault();
    const orderDrink = drink.value;
    orderDrinkList.push(orderDrink);
    countIf = orderDrinkList.reduce((t, i) => { 
      t[i] = (t[i] || 0) + 1 
      return t }, {}); 
      localStorage.setItem('orderdrinks', JSON.stringify(countIf));
      result.innerHTML = lists.render();
  }));
}  

const lists = {
  render: () => { 
    let menusArray = localStorage.getItem('ordermenus') ? 
    JSON.parse(localStorage.getItem('ordermenus')) : [];
    let drinksArray = localStorage.getItem('orderdrinks') ?
    JSON.parse(localStorage.getItem('orderdrinks')) : [];
    return `
        <br>
        <div>
          <p>Total Order Member : </p>
          <p>Total Order Menu List : </p>
        </div>
        <div class='order'>
        <div class='menu'>
          <table>
            <tr>       
              <th>Menu</th>
              <th>QTY</th>
            </tr> 
            ${Object.keys(menusArray).map(key =>
            `<tr><td>${menus[key]}</td>
            <td>${menusArray[key]}</td></tr>
            `
            ).join('\n')}
            <tr>
              <td>Total Order : </td>
              <td>
              ${Object.keys(menusArray).reduce((sum, key) => 
                { return  sum + parseInt(menusArray[key])}, 0 )}
              </td>
            </tr>
          </table>
        </div>  
        <br>
        <div class='drink'>  
          <table>
          <tr>       
            <th>Drink</th>
            <th>QTY</th>
          </tr> 
          ${Object.keys(drinksArray).map(key =>
          `<tr><td>${drinks[key]}</td>
          <td>${drinksArray[key]}</td></tr>
          `
          ).join('\n')}
          <tr>
            <td>Total Order : </td>
            <td>
            ${Object.keys(drinksArray).reduce((sum, key) => 
              { return  sum + parseInt(drinksArray[key])}, 0 )}
            </td>
          </tr>
        </table>
        </div>  
        </div>
      </div>
    `;
  }
}

const result = document.getElementById('order-table');
result.innerHTML = lists.render();

  










