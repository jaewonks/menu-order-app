const contents = {
  after_render: () => {
    document.getElementById('add-member-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const newMember = document.getElementById('name').value;
      members.push(newMember);
      console.log(members);
    });
  },
  render: () => {  
    const members = ['재원', '정령', '하나', '한나', '정옥', '서진', '혜원', '재은'];
    const menus = [
      'Gyoza',
      'Breaded Prawn',
      'Spring Rolls',
      'Katsu Curry - Chicken',
      'Katsu Curry - Pumpkin',
      'Katsu Curry - Prawn',
      'Sweet Chilli Chicken',
      'Crispy Soy Chicken',
      'Kimchi Fried Rice',
      'Spicy Katsu Ramen - Chicken',
      'Spicy Katsu Ramen - Pumkin',
      'Spicy Chicken',
      'Soy Beef',
      'Spicy Pork Belly',
      'Teriyaki - Ckicken',
      'Teriyaki - Tofu',
      'Bibimbab - Beef',
      'Bibimbab - Chicken',
      'Bibimbab - Kimchi',
      'Bibimbab - Tofu'
    ];

    const drinks = ['Sprite', 'Fanta', 'Coke', 'Diet Coke', 'Still Water', 'Sparking Water'];
   
    return `
      <h3>Menu Order App</h3>
      <div class='add'>
        <div class='pd-r'>
        <form id='add-member-form'>
          <input type='text' id='name' placeholder='Input your name' />
          <button type='submit'>추가</button>
        </form>
        </div>
        <div><button>Reset</button></div>
      </div>
      <br>
      <div>
        <table>
          <th>이름</th>
          <th>음식</th>
          <th>음료수</th>
          ${members.map( member => 
            `
          <tr>
          <td>${member}</td>
              <td>
                <select id="menu-list">
                  <option selected>메뉴을 선택하세요</option>
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
          </tr>`
          ).join('\n')}
        </table>
        <br>
        <button type='submit'>제출</button>
        </div>
        <br>
        <hr/>
        <br>
        <div>
          <table>
            <tr>
              <td>Total Order Member: </td>
              <td>${members.length}</td>
            </tr>
            <tr>
              <td>Total Order Menu list: </td>
            </tr>
            <tr>
              <td>${menus[3]}</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  }
}

const app = document.getElementById('app');
app.innerHTML = contents.render();



  










