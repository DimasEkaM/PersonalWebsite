export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded bg-line ${className}`}
      aria-hidden="true"
    />
  );
}

export function ProfileSkeleton() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <Skeleton className="mb-6 h-4 w-48" />
        <Skeleton className="h-16 w-full max-w-lg sm:h-20 md:h-24" />
        <Skeleton className="mt-6 h-6 w-64" />
        <Skeleton className="mt-5 h-5 w-full max-w-2xl" />
        <div className="mt-10 flex gap-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Skeleton className="mb-8 h-8 w-48" />
        <Skeleton className="mb-12 h-4 w-96" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="border-y border-line bg-tan py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Skeleton className="mb-8 h-8 w-48" />
        <div className="mt-10 border-t border-line">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="grid gap-4 border-b border-line py-8 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-1">
                <Skeleton className="h-6 w-8" />
              </div>
              <div className="sm:col-span-7">
                <Skeleton className="mb-2 h-4 w-20" />
                <Skeleton className="mb-2 h-6 w-48" />
                <Skeleton className="h-4 w-full max-w-md" />
              </div>
              <div className="sm:col-span-4">
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSkeleton() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Skeleton className="mb-8 h-8 w-48" />
        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="mb-4 h-6 w-24" />
              <div className="mt-4 border-t border-line">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex justify-between border-b border-line py-2.5">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
