"use client";

// Sidebar コンポーネントをインポート
import Sidebar from "@/components/Sidebar"; // Sidebarコンポーネントをインポート

export default function MyPage() {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#f3f4f6" }}
    >
      {/* サイドバー */}
      <Sidebar />

      {/* メインコンテンツ */}
      <div style={{ flex: 1, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          {/* ボタン */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                backgroundColor: "#ec4899",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              管理者設定
            </button>
            <button
              style={{
                backgroundColor: "#ec4899",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              承認画面
            </button>
          </div>

          {/* ユーザー情報 */}
          <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>
            ログインユーザー：営業部 田中太郎
          </div>
        </div>

        {/* アクションカード */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* 各アクションカードをレンダリング */}
          <ActionCard icon="❤️" title="いいね！した資料一覧" />
          <ActionCard icon="⏰" title="閲覧履歴" />
          <ActionCard icon="👥" title="フォローリスト" />
          <ActionCard icon="📂" title="ダウンロードした資料" />
          <ActionCard icon="📄" title="共有した資料" />
          <ActionCard icon="🔔" title="お知らせ" />
        </div>

        {/* ポイントセクション */}
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              現在のポイント
            </h2>
            <p
              style={{ fontSize: "3rem", fontWeight: "bold", color: "#ec4899" }}
            >
              500<span style={{ fontSize: "1rem", color: "#6b7280" }}>P</span>
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginRight: "1rem" }}>⭐</div>
            <div>
              <p style={{ fontSize: "1rem" }}>現在のステージ</p>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                あなたは
                <span style={{ color: "#ec4899" }}>プラチナステージ</span>です
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// アクションカードコンポーネント
// 各カードのアイコンとタイトルを表示
function ActionCard({ icon, title }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "8rem",
        border: "2px dashed #d1d5db",
        borderRadius: "0.5rem",
        padding: "1rem",
        backgroundColor: "white",
      }}
    >
      {/* アイコン */}
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{icon}</div>
      {/* タイトル */}
      <h3 style={{ fontSize: "1rem", fontWeight: "medium" }}>{title}</h3>
    </div>
  );
}
