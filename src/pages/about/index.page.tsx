//
// import Code from "../../Components/Code";
// import {usePageContext} from "../../renderer/usePageContext";
// import useSWR, {mutate} from "swr";
//
// const service = () => new Promise<{ title: string, release_date: string }[]>((resolve) => setTimeout(() => {
//   resolve([
//     { title: "Movie 1", release_date: "2023-01-01" },
//     { title: "Movie 2", release_date: "2023-02-02" },
//   ]);
// }, 1000)); // 1000 ms delay
//
// async function onBeforeRender() {
//   let movies = await service()
//
//   return {
//     pageContext: {
//       initialData: movies, // изменено здесь
//       isLoading: false
//     }
//   }
// }
//
// function Page() {
//   const context = usePageContext()
//   const { initialData: { movies = [] } = {}, isLoading = true } = context as { initialData: { movies: { title: string; release_date: string; }[] }; isLoading: boolean }
//
//   const { data: SWRData, isLoading: isLoadingSWR } = useSWR(['About'], service, { fallbackData: movies })
//   const refreshData = () => {
//     mutate(['About']);
//   }
//
//   if(isLoading || isLoadingSWR) return <div>Loading/////</div>
//   console.log({isLoading, isLoadingSWR, movies, SWRData})
//   const data = SWRData || movies
//   return (
//     <>
//       <h2>About</h2>
//       <p>
//         Note how the elapsed time above didn't reset when you switched to the <Code>/about</Code> page.
//       </p>
//       <p>
//         This page is rendered to HTML, see <Code>view-source:http://localhost:3000/about</Code>.
//       </p>
//       <ul>
//         {data?.map(el => {
//           return (
//             <li key={el.release_date + el.title}>{el.title}</li>
//           )
//         })}
//       </ul>
//       <button onClick={refreshData}>Обновить данные</button>
//
//     </>
//   )
// }
//
// export {onBeforeRender, Page }

import Code from "../../Components/Code";
import {usePageContext} from "../../renderer/usePageContext";
import useSWR, { mutate } from "swr";
import {useMemo} from "react";
let counter = 1
const service = () => fetch(`https://swapi.dev/api/films/${counter}/`)
  .then(response => response.json())
  .then(data => {
    counter++
    return data.characters
  })
  .catch(error => console.error('Error:', error));

async function onBeforeRender() {
  const film = await service()

  return {
    pageContext: {
      initialData: film,
      isLoading: false
    }
  }
}

function Page() {
  const context = usePageContext()
  const { initialData = {}, isLoading = true } = context

  const { data: SWRData, isLoading: isLoadingSWR } = useSWR('About', !isLoading ? service: null, { fallbackData: initialData })

  console.log({initialData, isLoading, SWRData, isLoadingSWR})
  const refreshData = () => { mutate('About' );
  }

  const isDataLoading = useMemo(() => isLoading || isLoadingSWR, [isLoading, isLoadingSWR])

  if(isDataLoading) return <div>Loading...</div>

  const data = SWRData || initialData

  return (
    <>
      <h2>About</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the <Code>/about</Code> page.
      </p>
      <p>
        This page is rendered to HTML, see <Code>view-source:http://localhost:3000/about</Code>.
      </p>
      <p>
        {data?.map((el: string) => {
          return (
            <li key={el}>{el}</li>
          )
        })}
      </p>
      <button onClick={refreshData}>Обновить данные</button>
    </>
  )
}

export {onBeforeRender, Page }
