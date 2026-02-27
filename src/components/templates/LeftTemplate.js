import { icon, linkedinSVG, githubSVG, twitterSVG } from "./icons";

export default function Left(data) {
  return `
<table style="font-family:Arial;font-size:14px;">
<tr>
${data.photo ? `<td><img src="${data.photo}" width="70"/></td>` : ""}
<td style="padding-left:12px;">
<strong>${data.name}</strong><br/>
${data.title}<br/>
${data.company}<br/><br/>
${data.email}<br/>
${data.phone}<br/><br/>
${icon(linkedinSVG, data.linkedin)}
${icon(githubSVG, data.github)}
${icon(twitterSVG, data.twitter)}
</td>
</tr>
</table>`;
}
