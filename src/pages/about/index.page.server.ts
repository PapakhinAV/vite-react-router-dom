//
// export { onBeforeRender }
//
// async function onBeforeRender() {
//   // Simulate a slow network request with setTimeout and Promise.
//   const movies = await new Promise<{ title: string, release_date: string }[]>((resolve) => setTimeout(() => {
//     resolve([
//       { title: "Movie 1", release_date: "2023-01-01" },
//       { title: "Movie 2", release_date: "2023-02-02" },
//     ]);
//   }, 1000)); // 1000 ms delay
//
//   // We make `movies` available as `pageContext.pageProps.movies`
//   const pageProps = { movies }
//   return {
//     pageContext: {
//       pageProps
//     }
//   }
// }
