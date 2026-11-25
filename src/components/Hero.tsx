import { ArrowRight, Play, Sparkles, Users, BookOpen, Award } from 'lucide-react';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50 via-white to-gold-50/40" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-burgundy-200/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
              <Sparkles className="h-4 w-4" />
              Lộ trình cá nhân hóa 1-1 & nhóm nhỏ
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-burgundy-700 text-balance sm:text-5xl lg:text-6xl">
              Khơi mở tư duy –{' '}
              <span className="text-gold-500">Bứt phá điểm số</span> cùng The
              Learning Lab
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-burgundy-500">
              Lộ trình học cá nhân hóa 1-1 và nhóm nhỏ giúp học viên nắm chắc
              kiến thức nền tảng, rèn tư duy độc lập và tự tin chinh phục mọi kỳ
              thi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => scrollTo('#booking')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-gold-500/30 transition-all hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/40"
              >
                Đăng ký kiểm tra năng lực miễn phí
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#programs')}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-burgundy-200 bg-white px-7 py-4 text-base font-semibold text-burgundy-700 transition-all hover:border-burgundy-700 hover:bg-burgundy-50"
              >
                <Play className="h-4 w-4 fill-current" />
                Xem lộ trình học
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-burgundy-100 pt-8">
              {[
                { icon: Users, value: '2.500+', label: 'Học viên' },
                { icon: BookOpen, value: '15+', label: 'Chương trình' },
                { icon: Award, value: '92%', label: 'Đạt mục tiêu' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <stat.icon className="mb-2 h-5 w-5 text-gold-500" />
                  <span className="font-display text-2xl font-bold text-burgundy-700">
                    {stat.value}
                  </span>
                  <span className="text-sm text-burgundy-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-3xl bg-gradient-to-br from-burgundy-700 to-burgundy-800 p-8 shadow-2xl shadow-burgundy-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white">
                        Lộ trình cá nhân hóa
                      </p>
                      <p className="text-sm text-burgundy-300">Học viên: Minh Anh</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-400">
                    Tuần 6 / 12
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { label: 'Tiếng Anh - IELTS', progress: 78 },
                    { label: 'Toán - Tư duy logic', progress: 65 },
                    { label: 'Khoa học - Thực hành', progress: 52 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-burgundy-200">{item.label}</span>
                        <span className="font-semibold text-white">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-burgundy-600">
                        <div
                          className="h-full rounded-full bg-gold-500 transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-burgundy-600/50 p-4">
                  <p className="text-sm text-burgundy-200">
                    Báo cáo tiến độ hàng tuần gửi trực tiếp đến phụ huynh.
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-8 z-20 animate-float rounded-2xl bg-white p-5 shadow-xl shadow-burgundy-700/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-burgundy-700">
                      +1.5 điểm
                    </p>
                    <p className="text-xs text-burgundy-400">Sau 8 tuần học</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-4 border-gold-300/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
