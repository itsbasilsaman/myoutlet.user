import dynamic from 'next/dynamic'

const BasketClient = dynamic(() => import('./BasketClient'), { ssr: false })

export default function BasketPage() {
  return <BasketClient />
}
