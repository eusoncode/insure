import Navigation from "@/components/navigation_section/navigation";
import { LayoutProps } from "@/types/next-auth";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header stays at the top */}
      <header>
        <Navigation />
      </header>

      {/* Main content grows to fill remaining space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer sticks to bottom if not enough content */}
      <footer className="py-4 text-center text-sm text-gray-500">
        <p>&copy; 2025 Insure. All rights reserved.</p>
      </footer>
    </div>
  );
}
