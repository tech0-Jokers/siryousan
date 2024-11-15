"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar"; // Sidebarコンポーネントをインポート

export default function Component() {
  // メインビュー
  return (
    <div className="flex h-screen bg-gray-100">
      {/* メインコンテンツ */}
      <div className="flex h-screen bg-gray-100">
        {/* サイドバー */}
        <Sidebar />
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          {/* ボタンとログイン情報 */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
            共有した資料を見る
          </button>
          <div className="text-sm text-gray-600">
            ログインユーザー：営業部 田中太郎
          </div>
        </div>

        {/* 通知セクション */}
        <div className="mb-8">
          <div className="text-sm mb-2">📁 2件の通知があります。</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                内容確認
              </span>
              <span className="text-sm">
                [承認完了] 第一営業部 田中さんの承認が完了しました。
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                内容確認
              </span>
              <span className="text-sm">
                [質疑] 第一営業部 伊藤さんより質疑のコメントが届いています。
              </span>
            </div>
          </div>
        </div>

        {/* 資料共有セクション */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center bg-pink-500 text-white py-4 mb-8">
            資料を共有する
          </h1>

          {/* タブ機能のシンプルな実装 */}
          <div className="w-full mb-8 flex justify-center space-x-4">
            <button className="text-xl py-4 px-6 border-b-2 border-black">
              下書き
            </button>
            <button className="text-xl py-4 px-6">共有中</button>
          </div>

          {/* ダミーのコンテンツ */}
          <div>
            <p>ここに「下書き」または「共有中」のコンテンツが表示されます。</p>
          </div>

          {/* ポイント情報の表示 */}
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="relative w-48 h-48">
              {/* ポイント表示用の円グラフ */}
              <svg
                viewBox="0 0 100 100"
                className="transform -rotate-90 w-full h-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="10"
                  strokeDasharray={`${(450 / 650) * 283} 283`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-500">450P</div>
                  <div className="text-red-500">200P</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl mb-2">ゴールドステージまで</div>
              <div className="text-4xl font-bold">
                あと<span className="text-6xl">200</span>ポイント
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
