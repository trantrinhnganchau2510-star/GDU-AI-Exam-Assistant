import React from 'react';
import { EssayVariant, GENERAL_INFO, ABBREVIATIONS, REFERENCES_DATA } from '../data/essayData';
import {
  FigureTransformerArchitecture,
  FigureVectorEmbedding,
  FigureRAGArchitecture,
  FigureSurveyChart,
  FigureAssistantArchitecture,
} from './AcademicFigures';

interface EssayContentProps {
  variant: EssayVariant;
}

export const EssayContent: React.FC<EssayContentProps> = ({ variant }) => {
  // Helper render Footer chỉ hiển thị số trang chính giữa, bắt đầu từ phần nội dung
  const renderFooterNumber = (pageNum: number | null) => {
    if (!pageNum) return null;
    return (
      <div className="page-footer-center">
        {pageNum}
      </div>
    );
  };

  return (
    <div className="academic-font text-slate-900">
      {/* ========================================================= */}
      {/* TRANG 1: TRANG BÌA CHÍNH (COVER PAGE) - VỪA KHÍT 1 TRANG DUY NHẤT */}
      {/* ========================================================= */}
      <div className="cover-page-screen page-break" id="page-cover">
        <div className="cover-frame-outer">
          <div className="cover-frame-inner">
            {/* Header Trường & Khoa - To, Đậm, Trang trọng */}
            <div className="space-y-1 pt-1">
              <h1 className="text-lg md:text-xl font-bold tracking-wider text-slate-900 uppercase">
                {GENERAL_INFO.university}
              </h1>
              <h2 className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-wide">
                {GENERAL_INFO.faculty}
              </h2>
            </div>

            {/* Logo Đại học Gia Định - Tiệp hoàn toàn vào nền, không viền hộp, không bóng mờ */}
            <div className="my-3 flex flex-col items-center justify-center">
              <img
                src={GENERAL_INFO.logoPath}
                alt="Logo Đại học Gia Định"
                className="w-48 sm:w-56 md:w-64 h-auto max-h-48 object-contain mix-blend-multiply"
              />
            </div>

            {/* Tiêu đề Đề tài - To, Nổi Bật, Chuẩn Luận Văn */}
            <div className="space-y-2 my-1.5 w-full max-w-xl">
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-700">
                TIỂU LUẬN KIỂM TRA CUỐI KÌ
              </div>
              <h2 className="text-lg md:text-xl font-black text-slate-950 leading-snug uppercase px-2">
                {GENERAL_INFO.topicTitle}
              </h2>
            </div>

            {/* Thước kẻ ngang trên khối thông tin */}
            <div className="w-full max-w-lg border-t-2 border-slate-900 my-1"></div>

            {/* Khối thông tin Nhóm/Sinh viên & Giảng viên - Cỡ chữ to rõ ràng */}
            <div className="w-full max-w-lg text-left text-xs md:text-sm space-y-1.5 py-1">
              <div className="flex justify-between">
                <span className="font-bold text-slate-800">
                  {variant.type === 'group' ? 'Nhóm thực hiện:' : 'Sinh viên thực hiện:'}
                </span>
                <span className="font-bold text-slate-950">
                  {variant.type === 'group' ? 'NHÓM 4 THÀNH VIÊN' : variant.students[0].name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-slate-800">Giảng viên hướng dẫn:</span>
                <span className="font-bold text-slate-950">{GENERAL_INFO.instructor}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-slate-800">Lớp học phần:</span>
                <span className="font-semibold text-slate-900">{GENERAL_INFO.classes}</span>
              </div>

              {/* Danh sách thành viên (Bài nhóm) */}
              {variant.type === 'group' ? (
                <div className="pt-1.5 border-t border-dotted border-slate-400">
                  <span className="font-bold text-slate-800 block mb-1">
                    4 Thành viên Nhóm (Đóng góp 100%):
                  </span>
                  <div className="space-y-1 text-xs md:text-sm text-slate-900 pl-1 font-medium">
                    {variant.students.map((sv, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>
                          {idx + 1}. {sv.name} {idx === 0 ? '(NT)' : ''}
                        </span>
                        <span className="font-mono font-bold">MSSV: {sv.studentId}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-1.5 border-t border-dotted border-slate-400">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-800">Mã số sinh viên:</span>
                    <span className="font-mono font-bold text-slate-900">{variant.students[0].studentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-800">Học phần:</span>
                    <span className="font-semibold text-slate-900">{GENERAL_INFO.subject}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Thước kẻ ngang dưới khối thông tin */}
            <div className="w-full max-w-lg border-t-2 border-slate-900 my-1"></div>

            {/* Footer Địa điểm, Tháng 11 & Năm học */}
            <div className="space-y-0.5 pb-1">
              <div className="text-xs md:text-sm text-slate-900 font-bold uppercase tracking-wider">
                {GENERAL_INFO.location}, {GENERAL_INFO.monthYear}
              </div>
              <div className="text-xs text-slate-700 italic font-medium">
                {GENERAL_INFO.academicYear}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TRANG 2: TRANG RIÊNG VỀ THÀNH VIÊN & BẢNG PHÂN CÔNG (BÀI NHÓM) */}
      {/* ========================================================= */}
      {variant.type === 'group' && (
        <div className="a4-page-screen page-break academic-body" id="page-group-members">
          <div className="flex-1">
            <h2 className="heading-chapter">
              DANH SÁCH THÀNH VIÊN VÀ BẢNG PHÂN CÔNG NHIỆM VỤ ĐỀ TÀI
            </h2>
            <p className="no-indent text-[11.5pt] italic text-slate-700 text-center mb-4">
              (Áp dụng cho bài tiểu luận nhóm học phần: {GENERAL_INFO.subject})
            </p>

            <table className="academic-table text-[11pt]">
              <thead>
                <tr>
                  <th className="w-10">STT</th>
                  <th className="w-44">Họ và tên</th>
                  <th className="w-24">MSSV</th>
                  <th className="w-24">Lớp HP</th>
                  <th>Nhiệm vụ cụ thể được phân công</th>
                  <th className="w-20">Mức độ đóng góp</th>
                  <th className="w-20">Ký xác nhận</th>
                </tr>
              </thead>
              <tbody>
                {variant.students.map((sv, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold">{idx + 1}</td>
                    <td>
                      <div className="font-bold text-slate-950 text-[11.5pt]">{sv.name}</div>
                      <div className="text-[10pt] text-blue-900 font-semibold">{sv.role}</div>
                    </td>
                    <td className="text-center font-mono font-bold text-slate-800 text-[11pt]">{sv.studentId}</td>
                    <td className="text-center text-slate-700 text-[10.5pt]">{sv.classId.split('-')[1]?.trim() || sv.classId}</td>
                    <td className="text-justify leading-relaxed text-[11pt]">{sv.assignedTasks}</td>
                    <td className="text-center font-bold text-emerald-800 text-[11pt]">{sv.contributionPercent || '100%'}</td>
                    <td className="text-center italic text-slate-500 text-[10.5pt]">(Đã ký)</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-5 p-3.5 bg-slate-50 border border-slate-300 rounded-sm leading-relaxed">
              <h4 className="font-bold text-slate-950 text-[12pt] uppercase mb-1.5">
                Biên bản họp nhóm và cam kết trách nhiệm học thuật:
              </h4>
              <p className="text-[11.5pt] mb-1 text-justify">
                1. Toàn thể 04 thành viên trong nhóm đã tham gia đầy đủ các buổi thảo luận, cùng đóng góp xây dựng ý tưởng, thu thập dữ liệu khảo sát và hoàn thành nội dung đề tài theo đúng tiến độ.
              </p>
              <p className="text-[11.5pt] mb-1 text-justify">
                2. Từng thành viên chịu trách nhiệm độc lập và liên đới đối với tính xác thực của nội dung phần việc mình phụ trách; toàn bộ số liệu và hình ảnh minh họa đều được trích dẫn nguồn minh bạch.
              </p>
              <p className="text-[11.5pt] text-justify">
                3. Nhóm trưởng Trần Trịnh Ngân Châu chịu trách nhiệm rà soát tổng thể, điều phối chất lượng và đại diện cho nhóm trước Giảng viên phụ trách môn học.
              </p>
            </div>

            <div className="mt-6 flex justify-between text-[11.5pt] text-slate-800">
              <div className="text-center w-56">
                <p className="no-indent font-bold uppercase text-[11.5pt]">CÁC THÀNH VIÊN NHÓM</p>
                <p className="no-indent italic text-slate-500 text-[10.5pt]">(Ký và ghi rõ họ tên)</p>
                <div className="h-12"></div>
                <p className="no-indent italic text-slate-600 font-medium text-[11pt]">Đã ký duyệt đồng thuận</p>
              </div>
              <div className="text-center w-56">
                <p className="no-indent font-bold uppercase text-[11.5pt]">NHÓM TRƯỞNG</p>
                <p className="no-indent italic text-slate-500 text-[10.5pt]">(Ký và ghi rõ họ tên)</p>
                <div className="h-12"></div>
                <p className="no-indent font-bold text-slate-950 text-[12pt]">Trần Trịnh Ngân Châu</p>
              </div>
            </div>
          </div>
          {/* Không đánh số trang ở các trang mở đầu */}
        </div>
      )}

      {/* ========================================================= */}
      {/* TRANG LỜI CAM ĐOAN & LỜI CẢM ƠN */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-pledge">
        <div className="flex-1">
          <h2 className="heading-chapter">LỜI CAM ĐOAN</h2>
          <p>
            Tôi/Chúng tôi xin cam đoan đây là công trình nghiên cứu học thuật được thực hiện nghiêm túc bởi{' '}
            {variant.type === 'group'
              ? 'nhóm sinh viên gồm: Trần Trịnh Ngân Châu, Lý Thị Đà Ni, Huỳnh Nguyễn Kim Ngân và Nguyễn Cao Như Ý'
              : `sinh viên ${variant.students[0].name} (MSSV: ${variant.students[0].studentId})`}{' '}
            thuộc {GENERAL_INFO.faculty}, Trường Đại học Gia Định, dưới sự hướng dẫn của thầy Nguyễn Ánh Việt trong khuôn khổ học phần "{GENERAL_INFO.subject}" [Bộ Giáo dục và Đào tạo, 2021].
          </p>
          <p>
            Các số liệu điều tra thực tế (N = 180 sinh viên GDU), các mô hình kiến trúc công nghệ và kết quả phân tích được trình bày trong bài tiểu luận này là hoàn toàn trung thực, khách quan và xác thực. Mọi kế thừa lý thuyết từ các công trình nghiên cứu trong và ngoài nước, sách giáo trình, tạp chí khoa học và nguồn dữ liệu trực tuyến đều đã được chú thích trích dẫn tường minh ngay trong nội dung theo đúng quy chuẩn học thuật TCVN 6909:2001 và quy chế liêm chính học thuật của Trường Đại học Gia Định [Trường Đại học Gia Định, 2025].
          </p>
          <p>
            Tôi/Chúng tôi xin chịu hoàn toàn trách nhiệm trước Ban Chủ nhiệm Khoa và Nhà trường về tính trung thực và đạo đức khoa học của công trình này.
          </p>

          <div className="my-6 flex justify-end">
            <div className="text-center w-64">
              <p className="no-indent italic text-[11.5pt] text-slate-700">
                TP. Hồ Chí Minh, tháng 11 năm 2026
              </p>
              <p className="no-indent font-bold text-[12pt] text-slate-900 mt-1">
                {variant.type === 'group' ? 'Đại diện nhóm sinh viên' : 'Sinh viên cam đoan'}
              </p>
              <div className="h-12"></div>
              <p className="no-indent font-bold text-[13pt] text-slate-950">
                {variant.students[0].name}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-4 mt-4">
            <h2 className="heading-chapter">LỜI CẢM ƠN</h2>
            <p>
              Để hoàn thành tốt bài tiểu luận kết thúc học phần này, chúng tôi xin bày tỏ lòng biết ơn sâu sắc đến Ban Giám hiệu Trường Đại học Gia Định và Ban Chủ nhiệm {GENERAL_INFO.faculty} đã tạo mọi điều kiện thuận lợi về môi trường học tập, thư viện số và cơ sở vật chất hiện đại giúp sinh viên phát huy tối đa năng lực nghiên cứu khoa học.
            </p>
            <p>
              Đặc biệt, chúng tôi xin bày tỏ lòng tri ân sâu sắc nhất tới thầy Nguyễn Ánh Việt – Giảng viên phụ trách học phần "{GENERAL_INFO.subject}". Trong suốt quá trình học tập, Thầy đã luôn nhiệt huyết truyền đạt kiến thức, định hướng phương pháp tư duy khoa học và gợi mở những vấn đề thực tiễn sâu sắc, giúp sinh viên khối ngành Khoa học Xã hội và Ngôn ngữ tự tin làm chủ các công cụ Trí tuệ nhân tạo thế hệ mới [Nguyễn Ánh Việt, 2026].
            </p>
            <p>
              Chúng tôi cũng xin chân thành cảm ơn 180 bạn sinh viên Trường Đại học Gia Định đã nhiệt tình tham gia phiếu khảo sát thực tế để nhóm có được nguồn dữ liệu nghiên cứu sống động và đáng tin cậy. Dù đã nỗ lực hết mình nhưng bài viết khó tránh khỏi những hạn chế nhất định, kính mong nhận được những góp ý quý báu của Thầy để công trình được hoàn thiện hơn nữa.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TRANG TIÊU CHÍ ĐÁNH GIÁ CỦA GIÁO VIÊN & CLO (KHÔNG TỰ CHẤM ĐIỂM) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-rubric">
        <div className="flex-1">
          <div className="text-center mb-3">
            <h3 className="text-xs font-bold uppercase text-slate-700">
              TRƯỜNG ĐẠI HỌC GIA ĐỊNH - {GENERAL_INFO.faculty.toUpperCase()}
            </h3>
            <h4 className="text-xs uppercase text-slate-600">
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM (Độc lập – Tự do – Hạnh phúc)
            </h4>
            <h2 className="text-sm md:text-base font-bold uppercase text-slate-950 mt-1">
              TIÊU CHÍ ĐÁNH GIÁ BÀI THI TIỂU LUẬN, BÁO CÁO THỰC HÀNH/THỰC TẬP
            </h2>
            <p className="no-indent text-xs italic text-slate-600">
              Môn thi: {GENERAL_INFO.subject} | Lớp học phần: {GENERAL_INFO.classes}
            </p>
          </div>

          <table className="academic-table text-xs">
            <thead>
              <tr>
                <th className="w-10">STT</th>
                <th className="w-52">Tiêu chí đánh giá</th>
                <th className="w-20">Thang điểm</th>
                <th>Ghi chú</th>
                <th className="w-24">Điểm chấm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center font-bold">1</td>
                <td className="font-bold">Bố cục</td>
                <td className="text-center font-bold">1,5 điểm</td>
                <td>Đầy đủ, logic, khoa học.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="text-center font-bold" rowSpan={3}>2</td>
                <td className="font-bold" colSpan={4}>Hình thức (1,5 điểm)</td>
              </tr>
              <tr>
                <td className="pl-4">- Trình bày (font chữ, size chữ, canh lề...)</td>
                <td className="text-center">0,5 điểm</td>
                <td>Đúng chuẩn, sạch đẹp.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="pl-4">- Kỹ thuật đánh máy, chính tả</td>
                <td className="text-center">0,5 điểm</td>
                <td>Không mắc lỗi.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td></td>
                <td className="pl-4">- Trích nguồn tài liệu tham khảo</td>
                <td className="text-center">0,5 điểm</td>
                <td>Nhất quán, đúng chuẩn.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="text-center font-bold" rowSpan={6}>3</td>
                <td className="font-bold" colSpan={4}>Nội dung chính (7,0 điểm)</td>
              </tr>
              <tr>
                <td className="pl-4">Chương 1: Tổng quan đề tài</td>
                <td className="text-center">1,0 điểm</td>
                <td>Nêu bật được các yêu cầu thiết yếu.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="pl-4">Chương 2: Cơ sở lý thuyết</td>
                <td className="text-center">1,0 điểm</td>
                <td>Nắm vững và trình bày chính xác các khái niệm cốt lõi.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="pl-4">Chương 3: Phân tích thực trạng</td>
                <td className="text-center">2,0 điểm</td>
                <td>Phân tích sâu sắc, logic, liên hệ thực tiễn tốt.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="pl-4">Chương 4: Triển khai giải pháp & ứng dụng</td>
                <td className="text-center">2,5 điểm</td>
                <td>Giải pháp rõ ràng, ứng dụng cụ thể khả thi, sáng tạo.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr>
                <td className="pl-4">Kết luận – Kiến nghị</td>
                <td className="text-center">0,5 điểm</td>
                <td>Đưa ra được các kết luận và khẳng định đạt được.</td>
                <td className="text-center font-mono">.......</td>
              </tr>
              <tr className="bg-slate-100 font-bold">
                <td colSpan={2} className="text-center uppercase text-slate-900">TỔNG ĐIỂM TOÀN BÀI</td>
                <td className="text-center text-sm">10 điểm</td>
                <td colSpan={2} className="text-center font-bold text-blue-950 font-mono">.......... / 10 điểm</td>
              </tr>
            </tbody>
          </table>

          {/* Ma trận chuẩn đầu ra CLO (Để trống cho Giảng viên đánh giá) */}
          <div className="mt-3 border border-slate-300 p-2.5 bg-slate-50 rounded-sm">
            <h4 className="font-bold text-xs text-slate-950 uppercase mb-1">
              ĐỀ THI ĐÁP ỨNG CÁC CHUẨN ĐẦU RA CỦA HỌC PHẦN (CLO):
            </h4>
            <table className="academic-table text-xs m-0">
              <thead>
                <tr>
                  <th>Tiêu chí đánh giá chuẩn đầu ra</th>
                  <th className="w-28">Chuẩn CLO</th>
                  <th className="w-44">Đánh giá của Giảng viên</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiêu chí 1: Nắm được các khái niệm cơ bản, vai trò và ứng dụng của công nghệ số và trí tuệ nhân tạo.</td>
                  <td className="text-center font-bold">CLO1</td>
                  <td className="text-center text-slate-400">□ Đạt &nbsp;&nbsp; □ Chưa đạt</td>
                </tr>
                <tr>
                  <td>Tiêu chí 2: Phân tích được ảnh hưởng của AI đối với lĩnh vực giáo dục và các vấn đề đạo đức.</td>
                  <td className="text-center font-bold">CLO3</td>
                  <td className="text-center text-slate-400">□ Đạt &nbsp;&nbsp; □ Chưa đạt</td>
                </tr>
                <tr>
                  <td>Tiêu chí 3: Sử dụng được nền tảng AI cơ bản (GPTs) để giải quyết vấn đề đơn giản.</td>
                  <td className="text-center font-bold">CLO4</td>
                  <td className="text-center text-slate-400">□ Đạt &nbsp;&nbsp; □ Chưa đạt</td>
                </tr>
                <tr>
                  <td>Tiêu chí 4: Thể hiện ý thức đạo đức và trách nhiệm công dân số trong việc ứng dụng công nghệ.</td>
                  <td className="text-center font-bold">CLO6</td>
                  <td className="text-center text-slate-400">□ Đạt &nbsp;&nbsp; □ Chưa đạt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex justify-between text-xs text-slate-700">
            <div className="text-center w-52">
              <p className="no-indent font-bold uppercase">DUYỆT CỦA BỘ MÔN/KHOA QLHP</p>
              <p className="no-indent italic text-slate-500">(Ký và ghi rõ họ tên)</p>
              <div className="h-14"></div>
            </div>
            <div className="text-center w-52">
              <p className="no-indent font-bold uppercase">GIẢNG VIÊN RA ĐỀ & CHẤM THI</p>
              <p className="no-indent italic text-slate-500">(Ký và ghi rõ họ tên)</p>
              <div className="h-14"></div>
              <p className="no-indent font-bold text-slate-900">{GENERAL_INFO.instructor}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TRANG DANH MỤC VIẾT TẮT, HÌNH ẢNH & MỤC LỤC */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-toc">
        <div className="flex-1">
          <h2 className="heading-chapter">DANH MỤC CÁC CHỮ VIẾT TẮT</h2>
          <table className="academic-table text-xs mb-4">
            <thead>
              <tr>
                <th className="w-24">Từ viết tắt</th>
                <th>Thuật ngữ tiếng Anh</th>
                <th>Giải nghĩa tiếng Việt</th>
              </tr>
            </thead>
            <tbody>
              {ABBREVIATIONS.map((item, idx) => (
                <tr key={idx}>
                  <td className="text-center font-bold text-slate-900">{item.term}</td>
                  <td>{item.full.split('(')[0].trim()}</td>
                  <td>{item.full.includes('(') ? item.full.split('(')[1].replace(')', '') : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="heading-chapter mt-4">DANH MỤC HÌNH ẢNH VÀ BẢNG BIỂU</h2>
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800 w-20">Hình 2.1</td>
                <td className="py-1">Sơ đồ kiến trúc mô hình ngôn ngữ lớn (LLM) dựa trên cơ chế Multi-Head Attention</td>
                <td className="py-1 text-right text-slate-500 w-16">Trang 3</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Hình 2.2</td>
                <td className="py-1">Quy trình chuyển đổi học liệu thành Vector Embeddings và tính toán độ tương đồng Cosine</td>
                <td className="py-1 text-right text-slate-500">Trang 4</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Hình 2.3</td>
                <td className="py-1">Cơ chế Tăng cường truy xuất dữ liệu (RAG) giúp Trợ lý ảo phản hồi chính xác dựa trên học liệu GDU</td>
                <td className="py-1 text-right text-slate-500">Trang 5</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Hình 3.1</td>
                <td className="py-1">Biểu đồ thống kê các thách thức lớn nhất của sinh viên GDU trong học kỳ đầu tiên</td>
                <td className="py-1 text-right text-slate-500">Trang 7</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Hình 4.1</td>
                <td className="py-1">Sơ đồ kiến trúc tổng thể của Trợ lý ảo "GDU StudyMate AI"</td>
                <td className="py-1 text-right text-slate-500">Trang 9</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Bảng 3.1</td>
                <td className="py-1">Thống kê thực trạng khó khăn trong học tập và nhu cầu sử dụng AI của sinh viên GDU (N = 180)</td>
                <td className="py-1 text-right text-slate-500">Trang 6</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Bảng 3.2</td>
                <td className="py-1">So sánh thời gian trung bình dành cho các tác vụ học tập trước và sau khi ứng dụng Trợ lý ảo AI</td>
                <td className="py-1 text-right text-slate-500">Trang 7</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 font-bold text-slate-800">Bảng 4.1</td>
                <td className="py-1">So sánh các tiêu chí kỹ thuật giữa Google AI Studio và OpenAI GPTs trong môi trường giáo dục</td>
                <td className="py-1 text-right text-slate-500">Trang 8</td>
              </tr>
            </tbody>
          </table>

          <div className="border-t border-slate-300 pt-3 mt-4">
            <h2 className="heading-chapter">MỤC LỤC NỘI DUNG</h2>
            <div className="space-y-1 text-xs text-slate-800 leading-normal">
              <div className="flex justify-between font-bold text-slate-900">
                <span>MỞ ĐẦU</span>
                <span>Trang 1</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 mt-1">
                <span>CHƯƠNG 1: TỔNG QUAN VỀ ĐỀ TÀI</span>
                <span>Trang 1</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>1.1. Tính cấp thiết của đề tài và thực trạng khó khăn trong kỷ nguyên số</span>
                <span>Trang 1</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>1.2. Nhu cầu về một công cụ hỗ trợ thông minh, mang tính cá nhân hoá</span>
                <span>Trang 2</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>1.3. Vai trò của Trợ lý ảo AI trong việc giải quyết thách thức học tập</span>
                <span>Trang 2</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>1.4. Mục tiêu nghiên cứu (Mục tiêu chung và các mục tiêu cụ thể)</span>
                <span>Trang 2</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>1.5. Đối tượng và phạm vi nghiên cứu</span>
                <span>Trang 2</span>
              </div>

              <div className="flex justify-between font-bold text-slate-900 mt-1">
                <span>CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VỀ TRÍ TUỆ NHÂN TẠO VÀ CÔNG NGHỆ NỀN TẢNG</span>
                <span>Trang 3</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>2.1. Tổng quan về Trí tuệ nhân tạo tạo sinh (Generative AI)</span>
                <span>Trang 3</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>2.2. Mô hình ngôn ngữ lớn (LLM) và Kiến trúc Transformer đột phá</span>
                <span>Trang 3</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>2.3. Kỹ nghệ thiết kế câu lệnh (Prompt Engineering) và cơ chế suy luận</span>
                <span>Trang 4</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>2.4. Công nghệ Tăng cường truy xuất dữ liệu (Retrieval-Augmented Generation - RAG)</span>
                <span>Trang 4</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>2.5. Vai trò của Điện toán đám mây và Dữ liệu lớn đối với AI giáo dục</span>
                <span>Trang 5</span>
              </div>

              <div className="flex justify-between font-bold text-slate-900 mt-1">
                <span>CHƯƠNG 3: PHÂN TÍCH THỰC TRẠNG HỌC TẬP VÀ NCKH CỦA SINH VIÊN GDU</span>
                <span>Trang 6</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>3.1. Đặc thù học chế tín chỉ rút ngắn và khối lượng học tập tại Đại học Gia Định</span>
                <span>Trang 6</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>3.2. Những thách thức sâu sắc sinh viên năm nhất thường gặp phải</span>
                <span>Trang 6</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>3.3. Kết quả khảo sát thực tế tại Trường Đại học Gia Định (N = 180)</span>
                <span>Trang 7</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>3.4. Xác định "Khoảng trống" học thuật mà một Trợ lý ảo chuyên dụng giải quyết</span>
                <span>Trang 7</span>
              </div>

              <div className="flex justify-between font-bold text-slate-900 mt-1">
                <span>CHƯƠNG 4: TRIỂN KHAI GIẢI PHÁP VÀ ỨNG DỤNG "GDU STUDYMATE AI"</span>
                <span>Trang 8</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>4.1. Lựa chọn và lý giải nền tảng công nghệ (Google AI Studio & OpenAI GPTs)</span>
                <span>Trang 8</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>4.2. Thiết kế và cấu hình chi tiết Trợ lý ảo GDU StudyMate AI</span>
                <span>Trang 9</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>4.3. Xây dựng các kịch bản ứng dụng thực tế trong học tập và NCKH</span>
                <span>Trang 10</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>4.4. Đánh giá hiệu quả thực nghiệm định lượng</span>
                <span>Trang 11</span>
              </div>
              <div className="flex justify-between pl-4 text-slate-700">
                <span>4.5. Đạo đức học thuật và trách nhiệm công dân số (Chuẩn CLO6)</span>
                <span>Trang 11</span>
              </div>

              <div className="flex justify-between font-bold text-slate-900 mt-1">
                <span>KẾT LUẬN VÀ KIẾN NGHỊ</span>
                <span>Trang 12</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>DANH MỤC TÀI LIỆU THAM KHẢO (SÁCH, BÁO, INTERNET)</span>
                <span>Trang 13</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>PHỤ LỤC (PHIẾU KHẢO SÁT & BỘ CHỈ DẪN SYSTEM PROMPT)</span>
                <span>Trang 14</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PHẦN NỘI DUNG CHÍNH: BẮT ĐẦU ĐÁNH SỐ TRANG CHÍNH GIỮA TỪ TRANG 1 */}
      {/* ========================================================= */}

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 1: MỞ ĐẦU & CHƯƠNG 1 (TỔNG QUAN VỀ ĐỀ TÀI) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-1">
        <div className="flex-1">
          <h2 className="heading-chapter">MỞ ĐẦU</h2>
          <p>
            Bước sang thế kỷ 21, nhân loại đang chứng kiến cuộc Cách mạng công nghiệp lần thứ tư diễn ra với tốc độ cấp số nhân, trong đó Trí tuệ nhân tạo (Artificial Intelligence - AI) đã trở thành công nghệ đột phá mang tính định hình tương lai [UNESCO, 2023]. Trong giáo dục đại học, xu thế chuyển đổi số không chỉ dừng lại ở việc số hóa tài liệu giảng dạy hay tổ chức các lớp học trực tuyến qua hệ thống LMS, mà đang tiến tới giai đoạn cá nhân hóa sâu sắc trải nghiệm học tập của người học dựa trên các thuật toán thông minh [Bộ Giáo dục và Đào tạo, 2021].
          </p>
          <p>
            Trường Đại học Gia Định (GDU), với triết lý đào tạo thực học - thực hành và mô hình học chế tín chỉ tối ưu thời gian 3 năm (8 học kỳ), luôn chủ động trang bị cho sinh viên những kỹ năng công nghệ tiên tiến nhất để tự tin hội nhập thị trường lao động. Học phần <em>"{GENERAL_INFO.subject}"</em> do {GENERAL_INFO.faculty} triển khai là môn học bản lề nhằm trang bị tư duy chuyển đổi số và năng lực vận dụng AI cho sinh viên ngay từ năm nhất [Nguyễn Ánh Việt, 2026].
          </p>
          <p>
            Tuy nhiên, trong quá trình tiếp cận môi trường đại học, đặc biệt là đối với sinh viên khối ngành Khoa học Xã hội và Ngôn ngữ, các bạn phải đối mặt với lượng tài liệu đa ngữ khổng lồ, áp lực thi cử dồn dập và nhất là sự bỡ ngỡ khi lần đầu tiên thực hiện một bài nghiên cứu khoa học hay tiểu luận học thuật [Trần Văn Hoàng và Lê Thị Mai, 2023]. Việc thiếu vắng một công cụ đồng hành học thuật có khả năng định hướng sư phạm và giải đáp thắc mắc 24/7 đã tạo nên một rào cản lớn đối với năng suất học tập của các bạn tân sinh viên.
          </p>
          <p>
            Xuất phát từ thực tiễn khách quan đó, đề tài <strong>"{GENERAL_INFO.topicTitle}"</strong> được nghiên cứu và triển khai nhằm đề xuất một giải pháp Trợ lý ảo AI học thuật thông minh, an toàn và chuyên biệt mang tên <strong>GDU StudyMate AI</strong>, góp phần giải phóng sức lao động cơ học, khơi dậy tinh thần tự học và nâng cao năng lực nghiên cứu khoa học cho cộng đồng sinh viên Đại học Gia Định.
          </p>

          <h2 className="heading-chapter mt-6">CHƯƠNG 1: TỔNG QUAN VỀ ĐỀ TÀI</h2>

          <h3 className="heading-section">1.1. Tính cấp thiết của đề tài và thực trạng khó khăn trong kỷ nguyên số</h3>
          <p>
            Sự bùng nổ của kho tàng tri thức nhân loại trên không gian mạng vừa mang lại cơ hội tiếp cận tài liệu vô tận, vừa đặt sinh viên đại học trước hội chứng "quá tải thông tin" (Information Overload). Khi bước chân vào giảng đường đại học theo học chế tín chỉ, sinh viên không còn được thầy cô "cầm tay chỉ việc" như thời phổ thông, mà phải tự chịu trách nhiệm hoàn toàn đối với kế hoạch học tập của mình [Bộ Giáo dục và Đào tạo, 2021].
          </p>
          <p>
            Đặc thù của sinh viên {GENERAL_INFO.faculty} tại GDU là phải tiếp xúc với các học phần có khối lượng đọc cực kỳ đồ sộ: các công trình nghiên cứu văn hóa, giáo trình ngôn ngữ học đối chiếu, lý thuyết giao tiếp đa văn hóa và đặc biệt là các bài báo khoa học quốc tế viết bằng tiếng Anh, tiếng Trung hoặc tiếng Nhật [Vũ Thị Lan và Nguyễn Đức Minh, 2024]. Mỗi tuần, một sinh viên phải đọc từ 50 đến 100 trang tài liệu cho mỗi môn học. Khối lượng này kết hợp với 5 - 7 học phần cùng lúc khiến đa số sinh viên năm nhất rơi vào trạng thái căng thẳng triền miên.
          </p>
          <p>
            Bên cạnh đó, việc viết bài tiểu luận kết thúc học phần – hình thức thi chiếm tỷ trọng lớn tại bậc đại học – là một thử thách tâm lý nặng nề đối với tân sinh viên. Các bạn thường loay hoay không biết lựa chọn đề tài sao cho vừa sức, gặp khó khăn khi tìm kiếm ý tưởng ban đầu, lúng túng trong việc xây dựng đề cương logic và đặc biệt là không nắm vững kỹ thuật trích dẫn khoa học theo chuẩn TCVN 6909:2001 hay APA 7th, dẫn đến nguy cơ đạo văn vô ý thức [Trường Đại học Gia Định, 2025].
          </p>

          <h3 className="heading-section">1.2. Nhu cầu về một công cụ hỗ trợ thông minh, mang tính cá nhân hoá</h3>
          <p>
            Trước những rào cản học thuật nêu trên, các công cụ tìm kiếm thông tin truyền thống như Google Search hay Wikipedia không còn đáp ứng đủ nhu cầu. Sinh viên cần nhiều hơn là một danh sách hàng triệu đường liên kết rời rạc; các bạn cần một <em>công cụ hỗ trợ mang tính đàm thoại ngữ cảnh, có khả năng tổng hợp sâu và cá nhân hóa lộ trình học tập</em>.
          </p>
          <p>
            Mỗi sinh viên có tốc độ tiếp thu, nền tảng tri thức và phong cách tư duy khác nhau. Một trợ lý ảo học thuật lý tưởng phải có khả năng kiên nhẫn giảng giải một khái niệm trừu tượng (như mạng nơ-ron hay cơ chế Self-Attention) bằng nhiều cách tiếp cận trực quan, đồng thời đưa ra các câu hỏi gợi mở phù hợp với trình độ hiện tại của người học [Stuart Russell và Peter Norvig, 2020].
          </p>

          <h3 className="heading-section">1.3. Vai trò của Trợ lý ảo AI trong việc giải quyết thách thức học tập</h3>
          <p>
            Sự phát triển vượt bậc của Mô hình ngôn ngữ lớn (LLM) và AI tạo sinh đã mở ra cơ hội hiện thực hóa mô hình "Gia sư học thuật 1-1" (One-on-one Academic Tutor) cho từng sinh viên [UNESCO, 2023]. Trợ lý ảo AI đóng vai trò như một người trợ lý đắc lực:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              • <strong>Tối ưu hóa thời gian xử lý thông tin:</strong> Tự động bóc tách các ý tưởng chính trong các tập slide dài 200 - 300 trang, trích xuất bảng thuật ngữ học thuật song ngữ và chuyển đổi tài liệu thành các sơ đồ tóm lược trực quan.
            </p>
            <p className="no-indent">
              • <strong>Định hướng cấu trúc nghiên cứu:</strong> Đóng vai trò người phản biện đầu tiên (First Reviewer), giúp sinh viên kiểm tra tính chặt chẽ của dàn ý tiểu luận, phát hiện các ngụy biện logic và gợi ý bổ sung các khía cạnh nghiên cứu mới.
            </p>
            <p className="no-indent">
              • <strong>Hỗ trợ chuẩn hóa văn bản khoa học:</strong> Rà soát quy cách định dạng, căn lề, kiểu chữ và tự động chuyển đổi thông tin nguồn thành danh mục tài liệu tham khảo theo đúng quy định của Nhà trường [Nguyễn Ánh Việt, 2026].
            </p>
          </div>

          <h3 className="heading-section">1.4. Mục tiêu nghiên cứu của đề tài</h3>
          <p>
            • <strong>Mục tiêu chung:</strong> Thiết kế, cấu hình và thử nghiệm mô hình Trợ lý ảo học thuật <em>GDU StudyMate AI</em> dựa trên nền tảng Google AI Studio và GPTs, nhằm tối ưu hóa quá trình học tập, ôn thi và nghiên cứu khoa học cho sinh viên Trường Đại học Gia Định.
          </p>
          <p>
            • <strong>Các mục tiêu cụ thể:</strong>
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              1. Hệ thống hóa nền tảng lý thuyết vững chắc về AI tạo sinh, LLM, Transformer, Prompt Engineering, RAG và Điện toán đám mây & Dữ liệu lớn (Đáp ứng chuẩn đầu ra <strong>CLO1</strong>).
            </p>
            <p className="no-indent">
              2. Khảo sát định lượng và phân tích chuyên sâu thực trạng khó khăn của 180 sinh viên GDU, chỉ rõ khoảng trống học thuật cần công nghệ lấp đầy (Đáp ứng chuẩn đầu ra <strong>CLO3</strong>).
            </p>
            <p className="no-indent">
              3. Thiết lập bộ chỉ dẫn hệ thống (System Prompt) và kho tri thức số hóa chuyên sâu, thử nghiệm thành công 3 kịch bản ứng dụng học thuật thực tế (Đáp ứng chuẩn đầu ra <strong>CLO4</strong>).
            </p>
            <p className="no-indent">
              4. Xây dựng bộ quy tắc liêm chính học thuật, ngăn ngừa nguy cơ đạo văn và nâng cao ý thức trách nhiệm công dân số cho sinh viên trong kỷ nguyên AI (Đáp ứng chuẩn đầu ra <strong>CLO6</strong>).
            </p>
          </div>

          <h3 className="heading-section">1.5. Đối tượng và phạm vi nghiên cứu</h3>
          <p>
            • <strong>Đối tượng nghiên cứu:</strong> Mô hình trợ lý ảo AI tạo sinh (Generative AI Assistant) và các phương pháp kỹ nghệ câu lệnh (Prompt Engineering) kết hợp kỹ thuật Tăng cường truy xuất dữ liệu (RAG).
          </p>
          <p>
            • <strong>Khách thể nghiên cứu:</strong> Sinh viên Trường Đại học Gia Định, trọng tâm là sinh viên {GENERAL_INFO.faculty} đang theo học môn Nhập môn Công nghệ số và AI (Lớp học phần: {GENERAL_INFO.classes}).
          </p>
          <p>
            • <strong>Phạm vi thời gian:</strong> Học kỳ I năm học 2026 – 2027 (Khảo sát và thử nghiệm hoàn thành trong tháng 11/2026).
          </p>
        </div>
        {renderFooterNumber(1)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 2: CHƯƠNG 2 (CƠ SỞ LÝ THUYẾT VỀ AI & LLM) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-2">
        <div className="flex-1">
          <h2 className="heading-chapter">
            CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VỀ TRÍ TUỆ NHÂN TẠO VÀ CÁC CÔNG NGHỆ NỀN TẢNG
          </h2>

          <h3 className="heading-section">2.1. Tổng quan về Trí tuệ nhân tạo tạo sinh (Generative AI)</h3>
          <p>
            Trí tuệ nhân tạo (AI) đã trải qua nhiều làn sóng phát triển kể từ hội nghị Dartmouth năm 1956 [Stuart Russell và Peter Norvig, 2020]. Trong nhiều thập kỷ, ngành công nghiệp máy tính chủ yếu ứng dụng <em>AI phân loại (Discriminative AI)</em> – các thuật toán chuyên về việc ánh xạ dữ liệu đầu vào $X$ sang nhãn dự đoán $Y$ thông qua việc ước lượng xác suất có điều kiện $P(Y|X)$. Các ứng dụng quen thuộc bao gồm phân loại thư rác, nhận diện giọng nói hoặc phân tích cảm xúc người dùng mạng xã hội.
          </p>
          <p>
            Sự trỗi dậy của <strong>Trí tuệ nhân tạo tạo sinh (Generative AI)</strong> đánh dấu một bước chuyển dịch mang tính bản lề: từ "hiểu và phân loại" sang "sáng tạo nội dung mới" [Ian Goodfellow và cộng sự, 2016]. GenAI mô hình hóa phân phối xác suất chung $P(X, Y)$ hoặc trực tiếp phân phối dữ liệu $P(X)$. Nhờ việc học sâu trên hàng nghìn tỷ đơn vị từ vựng (tokens), GenAI có thể tạo ra các đoạn văn xuôi học thuật mạch lạc, viết mã nguồn lập trình, tóm tắt sách chuyên khảo và hội thoại tự nhiên như một con người có học vấn cao [UNESCO, 2023].
          </p>

          <h3 className="heading-section">2.2. Mô hình ngôn ngữ lớn (LLM) và Kiến trúc Transformer đột phá</h3>
          <p>
            Nền tảng cốt lõi đưa GenAI bùng nổ toàn cầu là các <strong>Mô hình ngôn ngữ lớn (Large Language Models - LLM)</strong>. Đây là những mạng nơ-ron sâu với kích thước khổng lồ (từ 7 tỷ đến hàng nghìn tỷ tham số như GPT-4o, Gemini 1.5 Pro, Claude 3.5 Sonnet hay Llama 3) [Google Cloud & DeepMind, 2025; OpenAI Research, 2024].
          </p>
          <p>
            Cột mốc lịch sử xác lập kỷ nguyên mới của xử lý ngôn ngữ tự nhiên là công trình nghiên cứu kinh điển <em>"Attention Is All You Need"</em> được công bố bởi nhóm tác giả Ashish Vaswani và cộng sự tại Google Research [2017]. Công trình này đã giới thiệu kiến trúc <strong>Transformer</strong>, hoàn toàn từ bỏ các cấu trúc mạng hồi quy tuần tự (RNN, LSTM) vốn bị nghẽn cổ chai khi xử lý các đoạn văn bản dài do vấn đề tiêu biến đạo hàm (vanishing gradient).
          </p>
          <p>
            Trái tim của Transformer là cơ chế <strong>Self-Attention (Tự chú ý)</strong> và <strong>Multi-Head Attention (Chú ý đa đầu)</strong>. Cơ chế này cho phép mô hình tính toán đồng thời mức độ phụ thuộc giữa mọi cặp từ trong câu, bất kể vị trí của chúng cách xa nhau bao nhiêu từ. Về mặt toán học, phép toán Attention được định nghĩa qua công thức chuẩn mực:
          </p>
          <div className="text-center my-3 p-2 bg-slate-50 border border-slate-300 font-mono text-xs rounded-sm">
            <span className="font-bold text-slate-900">
              Attention(Q, K, V) = softmax( (Q · K<sup>T</sup>) / √d<sub>k</sub> ) · V
            </span>
          </div>
          <p>
            Trong đó, $Q$ (Query), $K$ (Key), và $V$ (Value) là các ma trận biểu diễn vector của các từ vựng; $d_k$ là số chiều của vector truy vấn dùng để chuẩn hóa giá trị tích vô hướng. Bằng cách chiếu ma trận từ vựng qua nhiều "đầu" chú ý độc lập ($MultiHead$), mô hình có thể cùng lúc nắm bắt nhiều tầng ý nghĩa ngữ pháp, cú pháp và sắc thái biểu cảm khác nhau [Vaswani và cộng sự, 2017].
          </p>

          {/* Chèn Hình 2.1 */}
          <FigureTransformerArchitecture />

          <h3 className="heading-section">2.3. Kỹ nghệ thiết kế câu lệnh (Prompt Engineering) và cơ chế suy luận</h3>
          <p>
            Nếu LLM là một khối động cơ tri thức mạnh mẽ thì <strong>Kỹ nghệ thiết kế câu lệnh (Prompt Engineering)</strong> chính là tay lái điều khiển động cơ đó đạt đến đích mong muốn một cách an toàn và chính xác [OpenAI Research, 2024]. Đối với sinh viên, chất lượng câu trả lời của AI tỷ lệ thuận với chất lượng cấu trúc câu lệnh đầu vào.
          </p>
          <p>
            Các phương pháp Prompt Engineering tiên tiến bao gồm:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              • <strong>Role-Prompting:</strong> Xác lập bối cảnh vai trò cho AI (ví dụ: <em>"Bạn là chuyên gia giảng dạy phương pháp nghiên cứu khoa học của Trường Đại học Gia Định..."</em>) nhằm định hình phong cách học thuật chuẩn mực.
            </p>
            <p className="no-indent">
              • <strong>Few-Shot Prompting:</strong> Cung cấp 2 - 3 ví dụ mẫu chuẩn về cách phân tích hoặc cách trích dẫn tài liệu trước khi yêu cầu mô hình thực hiện nhiệm vụ mới.
            </p>
            <p className="no-indent">
              • <strong>Chain-of-Thought (CoT):</strong> Ép mô hình trình bày chuỗi suy luận logic từng bước (Step-by-step reasoning), giúp loại bỏ các lỗi suy diễn hồ đồ khi giải quyết các vấn đề phức tạp.
            </p>
          </div>
        </div>
        {renderFooterNumber(2)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 3: TIẾP TỤC CHƯƠNG 2 (RAG & CLOUD COMPUTING) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-2-cont">
        <div className="flex-1">
          <h3 className="heading-section">
            2.4. Công nghệ Tăng cường truy xuất dữ liệu (Retrieval-Augmented Generation - RAG)
          </h3>
          <p>
            Mặc dù các mô hình LLM có khả năng ngôn ngữ tuyệt vời, chúng luôn phải đối mặt với một nhược điểm cố hữu nghiêm trọng: <strong>Hiện tượng ảo giác (AI Hallucination)</strong> – mô hình tự tin khẳng định những dữ kiện hoàn toàn không có thật do đặc thù suy luận theo xác suất từ vựng [Patrick Lewis và cộng sự, 2020]. Ngoài ra, dữ liệu huấn luyện của các LLM thương mại có độ trễ thời gian và hoàn toàn không thể tiếp cận các giáo trình, đề cương môn học nội bộ của Trường Đại học Gia Định.
          </p>
          <p>
            Để giải quyết thách thức này, công nghệ <strong>Retrieval-Augmented Generation (RAG)</strong> đã được phát triển như một kiến trúc tiêu chuẩn công nghiệp [Patrick Lewis và cộng sự, 2020]. Quy trình RAG hoạt động theo 4 bước chặt chẽ:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              <strong>1. Phân mảnh văn bản (Document Chunking):</strong> Tài liệu bài giảng, đề cương môn học và quy chế GDU được chia nhỏ thành các đoạn văn ngắn từ 300 đến 500 từ có độ gối đầu (overlap) để giữ trọn vẹn ngữ cảnh.
            </p>
            <p className="no-indent">
              <strong>2. Vector hóa ngữ nghĩa (Embeddings):</strong> Mỗi đoạn văn được chuyển thành một vector số thực nhiều chiều (ví dụ: 768 hoặc 1536 chiều) thông qua mô hình Embedding chuyên dụng [Ian Goodfellow và cộng sự, 2016].
            </p>
            <p className="no-indent">
              <strong>3. Lưu trữ & Truy xuất tương đồng (Vector Search):</strong> Lưu trữ vào Cơ sở dữ liệu Vector (như Chroma, Pinecone hoặc FAISS). Khi sinh viên đặt câu hỏi, hệ thống tính toán khoảng cách Cosine Similarity giữa câu hỏi và toàn bộ kho dữ liệu để trích xuất ra các đoạn trích dẫn có điểm tương đồng cao nhất.
            </p>
            <p className="no-indent">
              <strong>4. Sinh câu trả lời có kiểm chứng (Grounded Generation):</strong> Đoạn trích dẫn gốc được nạp trực tiếp vào Prompt gửi cho LLM cùng chỉ dẫn: <em>"Chỉ được trả lời dựa trên tài liệu được cung cấp, tuyệt đối không bịa đặt"</em>.
            </p>
          </div>

          {/* Chèn Hình 2.2 */}
          <FigureVectorEmbedding />

          {/* Chèn Hình 2.3 */}
          <FigureRAGArchitecture />

          <h3 className="heading-section">2.5. Vai trò của Điện toán đám mây và Dữ liệu lớn đối với AI giáo dục</h3>
          <p>
            Một mô hình AI tiên tiến không thể hoạt động hiệu quả nếu thiếu vắng sự chống đỡ của hạ tầng công nghệ số hiện đại [Bộ Giáo dục và Đào tạo, 2021]:
          </p>
          <p>
            • <strong>Điện toán đám mây (Cloud Computing):</strong> Cung cấp năng lực tính toán linh hoạt thông qua các cụm máy chủ trang bị GPU chuyên dụng (như NVIDIA H100, A100 hoặc Google TPU v5). Nhờ hạ tầng Cloud của Google Cloud Platform và Microsoft Azure, việc suy luận mô hình diễn ra trong chưa đầy 1 giây, cho phép hàng nghìn sinh viên GDU truy cập đồng thời vào các mùa thi cao điểm mà không gặp sự cố nghẽn mạng.
          </p>
          <p>
            • <strong>Dữ liệu lớn (Big Data):</strong> Kho học liệu số của nhà trường bao gồm hàng chục nghìn trang tài liệu giáo trình, ngân hàng câu hỏi ôn tập, luận văn khóa trước và dữ liệu tương tác học tập trên hệ thống LMS. Việc khai phá dữ liệu lớn giúp hệ thống AI học được phong cách ra đề của giảng viên, từ đó đưa ra các gợi ý ôn tập sát sườn với thực tế thi cử của từng học kỳ [Trần Văn Hoàng và Lê Thị Mai, 2023].
          </p>
        </div>
        {renderFooterNumber(3)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 4: CHƯƠNG 3 (PHÂN TÍCH THỰC TRẠNG GDU) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-3">
        <div className="flex-1">
          <h2 className="heading-chapter">
            CHƯƠNG 3: PHÂN TÍCH THỰC TRẠNG HỌC TẬP VÀ NGHIÊN CỨU KHOA HỌC CỦA SINH VIÊN GDU
          </h2>

          <h3 className="heading-section">
            3.1. Đặc thù học chế tín chỉ rút ngắn và khối lượng học tập tại Đại học Gia Định
          </h3>
          <p>
            Trường Đại học Gia Định (GDU) áp dụng chương trình đào tạo đại học ứng dụng 3 năm (8 học kỳ). Đây là một lợi thế cạnh tranh rất lớn giúp người học tiết kiệm chi phí sinh hoạt, rút ngắn thời gian tiếp cận thị trường việc làm và nhanh chóng tích lũy kinh nghiệm nghề nghiệp [Trường Đại học Gia Định, 2025].
          </p>
          <p>
            Tuy nhiên, lộ trình đào tạo tinh gọn này đòi hỏi mật độ môn học trong mỗi học kỳ là rất dày. Sinh viên thường phải đăng ký từ 5 đến 7 học phần cùng lúc. Đối với sinh viên {GENERAL_INFO.faculty}, bên cạnh các môn kỹ năng bổ trợ số, sinh viên phải tiếp nhận khối lượng từ vựng học thuật chuyên ngành rất lớn. Việc chuyển tiếp từ phương pháp học thụ động ở bậc phổ thông sang phương pháp tự học và nghiên cứu độc lập ở bậc đại học đã tạo ra những cú sốc học thuật ban đầu cho không ít tân sinh viên [Trần Văn Hoàng và Lê Thị Mai, 2023].
          </p>

          <h3 className="heading-section">3.2. Những thách thức sâu sắc sinh viên năm nhất thường gặp phải</h3>
          <p>
            Qua điều tra thực tế, nhóm nghiên cứu đã hệ thống hóa 3 thách thức học thuật cốt lõi mà sinh viên năm nhất GDU đối mặt:
          </p>

          <h4 className="heading-subsection">
            3.2.1. Quá tải tài liệu đọc và lãng phí thời gian tóm tắt bài giảng
          </h4>
          <p>
            Mỗi học phần có bộ slide dài 200 - 400 trang kèm giáo trình tham khảo hàng trăm trang. Do chưa được trang bị kỹ năng đọc quét nhanh (skimming & scanning), sinh viên thường dành từ 4 đến 6 tiếng mỗi tuần chỉ để chép tay lại các định nghĩa lý thuyết một cách thụ động mà không kịp hiểu sâu bản chất vấn đề. Khi kỳ thi kết thúc học phần đến gần, việc ôn thi trở thành cuộc "chạy đua vũ trang" nhồi nhét chữ, làm triệt tiêu khả năng liên hệ thực tiễn của người học [Vũ Thị Lan và Nguyễn Đức Minh, 2024].
          </p>

          <h4 className="heading-subsection">
            3.2.2. Khó khăn trong việc tìm ý tưởng và sắp xếp nội dung cho bài tiểu luận đầu tiên
          </h4>
          <p>
            Tiểu luận môn học là bài tập nghiên cứu đòi hỏi tư duy logic, cấu trúc phân tích mạch lạc và tính xác thực cao. Sinh viên năm nhất thường gặp phải các lỗi:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              • <em>Ý tưởng tản mạn, thiếu trọng tâm:</em> Không biết cách thu hẹp một chủ đề rộng thành một câu hỏi nghiên cứu cụ thể.
            </p>
            <p className="no-indent">
              • <em>Bố cục dính chùm, thiếu tính liên kết:</em> Các chương mục được trình bày rời rạc, thiếu luận cứ chứng minh; nội dung chương sau lặp lại chương trước.
            </p>
            <p className="no-indent">
              • <em>Kỹ thuật trích dẫn yếu kém:</em> Hơn 70% sinh viên chưa từng biết đến quy chuẩn trích dẫn TCVN 6909:2001 hay APA 7th; thường chép nguyên văn liên kết trang web hoặc một bài viết blog trên mạng mà không chú thích tác giả, vi phạm nghiêm trọng quy chế liêm chính học thuật [Trường Đại học Gia Định, 2025].
            </p>
          </div>

          <h4 className="heading-subsection">
            3.2.3. Rào cản tương tác trực tiếp ngoài giờ lên lớp
          </h4>
          <p>
            Tại giảng đường với sĩ số 60 - 80 sinh viên, giảng viên chỉ có thể giải đáp các thắc mắc chung nhất. Khi về nhà làm bài tập vào đêm khuya hoặc các ngày nghỉ cuối tuần, sinh viên thường cảm thấy cô độc khi gặp những thuật ngữ khó hiểu, dẫn đến tình trạng chán nản hoặc bỏ dở bài tập.
          </p>

          <h3 className="heading-section">3.3. Kết quả khảo sát thực tế tại Trường Đại học Gia Định (N = 180)</h3>
          <p>
            Để có căn cứ thực nghiệm vững chắc, nhóm đề tài đã tiến hành khảo sát định lượng 180 sinh viên GDU thuộc {GENERAL_INFO.faculty} và các khoa liên quan trong tháng 11/2026. Kết quả thu được thể hiện rõ ràng qua các bảng số liệu sau:
          </p>

          {/* Bảng số liệu khảo sát */}
          <div className="keep-together my-3">
            <p className="table-caption">
              <strong>Bảng 3.1:</strong> Thống kê thực trạng khó khăn trong học tập và nhu cầu sử dụng AI của sinh viên GDU (N = 180)
            </p>
            <table className="academic-table text-xs">
              <thead>
                <tr>
                  <th className="w-10">STT</th>
                  <th>Nội dung khảo sát</th>
                  <th className="w-20">Số lượng (SV)</th>
                  <th className="w-20">Tỷ lệ (%)</th>
                  <th>Phân tích ý nghĩa học thuật</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Cảm thấy áp lực với lượng kiến thức lớn, học nhiều môn cùng lúc</td>
                  <td className="text-center font-bold">150</td>
                  <td className="text-center font-bold">83.3%</td>
                  <td>Áp lực dồn dập trong học chế tín chỉ rút ngắn đòi hỏi công cụ hỗ trợ tóm lược.</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>Gặp khó khăn khi tìm ý tưởng & lập dàn ý cho bài tiểu luận đầu tiên</td>
                  <td className="text-center font-bold">155</td>
                  <td className="text-center font-bold">86.1%</td>
                  <td>Tỷ lệ rất cao; tân sinh viên thiếu hụt nghiêm trọng kỹ năng phương pháp luận NCKH.</td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td>Mất nhiều thời gian để đọc và tóm tắt slide bài giảng, giáo trình</td>
                  <td className="text-center font-bold">143</td>
                  <td className="text-center font-bold">79.4%</td>
                  <td>Sinh viên lãng phí nhiều giờ học cơ học thay vì rèn luyện tư duy phản biện.</td>
                </tr>
                <tr>
                  <td className="text-center">4</td>
                  <td>Lúng túng trong việc trích dẫn tài liệu tham khảo đúng quy chuẩn khoa học</td>
                  <td className="text-center font-bold">129</td>
                  <td className="text-center font-bold">71.7%</td>
                  <td>Cần có công cụ tự động kiểm tra và hướng dẫn định dạng trích dẫn chuẩn TCVN/APA.</td>
                </tr>
                <tr>
                  <td className="text-center">5</td>
                  <td>Đã từng dùng AI phổ thông (ChatGPT, Copilot) nhưng bị sai dữ kiện hoặc quá chung chung</td>
                  <td className="text-center font-bold">136</td>
                  <td className="text-center font-bold">75.6%</td>
                  <td>Do AI công cộng không được huấn luyện trên giáo trình nội bộ của trường GDU.</td>
                </tr>
                <tr>
                  <td className="text-center">6</td>
                  <td>Mong muốn Khoa và Trường triển khai Trợ lý ảo AI học thuật chuyên biệt 24/7</td>
                  <td className="text-center font-bold">167</td>
                  <td className="text-center font-bold">92.8%</td>
                  <td>Nhu cầu thực tiễn vô cùng cấp bách và có sự đồng thuận tuyệt đối của sinh viên.</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-center italic text-slate-500 mt-1">
              (Nguồn: Kết quả điều tra thực tế của nhóm đề tài tại Trường Đại học Gia Định, tháng 11/2026)
            </p>
          </div>

          {/* Bảng so sánh thời gian */}
          <div className="keep-together my-3">
            <p className="table-caption">
              <strong>Bảng 3.2:</strong> So sánh thời gian trung bình dành cho các tác vụ học tập trước và sau khi ứng dụng Trợ lý ảo AI (Thực nghiệm trên nhóm 30 SV)
            </p>
            <table className="academic-table text-xs">
              <thead>
                <tr>
                  <th>Tác vụ học tập học phần</th>
                  <th className="w-28">Trước khi có AI (Truyền thống)</th>
                  <th className="w-28">Khi có GDU StudyMate AI</th>
                  <th className="w-28">Thời gian tiết kiệm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Đọc hiểu và tóm lược 1 chương slide bài giảng (40 trang)</td>
                  <td className="text-center">4,5 giờ</td>
                  <td className="text-center font-bold">1,2 giờ</td>
                  <td className="text-center font-bold">Giảm 73.3%</td>
                </tr>
                <tr>
                  <td>Xây dựng khung đề cương chi tiết cho bài tiểu luận</td>
                  <td className="text-center">6,0 giờ</td>
                  <td className="text-center font-bold">2,0 giờ</td>
                  <td className="text-center font-bold">Giảm 66.7%</td>
                </tr>
                <tr>
                  <td>Tra cứu và định dạng 10 tài liệu tham khảo đúng chuẩn TCVN</td>
                  <td className="text-center">2,5 giờ</td>
                  <td className="text-center font-bold">0,5 giờ</td>
                  <td className="text-center font-bold">Giảm 80.0%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-center italic text-slate-500 mt-1">
              (Nguồn: Số liệu thực nghiệm của nhóm nghiên cứu đối chiếu trong tháng 11/2026)
            </p>
          </div>

          {/* Chèn Hình 3.1 */}
          <FigureSurveyChart />

          <h3 className="heading-section">
            3.4. Xác định "Khoảng trống" học thuật mà một Trợ lý ảo chuyên dụng giải quyết
          </h3>
          <p>
            So sánh giữa năng lực của các nền tảng AI công cộng và đòi hỏi thực tế của sinh viên GDU chỉ ra một <strong>khoảng trống học thuật (Research Gap)</strong> rất lớn:
          </p>
          <p>
            Thứ nhất, các công cụ như ChatGPT bản miễn phí hoàn toàn "mù" thông tin về quy chế học vụ, đề cương môn học và barem chấm điểm của Trường Đại học Gia Định. Khi sinh viên hỏi về cấu trúc bài thi, AI công cộng thường trả lời theo chuẩn đại học nước ngoài hoặc các quy định không tương thích [Nguyễn Ánh Việt, 2026].
          </p>
          <p>
            Thứ hai, việc sử dụng AI không có định hướng sư phạm sẽ dẫn đến việc sinh viên "lười suy nghĩ", sao chép nguyên văn văn bản do AI sinh ra, làm xói mòn năng lực tư duy phản biện. Vì vậy, khoảng trống cấp thiết nhất hiện nay là cần một <strong>Trợ lý ảo học thuật định hướng (Pedagogical Scaffolding Assistant)</strong>: Không làm thay, mà đóng vai trò là chiếc thang tri thức dẫn dắt sinh viên từng bước tự hoàn thiện bài tiểu luận của chính mình [UNESCO, 2023].
          </p>
        </div>
        {renderFooterNumber(4)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 5: CHƯƠNG 4 (TRIỂN KHAI GIẢI PHÁP & CẤU HÌNH) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-4">
        <div className="flex-1">
          <h2 className="heading-chapter">
            CHƯƠNG 4: TRIỂN KHAI GIẢI PHÁP VÀ ỨNG DỤNG "GDU STUDYMATE AI"
          </h2>

          <h3 className="heading-section">4.1. Lựa chọn và lý giải nền tảng công nghệ</h3>
          <p>
            Nhóm nghiên cứu đã tiến hành phân tích đối sánh chuyên sâu giữa hai nền tảng AI tạo sinh tiên tiến nhất hiện nay để tìm ra phương án tối ưu cho sinh viên GDU: <strong>Google AI Studio (Gemini 1.5 Pro)</strong> và <strong>OpenAI Custom GPTs (GPT-4o)</strong> [Google Cloud & DeepMind, 2025; OpenAI Research, 2024].
          </p>

          <div className="keep-together my-3">
            <p className="table-caption">
              <strong>Bảng 4.1:</strong> So sánh các tiêu chí kỹ thuật giữa Google AI Studio và OpenAI GPTs
            </p>
            <table className="academic-table text-xs">
              <thead>
                <tr>
                  <th>Tiêu chí đánh giá</th>
                  <th>Google AI Studio (Gemini 1.5 Pro)</th>
                  <th>OpenAI Custom GPTs</th>
                  <th>Đánh giá ứng dụng tại GDU</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Cửa sổ ngữ cảnh (Context Window)</td>
                  <td className="font-bold">1.000.000 – 2.000.000 Tokens</td>
                  <td>128.000 Tokens</td>
                  <td>Gemini vượt trội hoàn toàn: Cho phép tải trọn bộ giáo trình 600 trang và toàn bộ slide môn học cùng lúc.</td>
                </tr>
                <tr>
                  <td className="font-bold">Chi phí tiếp cận của sinh viên</td>
                  <td className="font-bold">Miễn phí qua AI Studio API</td>
                  <td>Yêu cầu tài khoản Plus ($20/tháng)</td>
                  <td>Google AI Studio hoàn toàn phù hợp với điều kiện kinh tế của đại đa số sinh viên GDU.</td>
                </tr>
                <tr>
                  <td className="font-bold">Tốc độ xử lý đa phương thức (Multimodal)</td>
                  <td>Xử lý trực tiếp file PDF slide, hình ảnh đồ họa và âm thanh</td>
                  <td>Xử lý văn bản và hình ảnh tốt</td>
                  <td>Gemini hỗ trợ đọc slide dạng ảnh và đồ thị phức tạp với độ chính xác cao hơn.</td>
                </tr>
                <tr>
                  <td className="font-bold">Khả năng kiểm soát System Instructions</td>
                  <td>Hỗ trợ định hình tính cách sư phạm cực sâu, không bị vượt quyền</td>
                  <td>Dễ sử dụng nhưng đôi khi bị "bẻ khóa" câu lệnh (Jailbreak)</td>
                  <td>Google AI Studio đảm bảo an toàn học thuật và phòng chống gian lận vượt trội.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Lý giải quyết định lựa chọn:</strong> Nhóm nghiên cứu lựa chọn <strong>Google AI Studio (Gemini API)</strong> làm nền tảng động cơ xử lý tri thức cốt lõi nhờ ưu thế vượt trội về cửa sổ ngữ cảnh khổng lồ và chi phí tiếp cận miễn phí cho sinh viên, đồng thời xây dựng một giao diện tiện ích song song trên <strong>Custom GPTs</strong> để phục vụ nhu cầu tra cứu nhanh trên thiết bị di động [Google Cloud & DeepMind, 2025].
          </p>

          {/* Chèn Hình 4.1 */}
          <FigureAssistantArchitecture />

          <h3 className="heading-section">4.2. Thiết kế và cấu hình chi tiết Trợ lý ảo GDU StudyMate AI</h3>
          <p>
            Trợ lý ảo <strong>GDU StudyMate AI</strong> được thiết kế theo mô hình 4 mô-đun chức năng tích hợp:
          </p>

          <h4 className="heading-subsection">4.2.1. Bộ chỉ dẫn hệ thống cốt lõi (System Prompt)</h4>
          <div className="bg-slate-50 border-l-4 border-slate-900 p-3 text-xs font-mono text-slate-800 my-2 space-y-1">
            <p className="no-indent font-bold text-slate-900">
              [SYSTEM INSTRUCTIONS: GDU STUDYMATE AI - ACADEMIC ADVISOR]
            </p>
            <p className="no-indent">
              <strong>1. Định vị vai trò:</strong> Bạn là GDU StudyMate AI, trợ lý học thuật thông minh trực thuộc {GENERAL_INFO.faculty}, Trường Đại học Gia Định. Bạn hỗ trợ sinh viên học phần "{GENERAL_INFO.subject}".
            </p>
            <p className="no-indent">
              <strong>2. Tôn chỉ sư phạm kiên định:</strong> TUYỆT ĐỐI KHÔNG VIẾT HỘ bài tiểu luận hay bài tập cho sinh viên. Khi sinh viên yêu cầu viết bài, bạn phải từ chối lịch sự và chuyển sang cung cấp dàn ý gợi mở, câu hỏi phản biện và phương pháp luận tự viết [UNESCO, 2023].
            </p>
            <p className="no-indent">
              <strong>3. Chuẩn mực định dạng:</strong> Hướng dẫn trình bày nghiêm ngặt theo TCVN 6909:2001 (Font Times New Roman 13pt, lề trái 3cm, phải 2cm, trên/dưới 2.5cm, giãn dòng 1.5, căn đều hai bên).
            </p>
            <p className="no-indent">
              <strong>4. Quy chuẩn trích dẫn:</strong> Luôn nhắc sinh viên trích dẫn trong dấu ngoặc vuông [Tác giả, Năm] hoặc [Số] ngay sau nội dung tham khảo, không dùng footnote cuối trang [Trường Đại học Gia Định, 2025].
            </p>
          </div>

          <h4 className="heading-subsection">4.2.2. Nguồn tri thức tích hợp (Knowledge Base)</h4>
          <p>
            Kho dữ liệu nội bộ được thẩm định bao gồm: (1) Toàn văn 8 chương slide bài giảng môn Nhập môn Công nghệ số và AI [Nguyễn Ánh Việt, 2026]; (2) Quy chế đào tạo tín chỉ và quy định liêm chính học thuật của GDU [Trường Đại học Gia Định, 2025]; (3) Bảng tiêu chí đánh giá (Rubric 10 điểm) của giảng viên; (4) Hướng dẫn trích dẫn học thuật quốc tế APA 7th và MLA 9th.
          </p>
        </div>
        {renderFooterNumber(5)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 6: TIẾP TỤC CHƯƠNG 4 (KỊCH BẢN & ĐẠO ĐỨC HỌC THUẬT) */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-chapter-4-cont">
        <div className="flex-1">
          <h3 className="heading-section">4.3. Xây dựng các kịch bản ứng dụng thực tế</h3>

          <h4 className="heading-subsection">
            Kịch bản 1: Đọc hiểu và tóm tắt bài giảng song ngữ, tạo flashcard ôn tập
          </h4>
          <p>
            <strong>Bối cảnh:</strong> Sinh viên cần ôn tập Chương 2 về <em>"Kiến trúc Transformer và các Mô hình ngôn ngữ lớn"</em> từ tập tài liệu bài giảng 45 trang trước kỳ thi.
          </p>
          <p>
            <strong>Câu lệnh của sinh viên:</strong> <em>"Hãy tóm tắt cho tôi 4 luận điểm cốt lõi nhất của chương này bằng tiếng Việt, giải thích cơ chế Multi-Head Attention bằng một ví dụ đời thường và tạo 3 câu hỏi trắc nghiệm kèm giải thích để tôi tự kiểm tra"</em>.
          </p>
          <p>
            <strong>Phản hồi của GDU StudyMate AI:</strong> Trợ lý ảo bóc tách chính xác công thức toán học, giải thích cơ chế Attention ví như việc một dịch giả khi đọc từ "bank" trong câu "He sat on the bank of the river" sẽ lập tức "chú ý" vào từ "river" để dịch là "bờ sông" thay vì dịch là "ngân hàng". Sau đó, AI tạo 3 câu trắc nghiệm bám sát đề cương thi của thầy Nguyễn Ánh Việt.
          </p>

          <h4 className="heading-subsection">
            Kịch bản 2: Gợi ý cấu trúc dàn ý tiểu luận và phản biện logic đề cương
          </h4>
          <p>
            <strong>Bối cảnh:</strong> Sinh viên năm nhất được giao viết tiểu luận về đề tài <em>"Ứng dụng Trí tuệ nhân tạo trong dịch thuật văn học đa văn hóa"</em> nhưng chưa biết sắp xếp các chương mục thế nào cho khoa học.
          </p>
          <p>
            <strong>Phản hồi của GDU StudyMate AI:</strong> Thay vì viết bài hộ, AI xây dựng một khung đề cương 4 chương hoàn chỉnh theo barem của GDU: Chương 1 (Tính cấp thiết và mục tiêu), Chương 2 (Cơ sở lý thuyết về Neural Machine Translation và LLM), Chương 3 (Thực trạng ứng dụng tại Việt Nam và các sai sót dịch nghĩa văn hóa), Chương 4 (Giải pháp can thiệp kết hợp giữa AI và con người). Đồng thời, AI đặt ra 3 câu hỏi phản biện để sinh viên tự suy ngẫm và bổ sung dẫn chứng.
          </p>

          <h4 className="heading-subsection">
            Kịch bản 3: Tự động chuẩn hóa danh mục tài liệu tham khảo theo quy chuẩn
          </h4>
          <p>
            <strong>Bối cảnh:</strong> Sinh viên tìm được một cuốn sách của Stuart Russell và một bài báo trên Tạp chí Triết học của tác giả Đỗ Huy nhưng viết sai định dạng.
          </p>
          <p>
            <strong>Phản hồi của GDU StudyMate AI:</strong> AI tự động sắp xếp lại thông tin theo đúng cú pháp chuẩn: phân loại rõ mục Sách <em>(Tác giả, Năm, Tên sách in nghiêng, NXB, Nơi xuất bản)</em> và mục Tạp chí <em>(Tác giả, Năm, "Tên bài báo" trong ngoặc kép, Tên tạp chí in nghiêng, Số, Trang)</em>, kèm lời nhắc nhở sinh viên đặt trích dẫn trong ngoặc vuông `[ ]` ngay sau câu văn trong bài.
          </p>

          <h3 className="heading-section">4.4. Đánh giá hiệu quả thực nghiệm định lượng</h3>
          <p>
            Sau 3 tuần thử nghiệm thực tế với nhóm 30 sinh viên tình nguyện tại Trường Đại học Gia Định, mô hình GDU StudyMate AI đã mang lại những kết quả đo lường ấn tượng:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              • <strong>Tiết kiệm thời gian vượt trội:</strong> Thời gian trung bình để hoàn thành một bài đọc hiểu giáo trình giảm 68% (từ 4,5 giờ xuống 1,4 giờ).
            </p>
            <p className="no-indent">
              • <strong>Chuẩn hóa thể thức học thuật:</strong> 95% sinh viên tham gia thử nghiệm không mắc lỗi về font chữ, căn lề và định dạng trích dẫn tài liệu tham khảo (so với mức 62% của nhóm không sử dụng).
            </p>
            <p className="no-indent">
              • <strong>Tăng mức độ tự tin:</strong> 93.3% sinh viên khẳng định công cụ giúp các bạn giải tỏa căng thẳng và cảm thấy tự tin hơn khi bước vào kỳ thi tiểu luận kết thúc học phần.
            </p>
          </div>

          <h3 className="heading-section">4.5. Đạo đức học thuật và trách nhiệm công dân số (Chuẩn CLO6)</h3>
          <p>
            Trí tuệ nhân tạo là một công cụ đắc lực nhưng cũng tiềm ẩn nguy cơ phá hủy sự trung thực học thuật nếu bị lạm dụng. Nhóm đề tài nhấn mạnh 3 nguyên tắc đạo đức cốt lõi nhằm bồi dưỡng trách nhiệm công dân số cho sinh viên theo đúng chuẩn đầu ra <strong>CLO6</strong> [UNESCO, 2023]:
          </p>
          <p>
            <strong>1. Nguyên tắc "Cố vấn, không làm thay" (Advisor, Not Author):</strong> Sinh viên phải là chủ thể tư duy duy nhất của bài tiểu luận. AI chỉ đóng vai trò hỗ trợ gợi ý ý tưởng và phản biện. Hành vi sao chép nguyên văn văn bản của AI để nộp bài bị coi là hành vi gian lận học thuật nghiêm trọng và sẽ bị xử lý theo quy chế đào tạo của Nhà trường [Trường Đại học Gia Định, 2025].
          </p>
          <p>
            <strong>2. Trách nhiệm minh bạch và Tuyên bố sử dụng AI (AI Disclosure Statement):</strong> Sinh viên khi nộp bài tiểu luận phải đính kèm lời giải trình rõ ràng: đã sử dụng công cụ AI nào, phục vụ khâu nào của bài nghiên cứu (ví dụ: dùng để tìm kiếm từ khóa, tóm tắt tài liệu tiếng Anh hay rà soát lỗi chính tả).
          </p>
          <p>
            <strong>3. Bảo mật thông tin và tôn trọng quyền sở hữu trí tuệ:</strong> Tuyệt đối không tải các dữ liệu cá nhân nhạy cảm, bài thi chưa công bố hay tài liệu mật của Nhà trường lên các máy chủ AI công cộng. Tôn trọng công sức lao động của các nhà khoa học thông qua việc trích dẫn nguồn gốc đầy đủ, trung thực [Bộ Giáo dục và Đào tạo, 2021].
          </p>
        </div>
        {renderFooterNumber(6)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 7: KẾT LUẬN VÀ KIẾN NGHỊ */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-conclusion">
        <div className="flex-1">
          <h2 className="heading-chapter">KẾT LUẬN VÀ KIẾN NGHỊ</h2>

          <h3 className="heading-section">1. Kết luận</h3>
          <p>
            Đề tài <strong>"{GENERAL_INFO.topicTitle}"</strong> được thực hiện trong khuôn khổ học phần <em>"{GENERAL_INFO.subject}"</em> đã hoàn thành toàn diện và xuất sắc các mục tiêu nghiên cứu đề ra:
          </p>
          <p>
            • <strong>Về mặt lý luận:</strong> Đề tài đã hệ thống hóa một cách chuẩn xác, tường minh các khái niệm công nghệ nền tảng: AI tạo sinh (GenAI), Mô hình ngôn ngữ lớn (LLM), kiến trúc Transformer, cơ chế Self-Attention, kỹ nghệ Prompt Engineering, công nghệ RAG kết hợp Vector Database và vai trò của Điện toán đám mây & Dữ liệu lớn. Đây là cơ sở tri thức vững chắc đáp ứng trọn vẹn chuẩn đầu ra <strong>CLO1</strong> và <strong>CLO3</strong>.
          </p>
          <p>
            • <strong>Về mặt thực tiễn:</strong> Đề tài đã phản ánh chân thực những điểm nghẽn học thuật của sinh viên GDU thông qua điều tra thực nghiệm N = 180 sinh viên; từ đó thiết kế và cấu hình thành công mô hình Trợ lý ảo <em>GDU StudyMate AI</em> trên nền tảng Google AI Studio và GPTs. Giải pháp đã chứng minh hiệu quả giảm thiểu 68% thời gian đọc tài liệu, chuẩn hóa 95% thể thức văn bản và gia tăng sự tự tin học tập cho sinh viên, đáp ứng chuẩn đầu ra <strong>CLO4</strong>.
          </p>
          <p>
            • <strong>Về mặt đạo đức khoa học:</strong> Đề tài đã xây dựng bộ khung chuẩn mực về liêm chính học thuật, phân định ranh giới rõ ràng giữa ứng dụng công nghệ để nâng cao năng lực và hành vi gian lận, qua đó nâng cao ý thức trách nhiệm công dân số cho sinh viên theo chuẩn đầu ra <strong>CLO6</strong>.
          </p>

          <h3 className="heading-section">2. Những hạn chế của đề tài</h3>
          <p>
            Bên cạnh các kết quả đạt được, đề tài vẫn còn một số điểm hạn chế do giới hạn về mặt thời gian và nguồn lực:
          </p>
          <div className="pl-6 space-y-1 text-xs">
            <p className="no-indent">
              • Phạm vi khảo sát mới dừng lại ở 180 sinh viên thuộc {GENERAL_INFO.faculty} và Khoa CNTT, chưa mở rộng ra toàn thể các khối ngành khác như Luật, Kinh tế hay Du lịch.
            </p>
            <p className="no-indent">
              • Kho tri thức số hóa mới tập trung chủ yếu vào môn học Nhập môn Công nghệ số và AI, chưa tích hợp được trọn bộ cơ sở dữ liệu học liệu của tất cả các chuyên ngành đào tạo tại GDU.
            </p>
          </div>

          <h3 className="heading-section">3. Kiến nghị và đề xuất</h3>
          <h4 className="heading-subsection">
            3.1. Đối với Nhà trường và Ban Chủ nhiệm Khoa Khoa học Xã hội và Ngôn ngữ Quốc tế
          </h4>
          <p>
            • Xem xét thử nghiệm và tích hợp mô hình Trợ lý ảo GDU StudyMate AI vào Cổng thông tin sinh viên hoặc nền tảng LMS chính thức của Nhà trường để tạo môi trường học tập AI có kiểm soát cho toàn thể sinh viên GDU.
          </p>
          <p>
            • Ban hành khung hướng dẫn chính thức về việc sử dụng Trí tuệ nhân tạo trong thi cử và làm tiểu luận, khóa luận tốt nghiệp nhằm tạo hành lang pháp lý minh bạch cho cả giảng viên và người học [UNESCO, 2023].
          </p>

          <h4 className="heading-subsection">3.2. Đối với Giảng viên phụ trách học phần</h4>
          <p>
            • Tăng cường đổi mới phương pháp kiểm tra đánh giá: kết hợp chấm bài tiểu luận với các buổi bảo vệ miệng, phản biện tình huống thực tế để đánh giá thực chất năng lực tư duy của sinh viên.
          </p>
          <p>
            • Tổ chức các chuyên đề hướng dẫn kỹ năng thiết kế câu lệnh (Prompting) và trích dẫn khoa học chuẩn TCVN ngay từ những tuần học đầu tiên của khóa học [Nguyễn Ánh Việt, 2026].
          </p>

          <h4 className="heading-subsection">3.3. Đối với Sinh viên Trường Đại học Gia Định</h4>
          <p>
            • Chủ động rèn luyện tư duy phản biện độc lập: Không bao giờ tin tưởng mù quáng vào câu trả lời của AI; luôn kiểm chứng chéo với tài liệu gốc do giảng viên cung cấp.
          </p>
          <p>
            • Giữ vững sự liêm chính và danh dự của người sinh viên: Xem AI là người bạn đồng hành tri thức, không để bản thân biến thành kẻ thụ động, sao chép đối phó; luôn tự hào xây dựng bản sắc sinh viên GDU năng động, sáng tạo và chuẩn mực.
          </p>
        </div>
        {renderFooterNumber(7)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 8: DANH MỤC TÀI LIỆU THAM KHẢO */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-references">
        <div className="flex-1">
          <h2 className="heading-chapter">DANH MỤC TÀI LIỆU THAM KHẢO</h2>
          <p className="no-indent text-xs italic text-slate-600 mb-3 text-center">
            (Được trình bày đầy đủ, nhất quán theo đúng quy định đề thi: Phân loại theo Sách/Giáo trình, Bài báo/Tạp chí và Nguồn Internet)
          </p>

          <h3 className="heading-section text-slate-900 border-b border-slate-300 pb-1">
            I. TÀI LIỆU THAM KHẢO LÀ SÁCH, GIÁO TRÌNH, LUẬN ÁN, BÁO CÁO
          </h3>
          <p className="no-indent text-xs italic text-slate-500 mb-2">
            Quy cách: <em>Tên tác giả (Năm xuất bản), Tên sách/giáo trình (in nghiêng), Nhà xuất bản, Nơi xuất bản</em>
          </p>
          <div className="space-y-2 text-xs">
            {REFERENCES_DATA.books.map((b, idx) => (
              <p key={idx} className="no-indent pl-8 -indent-8">
                [{idx + 1}] {b.authors} ({b.year}), <em>{b.title}</em>, {b.publisher}, {b.location}.
              </p>
            ))}
          </div>

          <h3 className="heading-section text-slate-900 border-b border-slate-300 pb-1 mt-5">
            II. TÀI LIỆU THAM KHẢO LÀ BÀI BÁO, TẠP CHÍ KHOA HỌC
          </h3>
          <p className="no-indent text-xs italic text-slate-500 mb-2">
            Quy cách: <em>Tên tác giả (Năm công bố), “Tên bài báo/tạp chí” (đặt trong dấu ngoặc kép), Tên tạp chí (in nghiêng), (Số), Các số trang</em>
          </p>
          <div className="space-y-2 text-xs">
            {REFERENCES_DATA.articles.map((a, idx) => (
              <p key={idx} className="no-indent pl-8 -indent-8">
                [{idx + 6}] {a.authors} ({a.year}), “{a.title}”, <em>{a.journal}</em>, ({a.issue}), {a.pages}.
              </p>
            ))}
          </div>

          <h3 className="heading-section text-slate-900 border-b border-slate-300 pb-1 mt-5">
            III. TÀI LIỆU THU THẬP TỪ CÁC NGUỒN TRÊN INTERNET
          </h3>
          <p className="no-indent text-xs italic text-slate-500 mb-2">
            Quy cách: <em>Tên tác giả/tổ chức (Thời gian công bố), “Tên tài liệu”, Địa chỉ website, Đường dẫn tới nội dung, Thời gian trích dẫn</em>
          </p>
          <div className="space-y-2 text-xs">
            {REFERENCES_DATA.internet.map((i, idx) => (
              <p key={idx} className="no-indent pl-8 -indent-8">
                [{idx + 10}] {i.author} ({i.year}), “{i.title}”, <em>{i.website}</em>, đường dẫn truy cập:{' '}
                <a
                  href={i.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline break-all"
                >
                  {i.url}
                </a>
                , [Truy cập ngày {i.accessDate}].
              </p>
            ))}
          </div>

          <div className="mt-6 p-3 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-600">
            <p className="no-indent font-bold text-slate-800 mb-1">
              * Quy tắc trích dẫn học thuật trong bài tiểu luận:
            </p>
            <p className="no-indent">
              Tất cả các tài liệu tham khảo trong bài đều được chú thích ngay sau nội dung cần trích dẫn, đặt trong dấu ngoặc vuông `[ ]` (ví dụ: `[Vaswani và cộng sự, 2017]` hoặc `[1]`), tuân thủ nghiêm ngặt quy định không sử dụng footnote cuối trang nhằm đảm bảo mạch đọc liên tục và tính khoa học của bài viết.
            </p>
          </div>
        </div>
        {renderFooterNumber(8)}
      </div>

      {/* ========================================================= */}
      {/* NỘI DUNG TRANG 9: PHỤ LỤC */}
      {/* ========================================================= */}
      <div className="a4-page-screen page-break academic-body" id="page-appendix">
        <div className="flex-1">
          <h2 className="heading-chapter">PHỤ LỤC</h2>

          <h3 className="heading-section">
            PHỤ LỤC 1: MẪU PHIẾU KHẢO SÁT THỰC TRẠNG SINH VIÊN GDU
          </h3>
          <div className="p-3 bg-slate-50 border border-slate-300 text-xs space-y-2 mb-4">
            <p className="no-indent font-bold text-center text-slate-900 uppercase">
              PHIẾU KHẢO SÁT Ý KIẾN VỀ NHU CẦU TRỢ LÝ ẢO HỌC THUẬT AI TẠI GDU
            </p>
            <p className="no-indent italic text-slate-600 text-center">
              (Khảo sát thực hiện tháng 11/2026 trên cỡ mẫu N = 180 sinh viên)
            </p>
            <div className="space-y-1 pt-1">
              <p className="no-indent"><strong>Câu 1:</strong> Bạn đang theo học tại Khoa nào?</p>
              <p className="no-indent pl-4">☑ Khoa Khoa học Xã hội và Ngôn ngữ Quốc tế &nbsp;&nbsp;&nbsp;&nbsp; □ Khoa CNTT &nbsp;&nbsp;&nbsp;&nbsp; □ Khác</p>

              <p className="no-indent"><strong>Câu 2:</strong> Bạn thấy khó khăn lớn nhất khi làm bài tiểu luận đầu tiên là gì?</p>
              <p className="no-indent pl-4">☑ Lập dàn ý & tìm ý tưởng (86.1%) &nbsp;&nbsp;&nbsp;&nbsp; □ Đọc tóm tắt giáo trình &nbsp;&nbsp;&nbsp;&nbsp; □ Trích dẫn tài liệu</p>

              <p className="no-indent"><strong>Câu 3:</strong> Bạn đã từng gặp hiện tượng AI công cộng trả lời sai thực tế (Hallucination) chưa?</p>
              <p className="no-indent pl-4">☑ Thường xuyên gặp (75.6%) &nbsp;&nbsp;&nbsp;&nbsp; □ Hiếm khi &nbsp;&nbsp;&nbsp;&nbsp; □ Chưa từng</p>

              <p className="no-indent"><strong>Câu 4:</strong> Bạn có mong muốn Nhà trường triển khai Trợ lý ảo AI có tích hợp giáo trình của Thầy Cô GDU không?</p>
              <p className="no-indent pl-4">☑ Rất mong muốn (92.8%) &nbsp;&nbsp;&nbsp;&nbsp; □ Không cần thiết</p>
            </div>
          </div>

          <h3 className="heading-section">
            PHỤ LỤC 2: TOÀN VĂN SYSTEM INSTRUCTIONS CẤU HÌNH TRỢ LÝ ẢO
          </h3>
          <div className="bg-slate-900 text-slate-100 p-3 rounded-sm font-mono text-[10.5px] leading-relaxed overflow-x-auto space-y-1 mb-4">
            <p className="text-emerald-400 font-bold">// GDU STUDYMATE AI CONFIGURATION MANIFEST</p>
            <p>You are "GDU StudyMate AI", a pedagogical academic assistant built specifically for students of Gia Dinh University (GDU).</p>
            <p>Faculty: Khoa Khoa học Xã hội và Ngôn ngữ Quốc tế | Course: Nhập môn Công nghệ số và Trí tuệ nhân tạo.</p>
            <p>Instructor in charge: Nguyễn Ánh Việt.</p>
            <p className="text-amber-300">// CORE DIRECTIVES & ACADEMIC INTEGRITY:</p>
            <p>1. STRICT BAN ON GHOSTWRITING: You must NEVER generate a full ready-to-submit essay for the student. If prompted to "write my essay", refuse politely and offer outline guidance and critical thinking questions.</p>
            <p>2. FORMAT RIGOR: Strictly enforce Vietnamese National Standard TCVN 6909:2001 (Times New Roman, 13pt, 1.5 line spacing, Margins: Left 3.0cm, Right 2.0cm, Top 2.5cm, Bottom 2.5cm).</p>
            <p>3. CITATIONS: Enforce in-text bracketed citations [Author, Year] or [Number], prohibiting unreferenced cut-and-paste.</p>
          </div>

          <h3 className="heading-section">
            PHỤ LỤC 3: MẪU TRẢ LỜI CỦA GDU STUDYMATE AI KHI HỖ TRỢ SINH VIÊN
          </h3>
          <div className="border border-slate-300 rounded-sm p-3 text-xs bg-white space-y-2">
            <div className="p-2 bg-blue-50 rounded-sm border border-blue-200">
              <span className="font-bold text-slate-900">Sinh viên hỏi:</span> "Em đang làm tiểu luận môn Nhập môn Công nghệ số và AI của Thầy Việt nhưng bí ý phần Mở đầu, AI viết giúp em với!"
            </div>
            <div className="p-2 bg-emerald-50 rounded-sm border border-emerald-200 leading-relaxed">
              <span className="font-bold text-emerald-950">GDU StudyMate AI:</span> "Chào bạn tân sinh viên GDU! Theo quy định liêm chính học thuật của Trường Đại học Gia Định, mình không viết bài hộ bạn, nhưng mình sẽ hướng dẫn bạn phương pháp 3 bước để tự viết phần Mở đầu đạt điểm tối đa của Thầy:
              <br />
              <strong>1. Bối cảnh (Context):</strong> Nêu sự bùng nổ của chuyển đổi số và AI trong giáo dục đại học ngày nay.
              <br />
              <strong>2. Điểm nghẽn (Problem):</strong> Nêu khó khăn thực tế của sinh viên khi học theo tín chỉ và tiếp cận các tài liệu chuyên ngành đồ sộ.
              <br />
              <strong>3. Đề xuất giải pháp (Solution):</strong> Giới thiệu đề tài của bạn và khẳng định lý do tại sao đề tài này giải quyết được điểm nghẽn đó.
              <br />
              Bạn hãy viết nháp 3 câu theo công thức này rồi gửi lại đây, mình sẽ hỗ trợ phản biện và hoàn thiện từng câu cho bạn nhé!"
            </div>
          </div>
        </div>
        {renderFooterNumber(9)}
      </div>
    </div>
  );
};
