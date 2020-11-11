import { routerSpa } from '../route.js';

export default class {
  constructor (params) {
    console.log(params)
    this.a = 111
  }

  async getHtml () {
    return `
            <section id="sign-id">
              <h1>Не мешай!</h1>
              <div class="form-container">
                <h2>Добро пожаловать!</h2>
                <form id="form">
                  <input name="number" placeholder="Номер телефона" />
                  <input name="number_rc" placeholder="Гос. номер авто" />
                  <input name="password" placeholder="Пароль" />
                  <input name="password_repeat" placeholder="Повторите пароль" />
                  <button type="button" id="submitBtn">Войти</button>
                </form>
              </div>
              <div class='bcg'>
                <img src="./src/assets/backgraund2.png"/>
              </div>
              <script>
                ${
                  setTimeout(() => {
                    document.getElementById('submitBtn').addEventListener('click', () => {
                      const formData = new FormData(document.querySelector('form'))
                      for (const pair of formData.entries()) {
                        console.log(pair[0] + ': ' + pair[1]);
                      }
                      // localStorage.setItem('token', 'Barrer 666')
                      // window.location.href = '/login';
                      history.pushState(null, null, '/login')
                      routerSpa()
                    })
                  })
                }
              </script>
            </section>
          `;
  }
}
