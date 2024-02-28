import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetMyFriendsCount = () => {
  const { data } = useBaseQuery<number>(queryKeys.MY_FRIENDS_COUNT(), `/friendship/count`, true);

  return data?.data;
};

export default useGetMyFriendsCount;
