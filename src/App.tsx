import React, { useState } from 'react';
import {
  Printer,
  Download,
  FileText,
  Copy,
  Check,
  BookOpen,
  Award,
  Users,
  User,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ESSAY_VARIANTS, GENERAL_INFO, EssayVariant } from './data/essayData';
import { EssayContent } from './components/EssayContent';
import { exportToWordDoc, triggerPrintPdf, copyEssayPlainText } from './utils/exportUtils';

export default function App() {
  const [activeVariantId, setActiveVariantId] = useState<string>('group');
  const [copied, setCopied] = useState<boolean>(false);
  const [showBatchModal, setShowBatchModal] = useState<boolean>(false);
  const [showPdfGuideModal, setShowPdfGuideModal] = useState<boolean>(false);

  const activeVariant: EssayVariant =
    ESSAY_VARIANTS.find((v) => v.id === activeVariantId) || ESSAY_VARIANTS[0];

  const handleCopy = async () => {
    const success = await copyEssayPlainText();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 pb-16 font-sans">
      {/* ========================================================= */}
      {/* TOP HEADER / ACTION BAR (ẨN KHI IN ẤN - NO PRINT) */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-300 shadow-sm print-hide">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <img
              src={GENERAL_INFO.logoPath}
              alt="Logo GDU"
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-blue-900 text-sm tracking-tight">
                  {GENERAL_INFO.university}
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                  Khoa KHXH & NNQT
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-1">
                Học phần: <strong>{GENERAL_INFO.subject}</strong> | GV: {GENERAL_INFO.instructor}
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => setShowPdfGuideModal(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md border border-slate-300 transition-colors cursor-pointer"
              title="Xem hướng dẫn xuất file PDF chuẩn"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Hướng dẫn PDF</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-md border border-slate-300 transition-colors cursor-pointer"
              title="Sao chép toàn bộ văn bản tiểu luận"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" />
                  <span>Sao chép chữ</span>
                </>
              )}
            </button>

            <button
              onClick={() => exportToWordDoc(activeVariant)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-semibold rounded-md border border-blue-200 transition-colors cursor-pointer"
              title="Tải về file Microsoft Word (.doc) giữ nguyên format"
            >
              <Download className="w-3.5 h-3.5 text-blue-700" />
              <span>Tải file Word (.doc)</span>
            </button>

            <button
              onClick={() => triggerPrintPdf(activeVariant)}
              className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-md shadow-xs transition-colors cursor-pointer"
              title="In hoặc Lưu thành file PDF chuẩn A4 (Trình duyệt)"
            >
              <Printer className="w-4 h-4" />
              <span>IN / XUẤT PDF CHUẨN A4</span>
            </button>

            <button
              onClick={() => setShowBatchModal(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-md transition-colors cursor-pointer shadow-xs"
              title="Xuất nhanh trọn bộ 5 file tiểu luận"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tải trọn bộ 5 bài</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TABS SELECTOR (5 BÀI TIỂU LUẬN THEO YÊU CẦU) */}
        {/* ========================================================= */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mr-2">
              <Users className="w-4 h-4 text-blue-700" />
              <span>Chọn phiên bản bài nộp (5 file):</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {ESSAY_VARIANTS.map((v) => {
                const isActive = v.id === activeVariantId;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariantId(v.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center space-x-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-xs scale-102 ring-2 ring-blue-500/20'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {v.type === 'group' ? (
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-blue-300" />
                    )}
                    <span>{v.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* STATUS & ACADEMIC STANDARDS BANNER */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 mt-4 print-hide">
        <div className="bg-white border-l-4 border-blue-900 p-4 rounded-r-lg shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-900 text-sm">
                Đang xem:{' '}
                <span className="text-blue-900 underline">{activeVariant.title}</span>
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">
                Tên file xuất: {activeVariant.fileName}
              </span>
            </div>
            <p className="text-slate-600 mt-1">
              Định dạng chuẩn quy định: <strong>Times New Roman 13pt</strong>, Giãn dòng <strong>1.5 lines</strong>, Căn lề chuẩn A4 (Trái 3.0cm, Phải 2.0cm, Trên/Dưới 2.5cm), Bố cục đủ 4 chương, Rubric 10 điểm & chuẩn CLO.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <span className="flex items-center text-slate-600">
              <Sparkles className="w-4 h-4 text-amber-500 mr-1" />
              Sẵn sàng xuất PDF
            </span>
            <button
              onClick={() => triggerPrintPdf(activeVariant)}
              className="px-3 py-1.5 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded shadow-xs transition-colors cursor-pointer"
            >
              Lưu PDF bản này
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTAINER: SIDEBAR NAVIGATION + A4 DOCUMENT PAGES */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6">
        {/* Navigation Sidebar (Floating, Print-hide) */}
        <aside className="w-full lg:w-64 shrink-0 print-hide">
          <div className="sticky top-28 bg-white border border-slate-300 rounded-lg p-4 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 font-bold text-slate-900 text-xs border-b border-slate-200 pb-2">
              <BookOpen className="w-4 h-4 text-blue-800" />
              <span>ĐIỀU HƯỚNG NHANH</span>
            </div>

            <nav className="space-y-1 text-xs text-slate-700 max-h-[70vh] overflow-y-auto pr-1">
              <button
                onClick={() => scrollToSection('page-cover')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>1. Trang bìa chính</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              {activeVariant.type === 'group' && (
                <button
                  onClick={() => scrollToSection('page-group-members')}
                  className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between font-semibold text-blue-900 bg-blue-50/70"
                >
                  <span>1b. Bảng phân công thành viên</span>
                  <Users className="w-3.5 h-3.5 text-blue-700" />
                </button>
              )}
              <button
                onClick={() => scrollToSection('page-pledge')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>2. Lời cam đoan & Cảm ơn</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-rubric')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between font-semibold text-blue-900 bg-blue-50/50"
              >
                <span>3. Rubric Thầy chấm (10đ)</span>
                <Award className="w-3.5 h-3.5 text-amber-600" />
              </button>
              <button
                onClick={() => scrollToSection('page-toc')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>4. Từ viết tắt & Mục lục</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-chapter-1')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>5. Mở đầu & Chương 1</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-chapter-2')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>6. Chương 2: Cơ sở lý thuyết</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-chapter-3')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>7. Chương 3: Thực trạng GDU</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-chapter-4')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>8. Chương 4: Triển khai & AI</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-conclusion')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>9. Kết luận & Kiến nghị</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-references')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>10. Tài liệu tham khảo</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('page-appendix')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
              >
                <span>11. Phụ lục khảo sát & Prompt</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
            </nav>

            <div className="pt-3 border-t border-slate-200">
              <div className="text-[11px] text-slate-500 space-y-1">
                <p>
                  <strong>Thành viên nhóm:</strong>
                </p>
                <p>1. Trần Trịnh Ngân Châu (Trưởng nhóm)</p>
                <p>2. Lý Thị Đà Ni</p>
                <p>3. Huỳnh Nguyễn Kim Ngân</p>
                <p>4. Nguyễn Cao Như Ý</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Central Academic Paper Document */}
        <main className="flex-1 min-w-0 flex flex-col items-center">
          <div id="academic-document-container" className="w-full">
            <EssayContent variant={activeVariant} />
          </div>
        </main>
      </div>

      {/* ========================================================= */}
      {/* MODAL: HƯỚNG DẪN XUẤT FILE PDF CHUẨN A4 KHÔNG LỖI */}
      {/* ========================================================= */}
      {showPdfGuideModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 text-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="font-bold text-base text-blue-950 flex items-center">
                <Printer className="w-5 h-5 text-blue-700 mr-2" />
                Hướng dẫn Lưu file PDF Chuẩn A4 (Không lỗi)
              </h3>
              <button
                onClick={() => setShowPdfGuideModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-3 leading-relaxed text-slate-700">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                <strong className="text-blue-900">Tại sao cách này đạt chuẩn 100% không bị lỗi?</strong>
                <p className="mt-1">
                  Trình duyệt web hiện đại có bộ máy render PDF vector tích hợp trực tiếp từ Google Chrome / Edge / Safari. Toàn bộ font chữ <strong>Times New Roman</strong>, lề trang <strong>3.0cm - 2.0cm</strong> và ngắt trang đều được lập trình chính xác bằng chuẩn in ấn CSS Print.
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="font-bold text-slate-900">Các bước thực hiện khi hộp thoại In hiện lên:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Tại mục <strong>Máy in đích (Destination)</strong>: Chọn <strong>Lưu dưới dạng PDF (Save as PDF)</strong>.</li>
                  <li>Tại mục <strong>Khổ giấy (Paper size)</strong>: Chọn <strong>A4</strong>.</li>
                  <li className="text-amber-800 font-bold">
                    ⚠️ QUAN TRỌNG NHẤT: Bỏ chọn (Bỏ tích) ô "Tiêu đề đầu và chân trang" (Headers and footers) để trình duyệt KHÔNG in đè ngày giờ và đường link web lên trang bìa như trong ảnh!
                  </li>
                  <li>Tại mục <strong>Lề (Margins)</strong>: Chọn <strong>Mặc định (Default)</strong> hoặc <strong>Tối thiểu (Minimum)</strong>.</li>
                  <li>Tại mục <strong>Tùy chọn khác (Options)</strong>: Tích chọn <strong>Đồ họa nền (Background graphics)</strong> để hiện rõ các bảng màu và khung viền bìa.</li>
                  <li>Bấm nút <strong>Lưu (Save)</strong>: Toàn bộ bài tiểu luận sẽ xuất thành 1 file PDF sắc nét, trang bìa nằm gọn gàng 1 trang duy nhất không bị tách rách!</li>
                </ol>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowPdfGuideModal(false);
                  triggerPrintPdf(activeVariant);
                }}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs rounded transition-colors"
              >
                Mở hộp thoại Lưu PDF ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: HỘP CÔNG CỤ TẢI TRỌN BỘ 5 BÀI TIỂU LUẬN */}
      {/* ========================================================= */}
      {showBatchModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 text-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-emerald-700" />
                <h3 className="font-bold text-base text-slate-900">
                  Xuất trọn bộ 5 bài tiểu luận (1 Bài Nhóm + 4 Bài Cá Nhân)
                </h3>
              </div>
              <button
                onClick={() => setShowBatchModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Nhấn vào từng bài bên dưới để chuyển đổi và xuất nhanh file PDF hoặc file Word tương ứng cho từng bạn:
            </p>

            <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {ESSAY_VARIANTS.map((v, idx) => (
                <div
                  key={v.id}
                  className={`p-3 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition-all ${
                    v.id === activeVariantId
                      ? 'bg-blue-50 border-blue-400 shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">
                        {idx + 1}. {v.title}
                      </span>
                      {v.type === 'group' ? (
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                          Bài Nhóm
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">
                          Cá Nhân
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 font-mono text-[11px] mt-0.5">
                      File: {v.fileName}
                    </p>
                    <div className="text-[11px] text-slate-600 mt-1">
                      {v.students.map((s) => `${s.name} (${s.studentId})`).join(' • ')}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => {
                        setActiveVariantId(v.id);
                        setShowBatchModal(false);
                      }}
                      className="px-2.5 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded font-medium"
                    >
                      Xem bài
                    </button>
                    <button
                      onClick={() => {
                        setActiveVariantId(v.id);
                        setTimeout(() => triggerPrintPdf(v), 200);
                      }}
                      className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded font-bold flex items-center space-x-1"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>In / PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowBatchModal(false)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
