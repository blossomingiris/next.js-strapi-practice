import UsersTable from '@/components/users/users-table'
import { LuArrowLeft } from 'react-icons/lu'
import CustomLink from '@/components/ui/link'
import { getUsers } from '@/services/users'
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query'

export default async function UsersPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return (
    <main className="flex h-screen items-center justify-center px-4 flex-col">
      <div className="p-5 max-w-[600px] overflow-y-auto">
        <h1 className="capitalize font-semibold leading-none tracking-tight mb-10 text-left">
          users list
        </h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UsersTable />
        </HydrationBoundary>
      </div>
      <CustomLink href={'/'}>
        <LuArrowLeft />
        Back to Home Page
      </CustomLink>
    </main>
  )
}
