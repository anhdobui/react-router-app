import type { LucideIcon } from 'lucide-react'
import { Home, Grid2x2Check, ChevronRight } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '~/components/ui/sidebar'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'

// Menu items (có thể có children)
const items: Array<{
  title: string
  url?: string
  icon?: LucideIcon
  children?: Array<{ title: string; url: string }>
}> = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Inventory',
    icon: Grid2x2Check,
    children: [
      { title: 'Products', url: '/inventory/products' },
      { title: 'Stock', url: '/inventory/stock' }
    ]
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Lecas admin</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const hasChildren = !!item.children?.length

                // ✅ Không có children: link bình thường
                if (!hasChildren) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url ?? '#'}>
                          {item.icon ? <item.icon /> : null}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                }

                // ✅ Có children: bọc Collapsible để xổ xuống
                return (
                  <Collapsible key={item.title} defaultOpen={false} className='group/collapsible'>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          {item.icon ? <item.icon /> : null}
                          <span>{item.title}</span>

                          <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children!.map((sub) => (
                            <SidebarMenuSubItem key={sub.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={sub.url}>
                                  <span>{sub.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
