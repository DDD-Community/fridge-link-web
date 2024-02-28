import axios from 'axios';
import { queryKeys } from '../queryKeys';
import { useMutation } from '@tanstack/react-query';

const usePostUpload = ({ onSuccess }: { onSuccess: (res: string) => void }) => {
  const upload = async (file: FormData) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BASE_URI}/s3/upload?dir=images/share/thumbnail/`,
      data: file,
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined),
      },
    });
    return response.data;
  };
  // TODO useBaseMutation 으로 수정
  return useMutation({
    mutationKey: queryKeys.UPLOAD(),
    mutationFn: async (file: FormData) => {
      const res = await upload(file);
      onSuccess(res.data);
    },
  });
};
export default usePostUpload;
