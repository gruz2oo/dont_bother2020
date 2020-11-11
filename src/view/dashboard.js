export default class {
  constructor (params) {
    console.log(params);
    const isAuth = localStorage.getItem('token');
    if (!isAuth) {
      window.location.href = '/login';
    }
  }

  async getHtml () {
    return `
            <section id="login-id">
                <h1>Не мешай!</h1>
            </section>
          `;
  }
}
