const LoginPage = {
  open: (path = '') => browser.url(`http://localhost:3000${path}`),
  get: () => ({
    email: () => $('[data-testid="email"]'),
    password: () => $('[data-testid="password"]'),
    logo: () => $('[data-testid="logo"]'),
    signInTitle: () => $('[data-testid="signin"]'),
    forgot: () => $('[data-testid="forgot"]'),
    login: () => $('[data-testid="login"]'),
    register: () => $('[data-testid="register"]')
  }),
  async login(username: string, password: string) {
    await this.get().username().setValue(username)
    await this.get().password().setValue(password)
    await this.get().submitButton().click()
  }
}

export default LoginPage
