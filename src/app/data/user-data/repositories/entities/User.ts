interface AttributesUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  interface UserLinks {
    self: string;
  }
  
  interface DataUser {
    type: string;
    id: string;
    attributes: AttributesUser;
    links: UserLinks;
  }
  
  export interface ResponseUser {
    data: DataUser;
    status: number;
  }
  