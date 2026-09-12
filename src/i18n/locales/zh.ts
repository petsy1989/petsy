/**
 * Traditional Chinese (繁體中文) content — mirrors the English structure.
 */

import { asset } from '@/lib/asset'
import type { Content } from './en'

const content = {
  nav: [
    { label: '關於我', href: '#about' },
    { label: '服務與收費', href: '#services' },
    { label: '相簿', href: '#gallery' },
    { label: '聯絡方式', href: '#contact' },
  ],

  header: {
    textMe: '傳訊息給我',
  },

  hero: {
    eyebrow: '卡加利遛狗與寵物照顧服務',
    headline: '來時是客人，',
    headlineAccent: '離開時是家人。',
    body: '一個溫暖、充滿人情味的地方，提供日托與寄宿服務，讓您的狗狗獲得應有的關注、耐心與愛。擁有 5 年的實務經驗，我深知每隻狗狗都是獨一無二的，而這正是牠們最特別的地方。',
    ctaPrimary: '透過 WhatsApp 傳訊息給我',
    ctaSecondary: '查看收費',
    imageAlt: '一隻戴著森林綠頭巾的黃金獵犬，坐在溫暖的米色背景前',
    photoCardTop: '照片回報',
    photoCardBottom: '每次照顧後提供',
  },

  marquee: [
    '每日散步',
    '到府探視',
    '過夜照顧',
    '幼犬探視',
    '照片回報',
    '單獨與小型團體',
    '用藥協助',
    '歡迎高齡犬',
  ],

  about: {
    eyebrow: '關於我',
    heading: '嗨，我是 Paige。',
    paragraphs: [
      '嗨，歡迎來到 Petsy！有趣的小知識：我的名字發音就像「pets」！你可以叫我 Paige。🐾',
      '我從小就是動物愛好者，照顧動物是我的熱情所在。我曾在台灣和卡加利照顧過各種體型、年齡和個性的狗狗，包括日托、寄宿設施和動物收容所。',
      '在 Petsy，每隻狗狗都會受到耐心、細心和滿滿的愛。我的目標是讓您的狗狗在這裡感到安全、舒適，就像在自己家一樣。',
    ],
    portraitAlt: 'Petsy 的主人 Paige 與一群狗狗外出散步',
  },

  testimonials: [
    {
      quote: 'Paige 對 Oliver 非常好。她讓牠保持平靜，還總是傳送最新動態給我們。我們一定會再找她。',
      author: 'Rodolfo F.',
      source: 'Rover',
      image: asset('/images/testimonial-play.png'),
      imageAlt: '兩隻快樂的狗狗在陽光充足的後院玩耍',
    },
    {
      quote: 'Paige 是很棒的遛狗人。她見到我的狗狗們總是非常興奮，牠們見到她也好開心。',
      author: 'Bri K.',
      source: 'Rover',
      image: asset('/images/testimonial-rest.png'),
      imageAlt: '一隻放鬆的狗狗在陽光窗邊的亞麻床上休息',
    },
    {
      quote: 'Ollie 非常享受和 Pei-Tze 在一起的時光！！！牠回家時開心又放鬆，顯然度過了美好的一天。',
      author: 'Rosana B.',
      source: 'Rover',
      image: asset('/images/testimonial-walk.png'),
      imageAlt: '一隻快樂的狗狗走在樹蔭公園小徑上',
    },
  ],

  services: {
    eyebrow: '服務與收費',
    heading: '日托、寄宿，以及一些貼心的額外服務。',
    body: '您的狗狗快樂舒適所需的一切，一路上都有滿滿的愛與關注。',
    mostBooked: '最受歡迎',
    askAbout: '詢問此方案',
    plans: [
      {
        name: '日托',
        tagline: '彈性的日間照顧，適合需要運動、豐富活動和穩定作息的狗狗。',
        price: '$27',
        cadence: '半日（最多 6 小時）',
        features: [
          '全日方案：$48（超過 6 小時）',
          '用藥與餵食協助',
          '照片與影片回報',
          '大自然散步',
          '屋頂戶外露台玩樂',
        ],
      },
      {
        name: '寄宿',
        tagline: '過夜住宿，提供細心照顧、彈性安排和充分的一對一陪伴。',
        price: '$60',
        cadence: '每 24 小時',
        featured: true,
        features: [
          '額外時數：每小時 $5',
          '預約制彈性入住與退房',
          '用藥與餵食協助',
          '照片與影片回報',
          '大自然散步',
          '屋頂戶外露台玩樂',
        ],
      },
    ],
    alaCarteHeading: '額外服務',
    alaCarte: [
      {
        name: '刷牙',
        price: '$10',
        note: '為需要額外協助保持牙齒清潔的狗狗提供溫和刷牙服務。',
      },
      {
        name: '梳毛',
        price: '$10',
        note: '輕度掉毛的快速梳毛。嚴重掉毛或打結從 $15 起。',
      },
    ],
    footnote:
      '日托收費分為半日與全日方案。寄宿以每 24 小時 $60 計算，額外時數每小時 $5。首次見面認識完全免費。',
  },

  gallery: {
    eyebrow: '常客們',
    heading: '一窺 Petsy 的日常。🐾',
    images: [
      { src: asset('/images/dog-pug.jpg'), alt: '一隻戴著鼠尾草綠頭巾的淺棕色巴哥犬', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-corgi.jpg'), alt: '一隻柯基犬在公園草地上小跑', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-rest.jpg'), alt: '一隻毛茸茸的梗犬蜷縮在亞麻沙發上睡覺', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-collie.jpg'), alt: '一隻邊境牧羊犬躍起接球的瞬間', ratio: 'aspect-[4/5]' },
    ],
  },

  contact: {
    eyebrow: '聯絡方式',
    heading: '來認識您的狗狗吧。',
    body: '帶您的狗狗來探索牠的新家。第一個小時免費，讓牠們安心適應、開心玩耍。🐾',
    responseNote: '我通常會在幾個小時內回覆，週一至週日皆可。',
    askAnything: '有問題儘管問',
    emailLabel: '電子郵件',
    phoneLabel: '電話',
    newClientsLabel: '新客戶',
    intakeFormLabel: '入住資料表',
    serviceAreaLabel: '服務區域',
    copied: '已複製',
  },

  footer: {
    intakeForm: '入住資料表',
  },

  whatsappMessage: '嗨 Paige！我在網路上看到 Petsy，想詢問狗狗照顧的服務。',

  intake: {
    eyebrow: '入住資料表',
    heading: '跟我說說您的狗狗。',
    intro: '分享一些關於您狗狗的資訊，讓我了解牠的作息、個性，以及什麼能讓牠感到自在。',
    imageAlt: 'Paige 與狗狗相處的時光',
    thankYou: '謝謝您！',
    submittedBody: '您的入住資料表已送出，Paige 會盡快與您聯絡。',
    sendAnother: '再送出一份資料表',
    sections: {
      yourDetails: '您的資料',
      aboutDog: '關於您的狗狗',
      vetCare: '獸醫照護',
      behaviour: '行為與社會化',
      careComfort: '照顧與舒適',
    },
    fields: {
      ownerName: '您的姓名',
      ownerPhone: '電話號碼',
      dogName: '狗狗的名字',
      breed: '品種',
      age: '年齡',
      agePlaceholder: '例如：3 歲',
      sex: '性別',
      altered: '結紮狀態',
      vetClinic: '獸醫診所',
      vetContact: '獸醫聯絡資訊',
      peopleBehaviour: '牠對陌生人如何？',
      dogBehaviour: '牠對陌生狗狗如何？',
      otherBehaviour: '還有其他關於牠行為的事嗎？',
      offLeash: '牠有放牽繩活動的經驗嗎？',
      concernsPrompt: '以下情況適用嗎？',
      biteHistory: '是否有低吼、咬人或攻擊的紀錄？',
      biteDetails: '請說明任何事件或疑慮',
      triggers: '我應該知道哪些恐懼或觸發因素？',
      triggersPlaceholder: '請提供例子以及幫助牠們的有效方法。',
      homeAlone: '牠可以獨自在家多久？',
      favoriteActivities: '最喜歡的活動',
      medicalNeeds: '疾病、過敏或特殊需求',
      medications: '藥物與服用說明',
      treats: '我可以給零食嗎？哪種、多久一次？',
      avoidFoods: '需要避免的食物或零食',
      personality: '用三個詞形容您的狗狗',
      additionalNotes: '還有什麼能讓牠更有家的感覺？',
    },
    selectOne: '請選擇',
    sexOptions: ['母', '公', '不便透露'],
    alteredOptions: ['已結紮', '未結紮', '不適用'],
    concernOptions: [
      '護食行為',
      '分離焦慮',
      '追逐獵物本能',
      '試圖逃脫',
      '以上皆無',
    ],
    submit: '送出入住資料表',
    submitting: '傳送中…',
    submitNote: '您的回答會直接傳送到 Paige 的收件匣。',
    submitError: '傳送時發生問題，請再試一次，或直接寄電子郵件至 {email}。',
    notProvided: '未提供',
    emailSubject: '{dogName} 的新入住資料表',
    emailLabels: {
      ownerName: '主人姓名',
      ownerPhone: '主人電話',
      dogName: '狗狗名字',
      breed: '品種',
      age: '年齡',
      sex: '性別',
      altered: '結紮狀態',
      vetClinic: '獸醫診所',
      vetContact: '獸醫聯絡資訊',
      peopleBehaviour: '對陌生人的行为',
      dogBehaviour: '對陌生狗狗的行為',
      otherBehaviour: '其他行為備註',
      offLeash: '放牽繩經驗',
      concerns: '行為疑慮',
      biteHistory: '低吼、咬人或攻擊紀錄',
      biteDetails: '咬人紀錄詳情',
      triggers: '恐懼與觸發因素',
      homeAlone: '獨自在家時間',
      medicalNeeds: '疾病、過敏或特殊需求',
      medications: '藥物',
      favoriteActivities: '最喜歡的活動',
      treats: '零食許可',
      avoidFoods: '需避免的食物或零食',
      personality: '用三個詞形容您的狗狗',
      additionalNotes: '其他舒適資訊',
    },
  },
} as unknown as Content

export default content
