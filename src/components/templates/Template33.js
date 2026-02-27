import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template33(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Georgia, serif;font-size:13px;color:#444;border-top:1px solid #EF4444;padding-top:10px;">
  <tr>
    <td>
      <div style="font-size:16px;font-weight:bold;color:#EF4444;">${data.name}</div>
      <div style="margin-bottom:4px;">${data.title} ${data.company ? `- ${data.company}` : ''}</div>
      ${data.email ? `<div><a href="mailto:${data.email}" style="color:#EF4444;text-decoration:none;">${data.email}</a></div>` : ''}
      <div style="font-size:11px;margin-top:4px;">
        
    ${data.phone ? `<span style="color:#EF4444">${icon(phoneSVG, 'tel:'+data.phone, '#EF4444')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#EF4444">${icon(internetSVG, data.website, '#EF4444')}</span> <a href="${data.website}" style="color:#EF4444;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#EF4444">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#EF4444')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:6px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#EF4444') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;"><img src="${data.photo}" width="60" style="border-radius:8px;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
