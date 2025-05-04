const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/HxLu03",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/haoxuanlu/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leo0306_/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "WeChat",
    // pops up a QR code for WeChat
    href: "https://www.wechat.com/en/",
    icon: "/assets/socials/WeChat.svg",
  },
  {
    name: "Tiktok CN",
    href: "https://v.douyin.com/0QFWZqaLEuw/",
    icon: "/assets/socials/douyin.svg",
  },
  {
    name: "xiaohongshu",
    href: "https://www.xiaohongshu.com/user/profile/5d470775000000001603562b?xsec_token=YBydf5CQz9iNGHbQMMYT8WATbxR-JKRPUDEqglfs4WzDo%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=5d470775000000001603562b&apptime=1746332167&share_id=9df882e412dd4b31a05cd2eecb4ea54a&share_channel=copy_link/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.svg",
  }
];

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
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
