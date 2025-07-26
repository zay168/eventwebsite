import { Bounce, FadeContent } from '@appletosolutions/reactbits'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function App() {
  return (
    <main className="p-6 space-y-8">
      <Bounce>
        <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
      </Bounce>
      <FadeContent className="mx-auto max-w-2xl text-center" duration={800}>
        <p className="text-lg">Welcome to my interactive portfolio built with Reactbits and shadcn/ui.</p>
      </FadeContent>
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project One</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Amazing project description with <strong>animations</strong>.</p>
            <Button className="mt-4">View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Two</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Another awesome project using Reactbits.</p>
            <Button variant="secondary" className="mt-4">View Details</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default App
