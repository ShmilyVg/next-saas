export default async function One() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return <div>one</div>
}
