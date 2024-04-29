import { userSchema } from '@/lib/schemas'
import * as z from 'zod'

type ErrorResponse = {
  status: number
  name: string
  message: string
  details: {
    errors: {
      path: string[]
      message: string
      name: string
    }[]
  }
}

export async function createUser(values: z.infer<typeof userSchema>) {
  const BASIC_URL = 'http://127.0.0.1:1337'

  const validatedFields = userSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      success: false,
      error: {
        statusCode: 400,
        name: 'Invalid fields',
        message: '',
      },
    }
  }

  const { firstName, email, ageGroup, address } = validatedFields.data

  const response = await fetch(
    `${BASIC_URL}/api/user-entries/?populate=users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          firstName,
          email,
          ageGroup,
          address,
        },
      }),
    },
  )

  const responseData = await response.json()

  if (!response.ok) {
    const errorResponse: ErrorResponse = responseData.error
    return {
      success: false,
      error: {
        statusCode: errorResponse.status,
        name: errorResponse.name,
        message: errorResponse.message,
      },
    }
  }

  return {
    error: false,
    success: {
      statusCode: 201,
      name: 'User was successfully created',
      message: '',
    },
  }
}
