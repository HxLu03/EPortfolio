const base = import.meta.env.BASE_URL;

const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/HxLu03",
    icon: `${base}assets/socials/github.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/haoxuanlu/",
    icon: `${base}assets/socials/linkedIn.svg`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leo0306_/",
    icon: `${base}assets/socials/instagram.svg`,
  },
  {
    name: "WeChat",
    href: "https://www.wechat.com/en/",
    icon: `${base}assets/socials/WeChat.svg`,
  },
  {
    name: "Tiktok CN",
    href: "https://v.douyin.com/0QFWZqaLEuw/",
    icon: `${base}assets/socials/douyin.svg`,
  },
  {
    name: "xiaohongshu",
    href: "https://www.xiaohongshu.com/user/profile/5d470775000000001603562b?...",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.svg", // external is fine
  }
];


const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space" id="footer">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 All rights reserved.</p>
    </section>
  );
};

export default Footer;
