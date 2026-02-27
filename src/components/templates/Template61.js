import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template61(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Verdana, sans-serif;font-size:13px;color:#444;border-top:2px dashed #10B981;padding-top:10px;">
  <tr>
    <td>
      <div style="font-size:16px;font-weight:bold;color:#10B981;">${data.name}</div>
      <div style="margin-bottom:4px;">${data.title} ${data.company ? `- ${data.company}` : ''}</div>
      ${data.email ? `<div><a href="mailto:${data.email}" style="color:#10B981;text-decoration:none;">${data.email}</a></div>` : ''}
      <div style="font-size:11px;margin-top:4px;">
        
    ${data.phone ? `<span style="color:#10B981">${icon(phoneSVG, 'tel:'+data.phone, '#10B981')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#10B981">${icon(internetSVG, data.website, '#10B981')}</span> <a href="${data.website}" style="color:#10B981;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#10B981">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#10B981')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:6px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#10B981') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;"><img src="${data.photo}" width="60" style="border-radius:8px;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
