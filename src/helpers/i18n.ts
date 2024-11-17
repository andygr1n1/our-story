import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    'Please join us to celebrate our marriage': 'Please join us to celebrate our marriage',
                    'Daria & Andrei': 'Daria & Andrei',
                    'May 2, 2025 - Chisinau, Miadora': 'May 2, 2025 - Chisinau, Miadora',
                    'Wedding ceremony registration': 'Wedding ceremony registration',
                    'Solo registration': 'Solo registration',
                    Register: 'Register',
                    Guest: 'Guest',
                    'First Name': 'First Name',
                    'Last Name': 'Last Name',
                    Email: 'Email address',
                    Phone: 'Phone number',
                    Wishes: 'Wishes',
                    '* Required field': '* Required field',
                    '* Invalid email': '* Invalid email',
                    '* Invalid phone number': '* Invalid phone number',
                    'Phone numbers must be different': 'Phone numbers must be different',
                    'Emails must be different': 'Emails must be different',
                    'Email already exists': 'Email already exists',
                    'Phone number already exists': 'Phone number already exists',
                    'Something went wrong, please contact us directly':
                        'Something went wrong, please contact us directly',
                    'Telegram group': 'Telegram group',
                    'Thank you for your registration!': 'Thank you for your registration!',
                },
            },
            ru: {
                translation: {
                    'Please join us to celebrate our marriage':
                        'Пожалуйста, присоединяйтесь, чтобы отпраздновать нашу свадьбу',
                    'Daria & Andrei': 'Дарья и Андрей',
                    'May 2, 2025 - Chisinau, Miadora': '2 мая 2025 - Кишинёв, Миадора',
                    'Wedding ceremony registration': 'Бланк регистрации',
                    'Solo registration': 'Регистрация одного гостя',
                    Register: 'Регистрация',
                    Guest: 'Гость',
                    'First Name': 'Имя',
                    'Last Name': 'Фамилия',
                    Email: 'Email адрес',
                    Phone: 'Номер телефона',
                    Wishes: 'Пожелания',
                    '* Required field': '* Обязательное поле',
                    '* Invalid email': '* Неверный email',
                    '* Invalid phone number': '* Неверный номер телефона',
                    'Phone numbers must be different': 'Номера телефонов должны быть разными',
                    'Emails must be different': 'Email адреса должны быть разными',
                    'Email already exists': 'Email уже зарегистрирован',
                    'Phone number already exists': 'Номер телефона уже зарегистрирован',
                    'Something went wrong, please contact us directly':
                        'Что-то пошло не так, пожалуйста, свяжитесь с нами напрямую',
                    'Telegram group': 'Группа в Telegram',
                    'Thank you for your registration!': 'Спасибо за регистрацию!',
                },
            },
        },
        lng: 'ru', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    })
