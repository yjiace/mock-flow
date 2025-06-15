export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full min-h-screen text-center pb-12 px-4">
        <h1 className="text-7xl font-extrabold text-gray-900 mb-6 animate-fadeInUp">Mock Flow API</h1>
        <p className="text-2xl text-gray-600 mb-10 max-w-3xl animate-fadeInUp animation-delay-200">
          一个简单、高效、可靠的API服务，支持HTTP和SSE协议，提供实时数据流和高效的数据传输。
        </p>
        <div className="flex space-x-6 animate-fadeInUp animation-delay-400">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-4 rounded-full text-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-xl">
            开始使用
          </button>
          <button className="bg-gray-200 text-gray-800 px-10 py-4 rounded-full text-xl hover:bg-gray-300 transition-colors duration-300 shadow-lg">
            查看文档
          </button>
        </div>
      </section>

      {/* Core Features Overview Section */}
      <section className="w-full max-w-6xl py-20 px-8 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fadeInUp">核心功能概览</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
          我们致力于提供全面且易用的模拟数据API服务。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp">
            <div className="text-6xl text-blue-500 mb-6">⚡</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">多种HTTP方法</h3>
            <p className="text-gray-600 text-base">
              全面支持GET、POST、PUT、DELETE、PATCH等，满足各种API交互需求。
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-200">
            <div className="text-6xl text-green-500 mb-6">🌐</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">CORS和SSE支持</h3>
            <p className="text-gray-600 text-base">
              通过特定请求头轻松实现跨域请求，并启用服务器发送事件（SSE）实时数据流。
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-400">
            <div className="text-6xl text-purple-500 mb-6">{`< >`}</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">多语言代码示例</h3>
            <p className="text-gray-600 text-base">
              为每个API接口提供多种编程语言的示例，助您快速集成。
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-600">
            <div className="text-6xl text-red-500 mb-6">☁️</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">在线API测试</h3>
            <p className="text-gray-600 text-base">
              无需编码，直接在网页上测试API接口，并实时查看请求和响应详情。
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-800">
            <div className="text-6xl text-yellow-500 mb-6">⬆️</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">文件上传</h3>
            <p className="text-gray-600 text-base">
              支持文件上传接口，成功后返回基本文本文件信息，方便快捷。
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-1000">
            <div className="text-6xl text-indigo-500 mb-6">⬇️</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">文件下载</h3>
            <p className="text-gray-600 text-base">
              提供多种格式文件下载支持，满足不同数据获取需求。
            </p>
          </div>
          {/* Feature Card 7 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-1200">
            <div className="text-6xl text-pink-500 mb-6">⚙️</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">灵活的参数配置</h3>
            <p className="text-gray-600 text-base">
              支持路径、查询、请求头和请求体等多种参数位置，高度定制。
            </p>
          </div>
          {/* Feature Card 8 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-1400">
            <div className="text-6xl text-teal-500 mb-6">🔄</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">持续更新与维护</h3>
            <p className="text-gray-600 text-base">
              API文档和功能持续迭代，确保用户获得最新、最稳定的服务体验。
            </p>
          </div>
        </div>
      </section>

      {/* Easy Start Section */}
      <section className="w-full max-w-6xl py-20 px-8 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fadeInUp">轻松上手，三步搞定</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
          快速开始使用 Mock Flow API 服务。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp">
            <div className="text-6xl text-blue-500 mb-6">🔍</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. 浏览API文档</h3>
            <p className="text-gray-600 text-base mb-6">
              详细了解各接口的功能、参数及返回格式。
            </p>
            <button className="text-blue-500 hover:text-blue-600 font-semibold text-lg transition-colors duration-300">查看文档</button>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-200">
            <div className="text-6xl text-green-500 mb-6">▶️</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. 在线测试API</h3>
            <p className="text-gray-600 text-base mb-6">
              使用我们的在线工具，无需编码即可快速测试API调用。
            </p>
            <button className="text-green-500 hover:text-green-600 font-semibold text-lg transition-colors duration-300">开始测试</button>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp animation-delay-400">
            <div className="text-6xl text-purple-500 mb-6">📚</div> {/* Placeholder for icon */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. 复制并集成代码</h3>
            <p className="text-gray-600 text-base mb-6">
              复制我们提供的多语言代码示例，轻松集成到您的项目中。
            </p>
            <button className="text-purple-500 hover:text-purple-600 font-semibold text-lg transition-colors duration-300">获取代码</button>
          </div>
        </div>
      </section>
    </div>
  );
}
