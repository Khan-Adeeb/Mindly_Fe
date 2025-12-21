export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Tags {
    _id: string;
    title: string;
}

export interface Contents{
    _id:string,
    link: string;
    type: "twitter" | "youtube";
    title: string;
    description?: string;
    tags: Tags[];
    userId: User;
    createdAt: String
}