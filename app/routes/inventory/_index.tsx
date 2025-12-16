import { Outlet } from 'react-router'
import Layout from '~/layouts/main-layout'

export default function InventoryIndex() {
  return (
    <Layout>
      <div className='space-y-4'>
        <Outlet />
      </div>
    </Layout>
  )
}
