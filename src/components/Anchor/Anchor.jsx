// eslint-disable-next-line react/prop-types
export default function Anchor({href, title}) {
  return (
     <a className="nav-link" href={href}>{title}</a>
  )
}
