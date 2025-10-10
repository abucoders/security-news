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
    slug: string;
    title: string;
  }[];
  createdAt: string;
}

export interface ICategorie {
  id: string;
  slug: string;
  title: string;
  news: {
    id: string;
  }[];
}

export interface CategorieTag {
  title: string;
  slug: string;
}

export interface ICategorieNews {
  id: string;
  title: string;
  slug: string;
  news: INews[];
}
