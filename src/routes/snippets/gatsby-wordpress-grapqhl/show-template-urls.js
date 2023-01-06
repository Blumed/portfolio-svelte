export default `{
    allSitePage(filter: {path: {regex: "/^/parent-url/"}}) {
      edges {
        node {
          path
        }
      }
    }
  }`