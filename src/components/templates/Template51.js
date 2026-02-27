import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template51(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Georgia, serif;font-size:14px;color:#333;">
  <tr>
    <td style="padding-right:15px;text-align:right;">
      <div style="font-size:18px;font-weight:bold;color:#10B981;">${data.name}</div>
      <div style="font-size:14px;margin-bottom:8px;">${data.title} ${data.company ? `<br/>${data.company}` : ''}</div>
      ${data.email ? `<div style="margin-bottom:8px;"><a href="mailto:${data.email}" style="color:#10B981;text-decoration:none;font-weight:600;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#10B981">${icon(phoneSVG, 'tel:'+data.phone, '#10B981')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#10B981">${icon(internetSVG, data.website, '#10B981')}</span> <a href="${data.website}" style="color:#10B981;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#10B981">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#10B981')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#10B981') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;border-left:1px solid #10B981;"><img src="${data.photo}" width="90" style="border-radius:20px;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
