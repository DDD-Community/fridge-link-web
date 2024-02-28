import type { ShareApplicantData } from '@/types/share';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetShareApplicants = ({ id }: { id: string | string[] | undefined }) => {
  if (typeof id !== 'string') {
    return null;
  }
  const { data } = useBaseQuery<ShareApplicantData[]>(queryKeys.SHARE_APPLICANTS(), `/shares/${id}/applies`);

  return data?.data;
};

export default useGetShareApplicants;
