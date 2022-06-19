const translations: Record<string, Record<string, string>> = {
  blog: {
    ar: 'مقالات',
    'en-us': 'Blog',
    'es-mx': 'Blog',
    'fr-fr': 'Blog',
    'it-it': 'Blog',
    'ja-jp': 'ブログ'
  },
  'blog.create': {
    ar: 'إنشاء منشور',
    'en-us': 'Create Post',
    'es-mx': 'Crear Publicación',
    'fr-fr': 'Créer un Article',
    'it-it': 'Crea Pubblicazione',
    'ja-jp': 'パブリケーションを作成する'
  },
  'blog.list': {
    ar: 'قائمة المنشورات',
    'en-us': 'List of Posts',
    'es-mx': 'Lista de Publicaciones',
    'fr-fr': 'Liste des Publications',
    'it-it': 'Elenco delle Pubblicazioni',
    'ja-jp': '投稿リスト'
  },
  email: {
    ar: 'بريد الالكتروني',
    'en-us': 'Email',
    'es-mx': 'Correo electrónico',
    'fr-fr': 'Email',
    'it-it': 'Email',
    'ja-jp': 'Eメール'
  },
  emailOrUsername: {
    ar: 'البريد الإلكتروني أو اسم المستخدم',
    'en-us': 'Email or Username',
    'es-mx': 'Correo electrónico ó Usuario',
    'fr-fr': "E-mail ou nom d'utilisateur",
    'it-it': 'Email o nome utente',
    'ja-jp': 'メールアドレスまたはユーザ名'
  },
  forgotPassword: {
    ar: 'هل نسيت كلمة السر',
    'en-us': 'Forgot Password',
    'es-mx': '¿Olvido su contraseña?',
    'fr-fr': 'Mot de passe oublié',
    'it-it': 'Ha dimenticato la password',
    'ja-jp': 'パスワードをお忘れですか'
  },
  login: {
    ar: 'تسجيل الدخول',
    'en-us': 'Login',
    'es-mx': 'Conectar',
    'fr-fr': 'Connexion',
    'it-it': 'Connettiti',
    'ja-jp': 'ログイン'
  },
  'login.footer': {
    ar: `© {site} - ${new Date().getFullYear()} - بدعم من {name}`,
    'en-us': `© {site} - ${new Date().getFullYear()} - Powered by {name}`,
    'es-mx': `© {site} - ${new Date().getFullYear()} - Creador por {name}`,
    'fr-fr': `© {site} - ${new Date().getFullYear()} - Créateur par {name}`,
    'it-it': `© {site} - ${new Date().getFullYear()} - Creatore di {name}`,
    'ja-jp': `© {site} - ${new Date().getFullYear()} - {name} によって供給`
  },
  'login.signIn': {
    ar: 'تسجيل الدخول إلى حسابك',
    'en-us': 'Sign into your Account',
    'es-mx': 'Iniciar sesión en su cuenta',
    'fr-fr': 'Connectez-vous à votre compte',
    'it-it': 'Accedi al tuo account',
    'ja-jp': 'アカウントにサインインします'
  },
  logout: {
    ar: 'تسجيل خروج',
    'en-us': 'Logout',
    'es-mx': 'Desconectar',
    'fr-fr': 'Se déconnecter',
    'it-it': 'Disconnettersi',
    'ja-jp': 'ログアウト'
  },
  media: {
    ar: 'وسائل الإعلام',
    'en-us': 'Media',
    'es-mx': 'Multimedia',
    'fr-fr': 'Médias',
    'it-it': 'Media',
    'ja-jp': 'メディア'
  },
  menu: {
    ar: 'قائمة',
    'en-us': 'Menu',
    'es-mx': 'Menu',
    'fr-fr': 'Menu',
    'it-it': 'Menù',
    'ja-jp': 'メニュー'
  },
  password: {
    ar: 'كلمة المرور',
    'en-us': 'Password',
    'es-mx': 'Contraseña',
    'fr-fr': 'Mot de passe',
    'it-it': "Parola d'ordine",
    'ja-jp': 'パスワード'
  },
  register: {
    ar: 'يسجل',
    'en-us': 'Register',
    'es-mx': 'Registrar',
    'fr-fr': "S'inscrire",
    'it-it': 'Registrati',
    'ja-jp': '登録'
  },
  'sidebar.camping': {
    ar: 'تخييم',
    'en-us': 'Camping',
    'es-mx': 'Campamento',
    'fr-fr': 'Camping',
    'it-it': 'Campeggio',
    'ja-jp': 'キャンプ'
  },
  'sidebar.guests': {
    ar: 'ضيوف',
    'en-us': 'Guests',
    'es-mx': 'Huéspedes',
    'fr-fr': 'Les hôtes',
    'it-it': 'Ospiti',
    'ja-jp': 'ゲスト'
  },
  'sidebar.information': {
    ar: 'معلومة',
    'en-us': 'Information',
    'es-mx': 'Información',
    'fr-fr': 'Information',
    'it-it': 'Informazione',
    'ja-jp': '情報'
  },
  'sidebar.reports': {
    ar: 'التقارير',
    'en-us': 'Reports',
    'es-mx': 'Reportes',
    'fr-fr': 'Rapports',
    'it-it': 'Rapporti',
    'ja-jp': 'レポート'
  },
  'sidebar.reservations': {
    ar: 'التحفظات',
    'en-us': 'Reservations',
    'es-mx': 'Reservaciones',
    'fr-fr': 'Réservations',
    'it-it': 'Prenotazioni',
    'ja-jp': '予約'
  },
  'sidebar.stoneHouse': {
    ar: 'منزل حجري',
    'en-us': 'Stone House',
    'es-mx': 'Casa de Piedra',
    'fr-fr': 'Maison en Pierre',
    'it-it': 'Casa di Pietra',
    'ja-jp': 'ストーンハウス'
  },
  January: {
    ar: 'يناير',
    'en-us': 'January',
    'es-mx': 'Enero',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  February: {
    ar: 'يناير',
    'en-us': 'February',
    'es-mx': 'Febrero',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  March: {
    ar: 'يناير',
    'en-us': 'March',
    'es-mx': 'Marzo',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  April: {
    ar: 'يناير',
    'en-us': 'April',
    'es-mx': 'Abril',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  May: {
    ar: 'يناير',
    'en-us': 'May',
    'es-mx': 'Mayo',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  June: {
    ar: 'يناير',
    'en-us': 'June',
    'es-mx': 'Junio',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  July: {
    ar: 'يناير',
    'en-us': 'July',
    'es-mx': 'Junio',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  August: {
    ar: 'يناير',
    'en-us': 'August',
    'es-mx': 'Agosto',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  September: {
    ar: 'يناير',
    'en-us': 'September',
    'es-mx': 'Septiembre',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  October: {
    ar: 'يناير',
    'en-us': 'October',
    'es-mx': 'Octubre',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  November: {
    ar: 'يناير',
    'en-us': 'November',
    'es-mx': 'Noviembre',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  December: {
    ar: 'يناير',
    'en-us': 'December',
    'es-mx': 'Diciembre',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Sunday: {
    ar: 'يناير',
    'en-us': 'Sunday',
    'es-mx': 'Domingo',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Monday: {
    ar: 'يناير',
    'en-us': 'Monday',
    'es-mx': 'Lunes',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Tuesday: {
    ar: 'يناير',
    'en-us': 'Tuesday',
    'es-mx': 'Martes',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Wednesday: {
    ar: 'يناير',
    'en-us': 'Wednesday',
    'es-mx': 'Miércoles',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Thursday: {
    ar: 'يناير',
    'en-us': 'Thursday',
    'es-mx': 'Jueves',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Friday: {
    ar: 'يناير',
    'en-us': 'Friday',
    'es-mx': 'Viernes',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  },
  Saturday: {
    ar: 'يناير',
    'en-us': 'Saturday',
    'es-mx': 'Sábado',
    'fr-fr': 'Janvier',
    'it-it': 'Gennaio',
    'ja-jp': '1月'
  }
}

export default translations
