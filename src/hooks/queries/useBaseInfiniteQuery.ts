import type { ApiResponseType, InfiniteQueryResult } from '@/types/query';
import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';
import { buildQuery } from '@/utils/buildQuery';
import { useInfiniteQuery } from '@tanstack/react-query';

export const getNextOffset = <T>(data: InfiniteQueryResult<T>) => {
  return data.last ? undefined : data.pageable.pageNumber + 1;
};

export const useBaseInfiniteQuery = <T>({
  queryKey,
  url,
  size,
  params,
}: {
  queryKey: QueryKey;
  url: string;
  size?: number;
  params?: Record<string, any>;
}) => {
  const INITIAL_PAGE_PARAM = 0;
  const DEFAULT_SIZE = 10;

  const fetchData = async <T>(
    context: QueryFunctionContext<QueryKey, number>,
  ) => {
    const { pageParam = 0 } = context;

    const paginationParamString = buildQuery({
      page: pageParam,
      size: size ?? DEFAULT_SIZE,
    });

    const queryParamString = params ? `&${buildQuery(params)}` : '';

    const URL = `${url}?${paginationParamString}${queryParamString}`;
    const response =
      await axiosInstance.get<ApiResponseType<InfiniteQueryResult<T>>>(URL);
    return response.data.data;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn: async (context: QueryFunctionContext<QueryKey, number>) => {
      const data = await fetchData<T>(context);
      return data;
    },
    initialPageParam: INITIAL_PAGE_PARAM,
    getNextPageParam: (res) => getNextOffset<T>(res),
    staleTime: 0,
  });
};
