import dynamic from 'next/dynamic'

const DynamicA = dynamic(() => import('../components/A'))

export default () => (
  <div>
    <p>Hello World!</p>

    <DynamicA />
  </div>
)
