/**
 * Dữ liệu bài tiểu luận kết thúc học phần
 * Môn học: Nhập môn Công nghệ số và Trí tuệ nhân tạo
 * TRƯỜNG ĐẠI HỌC GIA ĐỊNH (GDU) - KHOA KHOA HỌC XÃ HỘI VÀ NGÔN NGỮ QUỐC TẾ
 */

export interface StudentInfo {
  name: string;
  studentId: string;
  role?: string;
  classId: string;
  email?: string;
  contributionPercent?: string;
  assignedTasks?: string;
}

export interface EssayVariant {
  id: string;
  type: 'group' | 'individual';
  title: string;
  shortLabel: string;
  fileName: string;
  students: StudentInfo[];
}

export const GENERAL_INFO = {
  university: 'TRƯỜNG ĐẠI HỌC GIA ĐỊNH',
  faculty: 'KHOA KHOA HỌC XÃ HỘI VÀ NGÔN NGỮ QUỐC TẾ',
  subject: 'Nhập môn Công nghệ số và Trí tuệ nhân tạo',
  topicTitle:
    'TRIỂN KHAI MÔ HÌNH TRỢ LÝ ẢO ỨNG DỤNG TRÍ TUỆ NHÂN TẠO ĐỂ TỐI ƯU HÓA QUÁ TRÌNH HỌC TẬP VÀ NGHIÊN CỨU KHOA HỌC CHO SINH VIÊN GDU',
  instructor: 'Nguyễn Ánh Việt', // Bỏ ThS theo yêu cầu
  classes: '020100491522 - 261201 / 020100491526 - 262201',
  location: 'THÀNH PHỐ HỒ CHÍ MINH',
  monthYear: 'THÁNG 11 NĂM 2026', // Tháng 11 năm 2026 theo yêu cầu
  academicYear: 'Năm học 2025 - 2026',
  logoPath: '/assets/aistudio/logo-dai-hoc-gia-dinh-inkythuatso-01-20-15-25-55_0c95af3c.jpg',
};

