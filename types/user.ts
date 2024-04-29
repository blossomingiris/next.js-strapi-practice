import { userSchema } from './../lib/schemas'
import * as z from 'zod'

export type User = z.infer<typeof userSchema>
