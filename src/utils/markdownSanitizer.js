const marked = require("marked");
const sanitizeHtmlLibary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // 1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize html
  const sanitizedHtml = sanitizeHtmlLibary(convertedHtml, {
    allowedTags: sanitizeHtmlLibary.defaults.allowedTags.concat(["img"]),
  });

  // 3. Covert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
