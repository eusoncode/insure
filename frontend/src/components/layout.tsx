import Navigation from "@/components/navigation_section/navigation";
import Footer from "@/components/footer/footer";
import { LayoutProps } from "@/types/next-auth";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header stays at the top */}
      <header>
        <Navigation />
      </header>

      {/* Main content grows to fill remaining space */}
      <main className="flex-grow">{children}</main>

      {/* Footer sticks to bottom if not enough content */}
      <Footer />
    </div>
  );
}
