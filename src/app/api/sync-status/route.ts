import { getLastSyncTime } from '@/lib/meetup'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const lastSync = getLastSyncTime()
    return NextResponse.json({ lastSync })
  } catch (error) {
    console.error('Error getting sync status:', error)
    return NextResponse.json({ lastSync: null }, { status: 500 })
  }
}