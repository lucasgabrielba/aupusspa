import * as React from "react";
import { NavMain } from "@/features/navigation/components/Sidebar/nav-main";
import { NavUser } from "@/features/navigation/components/Sidebar/nav-user";
import { TeamSwitcher } from "@/features/navigation/components/Sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  // useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const { open, setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="bg-primary"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
