import { userSchema } from '@/lib/schemas'
import * as z from 'zod'

export async function createUser(values: z.infer<typeof userSchema>) {
  const validatedFields = userSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      statusCode: 400,
      error: 'Invalid fields',
    }
  }

  return {
    statusCode: 201,
    success: 'User was successfully created',
  }
}
