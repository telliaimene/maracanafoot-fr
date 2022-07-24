//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: string;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number;
  name: string;
  href: string;
  tag?: string;
  count?: number;
  thumbnail?: string;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface Tournois {
  continent: String
  coupe: []
  entitled: String
  entitledAR: String
  logo: String
  page: []
  pays: String
  sport: String | number
  teamType: String
  type: String
  typeAR: String
  _id: String
}
export interface AuthorType {
  _id?: string | number;
  name?: string
  lastname?: string
  pseudo?: string
  mail?: string
  biographie?: string
  type?: string
  count?: number;
  job?: { entitledFR: string };
  picture?: string;
}
export interface ArticleDataType {
  
  commentCount ?: number
  viewdCount?:number
  _id: string | number;
  href?:string
  author: PostAuthorType;
  date: string;
  category?:  string
  tournois?: [{
    _id: string | number,
    entitled: string
  }
  ]
  typearticle: string;
  title: string;
  image: string;
  readingTime?:number
  content: string;
  state?: string;
  resumer?: string;
  comments: CommentDataType[];
  bookmarked: [{
    user: String | number;

  }];
  countPartage: number;
  countVisit: number;
  likes?: [{
    user: String | number;

  }];
  keyWord: [];
  isActive?: string;
  clubs?: [];
  postType?: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string;
  galleryImgs?: string[];
}
export interface ArticleType {
  _id: string | number;
  author: PostAuthorType;
  date: string;
  category?:  [{
    _id: string | number,
    entitled: string
  }
  ]
  tournois?: [{
    _id: string | number,
    entitled: string
  }
  ]
  typearticle: string;
  title: string;
  image: string;
  content: string;
  state: string;
  resumer?: string;
  comments: CommentDataType[];
  bookmarked: [{
    user: String | number;

  }];
  countPartage: number;
  countVisit: number;
  likes: [{
    user: String | number;

  }];
  keyWord: [];
  isActive?: string;
  clubs?: [];
}
export interface SocialMediaType {
  //id: string;
  type: string;
  lien: string;
  // href: string;
}
export interface PostAuthorType {
  id: string | number;

  _id?: string | number;
  firstName: string;
  biographie?: string;
  lastName: string;
  picture?: string;
  name?: string;
  lastname?: string;
  displayName: string;
  avatar: string;
  bgImage?: string;
  email?: string;
  count: number;
  desc: string;
  jobName: string;
  href: string;
}

export interface PostDataType {
  countVisit?: number;
  content?: string
  keyWord?: []
  biographie?: string
  image?: string;
  id: string | number;
  author: PostAuthorType;
  date: string;
  tournois?: [{
    _id:string|number,
    entitled:string
  }],
  typearticle: String,
  href: string;
  categories?: TaxonomyType[];
  title: string;
  featuredImage: string;
  desc?: string;
  isActive?: string
  comments?: CommentDataType[],
  // [ {   id: number;
  //   author: PostAuthorType|null;
  //   date: string;
  //   isModerate:string;
  //   content: string;
  //   parentId: string | number | null;
  //   children?: CommentType[];
  //   like: number; }]

  like: {
    count: number;
    isLiked: boolean;
  };
  bookmark: {
    count: number;
    isBookmarked: boolean;
  };
  bookmarked: [{
    user: String | number;

  }];
  likes: [{
    user: String | number;

  }];
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string;
  galleryImgs?: string[];
  category?: []
}


export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}
export interface CommentType {
  id: number;
  author: PostAuthorType;
  date: string;
  isModerate: boolean;
  content: string;
  parentId: string | number | null;
  children?: CommentType[];
  like: number;

}
export interface CommentDataType {
  _id: string | number;
  user: AuthorType;
  date: string;
  description: string;
  isModerate: string;
  response?: CommentDataType[];
  likes: [];
}
