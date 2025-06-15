import React from 'react';

const ApiDocsPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - API List */}
      <aside className="w-64 bg-white shadow-lg p-6 fixed h-full overflow-y-auto pt-24 z-40">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">API 列表</h2>
        <nav>
          <ul>
            <li className="mb-3">
              <a href="#get-users" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">GET</span> /users
              </a>
            </li>
            <li className="mb-3">
              <a href="#post-users" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">POST</span> /users
              </a>
            </li>
            <li className="mb-3">
              <a href="#put-users-id" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">PUT</span> /users/{`{id}`}
              </a>
            </li>
            <li className="mb-3">
              <a href="#patch-users-id" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">PATCH</span> /users/{`{id}`}
              </a>
            </li>
            <li className="mb-3">
              <a href="#delete-users-id" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">DELETE</span> /users/{`{id}`}
              </a>
            </li>
            <li className="mb-3">
              <a href="#post-files" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">POST</span> /files
              </a>
            </li>
            <li className="mb-3">
              <a href="#get-files-id-download" className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 rounded-md transition-colors duration-200 hover:bg-blue-50">
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">GET</span> /files/{`{id}`}/download
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Right Content Area - API Descriptions */}
      <main className="ml-64 flex-1 p-10 pt-24">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">API 文档</h1>
        <p className="text-xl text-gray-600 mb-12">探索我们的API接口，开始构建您的应用</p>

        {/* GET /users */}
        <section id="get-users" className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <span className="bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-md mr-4">GET</span>
            <h2 className="text-3xl font-bold text-gray-800">/users</h2>
          </div>
          <p className="text-gray-700 text-lg mb-6">检索系统中的用户列表。</p>
          <p className="text-gray-700 text-lg mb-8">此端点用于获取所有已注册用户的列表，可以支持分页和基本筛选。</p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-5">参数</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">参数</th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">类型</th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">page <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">query</span></td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">integer</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">请求的页码，用于分页。(默认值: 1) 例如: 1</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">limit <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">query</span></td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">integer</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">每页返回的用户数量。(默认值: 10) 例如: 10</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">sortBy <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">query</span></td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">string</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">用于排序的字段名称。例如: "创建时间"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-5">请求示例</h3>
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
            <div className="flex bg-gray-800 p-3">
              <button className="text-white text-sm font-medium px-4 py-1 rounded-md bg-blue-600 mr-2">HTTP</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700">SSE</button>
            </div>
            <pre className="p-6 text-white text-sm">
              <code>{`GET /users?page=1&limit=10 HTTP/1.1
Host: YOUR_API_BASE_URL
Accept: application/json`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-5">响应示例</h3>
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
            <div className="flex bg-gray-800 p-3">
              <button className="text-white text-sm font-medium px-4 py-1 rounded-md bg-blue-600 mr-2">HTTP</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700">SSE</button>
            </div>
            <pre className="p-6 text-white text-sm">
              <code>{`{
  "data": [
    {
      "id": "user-001",
      "用户名": "张伟",
      "邮箱": "zhang.wei@example.com",
      "角色": "管理员",
      "创建时间": "2023-01-15T10:30:00Z"
    },
    {
      "id": "user-002",
      "用户名": "李娜",
      "邮箱": "li.na@example.com",
      "角色": "普通用户",
      "创建时间": "2023-02-20T14:45:00Z"
    }
  ]
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-5">示例代码</h3>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex bg-gray-800 p-3">
              <button className="text-white text-sm font-medium px-4 py-1 rounded-md bg-blue-600 mr-2">JavaScript</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700 mr-2">Python</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700 mr-2">Java</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700 mr-2">Go</button>
              <button className="text-gray-400 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-700">cURL</button>
            </div>
            <pre className="p-6 text-white text-sm">
              <code>{`fetch(\`$\{YOUR_API_BASE_URL}/users?page=1&limit=10\`)
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
            </pre>
          </div>
        </section>
        {/* Add more API sections here */}
      </main>
    </div>
  );
};

export default ApiDocsPage; 