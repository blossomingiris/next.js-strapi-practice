import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First Name is required' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email('Invalid email format: e.g. jane.doe@example.com'),
  ageGroup: z.string().trim().min(1, { message: 'Age Group is required' }),
  address: z.string().trim().optional(),
})
