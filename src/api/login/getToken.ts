import axiosInstance from '../axiosInstance';

interface LoginResponseType {
  data: { accessToken: string; refreshToken: string; email: string };
}

const fetchKaKao = async (code: string): Promise<LoginResponseType> =>
  await axiosInstance.get(`/users/kakao-login?code=${code}`);

export const getKaKaoToken: (code: string) => Promise<void> = async (code) => {
  void fetchKaKao(code).then((response: LoginResponseType) => {
    localStorage.setItem('token', response.data.accessToken);
  });
};

const fetchGoogle = async (code: string): Promise<LoginResponseType> =>
  await axiosInstance.get(`/users/google-login?code=${code}`);

export const getGoogleToken: (code: string) => Promise<void> = async (code) => {
  void fetchGoogle(code).then((response: LoginResponseType) => {
    localStorage.setItem('token', response.data.accessToken);
  });
};
