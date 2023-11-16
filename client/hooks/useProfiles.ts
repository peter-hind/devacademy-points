import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getProfiles } from '../apis/profile.ts'

export function useProfiles() {
  const query = useQuery({ queryKey: ['profiles'], queryFn: getProfiles })
  return {
    ...query,
  }
}
