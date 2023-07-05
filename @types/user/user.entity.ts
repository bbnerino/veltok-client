export interface User {
  id: number;
  email: string;
  nickname: string;
  profileUrl?: string;
  setting: UserSetting;
}

export interface SimpleUser {
  id: number;
  nickname: string;
  profileUrl?: string;
}
interface UserSetting {
  bgColor: string;
}
