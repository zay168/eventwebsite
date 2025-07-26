import TargetCursor from './components/custom/TargetCursor'

export default function App() {
  return (
    <div className="p-6 space-y-4">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <h1 className="text-2xl font-bold">Hover over the elements below</h1>
      <button className="cursor-target px-4 py-2 bg-blue-500 text-white rounded">
        Click me!
      </button>
      <div className="cursor-target p-4 border rounded">Hover target</div>
    </div>
  )
}