export const ESSAY_VARIANTS: EssayVariant[] = [
  {
    id: 'group',
    type: 'group',
    title: 'BÀI TIỂU LUẬN NHÓM CHUNG (4 THÀNH VIÊN)',
    shortLabel: 'Bài Nhóm (Chung)',
    fileName: 'TIEU_LUAN_NHOM_GDU_AI_TRO_LY_AO_THANG_11_2026.pdf',
    students: [
      {
        name: 'Trần Trịnh Ngân Châu',
        studentId: '26220002',
        role: 'Nhóm trưởng',
        classId: '020100491526 - 262201',
        email: 'trantrinhnganchau2510@gmail.com',
        contributionPercent: '100%',
        assignedTasks:
          'Chủ trì đề tài, điều phối phân công tiến độ, thiết kế giải pháp & cấu hình System Prompt Trợ lý ảo (Chương 4), tổng hợp và hiệu đính toàn bộ bài viết.',
      },
      {
        name: 'Lý Thị Đà Ni',
        studentId: '26120041',
        role: 'Thành viên',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks:
          'Xây dựng bảng hỏi khảo sát thực tế N=180 SV GDU, xử lý và phân tích số liệu thống kê thực trạng học tập và nghiên cứu (Chương 3), vẽ biểu đồ minh họa.',
      },
      {
        name: 'Huỳnh Nguyễn Kim Ngân',
        studentId: '26120030',
        role: 'Thành viên',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks:
          'Nghiên cứu tài liệu học thuật quốc tế, xây dựng cơ sở lý thuyết về AI tạo sinh, LLM Transformer, RAG và Điện toán đám mây & Dữ liệu lớn (Chương 2).',
      },
      {
        name: 'Nguyễn Cao Như Ý',
        studentId: '26120001',
        role: 'Thành viên',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks:
          'Xây dựng phần Mở đầu, tính cấp thiết và mục tiêu nghiên cứu (Chương 1), soạn thảo Kết luận - Kiến nghị, hoàn thiện danh mục tài liệu tham khảo theo chuẩn TCVN.',
      },
    ],
  },
  {
    id: 'individual-chau',
    type: 'individual',
    title: 'BÀI TIỂU LUẬN CÁ NHÂN - TRẦN TRỊNH NGÂN CHÂU',
    shortLabel: 'Bài SV: Ngân Châu',
    fileName: 'TIEU_LUAN_GDU_TRAN_TRINH_NGAN_CHAU_26220002.pdf',
    students: [
      {
        name: 'Trần Trịnh Ngân Châu',
        studentId: '26220002',
        role: 'Sinh viên thực hiện',
        classId: '020100491526 - 262201',
        email: 'trantrinhnganchau2510@gmail.com',
        contributionPercent: '100%',
        assignedTasks: 'Thực hiện độc lập và hoàn thiện toàn bộ nội dung bài tiểu luận.',
      },
    ],
  },
  {
    id: 'individual-ni',
    type: 'individual',
    title: 'BÀI TIỂU LUẬN CÁ NHÂN - LÝ THỊ ĐÀ NI',
    shortLabel: 'Bài SV: Đà Ni',
    fileName: 'TIEU_LUAN_GDU_LY_THI_DA_NI_26120041.pdf',
    students: [
      {
        name: 'Lý Thị Đà Ni',
        studentId: '26120041',
        role: 'Sinh viên thực hiện',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks: 'Thực hiện độc lập và hoàn thiện toàn bộ nội dung bài tiểu luận.',
      },
    ],
  },
  {
    id: 'individual-ngan',
    type: 'individual',
    title: 'BÀI TIỂU LUẬN CÁ NHÂN - HUỲNH NGUYỄN KIM NGÂN',
    shortLabel: 'Bài SV: Kim Ngân',
    fileName: 'TIEU_LUAN_GDU_HUYNH_NGUYEN_KIM_NGAN_26120030.pdf',
    students: [
      {
        name: 'Huỳnh Nguyễn Kim Ngân',
        studentId: '26120030',
        role: 'Sinh viên thực hiện',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks: 'Thực hiện độc lập và hoàn thiện toàn bộ nội dung bài tiểu luận.',
      },
    ],
  },
  {
    id: 'individual-y',
    type: 'individual',
    title: 'BÀI TIỂU LUẬN CÁ NHÂN - NGUYỄN CAO NHƯ Ý',
    shortLabel: 'Bài SV: Như Ý',
    fileName: 'TIEU_LUAN_GDU_NGUYEN_CAO_NHU_Y_26120001.pdf',
    students: [
      {
        name: 'Nguyễn Cao Như Ý',
        studentId: '26120001',
        role: 'Sinh viên thực hiện',
        classId: '020100491522 - 261201',
        contributionPercent: '100%',
        assignedTasks: 'Thực hiện độc lập và hoàn thiện toàn bộ nội dung bài tiểu luận.',
      },
    ],
  },
];

