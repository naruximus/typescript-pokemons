export interface IStateRequest<T> {
  isLoading: boolean;
  data: T[] | null;
  error: object | null;
}
