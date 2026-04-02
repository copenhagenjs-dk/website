'use client'

import { useEffect, useState } from 'react'

export default function LastSyncStatus() {
  const [formattedTime, setFormattedTime] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function fetchSyncStatus() {
      try {
        const response = await fetch('/api/sync-status')
        const data = await response.json()

        if (!data.lastSync) {
          // Show current time when no sync data available
          const buildTime = new Date().toLocaleDateString('en-DK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
          setFormattedTime(buildTime)
        } else {
          const syncDate = new Date(data.lastSync)
          const absoluteTime = syncDate.toLocaleDateString('en-DK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
          setFormattedTime(absoluteTime)
        }
      } catch (error) {
        console.error('Failed to fetch sync status:', error)
        // Fallback to current time
        const fallbackTime = new Date().toLocaleDateString('en-DK', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
        setFormattedTime(fallbackTime)
      } finally {
        setIsLoaded(true)
      }
    }

    fetchSyncStatus()
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