import { Outlet } from 'react-router'
import Layout from '~/layouts/main-layout'

export default function InventoryLayout() {
  return (
    <Layout>
      <div className='space-y-4'>
        {/* Có thể để header chung cho inventory */}
        <h1 className='text-2xl font-semibold'>Inventory</h1>

        <Outlet />
      </div>
    </Layout>
  )
}
