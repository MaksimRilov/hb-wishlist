export const mockFetch = <T>(returnedResult: T, timeout: number = 3000) => {
  const promise = new Promise<T>((res) => {
    setTimeout(() => res(returnedResult), timeout);
  });

  return promise;
};
