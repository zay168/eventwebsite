import TargetCursor from './components/custom/TargetCursor'
import LightRays from './components/custom/LightRays'

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
      <div className="p-6 space-y-4">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <h1 className="text-2xl font-bold">Hover over the elements below</h1>
        <button className="cursor-target px-4 py-2 bg-blue-500 text-white rounded">
          Click me!
        </button>
        <div className="cursor-target p-4 border rounded">Hover target</div>
      </div>
    </div>
  )
}
