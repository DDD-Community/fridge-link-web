import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetShares = () =>
  useBaseQuery<ShareData[]>(queryKeys.SHARES(), '/shares', true);

export default useGetShares;
