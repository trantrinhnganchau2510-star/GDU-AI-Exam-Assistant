import React from 'react';

/**
 * Các hình ảnh minh họa học thuật vector sắc nét theo chuẩn TCVN 6909:2001
 * Đầy đủ số hiệu hình, tiêu đề in đậm, nguồn trích dẫn học thuật minh bạch
 */

export const FigureTransformerArchitecture: React.FC = () => {
  return (
    <div className="keep-together my-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-lg p-4 shadow-xs">
        <svg viewBox="0 0 700 280" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="280" fill="#f8fafc" rx="8" />

          {/* Input stage */}
          <rect x="20" y="100" width="115" height="80" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
          <text x="77" y="132" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369a1">Văn bản đầu vào</text>
          <text x="77" y="152" textAnchor="middle" fontSize="10" fill="#075985">(Input Prompt/Docs)</text>

          {/* Arrow 1 */}
          <path d="M 135 140 L 165 140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Embedding & Positional Encoding */}
          <rect x="170" y="85" width="125" height="110" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
          <text x="232" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Tokenization &</text>
          <text x="232" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Vector Embedding</text>
          <text x="232" y="168" textAnchor="middle" fontSize="9.5" fill="#78350f">Mã hóa vị trí (Positional)</text>

          {/* Arrow 2 */}
          <path d="M 295 140 L 325 140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Transformer Core Blocks */}
          <rect x="330" y="45" width="190" height="190" rx="8" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" />
          <text x="425" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3730a3">Lõi Transformer (N layers)</text>

          {/* Self-Attention */}
          <rect x="345" y="85" width="160" height="50" rx="4" fill="#c7d2fe" stroke="#4338ca" strokeWidth="1.2" />
          <text x="425" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#312e81">Multi-Head Self-Attention</text>
          <text x="425" y="124" textAnchor="middle" fontSize="9" fill="#3730a3">(Tính toán trọng số tương quan từ vựng)</text>

          {/* Feed Forward */}
          <rect x="345" y="155" width="160" height="50" rx="4" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="1.2" />
          <text x="425" y="178" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">Feed-Forward Neural Net</text>
          <text x="425" y="194" textAnchor="middle" fontSize="9" fill="#581c87">(Chuẩn hóa LayerNorm & Kích hoạt phi tuyến)</text>

          {/* Arrow 3 */}
          <path d="M 520 140 L 555 140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Output stage */}
          <rect x="560" y="100" width="120" height="80" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <text x="620" y="132" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803d">Phân phối xác suất</text>
          <text x="620" y="152" textAnchor="middle" fontSize="10.5" fill="#166534">Sinh Token phản hồi</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="figure-caption mt-2 text-slate-700">
        <strong>Hình 2.1:</strong> Sơ đồ kiến trúc mô hình ngôn ngữ lớn (LLM) dựa trên cơ chế Multi-Head Attention
        <br />
        <span className="text-xs text-slate-500 font-normal">
          (Nguồn: Phỏng tác và việt hóa từ công trình nghiên cứu gốc của Vaswani và cộng sự [2017])
        </span>
      </p>
    </div>
  );
};

