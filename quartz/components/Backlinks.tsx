import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { i18n } from "../i18n/i18next"
import { classNames } from "../util/lang"

function Backlinks({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
  return (
    <div class={classNames(displayClass, "backlinks")}>
      <h3>{i18n(cfg.locale, "backlinks.backlinks")}</h3>
      <ul class="overflow">
        {backlinkFiles.length > 0 ? (
          backlinkFiles.map((f) => (
            <li>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                {f.frontmatter?.title}
              </a>
            </li>
          ))
        ) : (
          <li>{i18n(cfg.locale, "backlinks.noBlacklinksFound")}</li>
        )}
      </ul>
    </div>
  )
}

Backlinks.css = style
export default (() => Backlinks) satisfies QuartzComponentConstructor
