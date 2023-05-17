import Card from '@/components/Card'
import { CardListProps } from '@/types'

export default function CardList({
  data = []
}: CardListProps) {
  return (
    <>
      {data.map(
        (item) => (
          <Card key={item.id} {...item}/>
        )
      )}
    </>
  )
}