export const FigureVectorEmbedding: React.FC = () => {
  return (
    <div className="keep-together my-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-lg p-4 shadow-xs">
        <svg viewBox="0 0 700 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="240" fill="#f8fafc" rx="8" />

          {/* Text chunks */}
          <rect x="25" y="30" width="160" height="75" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
          <text x="105" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">Đoạn văn bản bài giảng GDU</text>
          <text x="105" y="75" textAnchor="middle" fontSize="9.5" fill="#475569">"Trí tuệ nhân tạo tạo sinh..."</text>
          <text x="105" y="92" textAnchor="middle" fontSize="9.5" fill="#475569">"Cơ chế tự chú ý Attention..."</text>

          {/* Embedding Model */}
          <path d="M 185 67 L 235 67" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="240" y="30" width="150" height="75" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
          <text x="315" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0369a1">Mô hình Embedding</text>
          <text x="315" y="80" textAnchor="middle" fontSize="9.5" fill="#0284c7">text-embedding-004</text>

          {/* Vector Space */}
          <path d="M 390 67 L 440 67" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="445" y="20" width="230" height="100" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
          <text x="560" y="45" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Không gian Vector đa chiều</text>
          <text x="560" y="65" textAnchor="middle" fontSize="9" font-family="monospace" fill="#78350f">[0.124, -0.452, 0.891, ...]</text>
          <text x="560" y="85" textAnchor="middle" fontSize="9" font-family="monospace" fill="#78350f">[0.130, -0.448, 0.885, ...]</text>
          <text x="560" y="105" textAnchor="middle" fontSize="9.5" fill="#b45309">Độ tương đồng Cosine gần nhau</text>

          {/* Query Match Flow */}
          <rect x="25" y="145" width="160" height="65" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.2" />
          <text x="105" y="172" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">Câu hỏi sinh viên</text>
          <text x="105" y="192" textAnchor="middle" fontSize="9" fill="#047857">"Transformer hoạt động ra sao?"</text>

          <path d="M 185 177 L 445 177" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />

          <rect x="445" y="145" width="230" height="65" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <text x="560" y="172" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">Truy xuất ngữ nghĩa chuẩn xác</text>
          <text x="560" y="192" textAnchor="middle" fontSize="9.5" fill="#166534">Cosine Similarity &gt; 0.88</text>
        </svg>
      </div>
      <p className="figure-caption mt-2 text-slate-700">
        <strong>Hình 2.2:</strong> Quy trình chuyển đổi học liệu thành Vector Embeddings và tính toán độ tương đồng Cosine
        <br />
        <span className="text-xs text-slate-500 font-normal">
          (Nguồn: Nhóm tác giả thiết kế dựa trên lý thuyết Biểu diễn ngữ nghĩa của Ian Goodfellow và cộng sự [2016])
        </span>
      </p>
    </div>
  );
};

export const FigureRAGArchitecture: React.FC = () => {
  return (
    <div className="keep-together my-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-lg p-4 shadow-xs">
        <svg viewBox="0 0 700 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="300" fill="#f8fafc" rx="8" />

          {/* User query */}
          <rect x="20" y="30" width="165" height="65" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <text x="102" y="58" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#166534">Câu hỏi từ Sinh viên GDU</text>
          <text x="102" y="78" textAnchor="middle" fontSize="9.5" fill="#15803d">"Tóm tắt Chương 3 bài giảng..."</text>

          {/* Knowledge base GDU */}
          <rect x="20" y="175" width="165" height="95" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="102" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Kho tri thức Khoa & GDU</text>
          <text x="102" y="218" textAnchor="middle" fontSize="9.5" fill="#1d4ed8">• Slide bài giảng môn học</text>
          <text x="102" y="235" textAnchor="middle" fontSize="9.5" fill="#1d4ed8">• Đề cương chi tiết học phần</text>
          <text x="102" y="252" textAnchor="middle" fontSize="9.5" fill="#1d4ed8">• Quy chế đào tạo tín chỉ GDU</text>

          {/* Retriever / Vector DB */}
          <rect x="230" y="175" width="150" height="95" rx="6" fill="#fdf4ff" stroke="#a855f7" strokeWidth="1.5" />
          <text x="305" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7e22ce">Cơ sở dữ liệu Vector</text>
          <text x="305" y="230" textAnchor="middle" fontSize="10" fill="#6b21a8">(Vector Database)</text>
          <text x="305" y="248" textAnchor="middle" fontSize="9" fill="#9333ea">Tìm kiếm ngữ nghĩa (Cosine)</text>

          {/* Arrows */}
          <path d="M 185 220 L 225 220" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 185 62 L 400 62" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 102 95 L 102 170" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 305 175 L 305 130 L 410 130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Augmented Prompt Box */}
          <rect x="415" y="30" width="145" height="135" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
          <text x="487" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#854d0e">Prompt mở rộng</text>
          <text x="487" y="80" textAnchor="middle" fontSize="9.5" fill="#a16207">(Augmented Context)</text>
          <line x1="425" y1="92" x2="550" y2="92" stroke="#eab308" />
          <text x="487" y="112" textAnchor="middle" fontSize="9" fill="#713f12">Câu hỏi sinh viên</text>
          <text x="487" y="130" textAnchor="middle" fontSize="9" fill="#713f12">+ Đoạn trích dẫn giáo trình</text>
          <text x="487" y="148" textAnchor="middle" fontSize="9" fill="#713f12">+ Chỉ dẫn không bịa đặt</text>

          {/* LLM Engine */}
          <path d="M 560 97 L 585 97" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="590" y="50" width="95" height="95" rx="6" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
          <text x="637" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#312e81">Lõi LLM</text>
          <text x="637" y="105" textAnchor="middle" fontSize="9.5" fill="#3730a3">Gemini 1.5 /</text>
          <text x="637" y="120" textAnchor="middle" fontSize="9.5" fill="#3730a3">GPT-4o</text>

          {/* Final Answer */}
          <path d="M 637 145 L 637 210 L 465 210" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="420" y="185" width="170" height="75" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
          <text x="505" y="215" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">Câu trả lời chuẩn xác</text>
          <text x="505" y="235" textAnchor="middle" fontSize="9" fill="#047857">100% dựa vào dữ liệu GDU,</text>
          <text x="505" y="250" textAnchor="middle" fontSize="9" fill="#047857">triệt tiêu hiện tượng hallucination</text>
        </svg>
      </div>
      <p className="figure-caption mt-2 text-slate-700">
        <strong>Hình 2.3:</strong> Cơ chế Tăng cường truy xuất dữ liệu (RAG) giúp Trợ lý ảo phản hồi chính xác dựa trên học liệu GDU
        <br />
        <span className="text-xs text-slate-500 font-normal">
          (Nguồn: Nhóm tác giả xây dựng dựa trên mô hình RAG của Patrick Lewis và cộng sự [2020])
        </span>
      </p>
    </div>
  );
};

