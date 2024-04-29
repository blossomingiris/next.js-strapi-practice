import CustomLink from '@/components/ui/link'
import UserForm from '@/components/users/user-form'
import { LuArrowRight } from 'react-icons/lu'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-4">
      <h1 className="sr-only">Next.js + Strapi application</h1>
      <UserForm />
      <CustomLink href={'users'}>
        {' '}
        Go to Users Page
        <LuArrowRight />
      </CustomLink>
    </main>
  )
}
