'use client'
import { LuArrowLeft } from 'react-icons/lu'
import CardWrapper from '@/components/ui/card-wrapper'
import CustomLink from '@/components/ui/link'
import { useGetUser } from '@/hooks/useGetUser'

export default function UserPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const { data, isFetching } = useGetUser(slug)

  return (
    <main className="flex h-screen items-center justify-center px-4 flex-col">
      <h1 className="sr-only">Next.js + Strapi application</h1>
      <CardWrapper title="user details">
        {isFetching && 'Please wait...'}
        {!isFetching && data && (
          <div className="flex flex-col">
            <p>Name: {data?.attributes?.firstName}</p>
            <p>Email: {data?.attributes?.email}</p>
            <p>Address: {data?.attributes?.ageGroup}</p>
            <p>Address: {data?.attributes?.address}</p>
          </div>
        )}
        {!isFetching && !data && (
          <div className="flex flex-col">This no slug for this User in db</div>
        )}
      </CardWrapper>
      <CustomLink href={'/users'}>
        <LuArrowLeft />
        Back to Users Page
      </CustomLink>
    </main>
  )
}
