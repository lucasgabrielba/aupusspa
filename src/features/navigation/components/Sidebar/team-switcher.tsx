import { ChevronsUpDown, Building, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useOrganizationsStore } from "@/store/useOrganizationsStore";
// import { getAttachmentUrl } from "@/components/common/AttachmentsCard/getFileTypeLabel";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export function TeamSwitcher() {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const { organization, organizations, setOrganization } = useOrganizationsStore();
  const queryClient = useQueryClient();

  // const logo = 'https://s3-alpha-sig.figma.com/img/7769/f4aa/a478e0a11f48fe90acc475048958db34?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OR2esobfQAg4DgbOlbjz1VZ6jzxmhj-Be4WOuWw8njTfnM2aTMO9qjV21os7cfey2NZ1hj~rRVqCNSX6KEnWatDTG4gMUno7unD9cmu2oeAa34QUWYYo45DtDS4A3R~c5-Hg4JTedHgFkwoeh6onUvSUulNbK1BGAmW8WSIKxZlSz85NOV6gA9Wc9VBBSQmjcma-a4KzpY6tPtaCaDPq2lqwYtfgYxsiDcs8o856X6Mv22i6wJAOTNDKsnXMaGTJhVexVRaMtvxUdQynrJdgJDyxNOW2v2ase514WS25xgQKkWxhUzk15-GcaHRfogf9NelI7Hk4vFsacPcnl12glQ__';

  const handleSetOrganization = (orgId: string) => {
    queryClient.clear();
    setOrganization(orgId);
    toggleSidebar();
  };

  const handleNewOrganization = () => {
    toggleSidebar();
    navigate('nova-empresa');
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-card-accent data-[state=open]:text-card-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-card-primary text-card-primary-foreground">
                {organization?.brand.logoPath ? (
                  <img
                    src={'https://play-lh.googleusercontent.com/tiksHECQh6MNAZHmW45xO38h8hJSLXYx7c5SrfzyMAvjcTQQX5Qt8XBSFV3xI4S0el3Q=w240-h480'}
                    className="w-8 h-8 rounded-sm"
                  />
                ) : (
                  <Building className="w-8 h-8 text-card-foreground" />
                )}
              </div>
              <div className="flex-1 text-left ml-2 text-sm leading-tight text-card-foreground">
                <span className="font-semibold break-words">
                  {organization?.name || "Select Organization"}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto text-card-muted" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-[200px] rounded-md bg-card shadow-md p-2"
            align="start"
          >
            <DropdownMenuLabel className="text-xs text-card-muted px-2">
              Distribuidoras
            </DropdownMenuLabel>
            {organizations?.map((org) => (
              <DropdownMenuItem
                key={org?.id}
                onClick={() => handleSetOrganization(org?.id)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-card-hover"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  {org?.brand.logoPath ? (
                    <img
                      src={'https://play-lh.googleusercontent.com/tiksHECQh6MNAZHmW45xO38h8hJSLXYx7c5SrfzyMAvjcTQQX5Qt8XBSFV3xI4S0el3Q=w240-h480'}
                      className="w-6 h-6 rounded-sm"
                    />
                  ) : (
                    <Building className="w-4 h-4 text-card-foreground" />
                  )}
                </div>
                <span className="truncate text-card-foreground">{org?.name}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-1 border-card-border" />
            <DropdownMenuItem
              onClick={handleNewOrganization}
              className="flex items-center gap-2 p-2 text-sm rounded-md cursor-pointer hover:bg-card-hover"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-md border border-card-border">
                <Plus className="w-4 h-4 text-card-foreground" />
              </div>
              <span>Adicionar Distribuidora</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
