import { Reveal } from './Reveal';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Học nhóm nhỏ',
    tagline: '4–8 học viên / lớp',
    price: '1.200K',
    unit: '/tháng',
    features: [
      'Lộ trình chung cho nhóm',
      '2 buổi / tuần (90 phút)',
      'Tài liệu & bài tập độc quyền',
      'Báo cáo tiến độ hàng tháng',
    ],
    highlight: false,
  },
  {
    name: 'Học 1-1',
    tagline: 'Cá nhân hóa tối đa',
    price: '3.500K',
    unit: '/tháng',
    features: [
      'Lộ trình riêng từng học viên',
      '3 buổi / tuần (60 phút)',
      'Tài liệu & bài tập độc quyền',
      'Báo cáo tiến độ hàng tuần',
      'Điều chỉnh lộ trình linh hoạt',
    ],
    highlight: true,
  },
  {
    name: 'Luyện thi cấp tốc',
    tagline: 'Gói 8–12 tuần',
    price: 'Liên hệ',
    unit: '',
    features: [
      'Lộ trình ôn thi đặc biệt',
      'Luyện đề mô phỏng thật',
      'Chữa bài 1-1 mỗi buổi',
      'Báo cáo tiến độ hàng tuần',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-burgundy-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
            Học phí
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-burgundy-700 sm:text-4xl">
            Lựa chọn gói học phù hợp
          </h2>
          <p className="mt-4 text-lg text-burgundy-500">
            Học phí minh bạch, không phí ẩn. Đăng ký học thử miễn phí để được tư
            vấn gói phù hợp nhất.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 120}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  plan.highlight
                    ? 'border-gold-300 bg-white shadow-lg shadow-gold-500/10 ring-2 ring-gold-400'
                    : 'border-burgundy-100 bg-white shadow-sm hover:shadow-burgundy-700/10'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold text-white">
                    Phổ biến nhất
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-burgundy-700">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-burgundy-400">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold text-burgundy-700">
                    {plan.price}
                    {plan.unit.includes('K') && 'đ'}
                  </span>
                  {plan.unit && (
                    <span className="text-sm text-burgundy-400">{plan.unit}</span>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-burgundy-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30 hover:bg-gold-600'
                      : 'border-2 border-burgundy-200 text-burgundy-700 hover:border-burgundy-700 hover:bg-burgundy-50'
                  }`}
                >
                  Đăng ký học thử
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
