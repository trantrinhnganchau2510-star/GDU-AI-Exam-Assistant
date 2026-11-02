import { EssayVariant, GENERAL_INFO } from '../data/essayData';

/**
 * Xuất nội dung tiểu luận sang định dạng Microsoft Word (.doc)
 * Giữ nguyên định dạng font Times New Roman, bảng biểu, căn lề và màu sắc học thuật
 */
export const exportToWordDoc = (variant: EssayVariant) => {
  const element = document.getElementById('academic-document-container');
  if (!element) return;

  const contentHtml = element.innerHTML;

  const wordHeader = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>${variant.fileName.replace('.pdf', '')}</title>
      <style>
        @page Section1 {
          size: 595.3pt 841.9pt; /* A4 size in points */
          margin: 70.85pt 56.7pt 70.85pt 85.05pt; /* T: 2.5cm, R: 2.0cm, B: 2.5cm, L: 3.0cm */
          mso-header-margin: 35.4pt;
          mso-footer-margin: 35.4pt;
          mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
        body {
          font-family: 'Times New Roman', serif;
          font-size: 13pt;
          line-height: 1.5;
          text-align: justify;
        }
        p {
          margin-bottom: 6pt;
          text-indent: 28.35pt; /* 1.0 cm first-line indent */
          text-align: justify;
        }
        h1, h2, h3, h4 {
          font-family: 'Times New Roman', serif;
        }
        .heading-chapter {
          font-size: 15pt;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          margin-top: 18pt;
          margin-bottom: 12pt;
        }
        .heading-section {
          font-size: 13.5pt;
          font-weight: bold;
          text-align: left;
          margin-top: 14pt;
          margin-bottom: 6pt;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11pt;
          margin: 10pt 0;
        }
        table, th, td {
          border: 1px solid black;
          padding: 5pt;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
          text-align: center;
        }
        .page-break {
          page-break-before: always;
          mso-break-type: section-break;
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${contentHtml}
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', wordHeader], {
    type: 'application/msword;charset=utf-8',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = variant.fileName.replace('.pdf', '.doc');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * In hoặc xuất PDF chuẩn A4 qua trình duyệt
 * Đảm bảo tài liệu được ngắt trang hoàn hảo, không cắt chữ, chuẩn lề TCVN
 */
export const triggerPrintPdf = (variant: EssayVariant) => {
  const originalTitle = document.title;
  // Đổi title để trình duyệt tự động điền tên file PDF khi bấm "Save as PDF"
  document.title = variant.fileName.replace('.pdf', '');

  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  }, 150);
};

/**
 * Sao chép toàn bộ văn bản tiểu luận
 */
export const copyEssayPlainText = async () => {
  const element = document.getElementById('academic-document-container');
  if (!element) return false;

  try {
    const text = element.innerText;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
