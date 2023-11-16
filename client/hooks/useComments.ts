import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getComments } from '../apis/comments.ts'

export function useComments() {
  const query = useQuery({ queryKey: ['comments'], queryFn: getComments })
  return {
    ...query,
  }
}
