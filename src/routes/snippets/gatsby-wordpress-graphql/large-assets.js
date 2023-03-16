export default `{
    allWordpressWpMedia(filter: {localFile: {size: {gt: 1000000}}}) {
      edges {
        node {
          localFile {
            size
          }
          source_url
        }
      }
    }
  }`