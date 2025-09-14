export interface ILastNews {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface INews {
  id: string;
  titleKr: string;
  titleUz: string;
  slug: string;
  descriptionKr: {
    html: string;
  };
  descriptionUz: {
    html: string;
  };
  image: {
    url: string;
  };
  categories: {
    title: string;
  }[];
  createdAt: string;
}
