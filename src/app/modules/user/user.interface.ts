export interface IUser {
    id:string;
    name: {
        firstName:string;
        middleName?:string;
        lastName:string;
    }
    email: string;
    avatar?: string;
    gender:"Male" | "Female";
  }


