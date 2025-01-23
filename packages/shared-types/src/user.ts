export interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string | null;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
  accessToken: string;
}

export interface UserState {
  email: string | null;
  id: string | null;
  accessToken: string | null;
  name: string | null;
  lastLogin: string | null;
}

export type WithAuthProps = {
  email: string | null;
  id: string | null;
  accessToken: string | null;
  name: string | null;
  lastLogin: string | null;
};

export interface UserPayload {
  id: string;
  name: string;
  email?: string;
  lastLogin?: string;
  accessToken?: string;
}
