"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Sidebar from "@/components/Sidebar"; // Sidebarコンポーネントをインポート

export default function Component() {
  // 検索パラメーターを管理するためのステートを定義
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    document: "",
    project: "",
    department: "",
    name: "",
    business: "",
    commentCount: "",
    likeCount: "",
    type: "",
    startDate: "",
    endDate: "",
    isTemplate: false,
    isReference: false,
    hasTranscript: false,
  });
  const [showResults, setShowResults] = useState(false);

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // 入力が変わったときの処理を行う関数
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 検索ボタンがクリックされたときの処理を行う関数
  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  if (showResults) {
    return <SearchResults searchParams={searchParams} />;
  }

  return (
    <div style={{ display: "flex", backgroundColor: "#f3f4f6" }}>
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
          <input
            type="search"
            placeholder="なにをお探しですか？"
            style={{ width: "16rem", padding: "0.5rem" }}
          />
          <div style={{ fontSize: "0.875rem", color: "black" }}>
            ログインユーザー：東京都 田中太郎
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <button
              style={{
                backgroundColor: activeButton === "main" ? "#fbbf24" : "white",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                cursor: "pointer",
              }}
              onClick={() => handleClick("main")}
            >
              メイン
            </button>
            <button
              style={{
                backgroundColor:
                  activeButton === "person" ? "#fbbf24" : "white",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                cursor: "pointer",
              }}
              onClick={() => handleClick("person")}
            >
              担当者
            </button>
            <button
              style={{
                backgroundColor:
                  activeButton === "product" ? "#fbbf24" : "white",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                cursor: "pointer",
              }}
              onClick={() => handleClick("product")}
            >
              商材
            </button>
            <button
              style={{
                backgroundColor:
                  activeButton === "project" ? "#fbbf24" : "white",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                cursor: "pointer",
              }}
              onClick={() => handleClick("project")}
            >
              プロジェクト
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* キーワード入力フィールド */}
            <input
              name="keyword"
              value={searchParams.keyword}
              onChange={handleInputChange}
              placeholder="キーワードを入力してください。例）開発、サンプル、デザイン、1000文字"
              style={{
                padding: "0.5rem",
                width: "100%",
                borderRadius: "0.25rem",
                border: "1px solid #d1d5db",
              }}
            />
            {/* 除外ワード入力フィールド */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <label
                style={{
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                除外ワード
              </label>
              <input
                name="keyword"
                value={searchParams.keyword}
                onChange={handleInputChange}
                placeholder="除外するフリーワードを入力してください。"
                style={{
                  padding: "0.5rem",
                  width: "100%",
                  borderRadius: "0.25rem",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            {/* プルダウン選択肢: 資料、プロジェクト、部署、コメント数、いいね数、種類 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  商材
                </label>
                <select
                  name="document"
                  value={searchParams.document}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="report">レポート</option>
                  <option value="presentation">プレゼンテーション</option>
                  <option value="spreadsheet">スプレッドシート</option>
                </select>
              </div>

              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  作成者（部署）
                </label>
                <select
                  name="department"
                  value={searchParams.department}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="sales">営業部</option>
                  <option value="marketing">マーケティング部</option>
                  <option value="engineering">エンジニアリング部</option>
                </select>
              </div>
            </div>

            {/* プルダウン選択肢 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  プロジェクト
                </label>
                <select
                  name="project"
                  value={searchParams.project}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="projectA">プロジェクトA</option>
                  <option value="projectB">プロジェクトB</option>
                  <option value="projectC">プロジェクトC</option>
                </select>
              </div>

              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  作成者（名前）
                </label>
                <select
                  name="department"
                  value={searchParams.department}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="sales">かみさん</option>
                  <option value="marketing">せいじさん</option>
                  <option value="engineering">かないさん</option>
                  <option value="engineering">もかさん</option>
                </select>
              </div>
            </div>

            {/* プルダウン選択肢 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  業界
                </label>
                <select
                  name="commentCount"
                  value={searchParams.commentCount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="不動産">不動産業界</option>
                  <option value="コンサル">コンサル業界</option>
                  <option value="商社">商社業界</option>
                </select>
              </div>

              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  コメント数
                </label>
                <select
                  name="commentCount"
                  value={searchParams.commentCount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="0-10">0-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51+">51+</option>
                </select>
              </div>
            </div>

            {/* プルダウン選択肢 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  顧客
                </label>
                <select
                  name="likeCount"
                  value={searchParams.likeCount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="A">A社</option>
                  <option value="B">B社</option>
                  <option value="C">C社</option>
                </select>
              </div>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  いいね数
                </label>
                <select
                  name="likeCount"
                  value={searchParams.likeCount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="0-10">0-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51+">51+</option>
                </select>
              </div>
            </div>

            {/* プルダウン選択肢 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  価格
                </label>
                <select
                  name="type"
                  value={searchParams.type}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                >
                  <option value="">選択してください</option>
                  <option value="1000">1,000円</option>
                  <option value="2000">2,000円</option>
                  <option value="3000">3,000円</option>
                </select>
              </div>
            </div>

            {/* 日付の選択 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  更新日（開始）
                </label>
                <DatePicker
                  selected={
                    searchParams.startDate
                      ? new Date(searchParams.startDate)
                      : null
                  }
                  onChange={(date) =>
                    handleInputChange({
                      target: {
                        name: "startDate",
                        value: date ? date.toISOString().split("T")[0] : "",
                      },
                    })
                  }
                  placeholderText="開始日"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  更新日（終了）
                </label>
                <DatePicker
                  selected={
                    searchParams.endDate ? new Date(searchParams.endDate) : null
                  }
                  onChange={(date) =>
                    handleInputChange({
                      target: {
                        name: "endDate",
                        value: date ? date.toISOString().split("T")[0] : "",
                      },
                    })
                  }
                  placeholderText="終了日"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
            </div>

            {/* チェックボックス: 雛形可能、社内参考事例、トークスクリプト有 */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="isTemplate"
                  name="isTemplate"
                  checked={searchParams.isTemplate}
                  onChange={handleInputChange}
                  style={{ marginRight: "0.5rem" }}
                />
                <label htmlFor="isTemplate" style={{ color: "black" }}>
                  雛形可能
                </label>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="isReference"
                  name="isReference"
                  checked={searchParams.isReference}
                  onChange={handleInputChange}
                  style={{ marginRight: "0.5rem" }}
                />
                <label htmlFor="isReference" style={{ color: "black" }}>
                  社内参考事例
                </label>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="hasTranscript"
                  name="hasTranscript"
                  checked={searchParams.hasTranscript}
                  onChange={handleInputChange}
                  style={{ marginRight: "0.5rem" }}
                />
                <label htmlFor="hasTranscript" style={{ color: "black" }}>
                  トークスクリプト有
                </label>
              </div>
            </div>

            {/* 検索ボタン */}
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "0.75rem",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              検索
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// 検索結果の表示コンポーネント
function SearchResults({ searchParams }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "black",
        }}
      >
        検索結果
      </h1>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
          padding: "1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "black",
          }}
        >
          検索条件
        </h2>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1.25rem",
            color: "black",
          }}
        >
          {Object.entries(searchParams).map(
            ([key, value]) =>
              value && (
                <li key={key}>
                  {key}: {value.toString()}
                </li>
              )
          )}
        </ul>
        <p style={{ marginTop: "1rem", color: "black" }}>
          検索条件に一致する資料がここに表示されます。
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "1rem",
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "0.75rem",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        検索画面に戻る
      </button>
    </div>
  );
}
