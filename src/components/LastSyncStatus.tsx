'use client'

import { useEffect, useState } from 'react'
import { getLastSyncTime } from '@/lib/meetup'

function formatSyncTime(syncTime: string): string {
  const date = new Date(syncTime)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  } else {
    const diffMinutes = Math.floor(diffMs / (1000 * 60))
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`
  }
}

export default function LastSyncStatus() {
  const [formattedTime, setFormattedTime] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const lastSync = getLastSyncTime()

    if (!lastSync) {
      // Show current build time when no sync data available
      const buildTime = new Date().toLocaleDateString('en-DK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      setFormattedTime(buildTime)
    } else {
      const syncDate = new Date(lastSync)
      const absoluteTime = syncDate.toLocaleDateString('en-DK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      setFormattedTime(absoluteTime)
    }

    setIsLoaded(true)
  }, [])

  return (
    <div className="mb-8 p-4 bg-dark/5 rounded-lg border border-dark/10">
      <div className="text-sm text-dark/60">
        {isLoaded ? (
          <span>Last sync with meetup.com on {formattedTime}</span>
        ) : (
          <span>Loading sync status...</span>
        )}
      </div>
    </div>
  )
}