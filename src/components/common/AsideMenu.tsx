import { LucideProps } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export interface MenuItem {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  path: string;
}

interface AsideMenuProps {
  menuItems: MenuItem[];
}

export function AsideMenu({ menuItems }: AsideMenuProps) {
  const location = useLocation();

  return (
    <div className="bg-secondary p-6 h-full w-full pr-0">
      <div className="flex flex-col gap-4">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors text-sm ${
                  isActive
                    ? 'bg-muted text-muted-foreground'
                    : 'hover:bg-muted hover:text-muted-foreground'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
