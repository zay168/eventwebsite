import {
  Bounce,
  FadeContent,
  BlurText,
  MagnetLines,
  Noise,
} from '@appletosolutions/reactbits'
import { useRef } from 'react'
import TargetCursor from './components/custom/TargetCursor'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function App() {
  const containerRef = useRef(null)

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden p-6 space-y-12"
    >
      <MagnetLines
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        rows={8}
        columns={8}
        lineColor="rgba(255,255,255,0.15)"
        containerSize="100%"
      />
      <Noise patternSize={64} patternAlpha={0.05} />
      <TargetCursor color="#ff0066" />
      <section className="py-20 text-center space-y-8">
        <BlurText
          text="Mon Portfolio"
          className="text-5xl font-bold"
          animateBy="words"
        />
        <Bounce>
          <p className="text-lg max-w-2xl mx-auto">
            Bienvenue dans mon portfolio interactif construit avec Reactbits et
            shadcn/ui.
          </p>
        </Bounce>
      </section>
      <FadeContent className="grid gap-4 md:grid-cols-2" duration={800}>
        <Card>
          <CardHeader>
            <CardTitle>Project One</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Amazing project description with <strong>animations</strong>.
            </p>
            <Button className="mt-4">View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Two</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Another awesome project using Reactbits.</p>
            <Button variant="secondary" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Three</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Exploring more animations with MagnetLines backgrounds.</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Four</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Creative visual effects powered by Reactbits.</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
      </FadeContent>
    </main>
  )
}

export default App
