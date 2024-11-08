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

interface BreadcrumbItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

function capitalizeWord(word: string) {
  if (word.length <= 3) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function formatBreadcrumbLabel(segment: string) {
  return segment
    .replace(/-/g, ' ') // Substitui hífen por espaço
    .split(' ')
    .map(capitalizeWord) // Capitaliza palavras conforme as regras
    .join(' ');
}

export function CustomBreadcrumbs({ className = '' }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    navigate(href);
  };

  const isInEnergyGeneration = location.pathname.startsWith('/geracao-de-energia');
  
  // Cria os itens do breadcrumb com a formatação necessária
  const breadcrumbItems: BreadcrumbItem[] =
    location.pathname === '/'
      ? [{ label: 'Equatorial', href: '/' }]
      : [
          { label: 'Equatorial', href: '/' },
          ...location.pathname
            .split('/')
            .filter((segment) => segment)
            .map((segment, index, arr) => {
              const href = arr.slice(0, index + 1).join('/') || '/';
              const label = formatBreadcrumbLabel(segment);
              return { label, href };
            }),
        ];

  // Insere o dropdown de "Configurações" se estiver nessa seção
  if (isInEnergyGeneration && breadcrumbItems.length > 1) {
    breadcrumbItems[1] = {
      label: 'Geração de Energia',
      isDropdown: true,
      dropdownItems: [
        { label: 'Dashboard', href: '/geracao-de-energia/' },
        { label: 'Beneficiadas', href: '/geracao-de-energia/beneficiadas' },
      ],
    };
  }

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={nanoid()}>
            <BItem>
              {item.isDropdown ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-secondary-foreground lg:hidden">
                      {item.label}
                      <ChevronDownIcon className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <DropdownMenuItem key={dropdownIndex} asChild>
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
                  <BreadcrumbLink
                    href={item.href}
                    className="hidden lg:inline text-secondary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.href);
                    }}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </>
              ) : item.href ? (
                <BreadcrumbLink
                  href={item.href}
                  className="text-secondary-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
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
                {/* <Slash className="h-4 w-4" /> */}
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
