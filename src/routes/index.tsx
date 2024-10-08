import { createFileRoute } from '@tanstack/react-router'
import { Card, Search } from 'components'

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <section className="flex flex-col justify-center items-center gap-4">
        <Search />
        <section className="flex flex-wrap gap-4 justify-center items-center">
          {[1, 2, 3, 4, 1, 2, 3].map((item, index) => (
            <Card key={index} />
          ))}
        </section>
      </section>
    )
  }
})
