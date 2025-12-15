import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('inventory', 'routes/inventory/_layout.tsx', [
    // /inventory
    index('routes/inventory/_index.tsx'),

    // /inventory/products
    route('products', 'routes/inventory/products.tsx'),

    // /inventory/stock
    route('stock', 'routes/inventory/stock.tsx')
  ])
] satisfies RouteConfig
