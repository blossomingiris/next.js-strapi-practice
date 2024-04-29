'use client'

import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../ui/select'
import { userSchema } from '@/lib/schemas'
import { createUser } from '@/actions/actions'
import { useMutation } from '@tanstack/react-query'
import CardWrapper from '../ui/card-wrapper'
import { useToggle } from '@/hooks/useToggle'
import { LuXCircle, LuPartyPopper } from 'react-icons/lu'
import { useEffect } from 'react'

export default function UserForm() {
  const { close, isOpened, open } = useToggle()

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      email: '',
      ageGroup: '',
      address: '',
    },
  })

  const { data, mutate, isPending } = useMutation({
    mutationFn: createUser,
  })

  const onFormSubmit = async (values: z.infer<typeof userSchema>) => {
    mutate(values)
  }

  useEffect(() => {
    if (data?.success) {
      open()
      form.reset()
    } else if (data?.error) {
      open()
    }
  }, [data?.success, data?.error])

  return (
    <>
      {typeof data?.success !== 'boolean' && isOpened && (
        <CardWrapper
          title="success"
          closeHandler={close}
          buttonText="cancel"
          icon={<LuPartyPopper size={20} />}
        >
          {data?.success.name}
        </CardWrapper>
      )}
      {typeof data?.error !== 'boolean' && isOpened && (
        <CardWrapper
          title="error"
          closeHandler={close}
          buttonText="cancel"
          icon={<LuXCircle size={20} />}
        >
          {data?.error.name}: {data?.error.message}
        </CardWrapper>
      )}
      {!isOpened && (
        <CardWrapper title="create user">
          {' '}
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onFormSubmit)}
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium capitalize">
                      first name
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Enter your first name"
                          type="text"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium capitalize">
                      email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Enter your email: e.g. jane.doe@example.com"
                          type="email"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ageGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age Group</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select one option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="adult">Adult</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="infant">Infant</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium capitalize">
                      Address
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Enter your address"
                          type="text"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                aria-disabled={isPending}
                className="w-full"
              >
                {isPending ? 'please wait...' : 'create user'}
              </Button>
            </form>
          </Form>
        </CardWrapper>
      )}
    </>
  )
}
