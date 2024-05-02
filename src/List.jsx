import { use } from 'react'

export const List = () => {
  const data = use(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Hello!')
        resolve([
          { name: 'TypeScript', mark: new Date().getSeconds() },
          // { name: 'TypeScript', mark: '4.9' },
          { name: 'JavaScript', mark: '4.8' },
          { name: 'Go', mark: '4.7' },
        ])
      }, 2000)
    })
  )

  return (
    <ul>
      {data.map(({ name, mark }) => (
        <li key={name}>
          {name} - {mark}
        </li>
      ))}
    </ul>
  )
}
