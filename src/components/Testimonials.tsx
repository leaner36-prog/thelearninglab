import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    name: 'Chị Nguyễn Thu Hà',
    role: 'Phụ huynh học viên lớp 10',
    avatar: 'TH',
    rating: 5,
    quote:
      'Con tôi từng rất sợ Tiếng Anh, nhưng sau 3 tháng tại The Learning Lab, con tự tin giao tiếp và đạt IELTS 6.5. Báo cáo hàng tuần giúp tôi nắm rõ con đang học đến đâu.',
    improvement: 'IELTS 4.5 → 6.5 trong 3 tháng',
  },
  {
    name: 'Trần Đức Minh',
    role: 'Học viên lớp 12',
    avatar: 'ĐM',
    rating: 5,
    quote:
      'Thầy cô dạy hiểu bản chất chứ không bắt học thuộc. Mình bắt đầu thấy Toán thú vị và tự tin hơn rất nhiều khi bước vào kỳ thi tốt nghiệp.',
    improvement: 'Toán 6.5 → 9.2 điểm',
  },
  {
    name: 'Chị Lê Phương Vy',
    role: 'Phụ huynh học viên lớp 8',
    avatar: 'PV',
    rating: 5,
    quote:
      'Con rất hào hứng mỗi tuần đi học Khoa học vì được làm thí nghiệm thật. Con bắt đầu hay đặt câu hỏi và tư duy phản biện ở nhà — điều mà mình rất ấn tượng.',
    improvement: 'Hứng thú học tập tăng rõ rệt',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-burgundy-700 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            Đánh giá từ phụ huynh & học viên
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Những câu chuyện tiến bộ chân thực
          </h2>
          <p className="mt-4 text-lg text-burgundy-300">
            Hàng ngàn học viên và phụ huynh đã tin tưởng và đồng hành cùng chúng
            tôi.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 120}>
              <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-lg">
                <Quote className="h-8 w-8 text-gold-300" fill="currentColor" />

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gold-500"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-base leading-relaxed text-burgundy-600">
                  "{t.quote}"
                </p>

                <div className="mt-6 rounded-xl bg-green-50 px-4 py-3">
                  <p className="text-sm font-semibold text-green-700">
                    {t.improvement}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-burgundy-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy-700 font-display text-sm font-bold text-gold-400">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-burgundy-700">
                      {t.name}
                    </p>
                    <p className="text-xs text-burgundy-400">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
