export const buildQuery = (param: Record<string, any>) => {
  const queryParam = Object.fromEntries(
    Object.entries(param).filter(([, value]) => value !== '' && value !== null && value !== undefined),
  );
  return new URLSearchParams(queryParam).toString();
};
