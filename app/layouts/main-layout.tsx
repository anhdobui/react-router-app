import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import { AppSidebar } from '~/layouts/common/app-sidebar'
import BodyLayout from '~/layouts/common/body'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>
            <SidebarTrigger />
            <BodyLayout>{children}</BodyLayout>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
