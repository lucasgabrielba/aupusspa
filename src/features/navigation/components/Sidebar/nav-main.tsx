import { ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useFilteredNavigationLinks } from '@/features/navigation/utils/useFilteredNavigationLinks';

export function NavMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, setOpenMobile, setOpen } = useSidebar();
  const navigationLinks = useFilteredNavigationLinks();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navigationLinks.map((item) => {
          const hasActiveChild = item.links?.some((subItem) => location.pathname === subItem.path);
          const isSelected = item.links ? hasActiveChild : location.pathname === item.path;

          return (
            <Collapsible key={item.key} asChild className="group/collapsible">
              <SidebarMenuItem className="rounded-full my-0.5">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.label}
                    onClick={() => {
                      if (!item.links) {
                        navigate(item.path);
                        if (isMobile) setOpenMobile(false);
                      } else if (!isMobile) {
                        setOpen(true);
                      }
                    }}
                    className={`
                      p-4 rounded-full transition-colors duration-200 select-none flex items-center gap-3
                      ${isSelected ? 'bg-card-foreground text-card' : 'hover:bg-card'}
                    `}
                  >
                    {item.icon && (
                      <item.icon
                        className={`w-5 h-5 shrink-0 ${
                          isSelected ? 'text-card' : 'text-card-foreground'
                        }`}
                      />
                    )}
                    <span
                      className={`text-sm font-medium flex-1 ${
                        isSelected ? 'text-card' : 'text-card-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.links && (
                      <ChevronRight
                        className={`
                          w-5 h-5 shrink-0 transition-transform duration-200 
                          group-data-[state=open]/collapsible:rotate-90
                          ${isSelected ? 'text-card' : 'text-card-foreground'}
                        `}
                      />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {item.links && (
                  <CollapsibleContent>
                    <SidebarMenuSub className="pl-4 mt-1">
                      {item.links.map((subItem) => {
                        const isSubItemSelected = location.pathname === subItem.path;

                        return (
                          <SidebarMenuSubItem key={subItem.key} className="rounded-full">
                            <SidebarMenuSubButton
                              onClick={() => {
                                navigate(subItem.path);
                                if (isMobile) setOpenMobile(false);
                              }}
                              className={`
                                p-3 rounded-full transition-colors duration-200 select-none flex items-center gap-3
                                ${
                                  isSubItemSelected
                                    ? 'bg-card-foreground text-card'
                                    : 'hover:bg-card'
                                }
                              `}
                            >
                              {subItem.icon && (
                                <subItem.icon
                                  className={`w-4 h-4 shrink-0 ${
                                    isSubItemSelected ? 'text-card' : 'text-card-foreground'
                                  }`}
                                />
                              )}
                              <span
                                className={`text-sm flex-1 ${
                                  isSubItemSelected ? 'text-card' : 'text-card-foreground'
                                }`}
                              >
                                {subItem.label}
                              </span>
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
  );
}
