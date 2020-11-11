import { routerSpa } from '../route.js';

export default class {
  constructor (params) {
    console.log(params)
    this.a = 111
  }

  async getHtml () {
    return `
          <section id="login-id">
            <h1>Не мешай!</h1>
            <div class="form-container">
              <h2>С возвращением!</h2>
              <form id="form">
                <input name="number" placeholder="Гос. номер авто" />
                <input name="password" placeholder="Пароль" />
                <div class="forgot">Забыл пароль?</div>
                <button type="button" id="submitBtn">Войти</button>
              </form>
              <div class="sub">Еще нет аккаунта? <br/> <a href="/sign" class="nav__link" data-link>Регистрируйся</a></div>
            </div>
            <div class='bcg'>
              <img src="./src/assets/backgraund.png"/>
            </div>
            <script>
              ${
                setTimeout(() => {
                  document.getElementById('submitBtn').addEventListener('click', () => {
                    const formData = new FormData(document.querySelector('form'))
                    for (const pair of formData.entries()) {
                      console.log(pair[0] + ': ' + pair[1]);
                    }
                    localStorage.setItem('token', 'Barrer 666')
                    history.pushState(null, null, '/')
                    routerSpa()
                  })
                })
              }
            </script>
          </section>
        `;
  }
}
