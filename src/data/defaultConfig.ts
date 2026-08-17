import { CoupleConfig } from '../types';
import { photo0, photo1, photo2, photo3 } from './photosBase64';

export const initialCoupleConfig: CoupleConfig = {
  partnerName: 'Angel',
  yourName: 'Laura',
  romanticTitle: 'Feliz Mesiversario',
  subheading: 'Desde aquel 20 de septiembre de 2025, cada segundo a tu lado es mi regalo más preciado.',
  anniversaryDate: '2025-09-20',
  letterTitle: 'Para el amor de mi vida en nuestro mesiversario',
  letterContent: `Tal vez ya te lo he dicho muchas veces, pero jamás me voy a cansar de recordar todo lo que me enamora de ti; de todo eso que te hace único.

Amo la forma en que siempre intentas hacerme sonreír, cómo te preocupas y me demuestras tu sinceridad y la solicitud con la que me hablas, incluso en los momentos difíciles. Me atrapa la fuerza de tu voz, el tono de tu voz, la mirada en tus ojos y el sonido de tu risa. Hace que el mundo se vuelva un lugar mucho más cálido que cuando las cosas se ponen difíciles. Recuerda que siempre te amaré con todo mi corazón. Te pertenezco.`,
  letterSignature: 'Con todo mi amor eterno y devoción,',
  themeStyle: 'gothic-silver',
  photos: [
    {
      id: 'frame-1',
      url: photo0,
      caption: 'Nuestra primera mirada bajo la luna',
      date: '20 de Septiembre, 2025',
      location: 'Nuestro mundo compartido',
      aspectRatio: 'portrait',
      customStory: 'El momento en que construimos nuestro propio refugio juntos.'
    },
    {
      id: 'frame-2',
      url: photo1,
      caption: 'El primer abrazo de nuestras almas',
      date: 'Noches Inolvidables',
      location: 'Tu abrazo cálido',
      aspectRatio: 'square',
      customStory: 'Prometimos cuidarnos en los días brillantes y en las noches más frías.'
    },
    {
      id: 'frame-3',
      url: photo2,
      caption: 'Un amor telepático que vence el caos',
      date: 'Cada Mes Contigo',
      location: 'Nuestro lugar secreto',
      aspectRatio: 'portrait',
      customStory: 'Tu sonrisa tiene el poder de convertir cualquier sombra en pura luz.'
    },
    {
      id: 'frame-4',
      url: photo3,
      caption: 'Un destello de locura y amor',
      date: 'Hoy y Siempre',
      location: 'En mi corazón',
      aspectRatio: 'square',
      customStory: 'Celebrar otro mes juntos es celebrar el milagro más puro de mi destino.'
    }
  ],
  reasons: [
    {
      id: 1,
      title: 'Tu risa',
      description: 'Oírla es el regalo perfecto de pura felicidad; me llena de calma y regocijo, me llena el alma saber que soy capaz de darte la misma alegría que el sol le da a la flor.',
      iconName: 'Sparkles'
    },
    {
      id: 2,
      title: 'Tus ojos',
      description: 'Me enamora la forma en la que brillan. Cuando me miras a veces suelen brillar, pero cuando me miras y me revelas tu dolor, no hace más que aumentar mi deseo de cuidarte y protegerte sin dudar.',
      iconName: 'Eye'
    },
    {
      id: 3,
      title: 'Tu voz',
      description: 'Fue lo primero por lo que me fijé en un segundo. Cómo hablas y me transmites tanta paz, por ella es que me enamoré más, porque nunca sentí algo tan reconfortante.',
      iconName: 'Flame'
    },
    {
      id: 4,
      title: 'Tu forma de ser conmigo',
      description: 'Me fascina la manera en la que me tratas y la paciencia que me tienes. Amo saber que en cualquier momento que me sienta decaído me escuchas y estás presente para mí.',
      iconName: 'Shield'
    },
    {
      id: 5,
      title: 'Tu forma de hablar de las cosas',
      description: 'Creo que es de las cosas que más disfruto; saber tu punto de vista y sobre todo las cosas que te apasionan. Cómo puedes hablar durante horas sobre tus temas favoritos.',
      iconName: 'Feather'
    },
    {
      id: 6,
      title: 'Tu humor',
      description: 'Aunque puedas creer que eres misterioso, realmente eres alguien que me llena de risas y alegría. Eres tan chistoso que el tiempo a tu lado siempre se me pasa volando.',
      iconName: 'Sparkles'
    },
    {
      id: 7,
      title: 'Tu forma de dibujar',
      description: 'Tal vez creas que no soy un crítico por excelencia, pero realmente me gusta la forma en la que dibujas. Me fascina el arte que creas y cómo buscas siempre mejorar con dedicación.',
      iconName: 'Eye'
    },
    {
      id: 8,
      title: 'Tu presencia',
      description: 'Cuando estoy contigo todo cobra sentido y siento que nada malo puede pasarme; me transmites una calidez y tranquilidad inmensa. Saber que estás ahí calma y reconforta mi ser.',
      iconName: 'Infinity'
    }
  ]
};
