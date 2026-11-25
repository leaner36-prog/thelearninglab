import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import {
  CheckCircle2,
  Loader2,
  Phone,
  User,
  BookOpen,
  TrendingUp,
  Send,
  Clock,
} from 'lucide-react';
import { Reveal } from './Reveal';

const programOptions = [
  'Tiếng Anh giao tiếp & Học thuật',
  'Tư duy Toán học & Giải quyết vấn đề',
  'Khoa học thực hành & Tư duy phản biện',
  'Chưa xác định — cần tư vấn',
];

const levelOptions = [
  'Tiểu học (Lớp 1–5)',
  'Cấp 2 (Lớp 6–9)',
  'Cấp 3 (Lớp 10–12)',
  'Luyện thi đại học',
  'Người đi làm / Người lớn',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Booking() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');
  const [level, setLevel] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('registrations').insert({
      full_name: fullName.trim(),
      phone: phone.trim(),
      program,
      level,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(
        'Không thể gửi đăng ký lúc này. Vui lòng kiểm tra kết nối và thử lại.',
      );
      return;
    }

    setStatus('success');
    setFullName('');
    setPhone('');
    setProgram('');
    setLevel('');
  };

  return (
    <section id="booking" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-burgundy-100 shadow-xl shadow-burgundy-700/5 lg:grid lg:grid-cols-2">
          {/* Left info panel */}
          <div className="relative bg-gradient-to-br from-burgundy-700 to-burgundy-800 p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/10 blur-2xl" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Đăng ký tư vấn & học thử
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Bắt đầu lộ trình học phù hợp cho con ngay hôm nay
            </h2>
            <p className="mt-4 text-burgundy-300">
              Để lại thông tin, đội ngũ tư vấn viên sẽ liên hệ trong{' '}
              <span className="font-semibold text-gold-400">24 giờ</span> để
              sắp xếp bài kiểm tra năng lực miễn phí và lịch học thử.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Kiểm tra năng lực miễn phí',
                'Tư vấn lộ trình cá nhân hóa',
                'Buổi học thử trải nghiệm thực tế',
                'Báo cáo đánh giá chi tiết',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-burgundy-100">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-burgundy-600/50 p-4">
              <Clock className="h-5 w-5 text-gold-400" />
              <p className="text-sm text-burgundy-200">
                Phản hồi trong vòng 24 giờ — hoàn toàn miễn phí.
              </p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="bg-white p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-burgundy-700">
                  Đăng ký thành công!
                </h3>
                <p className="mt-3 max-w-sm text-burgundy-500">
                  Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn trong vòng{' '}
                  <span className="font-semibold text-gold-600">24 giờ</span>{' '}
                  tới để sắp xếp lịch học thử và tư vấn lộ trình.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border-2 border-burgundy-200 px-6 py-2.5 text-sm font-semibold text-burgundy-700 transition-colors hover:border-burgundy-700 hover:bg-burgundy-50"
                >
                  Đăng ký thêm một người
                </button>
              </div>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-burgundy-700"
                    >
                      <User className="h-4 w-4 text-gold-500" />
                      Họ tên phụ huynh / học viên
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-burgundy-200 bg-burgundy-50/40 px-4 py-3 text-burgundy-700 placeholder:text-burgundy-300 transition-colors focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-burgundy-700"
                    >
                      <Phone className="h-4 w-4 text-gold-500" />
                      Số điện thoại / Zalo
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-xl border border-burgundy-200 bg-burgundy-50/40 px-4 py-3 text-burgundy-700 placeholder:text-burgundy-300 transition-colors focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="program"
                      className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-burgundy-700"
                    >
                      <BookOpen className="h-4 w-4 text-gold-500" />
                      Chương trình quan tâm
                    </label>
                    <select
                      id="program"
                      required
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full rounded-xl border border-burgundy-200 bg-burgundy-50/40 px-4 py-3 text-burgundy-700 transition-colors focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    >
                      <option value="" disabled>
                        Chọn chương trình
                      </option>
                      {programOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="level"
                      className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-burgundy-700"
                    >
                      <TrendingUp className="h-4 w-4 text-gold-500" />
                      Trình độ hiện tại
                    </label>
                    <select
                      id="level"
                      required
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="w-full rounded-xl border border-burgundy-200 bg-burgundy-50/40 px-4 py-3 text-burgundy-700 transition-colors focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    >
                      <option value="" disabled>
                        Chọn trình độ
                      </option>
                      {levelOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {status === 'error' && (
                    <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-gold-500/30 transition-all hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Nhận tư vấn & Lịch học thử
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-burgundy-400">
                    Thông tin của bạn được bảo mật và chỉ dùng để tư vấn.
                  </p>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
