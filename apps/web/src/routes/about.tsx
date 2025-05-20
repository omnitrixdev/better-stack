import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main class='container mx-auto max-w-3xl px-4 py-2 border border-red-500 '>
      <h1>About</h1>
    </main>
  );
}
