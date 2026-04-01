export type User = {
  _id: string;
  username: string;
  email: string;
  tel?: string;
  password?: string;
  themes?: Theme[];
  posts?: Post[];
  created_at?: string;
  updatedAt?: string;
};

export type UserForAuth = {
  id: string,
  firstName: string,
  secondName: string,
  tel?: string,
  email: string,
  password: string
}

export type Theme = {
  _id: string;
  themeName: string;
  userId: User;
  subscribers: string[];
  posts: Post[];
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
  postText: string;
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
// a value that can be also null or undefined
export type Maybe<T> = T | null | undefined;


  export type LoginRequest = {
    email: string;
    password: string;
  }

  export type RegisterRequest = {
    tel?: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
  }

  export type EditProfileRequest = {
    tel?: string | null;
    username: string;
    email: string;
  }
  export type ErrorResponse = {
    message: string;
  }

