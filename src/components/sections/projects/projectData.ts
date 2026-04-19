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
  image: '/projects/poster-cover.png',
},
  {
    id: 6,
    title: 'Полиграфия',
    category: 'Полиграфия',
    year: '2025',
    image: '/projects/print-design-cover.jpg',
    empty: false,
  },
    {
    id: 1,
    title: 'Студия звукозаписи SoundRoom',
    category: 'Веб-дизайн / Брендирование / Типография',
    year: '2025',
    image: '/projects/project-sr.jpg',
  },
  {
    id: 2,
    title: 'Кафе Yume City',
    category: 'Айдентика / Брендинг',
    year: '2026',
    image: '/projects/project-caty.jpg',
  },
  {
    id: 3,
    title: 'Логотипы',
    category: 'Логотипы',
    year: '2026',
    image: '/projects/project-logo.jpg',
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
    title: 'Брендирование Yume City',
    category: 'Айдентика / Брендинг',
    year: '2026',
    heroImage: '/projects/project-caty.jpg',
    intro:
      'Разработка визуального языка для fashion-проекта с упором на характер, узнаваемость и гибкость системы.',
    sections: [
      {
        title: 'Идея',
        text:
          'В основе — лаконичная, но уверенная айдентика, которая легко масштабируется на digital, носители и презентационные материалы.',
      },
      {
        images: ['/projects/project-caty.jpg'],
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
        '/projects/logo/l1.png',
        '/projects/logo/l2.png',
        '/projects/logo/l3.png',
        '/projects/logo/l4.png',
        '/projects/logo/l5.png',
        '/projects/logo/l6.png',
        '/projects/logo/l7.png',
        '/projects/logo/l8.png',
        '/projects/logo/l9.png',
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
        '/projects/print/print-04.png',
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
        '/projects/posters/p1.png',
        '/projects/posters/p2.png',
        '/projects/posters/p3.png',
        '/projects/posters/p4.png',
        '/projects/posters/p5.png',
        '/projects/posters/p6.png',
        '/projects/posters/p7.png',
        '/projects/posters/p8.png',
        '/projects/posters/p9.png',
        '/projects/posters/p10.png',
        ],
      },
    ],
  }, 
}