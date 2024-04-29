import { getUser } from '@/services/users'
import { useQuery } from '@tanstack/react-query'

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => getUser(id),
  })
}
