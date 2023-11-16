import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getTeachers } from '../apis/teachers'

export function useTeachers() {
  const query = useQuery({ queryKey: ['teachers'], queryFn: getTeachers })
  return {
    ...query,
  }
}
