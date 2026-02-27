import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template19(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Verdana, sans-serif;font-size:13px;color:#444;border-top:2px dashed #64748B;padding-top:10px;">
  <tr>
    <td>
      <div style="font-size:16px;font-weight:bold;color:#64748B;">${data.name}</div>
      <div style="margin-bottom:4px;">${data.title} ${data.company ? `- ${data.company}` : ''}</div>
      ${data.email ? `<div><a href="mailto:${data.email}" style="color:#64748B;text-decoration:none;">${data.email}</a></div>` : ''}
      <div style="font-size:11px;margin-top:4px;">
        
    ${data.phone ? `<span style="color:#64748B">${icon(phoneSVG, 'tel:'+data.phone, '#64748B')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#64748B">${icon(internetSVG, data.website, '#64748B')}</span> <a href="${data.website}" style="color:#64748B;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#64748B">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#64748B')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:6px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#64748B') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;"><img src="${data.photo}" width="60" style="border-radius:20px;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
