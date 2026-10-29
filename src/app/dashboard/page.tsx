import { Suspense } from 'react';

async function DashboardContent() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="rounded-md border border-amber-200 bg-zinc-100 p-4 text-zinc-700">
      <h1 className="text-xl font-bold text-zinc-700">Dashboard</h1>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-md border border-amber-200 bg-zinc-100 p-4 text-zinc-700">
          Loading dashboard...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
