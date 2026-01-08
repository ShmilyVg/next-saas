export default function PartLayout({
  children, // 这是原本的 page.tsx
  one, // 对应 @one 文件夹
  two // 对应 @two 文件夹
}: {
  children: React.ReactNode
  one: React.ReactNode
  two: React.ReactNode
}) {
  return (
    <div className="p-4 bg-gray-50">
      <h1 className="text-xl mb-4">我的仪表盘</h1>

      {/* 这是一个简单的 Grid 布局 */}
      <div className="flex flex-col gap-4">
        {/* 上半部分：主内容 */}
        <section className="border p-4">{children}</section>

        {/* 下半部分：左右两个并行板块 */}
        <div className="grid grid-cols-2 gap-4">
          {/* 左边：分析图表 */}
          <section className="border p-4">{one}</section>

          {/* 右边：团队列表 */}
          <section className="border p-4">{two}</section>
        </div>
      </div>
    </div>
  )
}
