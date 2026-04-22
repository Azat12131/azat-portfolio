export type Project = {
  id: number
  title: string
  category: string
  year: string
  image: string
  empty?: boolean
}

export type CaseArticle = {
  title: string
  category: string
  year: string
  heroImage?: string
  intro?: string
  layout?: 'default' | 'story'
  sections: {
    title?: string
    text?: string
    images?: string[]
  }[]
}

export const projects: Project[] = [
 {
  id: 8,
  title: 'Афиши',
  category: 'Графический дизайн / Постеры',
  year: '2026',
  image: '/projects/poster-cover3.jpg',
},
  {
    id: 6,
    title: 'Полиграфия',
    category: 'Полиграфия',
    year: '2025',
    image: '/projects/print-design-cover4.jpg',
    empty: false,
  },
    {
    id: 3,
    title: 'Логотипы',
    category: 'Логотипы',
    year: '2026',
    image: '/projects/project-logo2.jpg',
  },
  {
    id: 2,
    title: 'Кафе Yume City',
    category: 'Айдентика / Брендинг',
    year: '2026',
    image: '/projects/project-caty2.jpg',
  },
    {
    id: 1,
    title: 'Студия звукозаписи SoundRoom',
    category: 'Веб-дизайн / Брендирование / Типография',
    year: '2025',
    image: '/projects/soundroom2.png',
  },
  {
    id: 4,
    title: 'Новый кейс',
    category: 'Арт-направление / Digital',
    year: '2026',
    image: '/projects/emptyproject.jpg',
  },
  {
    id: 5,
    title: 'Новый кейс',
    category: 'Презентация / Дизайн',
    year: '2026',
    image: '/projects/emptyproject.jpg',
  },
]

