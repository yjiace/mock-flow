import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mock Flow API",
  description: "Mock Flow API",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="flex justify-between items-center w-full px-24 py-4 fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">Mock Flow API</div>
          <nav className="ml-auto">
            <ul className="flex space-x-8">
              <li><a href="/" className="text-gray-700 hover:text-purple-600 text-lg font-medium transition-colors duration-300">首页</a></li>
              <li><a href="/api-docs" className="text-gray-700 hover:text-purple-600 text-lg font-medium transition-colors duration-300">API文档</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium transition-colors duration-300">API测试器</a></li>
            </ul>
          </nav>
        </header>
 
        <main className="pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-10 text-center text-gray-500 text-base mt-20 border-t border-gray-200">
          <p>© 2025 Mock Flow API. All rights reserved.</p>
          <p className="mt-1">提供稳定可靠的模拟API服务。</p>
        </footer>
      </body>
    </html>
  );
}
