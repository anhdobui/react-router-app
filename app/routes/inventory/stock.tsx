import type { Handle } from '~/types'

export const handle: Handle = {
  breadcrumb: 'Stock'
}
export default function InventoryStock() {
  return (
    <div className='space-y-2'>
      <h2 className='text-xl font-medium'>Stock</h2>
      <p>Tồn kho hiện tại</p>
    </div>
  )
}
