import {
  Breadcrumb,
  BreadcrumbItem as BItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { nanoid } from 'nanoid';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface BreadcrumbConfigItem {
  path: string;
  label: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export function CustomBreadcrumbs({ className = '' }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    navigate(href);
  };

  // Configuração das rotas e breadcrumbs
  const breadcrumbConfig: BreadcrumbConfigItem[] = [
    {
      path: '/',
      label: 'Equatorial',
    },
    {
      path: '/geracao-de-energia',
      label: 'Geração de Energia',
      isDropdown: true,
      dropdownItems: [
        { label: 'Dashboard', href: '/geracao-de-energia/' },
        { label: 'Beneficiadas', href: '/geracao-de-energia/beneficiadas' },
      ],
    },
    // Adicione outras rotas conforme necessário
  ];

  // Função para encontrar os breadcrumbs correspondentes ao caminho atual
  const getBreadcrumbItems = () => {
    const pathname = location.pathname.replace(/\/$/, ''); // Remove a barra no final
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems: BreadcrumbConfigItem[] = [];

    let accumulatedPath = '';
    for (const segment of pathSegments) {
      accumulatedPath += `/${segment}`;
      const configItem = breadcrumbConfig.find(
        (item) => item.path === accumulatedPath
      );

      if (configItem) {
        breadcrumbItems.push(configItem);
      } else {
        // Se não houver configuração específica, crie um item padrão
        breadcrumbItems.push({
          path: accumulatedPath,
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
        });
      }
    }

    // Sempre adiciona a raiz
    breadcrumbItems.unshift(breadcrumbConfig[0]);

    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={nanoid()}>
            <BItem>
              {item.isDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-secondary-foreground">
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={nanoid()} asChild>
                        <a
                          href={dropdownItem.href}
                          className="text-secondary-foreground"
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick(dropdownItem.href);
                          }}
                        >
                          {dropdownItem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.path ? (
                <BreadcrumbLink
                  href={item.path}
                  className="text-secondary-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.path);
                  }}
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-secondary-foreground font-semibold">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BItem>
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator className="text-secondary-foreground">
                {/* Separador */}
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
