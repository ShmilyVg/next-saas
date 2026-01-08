export default async function Two() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return <div>two</div>
}
