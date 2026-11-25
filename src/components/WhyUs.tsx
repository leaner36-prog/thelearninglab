import { Route, LineChart, FileStack } from 'lucide-react';
import { Reveal } from './Reveal';

const reasons = [
  {
    icon: Route,
    title: 'Lộ trình cá nhân hóa',
    description:
      'Mỗi học viên được đánh giá năng lực đầu vào và nhận lộ trình riêng biệt, điều chỉnh liên tục theo tốc độ và mục tiêu cá nhân.',
  },
  {
    icon: LineChart,
    title: 'Báo cáo tiến độ định kỳ cho phụ huynh',
    description:
      'Phụ huynh nhận báo cáo chi tiết hàng tuần về điểm mạnh, điểm cần cải thiện và kế hoạch tiếp theo — luôn nắm rõ quá trình học của con.',
  },
  {
    icon: FileStack,
    title: 'Tài liệu & bài tập tương tác độc quyền',
    description:
      'Hệ thống bài tập và tài liệu được thiết kế riêng, tương tác trực quan giúp học viên chủ động luyện tập và ghi nhớ sâu hơn.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left heading */}
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
              Tại sao chọn The Learning Lab
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-burgundy-700 sm:text-4xl">
              Ba khác biệt cốt lõi tạo nên hiệu quả học tập
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-burgundy-500">
              Chúng tôi không chỉ dạy kiến thức — chúng tôi đồng hành, đo lường
              và điều chỉnh để từng học viên tiến bộ theo cách của mình.
            </p>
            <div className="mt-8 rounded-2xl border border-burgundy-100 bg-burgundy-50/60 p-6">
              <p className="font-display text-2xl font-bold text-gold-500">
                92%
              </p>
              <p className="mt-1 text-sm text-burgundy-600">
                học viên đạt hoặc vượt mục tiêu đề ra sau khi hoàn thành lộ trình.
              </p>
            </div>
          </Reveal>

          {/* Right cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {reasons.map((reason, idx) => (
              <Reveal
                key={reason.title}
                delay={idx * 120}
                className={idx === 2 ? 'sm:col-span-2' : ''}
              >
                <div className="flex h-full flex-col rounded-2xl border border-burgundy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold-200 hover:shadow-lg hover:shadow-burgundy-700/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                    <reason.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-burgundy-700">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-burgundy-500">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
