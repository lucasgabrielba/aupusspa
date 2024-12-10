

import { ChevronRight } from "lucide-react"
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { navigationLinks } from "../../utils/navigation-links";

export function NavMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, setOpenMobile, setOpen } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navigationLinks.map((item) => {
          const isSelected = location.pathname === item.path;

          return (
            <Collapsible
              key={item.key}
              asChild
              className="group/collapsible"
            >
              <SidebarMenuItem className="rounded-full my-0.5">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.label}
                    onClick={() => {
                      if (!item.links) {
                        navigate(item.path);
                        if (isMobile) setOpenMobile(false);
                      } else {
                        if (!isMobile) {
                          setOpen(true);
                        }
                      }
                    }}
                    className={`p-4 rounded-full transition-colors hover:text-card ${
                      isSelected ? 'bg-card-foreground text-card' : 'hover:bg-card-foreground'
                    }`}
                  >
                    {item.icon && (
                      <item.icon
                        className={`w-5 h-5 ${isSelected ? 'text-card' : ''}`}
                      />
                    )}
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.links && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 w-5 h-5" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.links && (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.links.map((subItem) => {
                        const isSubItemSelected = location.pathname === subItem.path;

                        return (
                          <SidebarMenuSubItem key={subItem.key} className="rounded-full">
                            <SidebarMenuSubButton
                              onClick={() => {
                                navigate(subItem.path);
                                if (isMobile) setOpenMobile(false);
                              }}
                              className={`p-4 rounded-full cursor-pointer transition-colors ${
                                isSubItemSelected ? 'bg-card-foreground text-card' : 'hover:bg-card-foreground'
                              }`}
                            >
                              {subItem.icon && (
                                <subItem.icon
                                  className={`w-5 h-4 ${isSubItemSelected ? 'text-card-foreground' : ''}`}
                                />
                              )}
                              <span className="text-sm">{subItem.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