export const caseArticles: Record<number, CaseArticle> = {
  1: {
    title: 'Концепт SoundRoom',
    category: 'Веб-дизайн / Брендирование / Типография',
    year: '2025',
    heroImage: '/projects/project-sr.jpg',
    intro:
      'Концепт премиального digital-опыта для fashion-бренда. Основной акцент сделан на сильной типографике, чистой композиции и выразительной подаче продукта.',
    sections: [
      {
        title: 'Задача',
        text:
          'Создать визуально сильный сайт-концепт, который ощущается современно, дорого и уверенно. Важно было передать атмосферу бренда через композицию, контраст, ритм и детали интерфейса.',
      },
      {
        title: 'Подход',
        text:
          'Я выстроил структуру так, чтобы главную роль играли крупные имиджи, воздух, массивная типографика и напряжение между минимализмом и fashion-эстетикой.',
        images: [
          '/projects/project-sr.jpg',
          '/projects/project-sr.jpg',
          '/projects/project-sr.jpg',
        ],
      },
      {
        title: 'Результат',
        text:
          'Получился выразительный кейс с акцентом на премиальность, подачу коллекции и ощущение цельного арт-направления. Такой формат хорошо подходит для брендов, которым нужен сильный визуальный образ в digital.',
      },
    ],
  },

2: {
  title: 'Брендинг Yume City',
  category: 'Айдентика / Брендинг',
  year: '2026',
  layout: 'story',
  sections: [
      {
        title: 'Общий визуальный концепт',
        text:
          'Первую часть кейса я построил как бесшовную историю: экран за экраном пользователь знакомится с проектом, атмосферой бренда и главным персонажем. Такой подход помогает сразу задать настроение и показать кейс как цельный digital-опыт.',
        images: [
          '/projects/yume/yume-01.jpg',
          '/projects/yume/yume-02.jpg',
          '/projects/yume/yume-03.jpg',
        ],
      },
      {
        title: 'Переход к системе',
        text:
          'После бесшовного вступления кейс переходит в модульную структуру. Это позволяет отдельно раскрыть персонажа, его характер, ценности и роль в коммуникации бренда, не перегружая первую часть лендинга.',
      },
      {
        title: 'Поиск образа маскота',
        text:
          'На этапе разработки важно было создать персонажа, который одновременно считывается как милый, тёплый и запоминающийся. Образ Няшки вырос из сочетания kawaii-эстетики, десертных ассоциаций и мягких форм, которые хорошо работают для семейной и дружелюбной атмосферы кафе.',
        images: ['/projects/yume/yume-04.jpg'],
      },
      {
        title: 'Кто такая Няшка',
        text:
          'Няшка стала не просто иллюстрацией, а полноценным персонажем бренда. Через неё проект транслирует уют, дружелюбие, лёгкость и эмоциональную близость с аудиторией. Такой персонаж помогает сделать бренд более живым и человечным.',
        images: ['/projects/yume/yume-05.jpg'],
      },
      {
        title: 'Характер и визуальные особенности',
        text:
          'Отдельное внимание было уделено пластике персонажа: крупные глаза, мягкие формы, тёплая мимика и приятная палитра делают образ легко узнаваемым и вызывают симпатию с первого взгляда. Это усиливает эмоциональную ценность бренда и делает коммуникацию более тёплой.',
        images: ['/projects/yume/yume-06.jpg'],
      },
      {
        title: 'Ценности бренда',
        text:
          'Через Няшку были сформулированы и визуально подчеркнуты ключевые ценности Yume City: тепло, забота, доброта, оригинальность и атмосфера, в которую хочется возвращаться. Маскот помогает доносить эти смыслы проще и эмоциональнее, чем обычная айдентика без персонажа.',
        images: ['/projects/yume/yume-07.jpg'],
      },
      {
        title: 'Финальный акцент',
        text:
          'В финале кейса персонаж работает как точка эмоционального контакта с аудиторией. Он завершает историю бренда, делает её более дружелюбной и оставляет цельное впечатление о проекте как о живой визуальной системе, а не просто наборе отдельных макетов.',
        images: ['/projects/yume/yume-08.jpg'],
      },
    ],
  },

  3: {
    title: 'Моя коллекция логотипов',
    category: 'Графический дизайн / Логотипы',
    year: '2026',
    intro:
      'Здесь разные логотипы от разных заказчиков и тд.',
    sections: [
      {
        title: 'Подборка работ',
        images: [
          '/projects/logo/l1.jpg',
          '/projects/logo/l2.jpg',
          '/projects/logo/l3.jpg',
          '/projects/logo/l4.jpg',
          '/projects/logo/l5.jpg',
          '/projects/logo/l6.jpg',
          '/projects/logo/l7.jpg',
          '/projects/logo/l8.jpg',
          '/projects/logo/l9.jpg',
        ],
      },
    ],
  },

  4: {
    title: 'Визуал для музыкального артиста',
    category: 'Арт-направление / Digital',
    year: '2026',
    heroImage: '/projects/project-4.jpg',
    intro:
      'Имиджевая digital-подача для артиста с упором на настроение, характер и визуальный вайб.',
    sections: [
      {
        text:
          'Здесь важна была не только красота, но и настроение: ощущение артиста, его мира и визуального тона.',
        images: ['/projects/project-4.jpg'],
      },
    ],
  },

  5: {
    title: 'Презентация для бренда',
    category: 'Презентация / Дизайн',
    year: '2026',
    heroImage: '/projects/project-5.jpg',
    intro:
      'Презентационный кейс с акцентом на сильную структуру, ритм слайдов и выразительную подачу смыслов.',
    sections: [
      {
        text:
          'Основной фокус был на том, чтобы презентация ощущалась цельной и дорогой, а не просто набором слайдов.',
        images: ['/projects/project-5.jpg'],
      },
    ],
  },

  6: {
    title: 'Полиграфия',
    category: 'Полиграфия',
    year: '2026',
    intro:
      'Подборка печатных материалов: грамоты, сертификаты, дипломы, благодарственные письма, афиши и другая полиграфия с акцентом на выразительную композицию и аккуратную типографику.',
    sections: [
      {
        title: 'Подборка работ',
        images: [
          '/projects/print/print-01.png',
          '/projects/print/print-02.png',
          '/projects/print/print-03.png',
          '/projects/print/print-044.png',
          '/projects/print/print-05.png',
          '/projects/print/print-06.png',
          '/projects/print/print-07.png',
          '/projects/print/print-08.png',
          '/projects/print/print-09.png',
          '/projects/print/print-10.png',
        ],
      },
    ],
  },

  8: {
    title: 'Афиши и визуальные постеры',
    category: 'Графический дизайн / Постеры',
    year: '2026',
    intro:
      'Серия постеров и афиш с акцентом на композицию, типографику и визуальный вайб. Каждый проект — отдельное настроение и задача.',
    sections: [
      {
        title: 'Подборка работ',
        images: [
          '/projects/posters/p1.jpg',
          '/projects/posters/p2.jpg',
          '/projects/posters/p3.jpg',
          '/projects/posters/p4.jpg',
          '/projects/posters/p5.jpg',
          '/projects/posters/p6.jpg',
          '/projects/posters/p7.jpg',
          '/projects/posters/p8.jpg',
          '/projects/posters/p9.jpg',
          '/projects/posters/p10.jpg',
        ],
      },
    ],
  },
}