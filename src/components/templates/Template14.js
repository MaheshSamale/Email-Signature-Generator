import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template14(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Helvetica, sans-serif;font-size:14px;color:#333;">
  <tr>
    ${data.photo ? `<td style="padding-right:15px;border-right:3px dotted #3B82F6;"><img src="${data.photo}" width="90" style="border-radius:0;display:block;"/></td>` : ""}
    <td style="padding-left:15px;">
      <div style="font-size:18px;font-weight:bold;color:#3B82F6;">${data.name}</div>
      <div style="font-size:14px;margin-bottom:8px;">${data.title} ${data.company ? `| <span style="font-weight:600">${data.company}</span>` : ''}</div>
      ${data.email ? `<div style="margin-bottom:8px;"><a href="mailto:${data.email}" style="color:#3B82F6;text-decoration:none;font-weight:500">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#3B82F6">${icon(phoneSVG, 'tel:'+data.phone, '#3B82F6')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#3B82F6">${icon(internetSVG, data.website, '#3B82F6')}</span> <a href="${data.website}" style="color:#3B82F6;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#3B82F6">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#3B82F6')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#3B82F6') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