export const FigureSurveyChart: React.FC = () => {
  return (
    <div className="keep-together my-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-lg p-5 shadow-xs">
        <h4 className="text-center font-bold text-slate-800 text-sm mb-3">
          Tỷ lệ sinh viên GDU gặp khó khăn trong học tập và nghiên cứu (Khảo sát N = 180 sinh viên)
        </h4>
        <div className="space-y-3 font-sans text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">1. Lượng kiến thức lớn, học nhiều môn cùng lúc gây quá tải</span>
              <span className="font-bold text-slate-800">83.3% (150 SV)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '83.3%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">2. Bỡ ngỡ khi làm tiểu luận đầu tiên, khó tìm ý tưởng & lập đề cương</span>
              <span className="font-bold text-slate-800">86.1% (155 SV)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-amber-600 h-3 rounded-full" style={{ width: '86.1%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">3. Mất quá nhiều thời gian đọc và tóm tắt slide bài giảng dài</span>
              <span className="font-bold text-slate-800">79.4% (143 SV)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-emerald-600 h-3 rounded-full" style={{ width: '79.4%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">4. Gặp khó khăn trong việc trích dẫn tài liệu tham khảo đúng chuẩn</span>
              <span className="font-bold text-slate-800">71.7% (129 SV)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '71.7%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">5. Nhu cầu có Trợ lý ảo AI học tập chuyên biệt hỗ trợ 24/7</span>
              <span className="font-bold text-rose-700">92.8% (167 SV)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-rose-600 h-3 rounded-full" style={{ width: '92.8%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <p className="figure-caption mt-2 text-slate-700">
        <strong>Hình 3.1:</strong> Biểu đồ thống kê các thách thức lớn nhất của sinh viên GDU trong học kỳ đầu tiên
        <br />
        <span className="text-xs text-slate-500 font-normal">
          (Nguồn: Số liệu khảo sát thực tế của Nhóm nghiên cứu thực hiện tại GDU tháng 10/2026, Phụ lục 1)
        </span>
      </p>
    </div>
  );
};

