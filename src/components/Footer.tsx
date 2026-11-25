import { GraduationCap, Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-burgundy-800 text-burgundy-200">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-white">
                <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                The Learning Lab
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-burgundy-300">
              Nền tảng học tập cá nhân hóa giúp học viên khơi mở tư duy và bứt
              phá điểm số.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Chương trình
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['Tiếng Anh', 'Toán học', 'Khoa học', 'Luyện thi'].map((item) => (
                <li key={item}>
                  <a href="#programs" className="text-burgundy-300 transition-colors hover:text-gold-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Về chúng tôi
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['Phương pháp', 'Đánh giá', 'Học phí', 'Đăng ký học thử'].map((item) => (
                <li key={item}>
                  <a href="#why-us" className="text-burgundy-300 transition-colors hover:text-gold-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Liên hệ
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-400" />
                <span>09xx xxx xxx</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-400" />
                <span>hello@thelearninglab.edu.vn</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>123 Đường ABC, Quận 1, TP. HCM</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-burgundy-700 text-burgundy-200 transition-colors hover:bg-gold-500 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-burgundy-700 text-burgundy-200 transition-colors hover:bg-gold-500 hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-burgundy-700 pt-6 text-center text-xs text-burgundy-400">
          © {new Date().getFullYear()} The Learning Lab. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
