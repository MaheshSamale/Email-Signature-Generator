import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template13(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Verdana, sans-serif;font-size:12px;color:#222;table-layout:fixed;">
  <tr>
    ${data.photo ? `<td style="padding-right:10px;"><img src="${data.photo}" width="50" style="border-radius:8px;display:block;"/></td>` : ""}
    <td style="border-right:1px solid #ddd;padding-right:10px;">
      <div style="font-size:15px;font-weight:bold;color:#EF4444;">${data.name}</div>
      <div>${data.title}</div>
      ${data.company ? `<div>${data.company}</div>` : ''}
    </td>
    <td style="padding-left:10px;line-height:1.4;">
      ${data.email ? `<div>E: <a href="mailto:${data.email}" style="color:#EF4444;text-decoration:none;">${data.email}</a></div>` : ''}
      ${data.phone ? `<div>P: ${data.phone}</div>` : ''}
      ${data.website ? `<div>W: <a href="${data.website}" style="color:#EF4444;text-decoration:none;">${data.website}</a></div>` : ''}
      ${data.address ? `<div>L: ${data.address}</div>` : ''}
      <div style="margin-top:4px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#EF4444') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
