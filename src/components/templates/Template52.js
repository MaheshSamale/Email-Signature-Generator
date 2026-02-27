import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template52(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Tahoma, sans-serif;font-size:14px;color:#333;border:2px dashed #F59E0B;padding:15px;border-radius:50%;">
  <tr>
    ${data.photo ? `<td style="padding-right:15px;"><img src="${data.photo}" width="75" style="border-radius:50%;display:block;"/></td>` : ""}
    <td>
      <div style="font-size:18px;font-weight:bold;color:#F59E0B;">${data.name}</div>
      <div style="font-size:14px;margin-bottom:10px;border-bottom:1px solid #ccc;padding-bottom:5px;">${data.title} ${data.company ? `| <span style="font-style:italic">${data.company}</span>` : ''}</div>
      ${data.email ? `<div style="margin-bottom:4px;"><a href="mailto:${data.email}" style="color:#F59E0B;text-decoration:none;font-weight:600;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#F59E0B">${icon(phoneSVG, 'tel:'+data.phone, '#F59E0B')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#F59E0B">${icon(internetSVG, data.website, '#F59E0B')}</span> <a href="${data.website}" style="color:#F59E0B;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#F59E0B">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#F59E0B')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#F59E0B') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
