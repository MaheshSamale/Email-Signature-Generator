import { icon, linkedinSVG, githubSVG, twitterSVG } from "./icons";

export default function Boxed(data) {
  return `
<table style="font-family:Arial;font-size:14px;border:1px solid #ddd;padding:12px;">
<tr>
<td>
<strong style="font-size:16px;">${data.name}</strong><br/>
${data.title} | ${data.company}<br/><br/>
${data.email} • ${data.phone}<br/><br/>
${icon(linkedinSVG, data.linkedin)}
${icon(githubSVG, data.github)}
${icon(twitterSVG, data.twitter)}
</td>
${data.logo ? `<td><img src="${data.logo}" height="40"/></td>` : ""}
</tr>
</table>`;
}
