import { useState } from 'react'

export const App = ({ data }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Count = {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
      <ul>
        {data.map(({ name, mark }) => (
          <li key={name}>
            {name} - {mark}
          </li>
        ))}
      </ul>
    </div>
  )
}

const data = [
  { name: 'TypeScript', mark: new Date().getSeconds() },
  { name: 'JavaScript', mark: '4.8' },
  { name: 'Go', mark: '4.7' },
]

App.getServerSideProps = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
