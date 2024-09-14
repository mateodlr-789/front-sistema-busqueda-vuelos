import { redirect } from 'next/navigation'

import { route } from './_constants/route'

export async function GET() {
  redirect(route.flightSearch)
}
