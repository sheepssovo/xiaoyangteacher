const words = [
  {
    "word": "ability",
    "phonetic": "/əˈbɪləti/",
    "meaning": "能力",
    "example": "She has the ability to learn quickly.",
    "translation": "她有快速学习的能力。"
  },
  {
    "word": "able",
    "phonetic": "/ˈeɪbl/",
    "meaning": "能够的",
    "example": "He is able to swim.",
    "translation": "他会游泳。"
  },
  {
    "word": "about",
    "phonetic": "/əˈbaʊt/",
    "meaning": "关于；大约",
    "example": "We talked about school.",
    "translation": "我们谈论了学校。"
  },
  {
    "word": "above",
    "phonetic": "/əˈbʌv/",
    "meaning": "在上方",
    "example": "The lamp is above the table.",
    "translation": "灯在桌子上方。"
  },
  {
    "word": "accept",
    "phonetic": "/əkˈsept/",
    "meaning": "接受",
    "example": "She accepted the offer.",
    "translation": "她接受了这个提议。"
  },
  {
    "word": "access",
    "phonetic": "/ˈækses/",
    "meaning": "使用权；进入",
    "example": "Students have access to the library.",
    "translation": "学生可以使用图书馆。"
  },
  {
    "word": "accident",
    "phonetic": "/ˈæksɪdənt/",
    "meaning": "事故",
    "example": "He had a car accident.",
    "translation": "他出了车祸。"
  },
  {
    "word": "achieve",
    "phonetic": "/əˈtʃiːv/",
    "meaning": "实现",
    "example": "She achieved her goal.",
    "translation": "她实现了目标。"
  },
  {
    "word": "across",
    "phonetic": "/əˈkrɔːs/",
    "meaning": "穿过",
    "example": "They walked across the street.",
    "translation": "他们穿过了街道。"
  },
  {
    "word": "action",
    "phonetic": "/ˈækʃn/",
    "meaning": "行动",
    "example": "We need action now.",
    "translation": "我们现在需要行动。"
  },
  {
    "word": "active",
    "phonetic": "/ˈæktɪv/",
    "meaning": "积极的",
    "example": "He is active in class.",
    "translation": "他在课堂上很积极。"
  },
  {
    "word": "activity",
    "phonetic": "/ækˈtɪvəti/",
    "meaning": "活动",
    "example": "Reading is a useful activity.",
    "translation": "阅读是一项有益的活动。"
  },
  {
    "word": "address",
    "phonetic": "/əˈdres/",
    "meaning": "地址",
    "example": "Write your address here.",
    "translation": "把你的地址写在这里。"
  },
  {
    "word": "adult",
    "phonetic": "/əˈdʌlt/",
    "meaning": "成年人",
    "example": "Every adult should vote.",
    "translation": "每个成年人都应投票。"
  },
  {
    "word": "advice",
    "phonetic": "/ədˈvaɪs/",
    "meaning": "建议",
    "example": "Thank you for your advice.",
    "translation": "谢谢你的建议。"
  },
  {
    "word": "affect",
    "phonetic": "/əˈfekt/",
    "meaning": "影响",
    "example": "Weather affects travel.",
    "translation": "天气影响出行。"
  },
  {
    "word": "afraid",
    "phonetic": "/əˈfreɪd/",
    "meaning": "害怕的",
    "example": "She is afraid of dogs.",
    "translation": "她害怕狗。"
  },
  {
    "word": "after",
    "phonetic": "/ˈæftər/",
    "meaning": "在……之后",
    "example": "Let's go after lunch.",
    "translation": "我们午饭后去。"
  },
  {
    "word": "again",
    "phonetic": "/əˈɡen/",
    "meaning": "再次",
    "example": "Please try again.",
    "translation": "请再试一次。"
  },
  {
    "word": "against",
    "phonetic": "/əˈɡenst/",
    "meaning": "反对",
    "example": "They voted against it.",
    "translation": "他们投票反对。"
  },
  {
    "word": "age",
    "phonetic": "/eɪdʒ/",
    "meaning": "年龄",
    "example": "Age is just a number.",
    "translation": "年龄只是个数字。"
  },
  {
    "word": "agree",
    "phonetic": "/əˈɡriː/",
    "meaning": "同意",
    "example": "I agree with you.",
    "translation": "我同意你的看法。"
  },
  {
    "word": "air",
    "phonetic": "/er/",
    "meaning": "空气",
    "example": "Fresh air is important.",
    "translation": "新鲜空气很重要。"
  },
  {
    "word": "airport",
    "phonetic": "/ˈerpɔːrt/",
    "meaning": "机场",
    "example": "We arrived at the airport.",
    "translation": "我们到达了机场。"
  },
  {
    "word": "alive",
    "phonetic": "/əˈlaɪv/",
    "meaning": "活着的",
    "example": "The fish is still alive.",
    "translation": "这条鱼还活着。"
  },
  {
    "word": "allow",
    "phonetic": "/əˈlaʊ/",
    "meaning": "允许",
    "example": "They allow photos here.",
    "translation": "这里允许拍照。"
  },
  {
    "word": "almost",
    "phonetic": "/ˈɔːlmoʊst/",
    "meaning": "几乎",
    "example": "I'm almost ready.",
    "translation": "我快准备好了。"
  },
  {
    "word": "alone",
    "phonetic": "/əˈloʊn/",
    "meaning": "独自",
    "example": "He lives alone.",
    "translation": "他独自生活。"
  },
  {
    "word": "already",
    "phonetic": "/ɔːlˈredi/",
    "meaning": "已经",
    "example": "I already know that.",
    "translation": "我已经知道了。"
  },
  {
    "word": "also",
    "phonetic": "/ˈɔːlsoʊ/",
    "meaning": "也",
    "example": "She also likes music.",
    "translation": "她也喜欢音乐。"
  },
  {
    "word": "always",
    "phonetic": "/ˈɔːlweɪz/",
    "meaning": "总是",
    "example": "He is always on time.",
    "translation": "他总是准时。"
  },
  {
    "word": "among",
    "phonetic": "/əˈmʌŋ/",
    "meaning": "在……之中",
    "example": "She is among friends.",
    "translation": "她在朋友们中间。"
  },
  {
    "word": "amount",
    "phonetic": "/əˈmaʊnt/",
    "meaning": "数量",
    "example": "The amount is small.",
    "translation": "数量很少。"
  },
  {
    "word": "ancient",
    "phonetic": "/ˈeɪnʃənt/",
    "meaning": "古代的",
    "example": "This is an ancient city.",
    "translation": "这是一座古城。"
  },
  {
    "word": "animal",
    "phonetic": "/ˈænɪml/",
    "meaning": "动物",
    "example": "The panda is a lovely animal.",
    "translation": "熊猫是一种可爱的动物。"
  },
  {
    "word": "answer",
    "phonetic": "/ˈænsər/",
    "meaning": "回答",
    "example": "Can you answer it?",
    "translation": "你能回答它吗？"
  },
  {
    "word": "any",
    "phonetic": "/ˈeni/",
    "meaning": "任何",
    "example": "Do you have any questions?",
    "translation": "你有任何问题吗？"
  },
  {
    "word": "appear",
    "phonetic": "/əˈpɪr/",
    "meaning": "出现",
    "example": "A rainbow appeared.",
    "translation": "彩虹出现了。"
  },
  {
    "word": "apply",
    "phonetic": "/əˈplaɪ/",
    "meaning": "申请；应用",
    "example": "He applied for the job.",
    "translation": "他申请了这份工作。"
  },
  {
    "word": "area",
    "phonetic": "/ˈeriə/",
    "meaning": "地区",
    "example": "This area is quiet.",
    "translation": "这个地区很安静。"
  },
  {
    "word": "argue",
    "phonetic": "/ˈɑːrɡjuː/",
    "meaning": "争论",
    "example": "Don't argue with him.",
    "translation": "别和他争论。"
  },
  {
    "word": "around",
    "phonetic": "/əˈraʊnd/",
    "meaning": "周围",
    "example": "Look around carefully.",
    "translation": "仔细看看周围。"
  },
  {
    "word": "arrive",
    "phonetic": "/əˈraɪv/",
    "meaning": "到达",
    "example": "We arrived early.",
    "translation": "我们早到了。"
  },
  {
    "word": "art",
    "phonetic": "/ɑːrt/",
    "meaning": "艺术",
    "example": "She studies art.",
    "translation": "她学习艺术。"
  },
  {
    "word": "article",
    "phonetic": "/ˈɑːrtɪkl/",
    "meaning": "文章",
    "example": "I read the article.",
    "translation": "我读了这篇文章。"
  },
  {
    "word": "artist",
    "phonetic": "/ˈɑːrtɪst/",
    "meaning": "艺术家",
    "example": "He is a famous artist.",
    "translation": "他是一位著名艺术家。"
  },
  {
    "word": "ask",
    "phonetic": "/æsk/",
    "meaning": "询问",
    "example": "Ask your teacher.",
    "translation": "问你的老师。"
  },
  {
    "word": "attention",
    "phonetic": "/əˈtenʃn/",
    "meaning": "注意",
    "example": "Pay attention in class.",
    "translation": "上课要认真听讲。"
  },
  {
    "word": "attitude",
    "phonetic": "/ˈætɪtuːd/",
    "meaning": "态度",
    "example": "A good attitude helps.",
    "translation": "好的态度很有帮助。"
  },
  {
    "word": "available",
    "phonetic": "/əˈveɪləbl/",
    "meaning": "可获得的",
    "example": "Tickets are available now.",
    "translation": "现在可以买票了。"
  }
];