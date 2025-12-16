import Layout from '~/layouts/main-layout'
import type { Handle } from '~/types'

export const handle: Handle = {
  breadcrumb: 'Home'
}

export default function Home() {
  return (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  )
}
