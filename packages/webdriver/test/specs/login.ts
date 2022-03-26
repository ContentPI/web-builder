import LoginPage from '../pages/login.page'

describe('Login Page Test', () => {
  it('should render the login page correctly', async () => {
    // Opening Url
    LoginPage.open('/en/login')

    // Get all elements
    const { logo, login, register, signInTitle, email, password, forgot } = LoginPage.get()

    // Logo should exists
    await expect(logo()).toBeExisting()

    // Sign in message should be there
    await expect(signInTitle()).toHaveTextContaining('Sign into your Account')

    // Email & password inputs should exists
    const emailPlaceholder = await email().getAttribute('placeholder')
    const passwordPlaceholder = await password().getAttribute('placeholder')

    await expect(emailPlaceholder).toBe('Email')
    await expect(passwordPlaceholder).toBe('Password')

    // Forgot Password link should exists
    await expect(forgot()).toHaveTextContaining('Forgot Password')

    // Delayed elements
    const loginButton = await login()
    const registerButton = await register()

    await expect(loginButton).toHaveTextContaining('Login')
    await expect(registerButton).toHaveTextContaining('Register')
  })
})
