'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetUsers } from '@/hooks/useGetUsers'
import { User } from '@/types/user'
import { useRouter } from 'next/navigation'

export default function UsersTable() {
  const { data: users } = useGetUsers()
  const router = useRouter()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>First name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age Group</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(({ id, attributes }: { id: number; attributes: User }) => (
          <TableRow
            key={id}
            onClick={() => router.push(`/users/${attributes.slug}`)}
            className="cursor-pointer"
          >
            <TableCell>{id}</TableCell>
            <TableCell>{attributes.firstName}</TableCell>
            <TableCell>{attributes.email}</TableCell>
            <TableCell>{attributes.ageGroup}</TableCell>
            <TableCell>{attributes.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
