export type User = {
  _id: string;
  username: string;
  email: string;
  password?: string;
  themes?: string[];
  posts?: string[];
  created_at?: string;
  updatedAt?: string;
};

export type Theme = {
  _id: string;
  themeName: string;
  userId: User;
  subscribers: string[];
  posts?: string[];
  created_at: string;
  updatedAt?: string;
};

export type Post = {
  _id: string;
  text: string;
  userId: User;
  themeId: Theme;
  likes?: string[];
  created_at: string;
  updatedAt?: string;
};

export type CreateThemeDto = {
  themeName: string;
};

export type UpdateThemeDto = {
  themeName?: string;
};

export type CreatePostDto = {
  text: string;
  themeId: string;
};

export type UpdatePostDto = {
  text?: string;
};
