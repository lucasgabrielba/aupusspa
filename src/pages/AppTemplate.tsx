import { CustomBreadcrumbs } from '@/components/common/CustomBreadcrumbs';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { CommandPallete } from '@/features/navigation/components/CommandPallete';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppSidebar } from '@/features/navigation/components/Sidebar/app-sidebar';
import { useUserStore } from '@/store/useUserStore';

export function AppTemplate() {

  const { user } = useUserStore();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex flex-col w-full h-full">
          <header className="flex h-12 items-center gap-2 px-4 bg-secondary">
            <SidebarTrigger  className='w-4 h-4 mr-2'/>
            <CustomBreadcrumbs />
          </header>
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary">
            <Outlet />
          </main>
          <CommandPallete />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
