
export interface EventDetails {
  name: string;
  time: string;
  address: string;
  mapsUrl: string;
}

export interface Hotel {
  name: string;
  address: string;
  phone: string;
  mapsUrl: string;
  website: string;
}

export interface InvitationData {
  baby: {
    name: string;
    date: string;
    phrase: string;
    message: string;
  };

  family: {
    parents: string[];
    godparents: string[];
    dedication: string;
  };

  event: {
    mass: EventDetails;
    reception: EventDetails;
  };

  hotels: Hotel[];

  rsvp: {
    whatsappNumber: string;
    message: string;
  };

  countdown: {
    date: string;
  };
}
