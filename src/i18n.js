import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    hero: {
      title: 'VPN Service<br>Fast & Secure',
      subtitle: 'AmneziaWG 2.0 Protocol. Unblocks all websites and apps.\nNo YouTube ads. Easy to use.',
      cta: 'View Pricing',
      cta_secondary: 'Contact'
    },
    nav: {
      about: 'About',
      pricing: 'Pricing',
      setup: 'Setup Guides'
    },
    about: {
      title: 'About the Service',
      desc: 'I am a Bauman MSTU alumnus working in IT.\nI don\'t sell VPNs professionally, just offering another option.\nNot free, but reasonably priced and stable.',
      disclaimer: 'Disclaimer: If you need a free service, you can still find free alternatives with some effort.',
      more: 'P.S. I also do web/app development and teaching programming 😅'
    },
    features: {
      title: 'Service Features',
      speed: 'High and Stable Speed',
      unlimited: 'Unlimited Traffic',
      security: 'Absolute Security',
      unlock: 'Unblocks Youtube, Facebook, Tiktok, GPT, Gemini, ...',
      noads: 'Blocks YouTube Ads',
      notorrent: 'No Torrenting Allowed',
      amnezia_title: 'AmneziaWG 2.0 Protocol',
      amnezia_desc: 'Personally, I\'ve tested numerous VPN protocols and decided to use AmneziaWG. It is fully <a href="https://github.com/amnezia-vpn" target="_blank" style="color:var(--accent-color);text-decoration:underline;">open-source</a>, ensuring transparency and reliability. It effectively bypasses DPI tracking, operates stably, and reduces battery consumption.'
    },
    pricing: {
      title: 'Monthly Pricing',
      device_1: '1 Device',
      device_2: '2 Devices',
      device_3: '3 Devices',
      device_4: '4+ Devices',
      price_1: '90 RUB',
      price_2: '170 RUB',
      price_3: '240 RUB',
      price_4: '75 RUB',
      period: '/ month',
      period_device: '/ device / month',
      trial: '1-2 Days Free Trial',
      refund: 'During your usage, proportional refunds are available if unsatisfied.'
    },
    setup: {
      title: 'Setup & Downloads',
      download: 'Download Client',
      guide: 'View Connection Guide',
      router_note: 'Can be installed on routers (e.g. Keenetic). Note that cheaper models often limit VPN speeds (avg. ~45Mbps).',
      gallery_video: 'Video Guide',
      gallery_screenshot: 'Step',
      gallery_desc: 'Follow these steps carefully to import your configuration.',
      steps: {
        ios: [
          'Install AmneziaWG from App Store:\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Open the config file (.conf) from the chat, then tap the "Share" icon, and tap "Share" again.',
          'Swipe to the far right, select the "More" (3 dots) menu, then find and select "AmneziaWG" from the app list.',
          'Tap "Allow" when prompted to add VPN configurations.',
          'Select the profile and toggle the switch to activate.'
        ],
        android: [
          'Install AmneziaWG from Google Play:\nhttps://play.google.com/store/apps/details?id=org.amnezia.awg',
          'Save the configuration file (.conf) to your Downloads folder.',
          'Open the app and tap the "+" (Plus) button in the bottom right.\nSelect "Import from file or archive".',
          'Find and select the saved .conf file.',
          'Tap the connection name to activate.'
        ],
        windows: [
          'Note: To download the correct version, you should know your CPU architecture (amd64, arm64 or x86). If unsure, please contact me for help.',
          'Download and install the AmneziaWG client. Open the application.\nhttps://github.com/amnezia-vpn/amneziawg-windows-client/releases',
          'Click "Import tunnel(s) from file".',
          'Select your .conf file and click "Activate".'
        ],
        macos: [
          'Install AmneziaWG from the App Store and launch the app.\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Click "Import tunnel(s) from file" and select your .conf file.',
          'Tap "Allow" for system permissions and click "Activate" to connect.'
        ]
      }
    },
    contacts: {
      title: 'Contact',
      reach_out: 'Contact me via Telegram, WhatsApp, or Facebook to get started.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How do simultaneous device connections work?',
      a1: 'With a single connection package, you can install the VPN on multiple devices, but only one device can be actively connected at a time. For example, you can add it to both your phone and laptop; when you want to use it on your phone, simply turn it off on the laptop, and vice versa.',
      q2: 'Is the AmneziaWG app safe?',
      a2: 'Absolutely. Developed by the Amnezia team, it is a fully transparent, open-source application. With over 500k+ downloads on Google Play alone and excellent ratings across official platforms, you can trust its security completely.',
      q3: 'What are the pros and cons of the AmneziaWG protocol?',
      a3: '<b>Pros:</b> High speed, extreme stability, excellent battery efficiency, and flawless DPI circumvention.\n\n<b>Cons:</b> The app is designed for maximum simplicity, so it does not support "routing" (a feature seen in HappPlus/v2ray/Hiddify that lets you dictate which apps/sites bypass the VPN). It also does not provide a huge list of servers to constantly switch between (we consider this a waste of time; providing one highly-optimized main server is vastly superior).',
      q4: 'Can I use this VPN for Torrenting?',
      a4: 'Unfortunately, no. Torrenting (P2P file sharing) is strictly prohibited. I primarily select server locations in Europe to ensure the lowest possible latency and best performance for you, but strict local datacenter policies in these regions completely forbid Torrenting traffic. Violating this can lead to automatic server bans.',
      q5: 'Can I choose a specific server location?',
      a5: 'Yes! You can freely specify your preferred country / location when you first ask me to create your connection. During your subscription, you can request to switch to a different location, but this is <b>not recommended</b>. Each server is already heavily optimized to provide you with the highest stability and speed from the start.',
      q6: 'How does the refund policy work?',
      a6: 'Very simply and fairly. If at any point during your subscription you feel the service no longer meets your needs, you can request a refund for the unused time. For example, if you paid for 30 days but stop using it after 10 days, you will immediately be refunded the exact remaining 2/3 of your payment.'
    }
  },
  vi: {
    hero: {
      title: 'Dịch vụ VPN<br>Nhanh & Bảo Mật',
      subtitle: 'Giao thức AmneziaWG 2.0. Mở khoá mọi trang web và ứng dụng.\nKhông quảng cáo YouTube. Dễ dàng sử dụng.',
      cta: 'Xem Bảng Giá',
      cta_secondary: 'Liên hệ'
    },
    nav: {
      about: 'Giới Thiệu',
      pricing: 'Bảng Giá',
      setup: 'Hướng Dẫn'
    },
    about: {
      title: 'Về Dịch Vụ',
      desc: 'Mình là cựu học sinh МГТУ им. Баумана, đang làm trong ngành IT.\nKhông bán VPN chuyên nghiệp, chỉ giúp mọi người có thêm một lựa chọn.\nKhông miễn phí nhưng giá hợp lý và ổn định.',
      disclaimer: 'Lưu ý: Nếu bạn cần dịch vụ miễn phí và chịu khó bỏ thời gian, bạn vẫn sẽ tìm được những ứng dụng miễn phí khác.',
      more: 'À, mình có nhận làm web, app, và nhận dạy lập trình 😅'
    },
    features: {
      title: 'Tính năng',
      speed: 'Tốc độ cao và ổn định',
      unlimited: 'Không giới hạn lưu lượng',
      security: 'Bảo mật tuyệt đối',
      unlock: 'Mở khoá Youtube, Facebook, Tiktok, GPT, Gemini,...',
      noads: 'Chặn Quảng Cáo YouTube',
      notorrent: 'Hạn chế: Không Torrent',
      amnezia_title: 'Giao thức AmneziaWG 2.0',
      amnezia_desc: 'Cá nhân mình đã thử nghiệm nhiều giao thức VPN khác nhau, và quyết định sử dụng AmneziaWG. Đây là phần mềm <a href="https://github.com/amnezia-vpn" target="_blank" style="color:var(--accent-color);text-decoration:underline;">mã nguồn mở</a>, đảm bảo tính minh bạch và độ tin cậy. Khả năng chống theo dõi phân tích gói tin (DPI) hiệu quả, hoạt động ổn định và tiết kiệm pin thiết bị.'
    },
    pricing: {
      title: 'Bảng Giá',
      device_1: '1 Thiết bị',
      device_2: '2 Thiết bị',
      device_3: '3 Thiết bị',
      device_4: 'Từ 4 thiết bị',
      price_1: '90 RUB',
      price_2: '170 RUB',
      price_3: '240 RUB',
      price_4: '75 RUB',
      period: '/ tháng',
      period_device: '/ thiết bị / tháng',
      trial: 'Dùng thử 1-2 ngày',
      refund: 'Trong quá trình sử dụng, hoàn tiền theo tỷ lệ nếu không hài lòng.'
    },
    setup: {
      title: 'Tải & Cài Đặt',
      download: 'Tải Ứng Dụng',
      guide: 'Xem Hướng Dẫn',
      router_note: 'Có thể cài VPN trên router (vd: Keenetic). Lưu ý các mẫu rẻ thường bị giới hạn tốc độ (khoảng 45mbps).',
      gallery_video: 'Video Hướng Dẫn',
      gallery_screenshot: 'Bước',
      gallery_desc: 'Làm theo các bước sau để nhập cấu hình VPN của bạn.',
      steps: {
        ios: [
          'Cài đặt AmneziaWG từ App Store:\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Mở file cấu hình (.conf) từ chat, sau đó chọn biểu tượng "Chia sẻ" (Share), chọn "Chia sẻ" một lần nữa',
          'Vuốt sang cuối cùng bên phải, chọn menu biểu tượng 3 chấm (More), sau đó tìm và chọn ứng dụng "AmneziaWG" trong danh sách.',
          'Chọn "Cho phép" (Allow) khi được hỏi về quyền thêm cấu hình VPN.',
          'Nhấn vào tên cấu hình và gạt nút để kích hoạt.'
        ],
        android: [
          'Cài đặt AmneziaWG từ Google Play:\nhttps://play.google.com/store/apps/details?id=org.amnezia.awg',
          'Lưu file cấu hình (.conf) vào thư mục Tải về (Downloads).',
          'Mở ứng dụng và nhấn nút dấu cộng (+) ở góc dưới bên phải.\nChọn dòng "Import from file or archive" (Nhập từ tệp hoặc kho lưu trữ).',
          'Tìm và chọn file .conf đã lưu.',
          'Nhấn vào tên kết nối để kích hoạt.'
        ],
        windows: [
          'Lưu ý để tải đúng phiên bản thì bạn phải biết chip của máy bạn là amd64 hay arm64 hay x86.\nNếu không chắc thì bạn liên hệ với mình để được hỗ trợ.',
          'Tải và cài đặt ứng dụng AmneziaWG. Mở ứng dụng lên.\nhttps://github.com/amnezia-vpn/amneziawg-windows-client/releases',
          'Nhấn nút "Import tunnel(s) from file".',
          'Chọn file .conf của bạn và nhấn "Activate" (Kích hoạt).'
        ],
        macos: [
          'Cài đặt AmneziaWG từ App Store và khởi chạy ứng dụng.\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Nhấn "Import tunnel(s) from file" và chọn file .conf của bạn.',
          'Chọn "Cho phép" (Allow) quyền hệ thống và nhấn "Activate" để kết nối.'
        ]
      }
    },
    contacts: {
      title: 'Liên Hệ',
      reach_out: 'Liên hệ qua Telegram, WhatsApp hoặc Facebook để đăng ký.'
    },
    faq: {
      title: 'Hỏi Đáp (FAQ)',
      q1: 'Thiết bị kết nối đồng thời được tính như thế nào?',
      a1: 'Khi mua một gói cước (1 connection) bạn vẫn có thể cài đặt cấu hình vào nhiều thiết bị, nhưng tại một thời điểm chỉ có ĐÚNG MỘT thiết bị kết nối được. Ví dụ, bạn có thể thêm cấu hình vào cả điện thoại và laptop, khi dùng ở điện thoại thì bạn tắt VPN ở laptop và ngược lại.',
      q2: 'Ứng dụng AmneziaWG có an toàn không?',
      a2: 'An tâm tuyệt đối. Được phát triển bởi đội ngũ uy tín, đây là phần mềm mã nguồn mở hoàn toàn minh bạch. Với cột mốc hơn 500k+ lượt tải trên Google Play và đánh giá cực tốt trên các chợ ứng dụng (App Store, Play Store), bạn hoàn toàn không phải lo ngại về bảo mật hay mã độc.',
      q3: 'Ưu nhược điểm của giao thức AmneziaWG là gì?',
      a3: '<b>Ưu điểm:</b> Tốc độ cao, siêu ổn định, cực kỳ tiết kiệm pin và vượt rào (DPI) xuất sắc.\n\n<b>Nhược điểm:</b> App hướng đến sự đơn giản tối đa nên không hỗ trợ chức năng "routing" (tính năng cho phép bạn định tuyến chọn đích danh app hay web nào đi qua VPN, và web nào không như trên các app HappPlus/v2ray/Hiddify). App cũng không có sẵn danh sách hàng tá máy chủ để đổi qua đổi lại (theo mình việc này khá mất thời gian, cung cấp 1 máy chủ tối ưu trơn tru nhất là đủ).',
      q4: 'Mình có thể dùng VPN để tải Torrent không?',
      a4: 'Rất tiếc là KHÔNG. Torrenting (tải file P2P ngang hàng) bị cấm hoàn toàn. Điểm mạnh của dịch vụ là mình chọn các máy chủ đặt tại Châu Âu để đảm bảo độ trễ thấp và mạng mượt nhất cho mọi người, tuy nhiên chính sách pháp luật tại các Datacenter khu vực này rất nghiêm ngặt và cấm triệt để Torrent. Việc cố tình tải sẽ làm chết máy chủ ảnh hưởng đến người khác.',
      q5: 'Có lựa chọn được quốc gia/server để kết nối không?',
      a5: 'Hoàn toàn được! Bạn có thể tự do yêu cầu quốc gia / location mà bạn muốn lúc nhờ mình tạo connection ban đầu. Trong quá trình sử dụng bạn vẫn có thể yêu cầu đổi sang location khác, tuy nhiên việc này <b>không được khuyến nghị</b> vì mỗi máy chủ đã được tối ưu sẵn nhằm mang lại sự ổn định và tốc độ cao nhất cho bạn.',
      q6: 'Chính sách hoàn tiền theo tỷ lệ diễn ra thế nào?',
      a6: 'Quy trình hoàn tiền rất sòng phẳng. Trong quá trình sử dụng, nếu bạn thấy dịch vụ không còn đáp ứng được nhu cầu, bạn cứ thoải mái yêu cầu hoàn tiền cho thời gian chưa dùng. Giả sử gói 30 ngày mà bạn mới dùng được 10 ngày, bạn sẽ được hoàn y nguyên 2/3 số tiền chưa dùng đến.'
    }
  },
  ru: {
    hero: {
      title: 'VPN-сервис<br>Быстро и Надежно',
      subtitle: 'Протокол AmneziaWG 2.0. Разблокирует все сайты и приложения.\nБез рекламы YouTube. Прост в использовании.',
      cta: 'Посмотреть цены',
      cta_secondary: 'Контакты'
    },
    nav: {
      about: 'О сервисе',
      pricing: 'Цены',
      setup: 'Настройка'
    },
    about: {
      title: 'О сервисе',
      desc: 'Я выпускник МГТУ им. Баумана, работаю в сфере IT.\nЯ не продаю VPN профессионально, просто предлагаю еще один вариант.\nНе бесплатно, но по разумной цене и стабильно.',
      disclaimer: 'Примечание: Если вам нужен бесплатный сервис, вы все равно сможете найти бесплатные альтернативы, приложив немного усилий.',
      more: 'Кстати, я также занимаюсь разработкой сайтов/приложений и обучением программированию 😅'
    },
    features: {
      title: 'Особенности',
      speed: 'Высокая и стабильная скорость',
      unlimited: 'Безлимитный трафик',
      security: 'Абсолютная безопасность',
      unlock: 'Разблокировка Youtube, Facebook, Tiktok, GPT, Gemini,...',
      noads: 'Без рекламы в YouTube',
      notorrent: 'Запрет на Торренты',
      amnezia_title: 'Протокол AmneziaWG 2.0',
      amnezia_desc: 'Лично я перепробовал множество VPN-протоколов и решил использовать AmneziaWG. Это полностью <a href="https://github.com/amnezia-vpn" target="_blank" style="color:var(--accent-color);text-decoration:underline;">open-source</a> решение, что гарантирует прозрачность и надежность. Эффективно обходит DPI, работает стабильно и бережет заряд мобильных устройств.'
    },
    pricing: {
      title: 'Цены',
      device_1: '1 Устройство',
      device_2: '2 Устройства',
      device_3: '3 Устройства',
      device_4: 'От 4 устройств',
      price_1: '90 RUB',
      price_2: '170 RUB',
      price_3: '240 RUB',
      price_4: '75 RUB',
      period: '/ месяц',
      period_device: '/ устр-во / месяц',
      trial: '1-2 дня бесплатного теста',
      refund: 'Во время использования возможен пропорциональный возврат, если вы не удовлетворены.'
    },
    setup: {
      title: 'Настройка и Скачивание',
      download: 'Скачать клиент',
      guide: 'Инструкция по подключению',
      router_note: 'Можно установить на роутер (например, Keenetic). Дешевые модели часто ограничивают скорость до 45 Мбит/с.',
      gallery_video: 'Видео инструкция',
      gallery_screenshot: 'Шаг',
      gallery_desc: 'Внимательно выполните следующие шаги для настройки подключения.',
      steps: {
        ios: [
          'Установите AmneziaWG из App Store:\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Откройте файл конфигурации (.conf) из чата, затем нажмите значок "Поделиться" (Share) и еще раз "Поделиться".',
          'Пролистайте список приложений вправо до конца, нажмите "Еще" (три точки), затем найдите и выберите "AmneziaWG".',
          'Нажмите "Разрешить" (Allow) при запросе на добавление конфигураций VPN.',
          'Выберите профиль и включите соединение.'
        ],
        android: [
          'Установите AmneziaWG из Google Play:\nhttps://play.google.com/store/apps/details?id=org.amnezia.awg',
          'Сохраните файл конфигурации (.conf) в папку Загрузки (Downloads).',
          'Откройте приложение и нажмите кнопку "+" в правом нижнем углу.\nВыберите "Импорт из файла или архива" (Import from file or archive).',
          'Найдите и выберите сохраненный файл .conf.',
          'Нажмите на название подключения для активации.'
        ],
        windows: [
          'Примечание: Для выбора правильной версии вам нужно знать архитектуру вашего процессора (amd64, arm64 или x86). Если не уверены, свяжитесь со мной для помощи.',
          'Скачайте и установите клиент AmneziaWG. Окройте приложение.\nhttps://github.com/amnezia-vpn/amneziawg-windows-client/releases',
          'Нажмите "Импортировать туннели из файла" (Import tunnel from file).',
          'Выберите ваш файл .conf и нажмите "Activate" (Активировать).'
        ],
        macos: [
          'Установите AmneziaWG из App Store и запустите приложение.\nhttps://apps.apple.com/ru/app/amneziawg/id6478942365',
          'Нажмите "Импортировать туннели из файла" и выберите ваш файл .conf.',
          'Нажмите "Разрешить" (Allow) в системных настройках и нажмите "Activate" для подключения.'
        ]
      }
    },
    contacts: {
      title: 'Контакты',
      reach_out: 'Свяжитесь со мной через Telegram, WhatsApp или Facebook.'
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      q1: 'Как работают одновременные подключения устройств?',
      a1: 'При наличии одного подключения (1 connection) вы можете добавить профиль на несколько устройств. Однако активно использовать VPN может только ОДНО устройство одновременно. Вы можете установить профиль и на телефон, и на ноутбук: просто отключайте VPN на ноутбуке, когда пользуетесь телефоном, и наоборот.',
      q2: 'Безопасно ли приложение AmneziaWG?',
      a2: 'Абсолютно безопасно. Разработанное командой Amnezia, это проект с открытым исходным кодом. Благодаря более чем 500k+ загрузок в Google Play и высоким оценкам на официальных платформах (App Store, Play Store), вы можете быть полностью уверены в его надежности.',
      q3: 'Каковы плюсы и минусы протокола AmneziaWG?',
      a3: '<b>Плюсы:</b> Высокая скорость, невероятная стабильность, отличная экономия батареи и превосходный обход блокировок (DPI).\n\n<b>Минусы:</b> Приложение стремится к максимальной простоте, поэтому оно не поддерживает "маршрутизацию" (routing — функцию, позволяющую выбрать, какие приложения/сайты идут через VPN, как в HappPlus/v2ray/Hiddify). Кроме того, нет длинного списка серверов для постоянного переключения (по нашему мнению, это потеря времени — куда лучше иметь один отлично работающий оптимизированный сервер).',
      q4: 'Можно ли использовать VPN для загрузки торрентов?',
      a4: 'К сожалению, НЕТ. Торренты (обмен файлами P2P) строго запрещены. Я выбираю серверы в Европе для обеспечения минимальной задержки, но строгие политики местных дата-центров запрещают торрент-трафик. Нарушение может привести к блокировке сервера.',
      q5: 'Могу ли я выбрать локацию сервера?',
      a5: 'Да! Вы можете указать желаемую страну/локацию при начальном запросе на создание подключения. В процессе использования вы можете попросить сменить локацию, однако это <b>не рекомендуется</b>. Каждый сервер изначально настроен и оптимизирован для достижения максимальной стабильности и высокой скорости.',
      q6: 'Как работает политика возврата средств?',
      a6: 'Если в процессе использования вы поймете, что сервис больше не отвечает вашим нуждам, вы можете спокойно запросить возврат. Расчет производится пропорционально: например, если вы использовали 10 дней из 30-дневного тарифа, вам будут возвращены оставшиеся 2/3 от суммы.'
    }
  }
};

const i18n = createI18n({
  legacy: false, // Explicitly false for the Composition API setup
  locale: 'vi', // default locale
  fallbackLocale: 'en',
  messages,
});

export default i18n;
