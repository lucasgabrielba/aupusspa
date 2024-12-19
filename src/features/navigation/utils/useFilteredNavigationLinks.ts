import { useUserStore } from '@/store/useUserStore';
import { NavigationLink, navigationLinks } from './navigation-links';

export function useFilteredNavigationLinks() {
  const { abilities } = useUserStore();
  
  const filterLinks = (links: NavigationLink[]): NavigationLink[] => {
    if (!abilities) return [];
    return links
      .filter((link) => !link.featureKey || abilities.includes(link.featureKey))
      .map((link) => ({
        ...link,
        links: link.links ? filterLinks(link.links) : undefined, 
      }));
  };

  return filterLinks(navigationLinks);
}
