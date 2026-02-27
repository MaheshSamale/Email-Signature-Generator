import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template12(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif;font-size:13px;color:#444;border-top:1px solid #F59E0B;padding-top:10px;">
  <tr>
    <td>
      <div style="font-size:16px;font-weight:bold;color:#F59E0B;">${data.name}</div>
      <div style="margin-bottom:4px;">${data.title} ${data.company ? `- ${data.company}` : ''}</div>
      ${data.email ? `<div><a href="mailto:${data.email}" style="color:#F59E0B;text-decoration:none;">${data.email}</a></div>` : ''}
      <div style="font-size:11px;margin-top:4px;">
        
    ${data.phone ? `<span style="color:#F59E0B">${icon(phoneSVG, 'tel:'+data.phone, '#F59E0B')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#F59E0B">${icon(internetSVG, data.website, '#F59E0B')}</span> <a href="${data.website}" style="color:#F59E0B;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#F59E0B">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#F59E0B')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div style="margin-top:6px;">
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#F59E0B') : '').join('') 
    : ''}
  
      </div>
    </td>
    ${data.photo ? `<td style="padding-left:15px;"><img src="${data.photo}" width="60" style="border-radius:50%;display:block;"/></td>` : ""}
  </tr>
</table>`;
}
