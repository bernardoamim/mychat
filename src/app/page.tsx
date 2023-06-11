import Button from './ui/Button'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button size="default" variant="default">
        Hello
      </Button>
    </main>
  )
}
