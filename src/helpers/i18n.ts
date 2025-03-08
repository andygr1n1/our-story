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
                    guestsArrival:
                        'We look forward to welcoming you, to share joyful moments before the ceremony begins.',
                    'Please join us to celebrate our marriage': 'Please join us to celebrate our marriage',
                    'Daria & Andrei': 'Daria & Andrei',
                    'May 2, 2025': 'May 2, 2025',
                    'Wedding ceremony registration': 'Wedding ceremony registration',
                    'Solo registration': 'Solo registration',
                    register: 'Register',
                    update: 'Update',
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
                    WhatsApp: 'WhatsApp',
                    'Thank you for your registration!': 'Thank you for your registration!',
                    days_short_version: 'D',
                    'Booking Number': 'Registration Number',
                    Login: 'Login',
                    Andrei: 'Andrei',
                    Daria: 'Daria',
                    Logout: 'Logout',
                    'Registration Information': 'Important information',
                    yourRegistrationNumberIs: 'Your Registration number is',
                    bookingIdDescription:
                        'Please save this number, it will be needed for logging in from other devices',
                    miadora: 'Wedding location',
                    edit: 'Edit',
                    cancel: 'Cancel',
                    'Updated successfully!': 'Updated successfully!',
                    'invalid booking number': 'Invalid booking number',
                    'user must pass registration': 'User must pass registration',
                    dearGuestsIntro:
                        'Love has brought us to this magical moment, and we want to share it with you! We invite you to be a part of our celebration, filled with happiness, warmth, and sincere emotions!',
                    marriageCeremony: 'Marriage ceremony',
                    marriageCeremonyAddress:
                        'The marriage ceremony will be held at the Kishinev Bible Church at Kuza Voda st, 17/6',
                    wedding: 'Wedding',
                    weddingAddress: 'The wedding will be held at the Miadora restaurant at 25A Hristo Botev st.',
                    dressCodeDescription:
                        'We will be grateful if you support the style of our wedding and choose the following colors:',
                    giftsAndFlowersDescription:
                        'The greatest gift for us will be your warmth and smiles on this special day. However, if you wish to contribute a part of yourself to our new chapter in life, we would greatly appreciate your financial support for our plans.',
                    joinInSocialNetwork: 'Join our group',
                    ourWishes: 'Our wishes:',
                },
            },
            ru: {
                translation: {
                    guestsArrival:
                        'С нетерпением ждем вас, чтобы разделить радостные мгновения перед началом церемонии.',
                    'Please join us to celebrate our marriage':
                        'Пожалуйста, присоединяйтесь, чтобы отпраздновать нашу свадьбу',
                    'Daria & Andrei': 'Дарья и Андрей',
                    'May 2, 2025': '2 мая, 2025',
                    'Wedding ceremony registration': 'Бланк регистрации',
                    'Solo registration': 'Регистрация одного гостя',
                    register: 'Регистрация',
                    update: 'Обновить',
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
                    WhatsApp: 'WhatsApp',
                    'Thank you for your registration!': 'Спасибо за регистрацию!',
                    days_short_version: 'Д',
                    'Booking Number': 'Номер регистрации',
                    Login: 'Войти',
                    Andrei: 'Андрей',
                    Daria: 'Дарья',
                    Logout: 'Покинуть страницу авторизации',
                    'Registration Information': 'Важная информация',
                    yourRegistrationNumberIs: 'Ваш номер регистрации',
                    bookingIdDescription:
                        'Пожалуйста, сохраните этот номер, он вам понадобится для входа в приложение с других устройств',
                    miadora: 'Место проведения свадьбы',
                    edit: 'Редактировать',
                    cancel: 'Отмена',
                    'Updated successfully!': 'Обновлено успешно!',
                    'invalid booking number': 'Неверный номер регистрации',
                    'user must pass registration': 'Пользователь должен пройти регистрацию',
                    dearGuestsIntro:
                        'Любовь привела нас к этому волшебному моменту, и мы хотим разделить его с вами! Приглашаем вас стать частью нашего праздника, наполненного счастьем, теплом и искренними эмоциями.',
                    marriageCeremony: 'Венчание',
                    marriageCeremonyAddress:
                        'Венчание пройдёт в Кишинёвской Библейской церкви по адресу ул. Куза Водэ, 17/6',
                    wedding: 'Свадебное торжество',
                    weddingAddress:
                        'Свадебное торжество пройдёт в ресторане "Миадора" по адресу ул. Христо Ботев, д. 25А',
                    dressCodeDescription:
                        'Будем благодарны, если вы поддержите стилистику нашей свадьбы и выберите следующие цвета:',
                    giftsAndFlowersDescription:
                        'Главным подарком для нас будет ваше тепло и улыбки в этот важный день. А если вы хотите внести частичку себя в нашу новую главу жизни, мы будем благодарны за финансовую поддержку наших планов.',
                    joinInSocialNetwork: 'Присоединяйтесь к нам в Социальных сетях',
                    ourWishes: 'Наши пожелания:',
                },
            },
        },
        lng: 'ru', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    })
