export type JsonData = {
  success: boolean;
  data: any;
  error?: string;
};

export type User = {
  date: string;
  email: string;
  name: string;
  password: string;
  _id: string;
};

export type PostData = {
  content: string;
  likes: number;
  title: string;
  author: string;
  id: number;
  liked: boolean;
};

export type LikeData = {
  liked: boolean;
  likes: number;
  onClick: (liked: boolean) => void;
};

export type navbarInfo = {
  loggedIn: boolean;
  user: User;
};
