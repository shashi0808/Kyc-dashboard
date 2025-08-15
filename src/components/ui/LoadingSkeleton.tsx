import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSkeletonProps {
  className?: string
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={cn(
      "animate-pulse bg-gray-200 rounded-md",
      className
    )} />
  )
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* KYC Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <LoadingSkeleton className="h-4 w-24 mb-4" />
          <LoadingSkeleton className="h-8 w-16 mb-2" />
          <LoadingSkeleton className="h-4 w-20" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <LoadingSkeleton className="h-4 w-24 mb-4" />
          <LoadingSkeleton className="h-8 w-16 mb-2" />
          <LoadingSkeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Chart Skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <LoadingSkeleton className="h-6 w-48 mb-6" />
        <LoadingSkeleton className="h-80 w-full" />
      </div>

      {/* Status Cards Skeleton */}
      <div>
        <LoadingSkeleton className="h-6 w-40 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <LoadingSkeleton className="h-4 w-24" />
                <LoadingSkeleton className="h-10 w-10 rounded-lg" />
              </div>
              <LoadingSkeleton className="h-8 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}