import BranchGenerator from '@/components/BranchGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-8 px-4">
      <BranchGenerator />
    </main>
  );
}
