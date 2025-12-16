import type { Handle } from '~/types'

export const handle: Handle = {
  breadcrumb: 'Products'
}
export default function InventoryProducts() {
  return (
    <div className='space-y-2'>
      <h2 className='text-xl font-medium'>Products</h2>
      <p>Danh sách sản phẩm</p>
    </div>
  )
}
