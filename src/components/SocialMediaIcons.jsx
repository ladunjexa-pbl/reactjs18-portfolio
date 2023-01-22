const socials = [
  { alt: "linkedin", url: "https://www.linkedin.com" },
  { alt: "twitter", url: "https://www.twitter.com" },
  { alt: "facebook", url: "https://www.facebook.com" },
  { alt: "instagram", url: "https://www.instagram.com" },
];

const ListSocials = socials.map((social) => {
  return (
    <a
      className="hover:opacity-50 transition duration-500"
      href={social.url}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={`${social.alt}-link`} src={`../assets/${social.alt}.png`} />
    </a>
  );
});

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {ListSocials}
    </div>
  );
};

export default SocialMediaIcons;
