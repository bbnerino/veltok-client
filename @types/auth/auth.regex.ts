export const AUTH_REGEX = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  // 특수문자 포함 8~20자리
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/,
  // 특수문자 제외 2~10자리
  NICKNAME: /^[가-힣a-zA-Z0-9]{4,16}$/,
};
