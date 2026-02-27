import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template22(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Tahoma, sans-serif;font-size:14px;color:#333;text-align:center;">
  <tr>
    <td style="padding-bottom:15px;border-bottom:2px dashed #F59E0B;">
      ${data.photo ? `<img src="${data.photo}" width="80" style="border-radius:0;display:block;margin:0 auto 10px;"/>` : ""}
      <div style="font-size:18px;font-weight:bold;color:#F59E0B;">${data.name}</div>
      <div style="font-size:14px;">${data.title} ${data.company ? `<strong style="color:#F59E0B">@ ${data.company}</strong>` : ''}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-top:10px;">
      ${data.email ? `<div style="margin-bottom:4px;"><a href="mailto:${data.email}" style="color:#F59E0B;text-decoration:none;font-weight:bold;">${data.email}</a></div>` : ''}
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
