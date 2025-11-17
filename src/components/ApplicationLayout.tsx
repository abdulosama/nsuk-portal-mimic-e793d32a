import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/placeholder.svg" alt="NSUK Logo" className="h-10 w-10" />
            <h1 className="text-lg font-semibold text-foreground">NSUK - Application</h1>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`text-sm hover:text-teal-600 ${
                location.pathname === "/dashboard" ? "text-teal-600 underline" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/application"
              className={`text-sm hover:text-teal-600 ${
                location.pathname === "/application" ? "text-teal-600 underline" : "text-muted-foreground"
              }`}
            >
              Application
            </Link>
            <Link
              to="/data-correction"
              className={`text-sm hover:text-teal-600 ${
                location.pathname === "/data-correction" ? "text-teal-600 underline" : "text-muted-foreground"
              }`}
            >
              Data Correction
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium">
              OSAMA
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default ApplicationLayout;
