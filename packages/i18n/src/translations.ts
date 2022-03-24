const translations: Record<string, Record<string, string>> = {
  'login.email': {
    'en-us': 'Email',
    'es-mx': 'Correo electrónico'
  },
  'login.footer': {
    'en-us': `© {site} - ${new Date().getFullYear()} - Powered by {name}`,
    'es-mx': `© {site} - ${new Date().getFullYear()} - Creador por {name}`
  },
  'login.forgot': {
    'en-us': 'Forgot Password',
    'es-mx': '¿Olvido su contraseña?'
  },
  'login.login': {
    'en-us': 'Login',
    'es-mx': 'Conectar'
  },
  'login.password': {
    'en-us': 'Password',
    'es-mx': 'Contraseña'
  },
  'login.register': {
    'en-us': 'Register',
    'es-mx': 'Registrar'
  },
  'login.signIn': {
    'en-us': 'Sign into your Account',
    'es-mx': 'Iniciar sesión en su cuenta'
  }
}

export default translations
