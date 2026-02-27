import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template45(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Georgia, serif;font-size:14px;color:#333;border:1px solid #8B5CF6;padding:15px;border-radius:8px;">
  <tr>
    ${data.photo ? `<td style="padding-right:15px;"><img src="${data.photo}" width="75" style="border-radius:50%;display:block;"/></td>` : ""}
    <td>
      <div style="font-size:18px;font-weight:bold;color:#8B5CF6;">${data.name}</div>
      <div style="font-size:14px;margin-bottom:10px;border-bottom:1px solid #ccc;padding-bottom:5px;">${data.title} ${data.company ? `| <span style="font-style:italic">${data.company}</span>` : ''}</div>
      ${data.email ? `<div style="margin-bottom:4px;"><a href="mailto:${data.email}" style="color:#8B5CF6;text-decoration:none;font-weight:600;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#8B5CF6">${icon(phoneSVG, 'tel:'+data.phone, '#8B5CF6')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#8B5CF6">${icon(internetSVG, data.website, '#8B5CF6')}</span> <a href="${data.website}" style="color:#8B5CF6;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#8B5CF6">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#8B5CF6')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#8B5CF6') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
