import { getSingletonHighlighter } from 'shiki'

let highlighter: Awaited<ReturnType<typeof getSingletonHighlighter>>

export async function useShiki(
  code: string,
  lang: string = 'yaml',
  theme: string = 'ayu-dark',
) {
  if (!highlighter) {
    highlighter = await getSingletonHighlighter({
      themes: ['ayu-dark', 'catppuccin-latte', 'dracula-soft'],
      langs: [lang],
    })
  }

  const highlightedCode = highlighter.codeToHtml(code, { lang, theme })

  /**
   * remove the entire 'style' attribute from the <pre> tag,
   * regardless of other attributes
   */
  return highlightedCode.replace(/<pre(?=[^>]*style="[^"]*")[^>]*>/, '<pre>')
}