export const ABBREVIATIONS = [
  { term: 'AI', full: 'Artificial Intelligence (Trí tuệ nhân tạo)' },
  { term: 'LLM', full: 'Large Language Model (Mô hình ngôn ngữ lớn)' },
  { term: 'GenAI', full: 'Generative Artificial Intelligence (Trí tuệ nhân tạo tạo sinh)' },
  { term: 'RAG', full: 'Retrieval-Augmented Generation (Tăng cường truy xuất dữ liệu thế hệ)' },
  { term: 'GDU', full: 'Gia Dinh University (Trường Đại học Gia Định)' },
  { term: 'KHXH & NNQT', full: 'Khoa Khoa học Xã hội và Ngôn ngữ Quốc tế' },
  { term: 'NCKH', full: 'Nghiên cứu khoa học' },
  { term: 'CLO', full: 'Course Learning Outcomes (Chuẩn đầu ra của học phần)' },
  { term: 'GPT', full: 'Generative Pre-trained Transformer' },
  { term: 'API', full: 'Application Programming Interface (Giao diện lập trình ứng dụng)' },
  { term: 'LMS', full: 'Learning Management System (Hệ thống quản lý học tập trực tuyến)' },
  { term: 'NLP', full: 'Natural Language Processing (Xử lý ngôn ngữ tự nhiên)' },
  { term: 'CoT', full: 'Chain-of-Thought (Chuỗi tư duy suy luận từng bước)' },
  { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback (Học tăng cường từ phản hồi con người)' },
];

export const REFERENCES_DATA = {
  books: [
    {
      authors: 'Stuart Russell và Peter Norvig',
      year: '2020',
      title: 'Artificial Intelligence: A Modern Approach (4th Edition)',
      publisher: 'Pearson Education',
      location: 'New York, USA',
    },
    {
      authors: 'Ian Goodfellow, Yoshua Bengio và Aaron Courville',
      year: '2016',
      title: 'Deep Learning',
      publisher: 'MIT Press',
      location: 'Cambridge, Massachusetts',
    },
    {
      authors: 'Bộ Giáo dục và Đào tạo',
      year: '2021',
      title: 'Giáo trình Chuyển đổi số và Ứng dụng Trí tuệ nhân tạo trong Giáo dục đại học',
      publisher: 'NXB Giáo dục Việt Nam',
      location: 'Hà Nội',
    },
    {
      authors: 'Nguyễn Ánh Việt',
      year: '2026',
      title: 'Bài giảng và Đề cương học phần Nhập môn Công nghệ số và Trí tuệ nhân tạo',
      publisher: 'Trường Đại học Gia Định',
      location: 'TP. Hồ Chí Minh',
    },
    {
      authors: 'Trần Văn Hoàng và Lê Thị Mai',
      year: '2023',
      title: 'Phương pháp nghiên cứu khoa học và viết tiểu luận trong khối ngành Khoa học Xã hội và Ngôn ngữ',
      publisher: 'NXB Đại học Quốc gia TP. Hồ Chí Minh',
      location: 'TP. Hồ Chí Minh',
    },
  ],
  articles: [
    {
      authors: 'Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser và Illia Polosukhin',
      year: '2017',
      title: 'Attention Is All You Need',
      journal: 'Advances in Neural Information Processing Systems (NeurIPS 2017)',
      issue: 'Vol. 30',
      pages: 'tr. 5998–6008',
    },
    {
      authors: 'Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goi, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel và Douwe Kiela',
      year: '2020',
      title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      journal: 'Advances in Neural Information Processing Systems (NeurIPS 2020)',
      issue: 'Vol. 33',
      pages: 'tr. 9459–9474',
    },
    {
      authors: 'Đỗ Huy',
      year: '1990',
      title: 'Về bản sắc dân tộc của văn hoá',
      journal: 'Tạp chí Triết học',
      issue: 'Số 1',
      pages: 'tr. 8–15',
    },
    {
      authors: 'Vũ Thị Lan và Nguyễn Đức Minh',
      year: '2024',
      title: 'Ứng dụng Mô hình ngôn ngữ lớn (LLM) hỗ trợ dịch thuật học thuật và phân tích diễn ngôn cho sinh viên chuyên ngữ',
      journal: 'Tạp chí Khoa học Ngoại ngữ',
      issue: 'Số 76',
      pages: 'tr. 45–56',
    },
  ],
  internet: [
    {
      author: 'OpenAI Research',
      year: '2024',
      title: 'Introducing Custom GPTs: Build your own personalized AI assistant',
      website: 'OpenAI Blog',
      url: 'https://openai.com/index/introducing-gpts/',
      accessDate: '15/02/2026',
    },
    {
      author: 'Google Cloud & DeepMind',
      year: '2025',
      title: 'Google AI Studio & Gemini 1.5 Pro Architecture Guide for Enterprise and Education',
      website: 'Google Cloud Documentation',
      url: 'https://ai.google.dev/docs/gemini_api_overview',
      accessDate: '20/02/2026',
    },
    {
      author: 'Trường Đại học Gia Định (GDU)',
      year: '2025',
      title: 'Quy chế đào tạo học chế tín chỉ và Quy định về Liêm chính học thuật đối với sinh viên',
      website: 'Cổng thông tin Đại học Gia Định',
      url: 'https://giadinh.edu.vn/dao-tao/quy-che-hoc-vu',
      accessDate: '01/03/2026',
    },
    {
      author: 'UNESCO',
      year: '2023',
      title: 'Guidance for Generative AI in education and research',
      website: 'UNESCO Digital Library',
      url: 'https://unesdoc.unesco.org/ark:/48223/pf0000386693',
      accessDate: '10/01/2026',
    },
  ],
};
