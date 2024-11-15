// Sidebar.js
// サイドバーを描画する独立したコンポーネント
// onNavigate: ユーザーがクリックしたリンク先の情報を親コンポーネントに通知するための関数
"use client";
export default function Sidebar({ onNavigate }) {
  return (
    <div
      style={{ width: "16rem", backgroundColor: "#fbbf24", padding: "1rem" }}
    >
      {/* ナビゲーションリンクのリスト */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {/* 各リンクはクリック時にonNavigateを呼び出して目的地を通知 */}
        <a
          href="/"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fbbf24",
            transition: "background-color 0.3s",
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => onNavigate("home")}
        >
          ホーム
        </a>
        <a
          href="/my_page#"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fbbf24",
            transition: "background-color 0.3s",
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => onNavigate("mypage")}
        >
          マイページ
        </a>
        <a
          href="document_sharing"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fbbf24",
            color: "black",
          }}
          onClick={() => onNavigate("share")}
        >
          資料を共有する
        </a>
        <a
          href="/document_sharing"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fbbf24",
            color: "black",
          }}
          onClick={() => onNavigate("ranking")}
        >
          ランキング
        </a>
        <a
          href="#"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fbbf24",
            color: "black",
          }}
          onClick={() => onNavigate("wiki")}
        >
          WIKI
        </a>
      </nav>
    </div>
  );
}
