import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer({ profile }) {
  const { t } = useLanguage()

  return (
    <footer id="contato" className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__code">{t.footer.code}</p>
          <p className="footer__location">{t.profile.location}</p>
        </div>

        <div className="footer__links">
          <FooterLink href={profile.links.email ? `mailto:${profile.links.email}` : ''} label={t.footer.email} />
          <FooterLink href={profile.links.linkedin} label={t.footer.linkedin} />
          <FooterLink href={profile.links.github} label={t.footer.github} />
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  if (!href) {
    return <span className="footer__link footer__link--empty">+ {label}</span>
  }
  return (
    <a className="footer__link" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  )
}
