// app/page.tsx
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人博客</h1>
      <p className="text-gray-600">
        这里会分享我的学习笔记、技术文章和生活感悟。
      </p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">最新文章</h2>
        <ul className="list-disc pl-5">
          <li>如何快速上手 Next.js</li>
          <li>TypeScript 类型系统实用技巧</li>
          <li>聊聊我最喜欢的开源项目</li>
        </ul>
      </section>
    </main>
  );
}