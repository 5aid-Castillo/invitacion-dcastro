
import type { InvitationData } from '@/types/invitation';

export const invitation: InvitationData = {
  baby: {
    name: 'Gael',
    date: '19/12/2026',
    phrase: 'Un pequeño milagro, una gran bendición.',
    message:
      'Con mucha alegría queremos invitarte a celebrar un momento muy especial en nuestras vidas: el bautizo de nuestro pequeño.'
  },

  family: {
    parents: [
      'Diana Laura Castro',
      'Gabino García'
    ],

    godparents: [
      'María del Carmen Rodríguez Dionisio'
    ],

    dedication:
      'Agradecemos a Dios por esta hermosa bendición y por permitirnos compartir este día tan especial con nuestros seres queridos.'
  },

  event: {
    mass: {
      name: 'Parroquia de San Juan Evangelista',
      time: '13:00 PM',
      address: 'Dirección de la iglesia',
      mapsUrl: 'https://maps.app.goo.gl/Kc8n9wVimA7VRpnSA'
    },

    reception: {
      name: 'Salón MIBEN',
      time: '03:00 PM',
      address: 'Dirección del salón',
      mapsUrl: 'https://maps.app.goo.gl/14GtWpo6z8kkqKaQ9'
    }
  },

  hotels: [
    {
      name: 'Hotel Cazadores',
      address: 'Dirección del hotel',
      phone: '0000000000',
      mapsUrl: 'https://maps.app.goo.gl/7CE3T3torC55D8Mm6',
      website: ''
    },
    {
      name: 'Hotel Rojo Canela',
      address: 'Dirección del hotel',
      phone: '0000000000',
      mapsUrl: 'https://maps.app.goo.gl/gZQexyjA2qG46PxK6',
      website: ''
    }
  ],

  rsvp: {
    whatsappNumber: '522381509217',
    message: 'Hola, deseo confirmar mi asistencia al bautizo.'
  },

  countdown: {
    date: '2026-12-19T13:00:00'
  }
};
