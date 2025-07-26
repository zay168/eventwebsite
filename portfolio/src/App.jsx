import TargetCursor from './components/custom/TargetCursor'
import LightRays from './components/custom/LightRays'
import PixelCard from './components/custom/PixelCard'

export default function App() {
  return (
  <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"     // blanc
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <PixelCard
        variant="pink"
        className="cursor-target absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h2 className="text-xl font-bold">Zay168 : usage</h2>
        </div>
      </PixelCard>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  )
}
