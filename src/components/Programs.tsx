import { ArrowRight, GraduationCap, Calculator, FlaskConical, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const programs = [
  {
    icon: GraduationCap,
    title: 'Tiếng Anh giao tiếp & Học thuật',
    badge: 'Cambridge / IELTS / TOEIC',
    description:
      'Phát triển cả 4 kỹ năng Nghe - Nói - Đọc - Viết với phương pháp immersive, mô phỏng đề thi thật và luyện tập phản xạ nhanh.',
    audience: 'Học viên từ cấp 2 đến người đi làm',
    features: ['Luyện đề theo format thật', 'Chữa viết 1-1', 'Phát âm chuẩn quốc tế'],
  },
  {
    icon: Calculator,
    title: 'Tư duy Toán học & Giải quyết vấn đề',
    badge: 'Logic & Ứng dụng',
    description:
      'Xây dựng nền tảng tư duy logic vững chắc, chuyển từ học thuộc công thức sang hiểu bản chất và ứng dụng giải quyết bài toán thực tế.',
    audience: 'Học viên cấp 2, cấp 3 và luyện thi đại học',
    features: ['Học hiểu bản chất', 'Tư duy đa chiều', 'Luyện thi nâng cao'],
  },
  {
    icon: FlaskConical,
    title: 'Khoa học thực hành & Tư duy phản biện',
    badge: 'Vật lý - Hóa - Sinh',
    description:
      'Tiếp cận khoa học qua thí nghiệm thực hành, đặt câu hỏi và lập luận phản biện, giúp học viên hiểu sâu và ghi nhớ lâu dài.',
    audience: 'Học viên cấp 2, cấp 3 yêu thích khoa học',
    features: ['Thí nghiệm thực hành', 'Tư duy phản biện', 'Dự án nghiên cứu nhỏ'],
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-burgundy-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
            Chương trình đào tạo nổi bật
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-burgundy-700 sm:text-4xl">
            Lộ trình học được thiết kế cho từng mục tiêu
          </h2>
          <p className="mt-4 text-lg text-burgundy-500">
            Mỗi chương trình được xây dựng với lộ trình rõ ràng, tài liệu độc
            quyền và giảng viên chuyên sâu.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {programs.map((program, idx) => (
            <Reveal key={program.title} delay={idx * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-burgundy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-xl hover:shadow-burgundy-700/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-burgundy-700 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                  <program.icon className="h-7 w-7" strokeWidth={2} />
                </div>

                <span className="mt-5 inline-flex w-fit rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
                  {program.badge}
                </span>

                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-burgundy-700">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-burgundy-500">
                  {program.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {program.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-burgundy-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl bg-burgundy-50 px-4 py-3 text-sm text-burgundy-500">
                  <span className="font-medium text-burgundy-700">Phù hợp: </span>
                  {program.audience}
                </div>

                <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700">
                  Tìm hiểu thêm
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
