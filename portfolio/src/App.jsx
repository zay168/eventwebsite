import TargetCursor from './components/custom/TargetCursor'
import LightRays from './components/custom/LightRays'
import PixelCard from './components/custom/PixelCard'
import ScrollStack, { ScrollStackItem } from './components/custom/ScrollStack'

export default function App() {
  return (
  <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
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
      <div className="mt-[100vh]">
        <ScrollStack>
          <ScrollStackItem className="bg-white text-black flex items-center justify-center">
            <h2>Card 1</h2>
          </ScrollStackItem>
          <ScrollStackItem className="bg-gray-200 text-black flex items-center justify-center">
            <h2>Card 2</h2>
          </ScrollStackItem>
          <ScrollStackItem className="bg-gray-400 text-black flex items-center justify-center">
            <h2>Card 3</h2>
          </ScrollStackItem>
          <ScrollStackItem className="bg-gray-600 text-white flex items-center justify-center">
            <h2>Card 4</h2>
          </ScrollStackItem>
          <ScrollStackItem className="bg-gray-800 text-white flex items-center justify-center">
            <h2>Card 5</h2>
          </ScrollStackItem>
          <ScrollStackItem className="bg-black text-white flex items-center justify-center">
            <h2>Card 6</h2>
          </ScrollStackItem>
        </ScrollStack>
      </div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  )
}