export const FigureAssistantArchitecture: React.FC = () => {
  return (
    <div className="keep-together my-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-lg p-4 shadow-xs">
        <svg viewBox="0 0 700 280" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="280" fill="#f8fafc" rx="8" />

          {/* User Interface */}
          <rect x="25" y="40" width="130" height="200" rx="6" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5" />
          <text x="90" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Giao diện Sinh viên</text>
          <text x="90" y="88" textAnchor="middle" fontSize="9.5" fill="#475569">(Client Web & Mobile)</text>
          <rect x="35" y="110" width="110" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="90" y="130" textAnchor="middle" fontSize="9.5" fill="#334155">Chat / Tải slide PDF</text>
          <rect x="35" y="150" width="110" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="90" y="170" textAnchor="middle" fontSize="9.5" fill="#334155">Tra cứu dàn ý bài</text>
          <rect x="35" y="190" width="110" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="90" y="210" textAnchor="middle" fontSize="9.5" fill="#334155">Kiểm tra trích dẫn</text>

          {/* Connection */}
          <path d="M 155 140 L 210 140" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* GDU StudyMate Platform */}
          <rect x="215" y="25" width="270" height="230" rx="8" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="350" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">GDU STUDYMATE AI ENGINE</text>
          <text x="350" y="72" textAnchor="middle" fontSize="10" fill="#2563eb">(Nền tảng Google AI Studio & Gemini API)</text>

          {/* Core Modules inside Engine */}
          <rect x="235" y="85" width="230" height="42" rx="4" fill="#dbeafe" stroke="#3b82f6" />
          <text x="350" y="105" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e3a8a">1. Bộ chỉ dẫn hệ thống (System Prompt)</text>
          <text x="350" y="120" textAnchor="middle" fontSize="9" fill="#1d4ed8">Định hình phong cách sư phạm, liêm chính học thuật</text>

          <rect x="235" y="135" width="230" height="42" rx="4" fill="#dbeafe" stroke="#3b82f6" />
          <text x="350" y="155" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e3a8a">2. Kho tri thức chuẩn hóa (Knowledge Base)</text>
          <text x="350" y="170" textAnchor="middle" fontSize="9" fill="#1d4ed8">Đề cương chi tiết học phần, Giáo trình, Chuẩn TCVN</text>

          <rect x="235" y="185" width="230" height="42" rx="4" fill="#dbeafe" stroke="#3b82f6" />
          <text x="350" y="205" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e3a8a">3. Bộ lọc kiểm soát đạo văn & an toàn</text>
          <text x="350" y="220" textAnchor="middle" fontSize="9" fill="#1d4ed8">Ngăn chặn viết hộ toàn bài, thúc đẩy phản biện</text>

          {/* Connection to Cloud Infrastructure */}
          <path d="M 485 140 L 530 140" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Infrastructure */}
          <rect x="535" y="40" width="140" height="200" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <text x="605" y="70" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#334155">Hạ tầng Đám mây</text>
          <text x="605" y="88" textAnchor="middle" fontSize="9.5" fill="#64748b">(Cloud Infrastructure)</text>
          <rect x="545" y="105" width="120" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="605" y="124" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">Google Cloud Vertex</text>
          <text x="605" y="136" textAnchor="middle" fontSize="8" fill="#64748b">Suy luận siêu tốc độ</text>

          <rect x="545" y="150" width="120" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="605" y="169" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">LMS Trường GDU</text>
          <text x="605" y="181" textAnchor="middle" fontSize="8" fill="#64748b">Đồng bộ học liệu môn</text>

          <rect x="545" y="195" width="120" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="605" y="214" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">Bảo mật dữ liệu SV</text>
          <text x="605" y="226" textAnchor="middle" fontSize="8" fill="#64748b">Mã hóa chuẩn AES-256</text>
        </svg>
      </div>
      <p className="figure-caption mt-2 text-slate-700">
        <strong>Hình 4.1:</strong> Sơ đồ kiến trúc tổng thể của Trợ lý ảo "GDU StudyMate AI"
        <br />
        <span className="text-xs text-slate-500 font-normal">
          (Nguồn: Nhóm tác giả đề xuất thiết kế cho sinh viên Trường Đại học Gia Định, 2026)
        </span>
      </p>
    </div>
  );
};
