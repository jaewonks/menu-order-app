import { menus, drinks } from './data.js';

const lists = {
  render: () => { 
    const orderArray = localStorage.getItem('orderInfo') ? 
    JSON.parse(localStorage.getItem('orderInfo')) : [];
    let menusArray;
    let drinksArray;
    const menuGetArray = orderArray.map(arr => 
      arr.menu
    );
    const drinkGetArray = orderArray.map(arr => 
      arr.drink
    );

    const menuFiltered = menuGetArray.filter(menu => menu !== '메뉴를 선택하세요');
    console.log(menuFiltered);
    menusArray = menuFiltered.reduce((or, i) => {
      or[i] = (or[i] || 0) + 1
      return or }, {});
    console.log(menusArray);  
    const drinkFiltered = drinkGetArray.filter(drink => drink !== '음료를 선택하세요');
    console.log(drinkFiltered);
    drinksArray = drinkFiltered.reduce((or, i) => {
      or[i] = (or[i] || 0) + 1
      return or }, {});
    console.log(drinksArray);  

    return `
        <br>
        <div>
          <p>Total Order Member : ${Object.values(orderArray).length}</p>
          <p>Total Order Menu List : </p>
        </div>
        <div class='order'>
        <div class='menu'>
          <table>
            <tr class='table-head'>       
              <th>Menu</th>
              <th>QTY</th>
            </tr> 
            ${Object.keys(menusArray).map(key =>
            `<tr><td>${menus[key]}</td>
            <td>${menusArray[key]}</td></tr>
            `
            ).join('\n')}
            <tr class='border-top'>
              <td>Total Order : </td>
              <td>${Object.keys(menusArray).reduce((sum, key) => 
                { return  sum + parseInt(menusArray[key])}, 0 )}</td>
            </tr>
          </table>
        </div>  
        <br>
        <div class='drink'>  
          <table>
          <tr class='table-head'>       
            <th>Drink</th>
            <th>QTY</th>
          </tr> 
          ${Object.keys(drinksArray).map(key =>
            `<tr><td>${drinks[key]}</td>
            <td>${drinksArray[key]}</td></tr>
            `
            ).join('\n')}  
          <tr class='border-top'>
            <td>Total Order : </td>
            <td>${Object.keys(drinksArray).reduce((sum, key) => 
              { return  sum + parseInt(drinksArray[key])}, 0 )}</td>
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

  










