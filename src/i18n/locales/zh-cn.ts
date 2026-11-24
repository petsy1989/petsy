/**
 * Simplified Chinese (简体中文) content — mirrors the English structure.
 * Generated from the Traditional Chinese locale using OpenCC (t2s).
 */

import { asset } from '@/lib/asset'
import type { Content } from './en'

const content = {
  nav: [
    { label: '关于我', href: '#about' },
    { label: '服务与收费', href: '#services' },
    { label: '相簿', href: '#gallery' },
    { label: '联络方式', href: '#contact' },
  ],

  header: {
    textMe: '传讯息给我',
  },

  hero: {
    eyebrow: '卡加利遛狗与宠物照顾服务',
    headline: '来时是客人，',
    headlineAccent: '离开时是家人。',
    body: '一个温暖、充满人情味的地方，提供日托与寄宿服务，让您的狗狗获得应有的关注、耐心与爱。拥有 5 年的实务经验，我深知每只狗狗都是独一无二的，而这正是牠们最特别的地方。',
    ctaPrimary: '透过 WhatsApp 传讯息给我',
    ctaSecondary: '查看收费',
    imageAlt: '一只戴著森林绿头巾的黄金猎犬，坐在温暖的米色背景前',
    photoCardTop: '照片回报',
    photoCardBottom: '每次照顾后提供',
  },

  marquee: [
    '每日散步',
    '到府探视',
    '过夜照顾',
    '幼犬探视',
    '照片回报',
    '单独与小型团体',
    '用药协助',
    '欢迎高龄犬',
  ],

  about: {
    eyebrow: '关于我',
    heading: '嗨，我是 Paige。',
    paragraphs: [
      '嗨，欢迎来到 Petsy！有趣的小知识：我的名字发音就像「pets」！你可以叫我 Paige。🐾',
      '我从小就是动物爱好者，照顾动物是我的热情所在。我曾在台湾和卡加利照顾过各种体型、年龄和个性的狗狗，包括日托、寄宿设施和动物收容所。',
      '在 Petsy，每只狗狗都会受到耐心、细心和满满的爱。我的目标是让您的狗狗在这里感到安全、舒适，就像在自己家一样。',
    ],
    portraitAlt: 'Petsy 的主人 Paige 与一群狗狗外出散步',
  },

  testimonials: [
    {
      quote: 'Paige 对 Oliver 非常好。她让牠保持平静，还总是传送最新动态给我们。我们一定会再找她。',
      author: 'Rodolfo F.',
      source: 'Rover',
      image: asset('/images/testimonial-play.png'),
      imageAlt: '两只快乐的狗狗在阳光充足的后院玩耍',
    },
    {
      quote: 'Paige 是很棒的遛狗人。她见到我的狗狗们总是非常兴奋，牠们见到她也好开心。',
      author: 'Bri K.',
      source: 'Rover',
      image: asset('/images/testimonial-rest.png'),
      imageAlt: '一只放松的狗狗在阳光窗边的亚麻床上休息',
    },
    {
      quote: 'Ollie 非常享受和 Pei-Tze 在一起的时光！！！牠回家时开心又放松，显然度过了美好的一天。',
      author: 'Rosana B.',
      source: 'Rover',
      image: asset('/images/testimonial-walk.png'),
      imageAlt: '一只快乐的狗狗走在树荫公园小径上',
    },
  ],

  services: {
    eyebrow: '服务与收费',
    heading: '日托、寄宿，以及一些贴心的额外服务。',
    body: '您的狗狗快乐舒适所需的一切，一路上都有满满的爱与关注。',
    mostBooked: '最受欢迎',
    askAbout: '询问此方案',
    plans: [
      {
        name: '日托',
        tagline: '弹性的日间照顾，适合需要运动、丰富活动和稳定作息的狗狗。',
        price: '$27',
        cadence: '半日（最多 4.5 小时）',
        features: [
          '全日方案：$48（最长 12 小时）',
          '用药与喂食协助',
          '照片与影片回报',
          '大自然散步',
          '屋顶户外露台玩乐',
        ],
      },
      {
        name: '寄宿',
        tagline: '过夜住宿，提供细心照顾、弹性安排和充分的一对一陪伴。',
        price: '$60',
        cadence: '每 24 小时',
        featured: true,
        features: [
          '额外时数：每小时 $5 上限为 48 美元',
          '预约制弹性入住与退房',
          '用药与喂食协助',
          '照片与影片回报',
          '大自然散步',
          '屋顶户外露台玩乐',
        ],
      },
    ],
    alaCarteHeading: '额外服务',
    alaCarte: [
      {
        name: '刷牙',
        price: '$10',
        note: '为需要额外协助保持牙齿清洁的狗狗提供温和刷牙服务。',
      },
      {
        name: '梳毛',
        price: '$10',
        note: '轻度掉毛的快速梳毛。严重掉毛或打结从 $15 起。',
      },
    ],
    footnote:
      '日托收费分为半日与全日方案。寄宿以每 24 小时 $60 计算，额外时数每小时 $5。首次见面认识完全免费。',
  },

  gallery: {
    eyebrow: '常客们',
    heading: '一窥 Petsy 的日常。🐾',
    images: [
      { src: asset('/images/dog-pug.jpg'), alt: '一只戴著鼠尾草绿头巾的浅棕色巴哥犬', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-corgi.jpg'), alt: '一只柯基犬在公园草地上小跑', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-rest.jpg'), alt: '一只毛茸茸的梗犬蜷缩在亚麻沙发上睡觉', ratio: 'aspect-[4/5]' },
      { src: asset('/images/dog-collie.jpg'), alt: '一只边境牧羊犬跃起接球的瞬间', ratio: 'aspect-[4/5]' },
    ],
  },

  contact: {
    eyebrow: '联络方式',
    heading: '来认识您的狗狗吧。',
    body: '带您的狗狗来探索牠的新家。第一个小时免费，让牠们安心适应、开心玩耍。🐾',
    responseNote: '我通常会在几个小时内回复，周一至周日皆可。',
    askAnything: '有问题尽管问',
    emailLabel: '电子邮件',
    phoneLabel: '电话',
    newClientsLabel: '新客户',
    intakeFormLabel: '入住资料表',
    serviceAreaLabel: '服务区域',
    copied: '已复制',
  },

  footer: {
    intakeForm: '入住资料表',
  },

  whatsappMessage: '嗨 Paige！我在网路上看到 Petsy，想询问狗狗照顾的服务。',

  intake: {
    eyebrow: '入住资料表',
    heading: '跟我说说您的狗狗。',
    intro: '分享一些关于您狗狗的资讯，让我了解牠的作息、个性，以及什么能让牠感到自在。',
    imageAlt: 'Paige 与狗狗相处的时光',
    thankYou: '谢谢您！',
    submittedBody: '您的入住资料表已送出，Paige 会尽快与您联络。',
    sendAnother: '再送出一份资料表',
    sections: {
      yourDetails: '您的资料',
      aboutDog: '关于您的狗狗',
      vetCare: '兽医照护',
      behaviour: '行为与社会化',
      careComfort: '照顾与舒适',
    },
    fields: {
      ownerName: '您的姓名',
      ownerPhone: '电话号码',
      dogName: '狗狗的名字',
      breed: '品种',
      dateOfBirth: '出生日期',
      dobYear: '年',
      dobMonth: '月',
      dobDay: '日',
      weight: '体重',
      weightLb: '磅',
      weightKg: '公斤',
      sex: '性别',
      altered: '结扎状态',
      vetClinic: '兽医诊所',
      vetContact: '兽医联络资讯',
      concernsPrompt: '以下情况适用吗？',
      biteHistory: '是否有低吼、咬人或攻击的纪录？',
      biteDetails: '请说明任何事件或疑虑',
      triggers: '我应该知道哪些恐惧或触发因素？',
      triggersPlaceholder: '请提供例子以及帮助牠们的有效方法。',
      homeAlone: '牠可以独自在家多久？',
      favoriteActivities: '最喜欢的活动',
      personality: '用三个词形容您的狗狗',
      photo: '狗狗的照片',
      photoPlaceholder: '尚未选择照片',
      photoUpload: '上传',
      photoRemove: '移除',
      photoError: '无法读取这张照片，请改用 JPEG 或 PNG。',
    },
    habits: [
      {
        title: '散步与户外习惯',
        questions: [
          {
            key: 'walksPerDay',
            label: '狗狗平常一天散步几次？',
          },
          {
            key: 'walkLength',
            label: '每次散步多久？',
          },
          {
            key: 'dogPark',
            label: '狗狗去过狗公园吗？',
            options: ['是', '否'],
            detail: { when: ['是'], label: '若有，是哪一种？', options: ['有围栏的狗公园', '可不系绳的区域'] },
          },
          {
            key: 'reactDogs',
            label: '狗狗遇到其他狗狗时通常有什么反应？',
            options: ['友善、爱社交', '害羞或紧张', '兴奋或过度活泼', '容易有反应（吠叫、扑冲等）', '喜欢独处', '其他'],
            detail: { when: ['其他'], label: '请说明' },
          },
          {
            key: 'reactPeople',
            label: '狗狗遇到不熟悉的人时有什么反应？',
            options: ['友善', '害羞或紧张', '兴奋', '害怕或容易有反应', '其他'],
            detail: { when: ['其他'], label: '请说明' },
          },
        ],
      },
      {
        title: '如厕习惯',
        questions: [
          {
            key: 'pottyTrained',
            label: '狗狗已经完全学会定点如厕了吗？',
            options: ['是', '大致上是', '还在训练中'],
            detail: { when: ['大致上是', '还在训练中'], label: '请提供详细说明' },
          },
          {
            key: 'pottyFreq',
            label: '狗狗通常多久需要上一次厕所？',
          },
          {
            key: 'pottyWhere',
            label: '狗狗平常在哪里如厕？',
            options: ['户外', '尿布垫', '两者皆有', '其他'],
            detail: { when: ['其他'], label: '请说明' },
          },
        ],
      },
      {
        title: '睡眠习惯',
        questions: [
          {
            key: 'sleepWhere',
            label: '狗狗平常睡在哪里？',
            options: ['笼子里', '自己的床', '主人的床上', '家中自由活动', '其他'],
            detail: { when: ['其他'], label: '请说明' },
          },
        ],
      },
    ],
    careQuestions: [
      {
        key: 'feedTimes',
        label: '狗狗一天需要喂几餐？',
        options: ['1 餐', '2 餐', '3 餐'],
      },
      {
        key: 'feedAmount',
        label: '狗狗每餐通常吃多少？',
      },
      {
        key: 'medication',
        label: '狗狗是否服用任何药物或保健品？',
        options: ['是', '否'],
        detail: { when: ['是'], label: '若有，请提供：药物或保健品名称、剂量、给药时间（何时需要给药？）' },
      },
      {
        key: 'allergies',
        label: '狗狗是否有已知的过敏或敏感？',
        options: ['是', '否'],
        detail: { when: ['是'], label: '若有，请说明' },
      },
    ],
    selectOne: '请选择',
    sexOptions: ['母', '公'],
    alteredOptions: ['已结扎', '未结扎', '不适用'],
    concernOptions: [
      '护食行为',
      '分离焦虑',
      '追逐猎物本能',
      '试图逃脱',
      '以上皆无',
    ],
    submit: '送出入住资料表',
    submitting: '传送中…',
    submitNote: '您的回答会直接传送到 Paige 的收件匣。',
    submitError: '传送时发生问题，请再试一次，或直接寄电子邮件至 {email}。',
    notProvided: '未提供',
    emailSubject: '{dogName} 的新入住资料表',
    emailLabels: {
      ownerName: '主人姓名',
      ownerPhone: '主人电话',
      dogName: '狗狗名字',
      breed: '品种',
      dateOfBirth: '出生日期',
      weight: '体重',
      sex: '性别',
      altered: '结扎状态',
      vetClinic: '兽医诊所',
      vetContact: '兽医联络资讯',
      concerns: '行为疑虑',
      biteHistory: '低吼、咬人或攻击纪录',
      biteDetails: '咬人纪录详情',
      triggers: '恐惧与触发因素',
      homeAlone: '独自在家时间',
      favoriteActivities: '最喜欢的活动',
      personality: '用三个词形容您的狗狗',
    },
  },
} as unknown as Content

export default content
