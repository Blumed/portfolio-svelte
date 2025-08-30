export default `const bookmarklet = { name: "bookmarklet__cabin-how-green-is-your-site?", version: "1.0" };
  try {
    window.open(\`https://withcabin.com/how-green-is-your-website?url=\${window.location.href}\`, '_blank', 'noopener,noreferrer');
    console.log(\`\${bookmarklet.name}: \${bookmarklet.version}\`);
  } catch (error){
    console.log(\`\${bookmarklet.name} : \${bookmarklet.version} : \${error}\`);
  }}`;