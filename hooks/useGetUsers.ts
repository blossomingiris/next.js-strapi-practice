import { getUsers } from '@/services/users'
import { useQuery } from '@tanstack/react-query'

export function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
}
